import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "./lib/db";

export async function middleware(req: NextRequest) {
  const { getUser, getIdToken } = getKindeServerSession(req);
  const user = await getUser();
  const token = await getIdToken();
  const path = req.nextUrl.pathname;

  // Check if the session_id cookie exists
  const sessionId = req.cookies.get("id_token");

  // Redirect to login if session_id cookie is missing
  if (!sessionId) {
    return NextResponse.redirect(new URL("/api/auth/login", req.url));
  }

  // Handle paths under /friendzone
  if (path.startsWith("/friendzone")) {
    if (user && user.email) {
       const sub = token.sub; 
      // Store user email and token in Redis
      await db.set(`user:email:${user.email}`, sub);
    } else {
      // Redirect to login if user is not authenticated
      return NextResponse.redirect(new URL("/api/auth/login", req.url));
    }
  }

  return NextResponse.next(); // Proceed to the next middleware or route handler
}

export const config = {
  matcher: "/friendzone/:path*",
};
