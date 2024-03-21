import React from 'react'

const Home = () => {
  return (
    <div className='relative w-full h-screen flex justify-center items-center'>
      <img className=' object-center' src="bg3.png" alt="" />
      <img className='absolute self-end ' src="bg1.svg" alt="" />
      <h1 className='absolute font-bold text-[5vw] tracking-tighter mb-[20rem] '>Innovate, Integrate, Elevate</h1>
      <h3 className='absolute font-semibold text-gray-500 text-[1.5vw] tracking-tighter mb-[8rem] text-center '>“Our experts ensure technology integrates seamlessly into your business <br />operations, making your journey smooth.”</h3>
      <a className=' absolute py-2 px-6 bg-[#02579b] mt-[4rem] text-white text-[1.8vw] ' href="">Get Started Today</a>
    </div>
  )
}

export default Home