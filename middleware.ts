// import { NextResponse, type NextRequest } from 'next/server';
// import { createClient } from './src/lib/middleware';

// export async function middleware(request: NextRequest) {
//   const { supabase, response } = createClient(request);
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }
//   return response;
// }

// export const config = {
//   matcher: [
//     '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
//   ],
// };

// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'
 
const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en'
})
 
export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}
 
export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}