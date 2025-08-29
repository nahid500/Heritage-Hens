import breeds from "../data/breeds"
import BreedsCard from "./BreedsCard"


export default function Featured(){
    return(

        <div className="my-12">

            <h2 className="text-center text-2xl md:text-4xl text-[#d97706] font-bold">Featured Heritage Breeds</h2>
            <div className="w-32 h-1 bg-amber-500 my-2 mx-auto"></div>
            <p className="max-w-4xl mx-auto text-md md:text-lg pt-2 text-center text-gray-600">Our specially selected heritage chicken breeds combine beauty, temperament, and productivity. These time-tested varieties are perfect for both beginners and experienced chicken keepers.</p>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-28 gap-6">
            {breeds.filter(breed => breed.featured).map(breed => (
                <BreedsCard key={breed._id} breed={breed} />
            ))}

           </div>


        </div>





    )
}