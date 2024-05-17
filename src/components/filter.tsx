import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Filter() {
  return(
    <div className="w-56 hidden md:flex md:flex-col">
      <h1 className=" text-sm font-semibold">Filter</h1>
      <Accordion collapsible type="single">
        <AccordionItem value="price">
          <AccordionTrigger className="text-base">Price</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="price-min">
                  Min Price
                </Label>
                <Input id="price-min" placeholder="0" type="number" />
              </div>
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="price-max">
                  Max Price
                </Label>
                <Input id="price-max" placeholder="1000" type="number" />
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline">
                  Apply
                </Button>
                <Button size="sm" variant="outline">
                  Clear
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}