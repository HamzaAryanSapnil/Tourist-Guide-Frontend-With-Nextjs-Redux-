
import Hero from "@/components/modules/home/Hero";
import Image from "next/image";
import React from "react";
import heroImg from '@/assets/homeImages/hero-img.png'
export default function Homepage() {
  return (
    <div className=" min-h-screen relative flex flex-col">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#CFF1FFCC]  to-white/0 -z-10"></div>
       <div className="absolute top-0 left-0 w-full h-full  -z-10"></div>
      <Image
        src={heroImg}
        alt="hero image"
        className="w-full h-full object-cover absolute top-0 left-0 -z-20"
        height={1024}
        width={1024}
        loading="lazy"
        // priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className=" absolute left-0 right-0 container mx-auto px-4 md:px-6 w-full h-full">
        <Hero />
      </div>
      
    </div>
  );
}
