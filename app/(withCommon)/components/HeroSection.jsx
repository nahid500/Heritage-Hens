import Image from "next/image";



export default function HeroSection() {
    return (

        <div>

            <Image src='/hero.jpg' alt='Hero Image' width={1920} height={600} className=" relative w-full min-h-screen md:max-h-screen object-fill"/>

            <div className="absolute bottom-1 md:top-1/2 px-4 md:pl-12 text-white">

                <h1 className="text-3xl md:text-6xl font-bold max-w-lg">
                    Heritage Quality Chickens for Your Family
                </h1>
                <p className="text-lg max-w-lg mt-4">Expertly raised, heritage breed chickens for sustainable egg production, ethical meat, and beautiful additions to your farm.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 mt-6 items-center gap-2">
                    <button href ='/products' className="bg-[#d97706] hover:bg-[#b45309] hover:font-bold hover:-translate-y-2 py-3 rounded-lg">Explore our Breeds <span className="text-lg">&rarr;</span> </button>
                    <button href ='/contact' className=" border-2 border-white hover:font-bold py-2 rounded-lg hover:-translate-y-2">Contact Us</button>
                </div>
            </div>
        </div>
        

    )

}