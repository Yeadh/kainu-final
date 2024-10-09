import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data";

export default function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
      {faqData.map((data, idx) => (
        <AccordionItem
          key={idx}
          value={`item-${idx + 1}`}
          className=" rounded-full"
        >
          <AccordionTrigger className="text-xs lg:text-base xl:text-lg 2xl:text-xl">
            {data.ques}
          </AccordionTrigger>
          <AccordionContent className="text-xs lg:text-base xl:text-lg 2xl:text-xl mt-2 pb-2">
            {data.ans}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
