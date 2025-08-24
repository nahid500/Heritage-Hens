import Image from "next/image";
import { CheckCircle } from "lucide-react";


export default function About() {
  return (
    
    <div id="about" className=" grid grid-cols-1 md:grid-cols-2 bg-gray-100 py-12">

        <Image src="/hero.jpg" alt="about-us" width={450} height={450} className=" mx-auto pt-8 rounded-lg"/>
    
    <div className="">

      <h3 className="text-3xl font-bold">Our Heritage Farm Story</h3>
      {/* <div className="w-24 h-1 bg-amber-500 mb-6"></div> */}
      <div className="w-32 h-1 bg-amber-500 my-2"></div>
      <p className="my-4 max-w-xl">
        For over 15 years, Heritage Hens has been dedicated to preserving and promoting heritage chicken breeds. What started as a small family passion has grown into a mission to provide families across the country with the highest quality chickens.</p>
      <p className="mb-2  max-w-xl">
        We believe in raising chickens the way nature intended - with space to roam, healthy feed, and gentle care. Our breeding program focuses on health, temperament, and productivity, resulting in birds that will thrive in your backyard or homestead.
      </p>
      <ul className="pt-4 grid grid-cols-2">
        <li className="flex gap-4 pb-2 items-center">
            <CheckCircle className="text-[#d97706]"/>
            Free-range, humanely raised chickens
        </li>
        <li className="flex gap-4 pb-2  items-center">
            <CheckCircle className="text-[#d97706]"/>
            No antibiotics or hormones
        </li>
        <li className="flex gap-4 pb-2 items-center">
            <CheckCircle className="text-[#d97706]"/>
            Heritage breeds with excellent genetics
        </li>
        <li className="flex gap-4 pb-2  items-center">
            <CheckCircle className="text-[#d97706]"/>
            Sustainable farming practices
        </li>
        {/* <li className="flex gap-4 pb-2">
            <CheckCircle className="text-[#d97706]"/>
            Expert care and breeding
        </li> */}
      </ul> 

      <button className="bg-[#d97706] hover:bg-[#dd8f36] text-white py-2 px-4 rounded-lg mt-4">Get in Touch</button>

        </div>
    </div>
  );
}