"use client"

import React, { useState } from "react";

import Image from "next/image";
import breeds from "../../data/breeds"
import { CreditCard } from "lucide-react";
import { useCartStore } from "../../store/CartStore";
import { toast } from "react-toastify";

export default function ProductPage({params}){

        // console.log(params)

        const [quantity, setQuantity] = useState(1)

        const {id} = React.use(params)
        // const product = breeds.find((breed) => breed.id === id)
        const product = breeds.find((breed) => String(breed.id) === id);

        if(!product){
            return <div>Product not Found</div>
        }
        
        const addToCart =  useCartStore((state) => state.addToCart)

    return(
        <div className="py-24 bg-gray-100 justify-center grid grid-cols-1 md:grid-cols-2">

            <div className="md:justify-end flex">
                <Image src={product.img} alt={product.name} width={500} height={500} className="relative"/>
            </div>
            <div className="bg-white p-4 max-w-xl">
                {product.featured && (
                <div className="inline-block bg-[#d97706] text-white px-2 py-1 text-sm font-semibold rounded-md">
                    Featured
                    </div>
                )}
                <h2 className="py-4 text-3xl text-[#d97706] font-semibold">{product.name}</h2>
                <p className="py-2 *:text-xl">{product.desc}</p>

                <p className="font-serif">Payment Methods:</p>
                <div className="text-gray-800 py-2">
                    <ul className="">
                        <li  className=" font-serif">
                            - Cash on Delivery
                        </li>
                        {/* <li className=" font-serif flex">2-Credit Cards <span className="text-[#d97706]"> <CreditCard/> </span> </li> */}
                        <li className=" font-serif flex">- Credit Cards </li>
                        <li className=" font-serif">- Mobile Financial Services</li>
                    </ul>
                </div>
                <p className="text-[#d97706] font-bold text-2xl py-4">Price: ${product.price}
                    <strike className="strike pl-2 text-[#d88b33] text-xl">${product.price + product.price*0.5}</strike>
                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="border border-[#d97706] text-[#d97706] py-2 px-4 rounded flex items-center justify-evenly">
                    <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="text-xl font-bold"
                    >
                    -
                    </button>
                    <span className="font-semibold">Quantity: {quantity}</span>
                    <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="text-xl font-bold"
                    >
                    +
                    </button>
                </div>

                        <button onClick={() => {
                            addToCart({...product, quantity})
                            toast.success(`${quantity} ${product.name} added to cart!`)}} className="bg-[#d97706] text-white py-2 px-4 rounded hover:bg-[#b45309] transition-colors">
                            Add to Cart 
                        </button>
                
                </div>
            </div>
        
        
        
        
        
        </div>
        

    )
}