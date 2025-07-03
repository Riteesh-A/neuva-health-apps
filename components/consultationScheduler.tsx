'use client';

import { Button } from '@/core/components/ui/button';
import dayjs from 'dayjs';
import { CheckCircle, User, Video } from 'lucide-react';
import { useState } from 'react';
import ConsultationConfirmation from './consultationConfirmation';

export default function ConsultationScheduler({ user, supabase }: { user: any; supabase: any }) {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState('11:30 AM');
  const [consultationData, setConsultationData] = useState<any>({
    status: 'unset',
    date: '2025-04-10',
    startTime: '11:30:00',
    endTime: '12:00:00',
  });
  const [meetLink, setMeetLink] = useState('');

  const scheduleConsultation = async (date: any, startTime: any, endTime: any, email: any) => {
  const response = await fetch('/api/calendar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      date: date,
      startTime: startTime,
      endTime: endTime,
      email: user.email
    }),
  });

  const result = await response.json();

  if (result.success) {
    console.log('Meet created successfully:', result.data);
    const meetLink = result.data?.hangoutLink || result.data?.conferenceData?.entryPoints?.[0]?.uri;
    setMeetLink(meetLink);
    alert(`Meet created: ${meetLink}`);
  } else {
    console.error('Failed to create meet:', result.message);
    alert(`Failed to schedule consultation: ${result.message}`);
  }
};
  
  async function bookAppointment() {
    if (!user?.id) return;
    
    // Parse date and times
    const date = selectedDate.format('YYYY-MM-DD');
    const [startTimeStr = '00:00', startModifier = 'AM'] = selectedTime.split(' ');
    let [startHour, startMinute] = startTimeStr.split(':').map(Number);
    startHour = startHour ?? 0;
    startMinute = startMinute ?? 0;
    if (startModifier === 'PM' && startHour !== 12) startHour += 12;
    if (startModifier === 'AM' && startHour === 12) startHour = 0;
    const start_time = `${startHour.toString().padStart(2, '0')}:${startMinute
      .toString()
      .padStart(2, '0')}:00`;

    // Calculate end time (30 minutes after start)
    let endHour = startHour;
    let endMinute = startMinute + 30;
    if (endMinute >= 60) {
      endMinute -= 60;
      endHour += 1;
    }
    const end_time = `${endHour.toString().padStart(2, '0')}:${endMinute
      .toString()
      .padStart(2, '0')}:00`;
    scheduleConsultation(date, start_time, end_time, user.email);

    const { error } = await supabase.from('appointments').insert([
      {
        user_id: user.id,
        date,
        start_time,
        end_time,
        status: 'scheduled',
        video_link: meetLink || '',
      },
    ]);
    if (!error) {
      setConsultationData({
        status: 'success',
        date,
        startTime: start_time,
        endTime: end_time,
      });
    } else {
      setConsultationData({
        status: 'fail',
        date,
        startTime: start_time,
        endTime: end_time,
      });
    }
    return !error;
  }

  const times = [
    '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM',
    '12:30 PM', '1:00 PM',
  ];

  // Calculate the first day of the week and number of days in the selected month
  const firstDayOfWeek = selectedDate.startOf('month').day();
  const daysInMonth = selectedDate.daysInMonth();
  const today = dayjs();

  return (
    <div>{consultationData.status !== 'unset' ? 
    (<>
    <ConsultationConfirmation setConsultationDataAction={setConsultationData} status={consultationData.status} date={consultationData.date} startTime={consultationData.startTime} endTime={consultationData.endTime} meetLink={meetLink}/>
    </>
  ) : (<>
    
    <div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Schedule a Consultation</h2>
        <button className="text-xl font-semibold text-gray-500">×</button>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-200 rounded-full mb-3">
        <div className="w-3/4 h-full bg-blue-500 rounded-full" />
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Choose a convenient time to speak with a licensed doctor who will review your information and provide your prescription.
      </p>

      {/* KYC Box */}
      <div className="flex items-start bg-green-100 text-green-800 px-4 py-2 rounded-md mb-6 text-sm">
        <CheckCircle className="w-4 h-4 mr-2 mt-0.5" />
        <span>
          <strong>KYC Verification Completed</strong><br />
          Your identity has been verified. Now schedule your consultation to get your prescription.
        </span>
      </div>

      {/* Select Date */}
      <h3 className="font-medium mb-2">Select a Date</h3>
      <div className="flex items-center justify-between mb-2">
        <button
          className="p-1 rounded hover:bg-gray-100"
          onClick={() => setSelectedDate(selectedDate.subtract(1, 'month'))}
          aria-label="Previous Month"
          type="button"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="font-semibold text-lg">
          {selectedDate.format('MMMM YYYY')}
        </span>
        <button
          className="p-1 rounded hover:bg-gray-100"
          onClick={() => setSelectedDate(selectedDate.add(1, 'month'))}
          aria-label="Next Month"
          type="button"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-sm text-center mb-6">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="font-medium text-gray-600">{day}</div>
        ))}

        {/* Empty slots before the 1st */}
        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {/* Actual days */}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const date = selectedDate.date(day);
          const isSelected = selectedDate.isSame(date, 'date');
          const isToday = today.isSame(date, 'date') && today.isSame(date, 'month') && today.isSame(date, 'year');

          return (
            <button
              key={day}
              className={`rounded-full py-2 w-full relative
                ${isSelected ? 'bg-blue-600 text-white font-semibold' : 'hover:bg-gray-100'}
                ${isToday ? 'border-2 border-blue-400' : ''}
              `}
              onClick={() => setSelectedDate(date)}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Select Time */}
      <h3 className="font-medium mb-2">Select a Time</h3>
      <div className="grid grid-cols-3 gap-3 mb-6 text-sm">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            className={`border rounded-md px-3 py-2 ${
              time === selectedTime
                ? 'border-blue-600 text-blue-600 font-medium'
                : 'hover:bg-gray-100'
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      {/* Email Input Section */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={user?.email ?? ''}
          onChange={e => {
            // If user object is mutable, update it; otherwise, manage a local state for email
            if (user) user.email = e.target.value;
          }}
          placeholder="Enter your email"
          required
          // disabled={!!user?.email}
        />
      </div>

      {/* Confirmation Card */}
      <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-sm text-gray-800 mb-6">
        <div className="mb-2 font-medium">
          📅 {selectedDate.format('dddd, MMMM D, YYYY')}
          <br />
          🕒 {selectedTime} - {getEndTime(selectedTime)}
        </div>
        <div className="flex items-center gap-2 mb-1">
          <User className="w-4 h-4 text-blue-500" />
          With Licensed Doctor
        </div>
        <p className="text-xs text-gray-600 mb-2 ml-6">
          A qualified doctor will be assigned to you
        </p>
        <div className="flex items-center gap-2">
          <Video className="w-4 h-4 text-blue-500" />
          Video Consultation
        </div>
        <p className="text-xs text-gray-600 ml-6">
          Private video call from your device
        </p>
      </div>



      {/* Action Buttons */}
      <div className="flex flex-col justify-between gap-4">
        <Button variant="outline" className="w-full">Back</Button>
        <Button className="w-full" onClick={()=>{bookAppointment()}}>Confirm Appointment</Button>
      </div>
    </div>
    </>)}</div>
  );
}

// Helper function to get 15-min interval end time
function getEndTime(startTime: string): string {
  const [time, modifier] = startTime.split(' ');
  const safeTime = time ?? '00:00';
  let [hours, minutes] = safeTime.split(':').map(Number);

  hours = hours ?? 0;
  minutes = minutes ?? 0;

  minutes += 15;
  if (minutes >= 60) {
    minutes -= 60;
    hours += 1;
  }

  if (hours > 12) hours -= 12;

  return `${hours}:${minutes.toString().padStart(2, '0')} ${modifier}`;
}
