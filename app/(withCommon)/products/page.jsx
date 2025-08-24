
import BreedsCard from "../components/BreedsCard";
import breeds from "../data/breeds";

export default function Products(){

    

    return(
        <div className="my-24">


                <h2 className="text-5xl text-[#d97706] font-bold text-center">Our Heritage Breeds</h2>
                <p className="mx-auto my-4 text-center text-md  max-w-2xl">Whether you're looking for prolific egg layers, friendly backyard companions, or beautiful ornamental birds, we have the perfect chickens for you.</p>
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-24 gap-4">

            {breeds && breeds.map((breed) => (
                <BreedsCard key = {breed.id} breed={breed}/>
            ))}

            </div>
            {/* <BreedsCard/> */}

        </div>
    )
}