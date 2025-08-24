import { EggIcon } from "lucide-react";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { MapPinIcon,Phone, Mail } from "lucide-react";


export default function Footer() {
  return (

    <div className="bg-[#292524] px-4 pt-4">

    <footer className=" grid grid-cols-1 md:grid-cols-3 p-4"> 

      <div className="md:mx-auto">

      <div className="flex items-center gap-2 mt-6">
        <EggIcon className="text-[#d97706]" />
        <h4 className="text-white font-semibold text-xl">
        Heritage Hens
        </h4>

      </div>
        <p className="flex text-sm text-gray-300 pt-4 max-w-xs">Providing the highest-quality heritage chicken breeds since 2010. Our farm-raised birds are healthy, happy, and ready to become part of your family.</p>
      </div>



      <div className=" grid md:grid-flow-row mt-6 md:mx-auto text-gray-300">

      <h4  className="text-white text-md md:text-lg">Find Us At:</h4>

      <Link href={"/about"} className=" mt-2 gap-2 flex hover:text-gray-300">
        <FacebookIcon className=" ml-2"/>Facebook
      </Link>
      <Link href={"/about"} className=" mt-2 gap-2 flex hover:text-gray-300">
        <InstagramIcon className=" ml-2"/>Instagram
      </Link>
      <Link href={"/about"} className=" mt-2 gap-2 flex hover:text-gray-300">
        <TwitterIcon className=" ml-2 text-md"/>Twitter
      </Link>
      
      </div>


      <div className="grid grid-flow-row mt-6 mx-auto">

        <h5 className="text-white text-md md:text-lg">Contact Information</h5>
        <ul className="text-gray-300 max-w-xs ">
          <li className="flex pt-2 gap-2 items-center">
            <MapPinIcon style={{ width: "32px", height: "32px" }} className="text-[#d97706]" />
            <p>Heritage Farms, 123 Rural Route, Countryside, CA 98765</p>
          </li>
          <li className="flex pt-2 gap-2 items-center">
            <Phone  className="text-[#d97706]"/>
            <p>(555) 123-4567</p>
          </li>
          <li className="flex pt-2 gap-2 items-center">
            <Mail className="text-[#d97706]"/>
            <p>info@heritagehens.com</p>
          </li>
        </ul>
      
       </div>

    </footer> 
      <div className="border border-b-2 border-[#d97706] mx-24 my-2"></div>
      <p className="text text-[#dd841f] text-center pb-2">&copy; 2025. Heritage Hens. All rights reserved.</p>
    </div>
    ) 
}