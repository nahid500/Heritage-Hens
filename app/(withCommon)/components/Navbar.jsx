// "use client";   

import { EggIcon, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"


export default function Navbar() {
return (
  <nav className="bg-white py-4 md:px-20 fixed top-0 z-10 w-full shadow-lg">

    <div className="flex justify-between items-center px-10">

        <Link href='/' className="flex items-center">
            <EggIcon className="text-[#d97706]"></EggIcon>
            <h1 className="text-[#d97706] font-bold texl-md md:text-2xl pl-2">Heritage Hens</h1>
        </Link>

      <div className="flex items-end gap-6">

        <div className="hidden md:block items-start">
            <Link href='/' className="text-[#d97706] text-md hover:text-[#a85f0c] px-6">Home</Link>
            <Link href='/#about' className="text-[#d97706] text-md hover:text-[#a85f0c] px-6">About    </Link>
            <Link href='/products' className="text-[#d97706] text-md hover:text-[#a85f0c] px-6">Products</Link>
            <Link href='/order' className="text-[#d97706] text-md hover:text-[#a85f0c] px-6">Cart/Order</Link>
            <Link href='/login' className="text-[#d97706] text-md hover:text-[#a85f0c] px-6">Login    </Link>
        </div>

        <div>
            <ShoppingBasket className="text-[#d97706]"/>
        </div>

        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 items-center font-semibold text-[#d97706]">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
             </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  {/* <div className="grid grid-rows-4 py-2">

                  <Link href='/' className="text-[#d97706] text-md hover:text-[#a85f0c] pt-4">Home</Link>
                  <Link href='/#about' className="text-[#d97706] text-md hover:text-[#a85f0c] pt-4">About    </Link>
                  <Link href='/products' className="text-[#d97706] text-md hover:text-[#a85f0c] pt-4">Products</Link>
                  <Link href='/contact' className="text-[#d97706] text-md hover:text-[#a85f0c] pt-4">Contact    </Link>
                  </div> */}

                </SheetDescription>
                <div className="grid grid-rows-4 py-2">

                  <Link href='/' className="text-[#d97706] text-md hover:text-[#a85f0c] pt-4">Home</Link>
                  <Link href='/#about' className="text-[#d97706] text-md hover:text-[#a85f0c] pt-4">About    </Link>
                  <Link href='/products' className="text-[#d97706] text-md hover:text-[#a85f0c] pt-4">Products</Link>
                  <Link href='/#contact' className="text-[#d97706] text-md hover:text-[#a85f0c] pt-4">Contact    </Link>
                  </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
      
        </div>
      </div>
        
    </div>

  </nav>    

)

}