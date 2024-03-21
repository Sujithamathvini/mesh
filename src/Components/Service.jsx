import React from 'react'
import { Separator } from "../Components/ui/separator"
// import img from ""

const services =[
  {
    img : "web.png",
    title : "Web Design & Development",
    desc : "Crafting visually appealing and highly functional websites that leave a lasting impression."
  },
  {
    img : "app.png",
    title : "App Developing",
    desc : "Developing tailored mobile applications to meet your unique business needs and user expectations."
  },
  {
    img : "uiux.png",
    title : "UI / UX Design",
    desc : "Focusing on user centric design to create interfaces that are intuitive, engaging, and enjoyable."
  },
  {
    img : "logo-design.png",
    title : "Logo Designing",
    desc : " Designing logos that capture the essence of your brand and make it stand out in the market."
  },
  {
    img : "blog.png",
    title : "Blog Posting",
    desc : "Generating high quality blog posts that not only inform your audience but also improve your search engine rankings."
  },
  {
    img : "graphic-design.png",
    title : "Graphics Design",
    desc : "Using design to tell your brands story creatively and captivating your audience through visual storytelling."
  },
  {
    img : "email.png",
    title : "Email Marketing",
    desc : "Engaging and connecting with your audience through targeted and well crafted email marketing strategies."
  },
  {
    img : "teach.png",
    title : "Teaching & Tutoring",
    desc : "Providing personalized support and education to help learners thrive academically and professionally."
  }
]

const Service = () => {
  return (
    <>
    <div className=' relative flex flex-col justify-center items-center w-full px-[8vw] pt-[5vw] pb-[2vw] '>
      <h1 className=' text-black text-[3.5vw] font-bold tracking-tighter '><span className=" text-[#02579b] ">Our</span> Services</h1>
    </div>

    <div className='relative w-full justify-center items-center bg-[#02579b] py-[4rem] pl-[3rem] grid grid-rows-2 grid-cols-4 '>
        {services.map((service,index) => (
          <div className= { `item1 border-slate-300 border-l-2 flex flex-col justify-center items-start py-[4rem] px-[2.5rem]  ` }>
            <img className='w-[40px] mb-2' src={service.img} alt="" />
            <h3 className=' text-white text-[1.3vw] font-semibold pb-4 tracking-tighter '>{service.title}</h3>
            <h3 className=' text-white text-sm text-opacity-60 font-normal'>{service.desc}</h3>
            <Separator orientation="vertical" />
          </div>
        ))}
    </div>
    </>
  )
}

export default Service