import Image from "next/image";
import { CheckCircle } from "lucide-react";


export default function About() {
  return (
    
    <div className=" grid grid-cols-1 md:grid-cols-2 my-12">

        <Image src="/hero.jpg" width={350} height={350} className=" mx-auto pt-8 rounded-lg"/>
    
    <div className="">

      <h1 className="text-2xl font-bold mb-4">Our Heritage Farm Story</h1>
      <p className="mb-2 ">
        For over 15 years, Heritage Hens has been dedicated to preserving and promoting heritage chicken breeds. What started as a small family passion has grown into a mission to provide families across the country with the highest quality chickens.</p>
      <p className="mb-2">
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

        </div>
    </div>
  );
}