import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCurrentUser } from './services/server/getCurrentUser';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  // const accessToken = request.cookies.get('accessToken');
  // const refreshToken = request.cookies.get('refreshToken');
  if (pathname.startsWith('/profile')) {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  ////
  if (
    pathname.startsWith('/signin') ||
    pathname.startsWith('/signup')
  ) {
    const user = await getCurrentUser();
    if (user) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile/:path*', '/signin', '/signup'],
};
