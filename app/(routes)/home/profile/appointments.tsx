'use client';

import { createClient } from '@/app/lib/server';
import { Button } from '@/core/components/ui/button';
import dayjs from 'dayjs';
import { Pencil, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const supabase = await createClient();
type Appointment = {
    id: string;
    created_at: string;
    user_id: string;
    date: string;
    start_time: string;
    end_time: string;
    status: string;
    doctor_id: string;
    video_link: string;
    updated_at: string;
};

export default function AppointmentsList() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        console.error('User fetch error:', userError);
        setLoading(false);
        return;
      }

    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .eq('user_id', user.id)
      .order('date', { ascending: true });

      if (error) {
        console.error('Appointment fetch error:', error.message);
      } else {
        setAppointments(data);
      }

      setLoading(false);
    };

    fetchAppointments();
  }, []);

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('appointments').delete().eq('id', id);
    if (error) {
      console.error('Error deleting appointment:', error.message);
    } else {
      setAppointments((prev) => prev.filter((a) => a.id !== id));
    }
  };

  if (loading) return <p className="p-4 text-sm">Loading appointments...</p>;
  if (!appointments.length) return <p className="p-4 text-sm">No upcoming appointments.</p>;

  return (
    <div className="max-w-2xl mx-auto px-4 space-y-4">
      <h2 className="text-xl font-semibold mb-2">Your Appointments</h2>

      {appointments.map((appt) => {
        const dateObj = dayjs(`${appt.date} ${appt.start_time}`);
        const now = dayjs();
        const daysLeft = dateObj.diff(now, 'day');

        return (
          <div key={appt.id} className="border rounded-md p-4 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 text-xs rounded-full font-medium">
                Upcoming in {daysLeft} {daysLeft === 1 ? 'day' : 'days'}
              </span>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Pencil className="w-4 h-4 mr-1" />
                  Edit Appointment
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(appt.id)}>
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>

            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-500">Doctor Name</span>
                <span className="font-medium">{appt.doctor_id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Appointment Date and Time</span>
                <span className="font-medium">{dateObj.format('h:mm A')} on {dateObj.format('MMM D, YYYY')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Reason for Visit</span>
                <span className="font-medium">{appt.status}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
