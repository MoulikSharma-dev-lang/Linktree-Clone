"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter()
  const [username, setUsername] = useState("");

  return (
    <div className="text-center">
      <div>
        <h1 className="text-4xl font-bold">Everything you are. <br /> In one, <br /> simple link in bio.</h1>
        <br />
        <p>Join 50M+ people using Linktree for their link in bio. One link to help you share <br /> everything you create, curate and sell from your Instagram, TikTok, Twitter, <br /> YouTube and other social media profiles.</p>
      </div>
      <Image className="mx-auto" src={"/image1.png"} height={400} width={400} alt="Homepage Image" />
      <br />
      <br />
      <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" className="w-80 rounded-full mx-3 px-3 h-10" placeholder="Enter user's username" />
      <br />
      <br />
      <button onClick={() => { router.push(`/${username}`) }} className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-700">Find</button>
    </div>
  );
}