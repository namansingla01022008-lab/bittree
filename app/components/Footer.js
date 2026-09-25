import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='flex justify-between px-8 py-6 bg-[#180130] '>
        <div className="left flex gap-1">
        <span className="copyright font-black text-lg text-[#E9D5FF]">&copy;</span>
        <span className="copyright font-extrabold text-[#E9D5FF]">2026 Bittree</span>
        </div>
<div className="right font-black text-lg text-[#E9D5FF]">Made with ❤️ By Naman</div>
      </footer>
    </div>
  )
}

export default Footer
