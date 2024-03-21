import * as React from "react"

import { Card, CardContent } from "../Components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Components/ui/carousel"

const customers = [
    {
        name : "James Pattinson",
        ratings : "5/5",
        desc : "MESHL Web Pvt Ltds innovative solutions revolutionized our operations, setting a new standard for excellence in the industry."
    },
    {
        name : "Greg Stuart",
        ratings : "5/5",
        desc : "MESHL Web Pvt Ltds innovative solutions revolutionized our operations, setting a new standard for excellence in the industry."
    },
    {
        name : "Trevor Mitchell",
        ratings : "5/5",
        desc : "MESHL Web Pvt Ltds innovative solutions revolutionized our operations, setting a new standard for excellence in the industry."
    },
    {
        name : "Greg Stuart",
        ratings : "5/5",
        desc : "MESHL Web Pvt Ltds innovative solutions revolutionized our operations, setting a new standard for excellence in the industry."
    }
]

const Blog = () => {

  return (
    <>
    <div className=" flex justify-center items-center pt-[4rem] ">
        <h1 className=" text-black text-[3.5vw] font-bold tracking-tighter ">What our clients say <span className=" text-[#02579b] ">about us</span></h1>
    </div>
    <div className=" relative w-full flex justify-center items-center">
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full mx-[5rem] my-[4rem] "
      >
      <CarouselContent>
        {customers.map(( customer, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className=" flex justify-center items-center " >
                <CardContent className="flex flex-col aspect-square items-center justify-center ">
                  <img className="w-[200px] h-[200px] rounded-full my-4 " src="avatar.jpg" alt="" />
                  <h1 className="text-[2vw] font-bold pb-4 text-[#02579b] tracking-tighter ">{customer.name}</h1>
                  <h3 className="text-xl font-bold pb-4 text-yellow-500">ratings : {customer.ratings}</h3>
                  <h3 className=" text-sm text-center font-normal">"{customer.desc}"</h3>
                </CardContent>
              </Card>
              {/* <h1>1</h1> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </>
  )
}

export default Blog