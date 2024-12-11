import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request){
    const cookieStore = await cookies()
    if (request.nextUrl.pathname.endsWith("/dashboard") || request.nextUrl.pathname.endsWith("/createbittree")){
        const token = cookieStore.get("next-auth.session-token")
        if (!token){
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/login`)
        } else {
            console.log("Everything is working fine!")
        }
    } else if (request.nextUrl.pathname.endsWith("/login")){
        const token = cookieStore.get("next-auth.session-token")
        if (token){
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/dashboard`)
        } else {
            console.log("Everything is working fine!")
        }
    }
}