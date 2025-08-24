import BreedsCard from "./BreedsCard";
import breeds from "../data/breeds.js"

export default function Breeds(){

    

    return(
        <div className="mb-10">

            <div className="text-center my-10">

                <h2 className="text-3xl font-bold">Featured Heritage Breeds</h2>
                <p>Our specially selected heritage chicken breeds combine beauty, temperament, and productivity. These time-tested varieties are perfect for both beginners and experienced chicken keepers.</p>
            
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-24 gap-4">

            {breeds && breeds.map((breed) => (
                <BreedsCard key = {breed.id} breed={breed}/>
            ))}

            </div>
            {/* <BreedsCard/> */}

        </div>
    )
}