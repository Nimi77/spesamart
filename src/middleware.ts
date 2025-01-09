import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isAuthenticated = !!token;

  const isProtectedRoute =
    request.nextUrl.pathname === '/checkout' ||
    request.nextUrl.pathname === '/account';

  if (isProtectedRoute && !isAuthenticated) {
    const signUpUrl = new URL('/auth/signup', request.url);
    signUpUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(signUpUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout', '/account'],
};
