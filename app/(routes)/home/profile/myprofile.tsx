'use client';

import { supabase } from '@/app/lib/supabaseClient';
import { createClient } from '@supabase/supabase-js';

import { CurrentUserAvatar } from '@/components/current-user-avatar';
import { ChevronDown, ChevronUp, Pencil } from 'lucide-react';
import React, { useEffect, useState } from 'react';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabaseStorageClient = createClient(supabaseUrl, supabaseAnonKey)
export default function UserProfile({user}:{user:any}) {
  const [userData, setUserData] = useState<any>(null);
  const [savingAvatar, setSavingAvatar] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      // Try to fetch the user's data by user_id
      const { data, error } = await supabase
        .from('usersData')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116: No rows found
        console.error('Fetch error:', error);
        return;
      }
      console.log("user :", user);
      if (!data) {
        // No entry exists, so create one using details from the user object
        const insertPayload = {
          user_id: user.id,
          email: user.email || '',
          phone: user.phone || '',
          full_name: user.display_name || '',
          picture: user.user_metadata?.avatar_url || '',
        };
        const { data: newData, error: insertError } = await supabase
          .from('usersData')
          .insert([insertPayload])
          .select()
          .single();
        if (insertError) {
          console.error('Insert error:', insertError);
        } else {
          setUserData(newData);
        }
      } else {
        setUserData(data);
      }
    };
    fetchData();
  }, [user]);

  const saveSection = async (updatedFields: any) => {
    if (!userData?.id) return;
    const { error } = await supabase
      .from('usersData')
      .update(updatedFields)
      .eq('id', userData.id);
    if (error) console.error('Save error:', error);
    else setUserData((prev: any) => ({ ...prev, ...updatedFields }));
  };

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Profile Image */}

      <div className="bg-white p-4 rounded-md shadow-sm flex items-center gap-4">
        {userData.picture ? (
          <img
        src={userData.picture}
        alt="Profile"
        className="w-16 h-16 rounded-full object-cover border"
          />
        ) : (
          <CurrentUserAvatar />
        )}
        <div>
            <button
              className="text-sm text-blue-600 underline"
              disabled={savingAvatar}
              onClick={async () => {
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = 'image/png, image/jpeg';
              input.onchange = async (e: any) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const fileExt = file.name.split('.').pop();
                const filePath = `avatars/${user.id}.${fileExt}`;
                setSavingAvatar(true);
                // Upload to Supabase Storage
                const { error: uploadError } = await supabaseStorageClient.storage
                .from('avatars')
                .upload(filePath, file, { upsert: true });
                if (uploadError) {
                alert('Upload failed: ' + uploadError.message);
                setSavingAvatar(false);
                return;
                }
                // Get public URL
                const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
                const publicUrl = data.publicUrl;
                console.log('Public URL:', publicUrl);
                // Update userData
                await saveSection({ picture: publicUrl });
                setSavingAvatar(false);
              };
              input.click();
              }}
            >
              Change Image
            </button>
            {savingAvatar && (
              <span className="text-xs text-gray-500 mt-1">Uploading...</span>
            )}
          <p className="text-xs text-gray-500 mt-1">PNG, JPEG. 500 × 500 px</p>
        </div>
      </div>

      {/* Personal Information */}
      <AccordionCard
        title="Personal Information"
        initialValues={{
          full_name: userData.full_name || '',
          email: userData.email || '',
          phone: userData.phone || '',
        }}
        saveFunction={(data) => saveSection(data)}
      >
        {(formData, setFormData, editing) => (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField label="Full Name" value={formData.full_name} onChange={(v) => setFormData({ ...formData, full_name: v })} editing={editing} />
            <InputField label="Email" value={formData.email} onChange={(v) => setFormData({ ...formData, email: v })} editing={editing} />
            <InputField label="Phone" value={formData.phone} onChange={(v) => setFormData({ ...formData, phone: v })} editing={editing} />
          </div>
        )}
      </AccordionCard>

      {/* Health Information */}
      <AccordionCard
        title="Health Information"
        initialValues={{
          height: userData.height || '',
          weight: userData.weight || '',
          existingConditions: userData.existingConditions || '',
          familyHistory: userData.familyHistory || '',
        }}
        saveFunction={(data) => saveSection(data)}
      >
        {(formData, setFormData, editing) => (
          <>
            <InfoRow label="Height" value={formData.height} onChange={(v) => setFormData({ ...formData, height: v })} editing={editing} />
            <InfoRow label="Weight" value={formData.weight} onChange={(v) => setFormData({ ...formData, weight: v })} editing={editing} />
            <InfoRow label="Existing Conditions" value={formData.existingConditions} onChange={(v) => setFormData({ ...formData, existingConditions: v })} editing={editing} />
            <InfoRow label="Family History" value={formData.familyHistory} onChange={(v) => setFormData({ ...formData, familyHistory: v })} editing={editing} />
          </>
        )}
      </AccordionCard>

      {/* Shipping Address */}
      <AccordionCard
        title="Shipping Address"
        initialValues={{
          defaultAddress: userData.defaultAddress || '',
          workAddress: userData.workAddress || '',
        }}
        saveFunction={(data) => saveSection(data)}
      >
        {(formData, setFormData, editing) => (
          <>
            <InfoRow label="Default Address" value={formData.defaultAddress} onChange={(v) => setFormData({ ...formData, defaultAddress: v })} editing={editing} />
            <InfoRow label="Work" value={formData.workAddress} onChange={(v) => setFormData({ ...formData, workAddress: v })} editing={editing} />
          </>
        )}
      </AccordionCard>

      {/* Payment Methods */}
      <AccordionCard
        title="Payment Methods"
        initialValues={{
          upi: userData.upi || '',
          cards: userData.cards || '',
        }}
        saveFunction={(data) => saveSection(data)}
      >
        {(formData, setFormData, editing) => (
          <>
            <InfoRow label="UPI" value={formData.upi} onChange={(v) => setFormData({ ...formData, upi: v })} editing={editing} />
            <InfoRow label="Saved Cards" value={formData.cards} onChange={(v) => setFormData({ ...formData, cards: v })} editing={editing} />
          </>
        )}
      </AccordionCard>
    </div>
  );
}

