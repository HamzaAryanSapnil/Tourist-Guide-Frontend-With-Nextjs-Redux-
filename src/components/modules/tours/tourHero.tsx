"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TourHero() {
  return (
    <section className="relative overflow-hidden ">
      <div className="relative h-72 md:h-96 flex items-center">
      
        <div className="absolute inset-0 -z-0">
          <div className="w-full h-full relative">
            <Image
              src="/assets/images/card-img-5.png"
              alt="Travel hero"
              fill
              className="object-cover brightness-75"
            />
          </div>
        </div>

        <div className="container mx-auto w-full h-full px-4">
          <div className="max-w-3xl text-white flex flex-col gap-3 justify-center items-center md:w-full md:h-full">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-sm">
              Select Your Tour — travel made simple
            </h1>
            <p className="text-lg md:text-xl leading-7 drop-shadow-sm">
              At Tourvisto you can discover, compare and book tours with ease —
              find best prices, choose guides, manage bookings in a personal
              dashboard and pay securely via SSLCommerz or Stripe.
            </p>
            <div className="mt-6 flex gap-3">
              <Button variant="default" className="bg-primary ">
                Explore Tours
              </Button>
              <Button
                variant="ghost"
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight / 3,
                    behavior: "smooth",
                  })
                }
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
