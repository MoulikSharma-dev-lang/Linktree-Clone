"use client"
import { useState, useEffect } from "react"
import { fetchBittrees } from "../actions/userActions";
import { redirect } from "next/navigation";

export default function LinksPage({username}){
    const [alllinks, setAllLinks] = useState([]);

    useEffect(()=>{
        getLinks()
    }, [])

    async function getLinks(){
        const gotLinks = await fetchBittrees(username.replace("%20", " "))
        setAllLinks(gotLinks.links)
    }

    return (
        <div className="text-center">
            <span className="font-bold text-xl">{username.replace("%20", " ")}</span>
            <br />
            <br />
            {alllinks.map((link, index)=>{
                return <div key={index}>
                    <button onClick={()=>{redirect(link.url)}} className="bg-red-600 text-white p-4 w-80 mx-auto rounded-lg">{link.linktext}</button>
                    <br />
                    <br />
                </div>
            })}
        </div>
    )
}