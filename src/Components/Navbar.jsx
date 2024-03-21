import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-[999] w-full py-4 px-14 font-["Neue Montreal"] flex justify-between items-center bg-[#fff] shadow-md '>
      <div>
        <h1 className='text-[30px] font-bold'>MESHL web</h1>
      </div>

      <div className='links flex gap-10 '>
            {["About Us", "Services", "Blog", "Contact", "FAQ"].map((item, index)=>(
                <a key={index} className={`text-lg font-semibold capitalize text-[#000]`}>{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar