"use client"
import { createBittree } from "../actions/userActions"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function CreateBittree() {
    return (
        <>
            <div className="p-8 text-center">
                <form action={(e) => { createBittree(e); toast.success("Your bittree has been created!", {position: "top-right"}) }}>
                    <h1 className="text-3xl font-bold">Create your Bittree</h1>
                    <br />
                    <b>Step 1:Enter your username</b>
                    <br />
                    <br />
                    <input placeholder="Your username" className="w-80 rounded-full px-3 h-10" name="username" type="text" />
                    <br />
                    <br />
                    <b>Step 2:Add Link</b>
                    <br />
                    <br />
                    <input className="w-80 rounded-full mx-3 px-3 h-10" name="linkText" type="text" placeholder="Enter link" />
                    <br />
                    <br />
                    <input className="w-80 rounded-full mx-3 px-3 h-10" name="link" type="text" placeholder="Enter Link text" />
                    <br />
                    <br />
                    <div className="text-center">
                        <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-700">Create</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}