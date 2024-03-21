import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Components/ui/accordion"

const Faq = () => {
  return (
    <>
    <div className="w-full px-[8rem] flex flex-col justify-center items-center">
    <h1 className=' text-black text-[3.5vw] font-bold tracking-tighter '>FAQ'<span className=" text-[#02579b] ">s</span></h1>
    <h3 className="text-slate-400 text-[1.2vw]">Find quick answers to common queries in our FAQs section.</h3>
    </div>

    <Accordion type="single" collapsible className="w-full py-[6rem] px-[8rem] ">
      <AccordionItem value="item-1">
        <AccordionTrigger>What services does MESHL Web Pvt Ltd offer?</AccordionTrigger>
        <AccordionContent>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid, beatae quis illo at architecto .
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How experienced is the team at MESHL Web Pvt Ltd?</AccordionTrigger>
        <AccordionContent>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid, beatae quis illo at architecto .
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can you provide examples of innovative IT solutions your company has implemented for businesses?</AccordionTrigger>
        <AccordionContent>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid, beatae quis illo at architecto .
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>What sets MESHL Web Pvt Ltd apart in terms of understanding the diverse needs of clients?</AccordionTrigger>
        <AccordionContent>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid, beatae quis illo at architecto .
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>How can MESHL Web Pvt Ltd help transform my business using technology?</AccordionTrigger>
        <AccordionContent>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid, beatae quis illo at architecto .
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>How can I collaborate with MESHL Web Pvt Ltd for my business needs?</AccordionTrigger>
        <AccordionContent>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid, beatae quis illo at architecto .
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </>
  )
}

export default Faq