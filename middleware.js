import { NextResponse } from "next/server";

export function middleware() {
  // Get the value of the "authenticated" cookie
  const authenticated = "true";

  // Redirect to login if not authenticated and trying to access /dashboard
  if (!authenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Specify the paths where this middleware should apply
export const config = {
  matcher: ["/dashboard"],
};
