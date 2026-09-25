"use client"

import React from 'react'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Share = ({ url, pic }) => {
    const modalRef = useRef(null)
    const copy = () => {
        (navigator.clipboard.writeText(url))

        toast.success('Copied to clipboard', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className="share px-8 pt-2">
                <button onClick={() => modalRef.current.showModal()} className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5 text-white" fill="black" > <path d="M216 112v96a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16v-96a16 16 0 0 1 16-16h24a8 8 0 0 1 0 16H56v96h144v-96h-24a8 8 0 0 1 0-16h24a16 16 0 0 1 16 16ZM93.66 69.66 120 43.31V136a8 8 0 0 0 16 0V43.31l26.34 26.35a8 8 0 0 0 11.32-11.32l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 11.32 11.32Z" /> </svg>
                </button>

                <dialog ref={modalRef}>
                    <div className="card flex flex-col gap-3 p-5 bg-violet-400 fixed top-1/10 left-1/3 w-120 min-h-120 rounded-3xl shadow-2xl shadow-black">
                        <div className='cross w-full flex items-center justify-end'>
                            <button onClick={() => { modalRef.current.close() }} className='cursor-pointer hover:bg-gray-600/20 p-2'>
                                <svg width="20" height="20" viewBox="0 -0.06 5.2 5.2" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)"><path d="M2.495 3.043c-.449.402-.888.791-1.322 1.185-.252.228-.494.466-.746.695a.8.8 0 0 1-.227.15c-.041.017-.13 0-.151-.032-.027-.042-.019-.117-.004-.172.011-.04.054-.073.086-.105l1.86-1.829c.07-.068.141-.135.221-.21-.271-.3-.542-.59-.802-.891C.996 1.354.591.867.182.383L.139.329C.068.243.018.152.099.05.16-.027.306-.015.407.089q.378.39.743.795c.447.49.889.983 1.334 1.474q.029.027.061.05c.344-.328.683-.656 1.026-.98A222 222 0 0 1 4.767.304Q4.991.095 5.13.22c.095.085.087.226-.066.378-.412.411-.833.811-1.254 1.213-.321.306-.647.606-.988.925.277.287.543.573.821.846.267.262.549.509.822.765a3 3 0 0 1 .299.311c.074.093.085.207-.006.299-.09.09-.195.058-.281-.01a6 6 0 0 1-.478-.397c-.465-.455-.921-.919-1.381-1.379-.036-.036-.071-.075-.121-.128" fill="white" /></g><defs><clipPath id="a"><path fill="white" d="M.031 0h5.16v5.08H.031z" /></clipPath></defs></svg>
                            </button>
                        </div>
                        <div className="heading w-full flex items-center justify-center mb-10">
                            <div className="pic">
                                <img src={pic} alt="user image" className='w-30 h-30 rounded-full border-black shadow-lg shadow-black' />
                            </div>
                        </div>
                        <div className="heading text-yellow-300 text-2xl font-bold text-shadow-2xs text-shadow-black">
                            Share Your Bittree Link
                        </div>
                        <div className='info-to-share w-full flex items-center'>

                            <div className=' bg-orange-100 w-3/4 h-12 rounded-2xl shadow-[0_0_20px_rgba(0,0,0)] flex items-center px-2'>
                                {url}
                            </div>
                            <div className="svg w-1/4 flex items-center justify-center">
                                <button onClick={() => { copy() }}>
                                    <svg width="36" height="36" viewBox="0 0 0.9 0.9" xmlns="http://www.w3.org/2000/svg" className='w-full cursor-pointer'>
                                        <path d="M.787.335.785.325V.322L.778.311.553.086.542.079H.539L.527.075H.375a.11.11 0 0 0-.112.112v.037H.225a.11.11 0 0 0-.112.112v.375a.11.11 0 0 0 .112.112h.3A.11.11 0 0 0 .637.711V.674h.037A.11.11 0 0 0 .786.562V.335M.561.203.66.3H.6A.037.037 0 0 1 .563.263Zm.002.51A.037.037 0 0 1 .526.75H.225A.037.037 0 0 1 .188.713V.337A.037.037 0 0 1 .225.3h.037v.263a.11.11 0 0 0 .112.112h.188Zm.15-.15A.037.037 0 0 1 .676.6h-.3A.037.037 0 0 1 .339.563V.188A.037.037 0 0 1 .376.151h.112v.112A.11.11 0 0 0 .6.375h.112Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='my-2 border rounded-full shadow-[0_0_50px_rgba(0,0,0)] w-full'></div>
                        <div className='flex flex-col gap-2 w-full'>
                            <h1 className='text-white font-bold text-2xl text-shadow-2xs text-shadow-black'>Join Bittree now!!</h1>
                            <button className='bg-orange-100 self-center rounded-full w-1/2 py-2 px-3 font-bold cursor-pointer hover:bg-orange-200 hover:text-xl duration-200 shadow-[0_0_20px_rgba(0,0,0)]'>Join now</button>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Share
