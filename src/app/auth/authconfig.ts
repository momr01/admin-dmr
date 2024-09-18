import { Session } from "next-auth";
import { NextRequest } from "next/server";

export const authConfig = {
    site: process.env.AUTH_URL,
    providers:[],
    pages: {
      signIn: "/",
    },
    callbacks: {
      authorized({ auth, request }: {auth: Session | null ; request: NextRequest}) {
        const isLoggedIn = auth?.user;
        const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
        if (isOnDashboard) {
          if (isLoggedIn) return true;
          return false;
        } else if (isLoggedIn) {
          return Response.redirect(new URL("/dashboard", request.nextUrl));
        }
        return true;
      },
    },
  };