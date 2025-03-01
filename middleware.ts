// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Example: Logging the request path
  console.log(`Request for: ${request.url}`);

  // Example: Check for authentication (could be based on cookies, headers, etc.)
  const token = request.headers.get('Authorization');
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url)); // Redirect to login if no token
  }

  // If the request passes all conditions, continue the request
  return NextResponse.next();
}

// Optional: Set matcher to apply middleware only on certain paths
export const config = {
  matcher: ['/dashboard', '/profile'], // Middleware will only run for these paths
};
