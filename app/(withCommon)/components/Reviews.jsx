import { ReviewCarousel } from "./ReviewCarousel";
import  reviews  from "../data/reviews";


export default function Reviews() {


    return (
        <div className="py-12 bg-[#d97706]">  
            <h3 className="text-white text-center text-2xl font-semibold">What Our Customers Say</h3>
                  <div className="w-32 h-1 bg-white my-2 mb-12 mx-auto"></div>



            <ReviewCarousel reviews= {reviews}/>

        </div>      

    );
}
