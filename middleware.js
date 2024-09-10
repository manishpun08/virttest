import { NextResponse } from "next/server";

export default function middleware(req) {
  // Get the value of the "loggedin" cookie
  const authenticated = req.cookies.get("loggedin");
  const url = req.nextUrl.clone();

  // Redirect to login if not authenticated and trying to access /dashboard
  if (!authenticated && url.pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Redirect to dashboard if already authenticated and trying to access /login
  if (authenticated && url.pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

// Specify the paths where this middleware should apply
export const config = {
  matcher: ["/dashboard", "/login"],
};
