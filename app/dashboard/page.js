"use client"
import { signOut, useSession } from "next-auth/react"
import { logoutUser } from "../actions/userActions"

export default function Dashboard() {
    const { data: session } = useSession()

    return (
        <div className="text-center">
            <form action={()=>{logoutUser(session.user.email); signOut()}}>
                <h1 className="text-3xl font-bold">Welcome to your Dashboard!</h1>
                <br />
                <p>You can see your credentials and logout from here!</p>
                <br />
                <b>Username: </b> <span>{session?.user.name}</span>
                <br />
                <b>Email: </b> <span>{session?.user.email}</span>
                <br />
                <b>Image: </b> <img className="mx-auto rounded-full" src={session?.user.image} alt="User image" height={90} width={90} />
                <br />
                <div className="logout">
                    <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-700" onClick={logoutUser}>Logout</button>
                </div>
            </form>
        </div>
    )
}