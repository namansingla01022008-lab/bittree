import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Footer from '../components/Footer'

const Notfound = () => {
    return (
        <div className='bg-[#2f0356] w-screen h-[90vh]'>
            <Navbar/>
            <div className="main grid grid-cols-2 h-full w-full">
                <div className="col-1 p-5 flex flex-col justify-end items-center h-full pb-20">
                    <h1 className='text-[#E9D5FF] font-bold text-7xl mb-2'>Looks like you have not joined Bittree yet!!</h1>
                    <h1 className='text-[#E9D5FF] text-3xl mt-2'>Create your Bittree and share everything you love in one place.</h1>
                    <div className="create bg-[#f2ea0b] px-8 py-6 rounded-full text-xl font-bold mt-10 text-black hover:shadow-lg shadow-black hover:text-2xl duration-300 cursor-pointer">
                        <Link href={"/"} className=''>Create Your Bittree Now ➡️</Link>
                    </div>
                </div>
                <div className="col-2 w-full h-full flex items-center justify-center">
                    <img src="/page404.png" alt="this is a model"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}



export default Notfound
