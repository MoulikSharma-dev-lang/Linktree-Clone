"use client"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { useState } from "react"
import { logoutUser } from "../actions/userActions"

export default function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false)
    const { data: session } = useSession()

    return (
        <>
            <nav className="bg-white flex justify-between py-3 rounded-full my-3 mx-4">
                <Link href={"/"}><span className="font-bold text-xl mx-4">Linktree</span></Link>
                <ul className="flex gap-3 mx-4">
                    {!session && <Link href={"/login"}><li className="">Login</li></Link>}
                    {session && <>
                        <button onClick={() => { setShowDropdown(!showDropdown) }} id="dropdownButton" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                            Welcome!
                        </button>

                        {showDropdown && <div id="dropdownMenu" className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                            <div className="py-1">
                                <Link href="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</Link>
                                <Link href={`/${session.user.name}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Your Page</Link>
                                <Link href="/createbittree" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Create Bittree</Link>
                                <div className="mx-4 my-1"><button onClick={()=>{logoutUser(session?.user.email); signOut()}}>Sign Out</button></div>
                            </div>
                        </div>}
                    </>}
                </ul>
            </nav>
        </>
    )
}