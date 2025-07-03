'use client';

import { Button } from '@/core/components/ui/button';
import { createClient } from '@supabase/supabase-js';
import { Camera, UploadCloud } from 'lucide-react';
import { useRef, useState } from 'react';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = createClient(supabaseUrl, supabaseAnonKey);
interface KYCProps {
  user: any; // Replace 'any' with a specific user type if available
  onClose?: () => void; // Optional callback to close the form
  setKycStatusAction: React.Dispatch<React.SetStateAction<'noKYC' | 'pending' | 'completed'>>; // Optional callback to update KYC status
}

export default function KYCForm({ user, setKycStatusAction }: KYCProps) {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const [dobError, setDobError] = useState(false);
  const [idType, setIdType] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [idFile, setIdFile] = useState<File | null>(null);
  const [selfieFile, setSelfieFile] = useState<File | null>(null);
  const idInputRef = useRef<HTMLInputElement>(null);
  const selfieInputRef = useRef<HTMLInputElement>(null);

  const handleDateChange = (value: string) => {
    setDob(value);
    // Very basic DD/MM/YYYY validation
    const validFormat = /^\d{2}\/\d{2}\/\d{4}$/.test(value);
    setDobError(!validFormat);
  };

  const submitKYC = async () => {
    if (!user?.id) return;

    // Upload ID file
    let idFileUrl = null;
    if (idFile) {
      const { data, error } = await supabase.storage
        .from('kyc-files')
        .upload(`id/${user.id}-${Date.now()}-${idFile.name}`, idFile);
      if (error) {
        alert('Failed to upload ID file');
        return;
      }
      idFileUrl = data?.path ? [supabase.storage.from('kyc-files').getPublicUrl(data.path).data.publicUrl] : [];
    }

    // Upload Selfie file
    let selfieFileUrl = null;
    if (selfieFile) {
      const { data, error } = await supabase.storage
        .from('kyc-files')
        .upload(`selfie/${user.id}-${Date.now()}-${selfieFile.name}`, selfieFile);
      if (error) {
        alert('Failed to upload selfie');
        return;
      }
      selfieFileUrl = data?.path ? [supabase.storage.from('kyc-files').getPublicUrl(data.path).data.publicUrl] : [];
    }

    // Prepare data
    const kycData = {
      user_id: user.id,
      first_name: firstName,
      last_name: lastName,
      mobile_number: mobile,
      date_of_birth: dob.split('/').reverse().join('-'), // Convert DD/MM/YYYY to YYYY-MM-DD
      id_type: idType,
      id_number: [idNumber],
      id_file_url: idFileUrl || [],
      updated_at: new Date().toISOString(),
      kyc_status: false,
    };

    const { error } = await supabase.from('usersKYC').upsert([kycData]);

    if (!error) {
      setKycStatusAction("pending");
      // Get the inserted KYC record to retrieve its id
      const { data: kycRows, error: kycFetchError } = await supabase
        .from('usersKYC')
        .select('id')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (kycFetchError || !kycRows?.id) {
        alert('Failed to fetch KYC record for usersData');
        return;
      }

      const fullName = [firstName, lastName].filter(Boolean).join(' ');
      const usersDataPayload = {
        user_id: user.id,
        full_name: fullName,
        email: user.email || null,
        phone: mobile,
        kyc_id: kycRows.id,
      };

      const { error: usersDataError } = await supabase
        .from('usersData')
        .upsert([usersDataPayload], { onConflict: 'user_id' });

      if (usersDataError) {
        alert('Failed to update usersData');
        return;
      }
    }

    if (error) {
      alert('Failed to submit KYC');
    } else {
      alert('KYC submitted successfully!');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Identity Verification KYC</h2>
        <button className="text-xl font-semibold text-gray-500">×</button>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-200 rounded-full mb-2">
        <div className="w-1/6 h-full bg-blue-500 rounded-full" />
      </div>
      <p className="text-sm text-gray-500 mb-6">
        This information is required by medical regulations to verify your identity before issuing prescription medication.
      </p>

      {/* Personal Info */}
      <h3 className="font-medium mb-2">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm"
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center border rounded-md px-3 py-2 text-sm gap-2">
          <span className="text-xl">🇮🇳</span>
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full outline-none"
          />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="DD/MM/YYYY"
            value={dob}
            onChange={(e) => handleDateChange(e.target.value)}
            className={`border rounded-md px-3 py-2 text-sm w-full ${
              dobError ? 'border-red-500' : ''
            }`}
          />
          {dobError && (
            <p className="text-xs text-red-500 mt-1 absolute">Use DD/MM/YYYY format</p>
          )}
        </div>
      </div>

      {/* ID Section */}
      <h3 className="font-medium mb-2 mt-4">ID Document</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <select
          value={idType}
          onChange={(e) => setIdType(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option value="">ID Type</option>
          <option value="aadhaar">Aadhaar</option>
          <option value="passport">Passport</option>
          <option value="driving">Driving License</option>
        </select>
        <input
          type="text"
          placeholder="ID Number"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm"
        />
      </div>
      {/* Upload ID */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Upload ID</label>
        <div
          className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer text-sm text-gray-500"
          onClick={() => idInputRef.current?.click()}
        >
          <input
            type="file"
            accept=".png,.jpg,.jpeg"
            className="hidden"
            ref={idInputRef}
            onChange={(e) => setIdFile(e.target.files?.[0] || null)}
          />
          {idFile ? (
            <p>{idFile.name}</p>
          ) : (
            <p>
              <UploadCloud className="inline w-5 h-5 mr-1" />
              Click to upload or drag and drop <br />
              <span className="text-xs">PNG, JPG upto 2MB</span>
            </p>
          )}
        </div>
      </div>
         

      {/* Selfie Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Selfie Verification</label>
        <p className="text-xs text-gray-500 mb-2">
          Please take a clear selfie of yourself holding your ID document. Both your face and the ID should be clearly visible.
        </p>
        <div
          className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer text-sm text-gray-500"
          onClick={() => selfieInputRef.current?.click()}
        >
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={selfieInputRef}
            onChange={(e) => setSelfieFile(e.target.files?.[0] || null)}
          />
          {selfieFile ? (
            <p>{selfieFile.name}</p>
          ) : (
            <p>
              <Camera className="inline w-5 h-5 mr-1" />
              Click to upload or use camera
            </p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col justify-between gap-4">
        <Button variant="outline" className="w-full">
          Back
        </Button>
        <Button className="w-full" onClick={submitKYC}>Submit & Continue</Button>
      </div>
    </div>
  );
}
