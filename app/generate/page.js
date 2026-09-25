"use client"

import { React, useState, Suspense } from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

const poppins = Poppins({
    weight: ["500", "900"],
    variable: "--font-geist-sans",
    subsets: ["latin"],
});


const GenerateContent = () => {

    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const searchParams = useSearchParams()
    const [handle, sethandle] = useState(searchParams.get("handle"))
    const [pic, setpic] = useState("")

    const handleChange = (index, link, linktext) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i == index) {
                    return { link, linktext }
                }
                else {
                    return item
                }
            })
        })
    }

    const addLink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))
    }

    const submitLinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };


        const r = await fetch("/api/add", requestOptions)
        const result = await r.json()
        if (result.success) {
            toast.success(result.message)
            setLinks([])
            setpic("")
            sethandle("")
        }
        else {
            toast.error(result.message)
        }

    }

    return (
        <div className='bg-[#FF0A7A] grid grid-cols-2 min-h-screen'>

            <div className="cols1 p-5 flex flex-col gap-5">
                <div className='logo ml-5 mt-5 mb-10 flex justify-start'>
                    <Link href="/">
                        <svg
                            width="180"
                            height="50"
                            viewBox="0 0 180 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <text
                                x="0"
                                y="36"
                                fontFamily="Arial, Helvetica, sans-serif"
                                fontSize="50"
                                fontWeight="700"
                                fill="white"
                            >
                                Bittree
                            </text>
                        </svg>
                    </Link>
                </div>
                <h1 className={`text-white ${poppins.className} text-5xl font-semibold self-center`}>Join Bittree</h1>
                <div className='flex flex-col gap-5 self-center'>
                    <h1 className={`text-[#FFE6F2] ${poppins.className} text-xl font-medium self-center`}>Step 1: Claim your handle</h1>

                    <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className='bg-[#FFB3CC]  px-4 w-120 h-12 rounded-xl py-2 text-[#24121B] text-lg focus:outline-[#936709]' type="text" placeholder='Choose a handle' />

                    <h1 className={`text-[#FFE6F2] ${poppins.className} text-xl font-medium self-center`}>Step 2: Add your links</h1>
                    {links && links.map((item, index) => {
                        return <div key={index} className='flex gap-2 self-center'>
                            <input value={item.linktext || ""} onChange={(e) => { handleChange(index, item.link, e.target.value) }} className='bg-[#FFB3CC] px-4 w-1/2 h-12 rounded-xl py-2 text-[#24121B] text-lg focus:outline-[#936709]' type="text" placeholder='Enter Title' />

                            <input value={item.link || ""} onChange={(e) => { handleChange(index, e.target.value, item.linktext) }} className='bg-[#FFB3CC]  px-4 w-1/2 h-12 rounded-xl py-2 text-[#24121B] text-lg focus:outline-[#936709]' type="text" placeholder='Enter Link' />


                        </div>
                    })}

                    <button onClick={() => addLink()} className={`bg-[#24121B] w-1/3 self-center px-4 py-3 rounded-full text-lg cursor-pointer hover:bg-[#3A1728] ${poppins.className} shadow-black shadow-sm`}>+ Add Link</button>

                    <h1 className={`text-[#FFE6F2] ${poppins.className} text-xl font-medium self-center`}>Step 3: Add Picture and Finalize</h1>

                    <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className='bg-[#FFB3CC]  px-4 w-120 h-12 rounded-xl py-2 text-[#24121B] text-lg focus:outline-[#936709]' type="text" placeholder='Enter Public Link to your Picture' />

                    <button disabled={pic == "" || handle == "" || links[0]?.linktext == ""} onClick={() => { submitLinks() }} className={`bg-[#24121B] w-2/3 self-center px-4 py-3 rounded-full text-lg cursor-pointer hover:bg-[#3A1728] ${poppins.className} shadow-black shadow-sm disabled:bg-[#3A1728] disabled:text-shadow-indigo-50`}>Create your BitTree</button>
                </div>
            </div>
            <div className="cols2 relative min-h-screen block ">
                <div className='w-full h-full justify-center flex'>
                    <Image
                        className=' w-auto h-auto items-center cursor-pointer hover:bottom-1'
                        loading='eager'
                        src={"/form.avif"}
                        alt='Form image'
                        width={660}
                        height={660}
                    />
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

const Generate = () => {
    return (
        <Suspense fallback={<div className="bg-[#FF0A7A] min-h-screen flex items-center justify-center text-white">Loading...</div>}>
            <GenerateContent />
        </Suspense>
    )
}

export default Generate