/* -------------------------- Editable SectionCard -------------------------- */

function EditableSectionCard({
  title,
  actionText,
  initialValues,
  saveFunction,
  children,
}: {
  title: string;
  actionText: string;
  initialValues: any;
  saveFunction: (values: any) => void;
  children: (formData: any, setFormData: (d: any) => void, editing: boolean) => React.ReactNode;
}) {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(initialValues);

  const handleClick = () => {
    if (editing) {
      saveFunction(formData);
    }
    setEditing(!editing);
  };

  return (
    <div className="border rounded-xl p-4 md:p-6 bg-white shadow-sm space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-base">{title}</h3>
        <button
          className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
          type="button"
          onClick={handleClick}
        >
          {editing ? <span className="font-semibold">Save</span> : <>
            <Pencil className="w-4 h-4" />
            {actionText}
          </>}
        </button>
      </div>
      <div className="space-y-2">{children(formData, setFormData, editing)}</div>
    </div>
  );
}

/* -------------------------- Utility Components -------------------------- */

function InputField({
  label,
  value,
  onChange,
  editing,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  editing?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={editing ? (e) => onChange(e.target.value) : undefined}
        readOnly={!editing}
        className={`w-full px-3 py-2 border rounded-md text-sm ${
          editing ? 'bg-white border-blue-400' : 'bg-gray-100'
        }`}
      />
    </div>
  );
}

function InfoRow({
  label,
  value,
  onChange,
  editing,
}: {
  label: string;
  value: string;
  onChange?: (v: string) => void;
  editing?: boolean;
}) {
  return (
    <div className="flex justify-between text-sm text-gray-800 border-b pb-1">
      <span className="text-gray-600">{label}</span>
      {editing && onChange ? (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-right border rounded px-2 py-1"
        />
      ) : (
        <span className="text-right font-medium">{value}</span>
      )}
    </div>
  );
}

function AccordionSection({ title }: { title: string }) {
  return (
    <details className="bg-white rounded-md shadow-sm p-4 cursor-pointer">
      <summary className="text-sm font-medium text-gray-700 flex justify-between items-center">
        {title}
        <span className="text-xl leading-none">⌄</span>
      </summary>
    </details>
  );
}

function AccordionCard({
  title,
  initialValues,
  saveFunction,
  children,
}: {
  title: string;
  initialValues: any;
  saveFunction: (data: any) => void;
  children: (formData: any, setFormData: (d: any) => void, editing: boolean) => React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(initialValues);

  const handleAction = () => {
    if (editing) saveFunction(formData);
    setEditing(!editing);
  };

  return (
    <div className="border rounded-xl bg-white shadow-sm overflow-hidden">
      <div className="flex justify-between items-center p-4 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <h3 className="font-semibold">{title}</h3>
        <div className="flex gap-4 items-center">
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={(e) => {
              e.stopPropagation();
              handleAction();
            }}
          >
            {editing ? 'Save' : 'Edit'}
          </button>
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </div>
      {expanded && <div className="p-4 border-t space-y-3">{children(formData, setFormData, editing)}</div>}
    </div>
  );
}