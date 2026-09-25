import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-white w-[90vw] mx-auto absolute top-12 right-[5vw] rounded-full py-3 flex pr-6 justify-between items-center pl-10  z-10 shadow-background shadow-md'>
        <div className='logo flex gap-14 items-center'>
          <Link href={"/"}>
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
                fontSize="40"
                fontWeight="700"
                fill="#000000"
              >
                Bittree
              </text>
            </svg>
          </Link>

          <ul className='flex gap-6 text-[#254f1a]'>
            <li className='hover:bg-gray-400/20 p-3 rounded-xl flex items-center cursor-pointer'><Link href="/products">Products</Link></li>
            <li className='hover:bg-gray-400/20 p-3 rounded-xl flex items-center cursor-pointer'><Link href="/templates">Templates</Link></li>
            <li className='hover:bg-gray-400/20 p-3 rounded-xl flex items-center cursor-pointer'><Link href="/marketplace">Marketplace</Link></li>
            <li className='hover:bg-gray-400/20 p-3 rounded-xl flex items-center cursor-pointer'><Link href="/learn">Learn</Link></li>
            <li className='hover:bg-gray-400/20 p-3 rounded-xl flex items-center cursor-pointer'><Link href="/pricing">Pricing</Link></li>
          </ul>
        </div>
        <div className='flex gap-4'>
          <button className='login text-[#1e2330] bg-gray-400/20 px-8 py-5 rounded-lg hover:bg-gray-500/20 cursor-pointer font-bold'><Link href={"/"}>Log in</Link></button>
          <button className='sign-up text-white bg-[#1e2330] hover:bg-[#2c2e34] px-6 py-3 rounded-full font-bold cursor-pointer'><Link href={"/"}>Sign up Free</Link></button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
