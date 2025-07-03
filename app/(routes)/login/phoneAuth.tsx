'use client'

import { Button } from '@/core/components/ui/button'
import { supabase } from '@/lib/supabaseClient'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
export default function PhoneAuth() {
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState<'request' | 'verify'>('request')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const sendOtp = async () => {
    setLoading(true); setErrorMsg(null)
    const { error } = await supabase.auth.signInWithOtp({
      phone,
      options: { shouldCreateUser: true }
    })
    setLoading(false)
    if (error) setErrorMsg(error.message)
    else setStep('verify')
  }

  const verifyOtp = async () => {
    setLoading(true); setErrorMsg(null)
    const { data, error } = await supabase.auth.verifyOtp({
      phone,
      token: otp,
      type: 'sms'
    })
    setLoading(false)

    if (error) setErrorMsg(error.message)
    else {
      console.log('✅ Logged in:', data.session)
      if (data.session) {
        window.location.href = '/home'
      }
    }
  }

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={e => {
        e.preventDefault()
        step === 'request' ? sendOtp() : verifyOtp()
      }}
    >
      {/* <h2 className="text-center text-2xl font-semibold mb-2">Sign in with Phone</h2> */}
      {step === 'request' ? (
        <>
          <div className="flex gap-2 items-center mb-2">
            <PhoneInput
              country={'in'}
              value={phone}
              onChange={value => setPhone('+' + value)}
              inputClass="!w-full !rounded-sm !border !border-gray-300 !px-3 !py-2 !text-base"
              buttonClass="!rounded-l-lg"
              containerClass="flex-1"
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true,
                maxLength: 15,
                autoComplete: 'tel'
              }}
              enableSearch
              disableDropdown={false}
              countryCodeEditable={true}
            />
          </div>
          <Button type="submit" className="w-full text-white " disabled={loading || phone.length < 8}>
                            {loading ? 'Sending...' : 'Send OTP'}
              </Button>
          
        </>
      ) : (
        <>
          <label className="font-medium mb-1">Enter OTP</label>
          <input
            type="text"
            placeholder="123456"
            value={otp}
            onChange={e => setOtp(e.target.value.replace(/\D/g, ''))}
            className="w-full rounded-sm border border-gray-300 px-3 py-2 text-base mb-2"
            maxLength={8}
            autoFocus
            autoComplete="one-time-code"
          />
          <Button
          type="submit"
          disabled={loading || otp.length < 4}
          className='w-full text-white'
          >
            {loading ? 'Verifying...' : 'Verify & Sign In'}
          </Button>
          <Button
            type="button"
            onClick={() => { setStep('request'); setOtp(''); setErrorMsg(null); }}
            className="w-full text-white"
            disabled={loading}
          >
            Change phone number
          </Button>
        </>
      )}
      {errorMsg && (
        <p className="text-red-700 bg-red-50 rounded-sm px-3 py-2 mt-2 text-center">
          {errorMsg}
        </p>
      )}
    </form>
  )
}
