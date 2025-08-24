"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import Image from "next/image"

export function ReviewCarousel({reviews}) {
  // Initialize the plugin with options
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,              // 2 seconds delay
      stopOnInteraction: true,  // stop autoplay on hover or drag
    })
  )

  return (
    <Carousel
      plugins={[plugin.current]} // Pass plugin to Carousel
      className="w-full max-w-xs md:max-w-3xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {reviews && reviews.map((review, index) => (
          <CarouselItem key={index}>

            <div className="p-6 md:p-12 bg-white rounded shadow grid grid-cols-1 md:grid-cols-2">

              <Image src={review.img} alt="Review Image" width={150} height={200} className=" mx-auto mb-4 rounded-full"/>

              <div className="justify-items-start ml-6">

              <p>{review.text}</p>


              <p className="text-xl font-bold mt-8">{review.name}</p>
              <p>{review.location}</p>
              
              </div>
            </div>
          </CarouselItem>
        ))}

      </CarouselContent>

      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex"  />
    </Carousel>
  )
}
