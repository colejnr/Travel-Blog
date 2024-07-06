import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!request.cookies.get("admin")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  /* if (request.nextUrl.pathname.startsWith("/logout")) {
    if (request.cookies.get("admin")) {
      const response = NextResponse.next();

      response.cookies.set("admin", "go");
      response.cookies.delete("admin");

      return response;
    }
  } */
}
