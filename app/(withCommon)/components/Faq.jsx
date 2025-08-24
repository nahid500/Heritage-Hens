"use client"


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"


export function Faq() {
    return(

        <div className="text-center my-12">
            <h3 className=" text-4xl font-bold">Chicken Care Guide</h3>
            <div className="w-32 h-1 bg-amber-500 my-2 mx-auto"></div>
            <p className="max-w-3xl text-gray-600 text-center mx-auto py-4">New to raising chickens? We've put together some helpful information to ensure your new flock thrives. Our comprehensive care guide covers the basics and beyond.</p>

        <div className="max-w-3xl mx-auto">

            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>What do I need to get started with backyard chickens?</AccordionTrigger>
                <AccordionContent>
                To get started with backyard chickens, you'll need: a secure coop with nesting boxes, a run or enclosed area, feeders and waterers, quality chicken feed, bedding material (like pine shavings), and optional items like a dust bath area and treats. Make sure your coop provides at least 4 square feet per bird inside and 10 square feet per bird in the run.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger>How many eggs can I expect from my hens?</AccordionTrigger>
                <AccordionContent>
                Egg production varies by breed, age, and season. Most heritage hens begin laying at 5-6 months of age. During peak production, breeds like Rhode Island Reds and Leghorns can produce 5-6 eggs per week, while heavier breeds may lay 3-4 eggs weekly. Expect production to decline in winter months and as hens age. Most hens lay consistently for 2-3 years, then gradually decrease.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger>What should I feed my chickens?</AccordionTrigger>
                <AccordionContent>
                Feed your chickens a high-quality layer feed (16-18% protein) as their main diet. Supplement with kitchen scraps (vegetables, fruits, grains), but avoid chocolate, coffee, avocado skins, raw potato, and citrus. Provide grit for digestion if they don't free-range, and crushed oyster shells for calcium. Always ensure fresh, clean water is available. During hot weather, consider feeding watermelon or frozen treats to help keep them cool.                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger>How do I protect my chickens from predators?</AccordionTrigger>
                <AccordionContent>
            Protect your flock by using hardware cloth (not chicken wire) with 1/4 inch openings around the coop and run. Bury it at least 12 inches deep and extend outward to prevent digging predators. Use automatic coop doors that close at dusk, eliminate hiding spots near the coop, install motion-activated lights, and consider guard animals like dogs for free-ranging flocks. Regularly inspect for weak spots in fencing and ensure all latches are predator-proof.                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger>How do I keep my chickens healthy?</AccordionTrigger>
                <AccordionContent>
                Maintain chicken health through preventative measures: keep the coop clean and dry, provide enough space to prevent stress, ensure proper ventilation, offer nutritious feed and clean water, implement a parasite prevention program, quarantine new birds before introducing them to your flock, and perform regular health checks looking for signs of illness like lethargy, reduced appetite, abnormal droppings, or respiratory issues. Establish a relationship with a poultry vet for emergencies.                </AccordionContent>
            </AccordionItem>
            
           
            </Accordion>
        </div>

        <p className="text-gray-600 mt-8 text-lg">Need more detailed information about caring for specific breeds?</p>
        <button className="bg-[#d97706] hover:bg-[#de8927] text-white py-2 px-4 mt-4 rounded-lg">Contact Our Experts</button>
    </div>
    )
}
