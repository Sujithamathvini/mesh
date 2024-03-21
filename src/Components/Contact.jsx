import React from 'react'

const Contact = () => {
  return (
    <div className=' relative flex flex-col px-[8rem] bg-[#011c2a] py-[4rem] text-white divide-white divide-y-2 '>
      <div className=' flex justify-between items-center py-8 '>
        <div className=' flex flex-col justify-center items-start gap-4'>
          <h1 className=' text-[1.6vw] tracking-wider font-bold '>Reach us</h1>
          <h3 className=' text-[1.2vw] tracking-wide font-normal '><span className='font-bold tracking-wider'>Ph:</span> +91 012 3456 789</h3>
          <h3 className=' text-[1.2vw] tracking-wide font-normal '><span className='font-bold tracking-wider'>Email:</span> meshl@gmail.com</h3>
          <h3 className=' text-[1.2vw] tracking-wide font-normal '><span className='font-bold tracking-wider'>Address:</span> 132 Dartmouth Street Boston, <br />Massachusetts 02156 United States</h3>
        </div>
        <div className=' flex flex-col justify-center items-start gap-4'>
          <h1 className=' text-[1.6vw] tracking-wider font-bold '>Company</h1>
          <h3 className=' text-[1.2vw] tracking-wide font-normal '>About</h3>
          <h3 className=' text-[1.2vw] tracking-wide font-normal '>Contact</h3>
          <h3 className=' text-[1.2vw] tracking-wide font-normal '>Blogs</h3>
        </div>
        <div className=' flex flex-col justify-center items-start gap-4'>
          <h1 className=' text-[1.6vw] tracking-wider font-bold '>Legal</h1>
          <h3 className=' text-[1.2vw] tracking-wide font-normal '>Privacy Policy</h3>
          <h3 className=' text-[1.2vw] tracking-wide font-normal '>Terms & Services</h3>
          <h3 className=' text-[1.2vw] tracking-wide font-normal '>Terms of use</h3>
        </div>
      </div>

      <div className=' flex justify-between items-center py-8 px-[20rem] text-slate-400 text-[1.2vw] '>
        <h3>Terms & Conditions</h3>
        <h3>© Copyright 2024</h3>
        <h3>Privacy Policy</h3>
      </div>
    </div>
  )
}

export default Contact