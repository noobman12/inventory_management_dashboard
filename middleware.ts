import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Define public paths that don't require authentication
  const isPublicPath = path === '/login';
  
  // Get the token from the cookies
  const token = request.cookies.get('auth_token')?.value || '';

  // 1. Redirect to / (dashboard) if user is already logged in and tries to access login
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  // 2. Redirect to /login if user is not logged in and tries to access protected routes
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  // 3. Allow request to proceed
  return NextResponse.next();
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (svg, png, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg|.*\\.png).*)',
  ],
};
