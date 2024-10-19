export function middleware(request) {
  const currentUser = request.cookies.get("currentUser")?.value;

  if (currentUser && !request.nextUrl.pathname.startsWith("/dashboard")) {
    return Response.redirect(new URL("/dashboard", request.url));
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

// https://nextjs.org/docs/app/building-your-application/authentication
// Middleware in Next.js helps you control who can access different parts of your website. This is important for keeping areas like the user dashboard protected while having other pages like marketing pages be public. It's recommended to apply Middleware across all routes and specify exclusions for public access.
