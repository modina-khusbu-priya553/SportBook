import { NextResponse } from 'next/server'
import { auth } from './app/lib/auth';
import { headers } from 'next/headers';
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    // user info
      const session = await auth.api.getSession({
        headers: await headers(), // you need to pass the headers object.
      });

      if(!session) {
            return NextResponse.redirect(new URL('/login', request.url))
      }
  
}
 
export const config = {
  matcher: ['/my-bookings','/manage-facilities', '/all-facilities/:path', '/add-facility'],
}