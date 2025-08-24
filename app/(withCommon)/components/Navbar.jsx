// "use client";   

import { EggIcon, ShoppingBasket } from "lucide-react";
import Link from "next/link";


export default function Navbar() {
return (
  <nav className="bg-white p-4 px-20 fixed top-0 z-10 w-full shadow-lg">

    <div className="flex justify-between items-center px-10">

        <Link href='/' className="flex items-center">
            <EggIcon className="text-[#d97706]"></EggIcon>
            <h1 className="text-[#d97706] font-bold text-2xl pl-2">Heritage Hens</h1>
        </Link>

        <div className="">
            <Link href='/' className="text-[#d97706] text-md hover:text-[#a85f0c] px-6">Home</Link>
            <Link href='/about' className="text-[#d97706] text-md hover:text-[#a85f0c] px-6">About    </Link>
            <Link href='/products' className="text-[#d97706] text-md hover:text-[#a85f0c] px-6">Products</Link>
            <Link href='/contact' className="text-[#d97706] text-md hover:text-[#a85f0c] px-6">Contact    </Link>
        </div>

        <div>
            <ShoppingBasket className="text-[#d97706]"/>
        </div>
        
    </div>

  </nav>    

)

}