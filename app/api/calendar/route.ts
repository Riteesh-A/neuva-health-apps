import { formatISO } from 'date-fns';
import { JWT } from 'google-auth-library';
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

// Predefined list of attendees
const PREDEFINED_EMAILS = ['yeshasparamesh@gmail.com', 'puneetshrivas32@gmail.com'];

export async function POST(req: NextRequest) {
  try {
    const { date, startTime, endTime, email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, message: 'User email is required' }, { status: 400 });
    }

    const startDate = new Date(`${date} ${startTime}`);
    const endDate = new Date(`${date} ${endTime}`);

    const jwtClient = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/calendar'],
      subject: 'info@aptos.ltd'
    });

    const calendar = google.calendar({ version: 'v3', auth: jwtClient });

    const event = {
      summary: 'Consultation Call | Neuva Health ',
      description: 'Your consultation call with doctor from Neuva Health',
      start: { dateTime: formatISO(startDate), timeZone: 'Asia/Kolkata' },
      end: { dateTime: formatISO(endDate), timeZone: 'Asia/Kolkata' },
      attendees: [
        { email: email },
        ...PREDEFINED_EMAILS.map(email => ({ email })),
      ],
      source:{
        title: 'Neuva Health',
        url: 'https://neuvahealth.com',
      },
      conferenceData: {
        createRequest: {
          requestId: `meet-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
      
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      conferenceDataVersion: 1,
      sendUpdates: 'all',

    });

    return NextResponse.json({ success: true, data: response.data }, { status: 200 });

  } catch (error: any) {
    console.error('Error creating meet:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
