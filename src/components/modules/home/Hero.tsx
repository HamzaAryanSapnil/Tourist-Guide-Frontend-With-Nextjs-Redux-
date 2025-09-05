import { Button } from "@/components/ui/button";
import React from "react";

export default function Hero() {
  return (
    <div className=" flex items-center justify-center lg:justify-start w-full h-full ">
      <div className="flex flex-col justify-start  items-start gap-y-10">
        <h1 className="text-3xl md:text-7xl font-bold text-hero-heading">
          Plan Your <br /> Trip with Ease
        </h1>
        <p className="text-lg max-w-xl text-hero-description ">
          Customize your travel itinerary in minutes—pick your destination, set
          your preferences, and explore with confidence.
        </p>
        <Button variant="default" className="text-white font-semibold" >
          See All Tours
        </Button>
      </div>
    </div>
  );
}
