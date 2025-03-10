import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const allowedOrigins = ['https://api.resend.com/emails'];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const requestHeaders = await headers();

  const origin = requestHeaders.get('origin');

  if (origin && allowedOrigins.includes(origin)) {
    // add the CORS headers to the response
    res.headers.append('Access-Control-Allow-Credentials', 'true');
    res.headers.append('Access-Control-Allow-Origin', origin); // replace this your actual origin
    res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
    res.headers.append(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
  }

  return res;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
};
