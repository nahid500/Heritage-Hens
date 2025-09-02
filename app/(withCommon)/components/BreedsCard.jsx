"use client"
import { useRouter } from "next/navigation"
import { toast} from "react-toastify"
import { useCartStore } from "../store/CartStore"
import Image from "next/image"
import AddToCartButton from "./AddToCartButton"


export default function BreedsCard({breed}){

    const router = useRouter()
// const addToCart = useCartStore((state) => state.addToCart)

    
    return(
        <div className="pt-6">

            <div className=" max-w-xs bg-white border-2 border-[#d97706] rounded-lg shadow-md hover:shadow-xl transition-shadow hover:-translate-y-2 mx-auto">

                <div className="relative">
                     {breed.featured && (
                    <div className=" absolute top-2 right-2 bg-[#d97706] text-white px-2 py-1 text-sm font-semibold rounded-md">
                        Featured
                    </div>
                )}
                </div>

                <Image src={breed.imgUrls?.[0]} alt="Card image" width={400} height={192} priority className="rounded-t-lg object-cover"/>

               
                
                <div className="flex justify-between p-4">
                    <h5 className="font-bold text-xl">{breed.name}</h5>
                    <span className="text-[#d97706] text-lg font-bold">${breed.price}</span>
                </div>
                


                <p className=" px-4">{breed.desc}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 my-4">
                    <button onClick={() => router.push(`/products/${breed._id}`)} className="bg-white border-2 border-[#d97706] text-[#d97706] py-2 px-4 mx-4 my-2 rounded hover:bg-slate-200 transition-colors">
                        View Details
                    </button>
                    

                    <AddToCartButton product={breed}/>

                    {/* <button
                        onClick={() => {
                            addToCart(breed)          // Add product to cart
                            toast.success("Item added to cart!")
                        }}
                        className="bg-[#d97706] text-white py-2 px-4 mx-4 my-2 rounded hover:bg-[#b45309] transition-colors"
                        >
                        Add to Cart
                        </button> */}

                </div>
                
            </div>


        </div>
    )
}