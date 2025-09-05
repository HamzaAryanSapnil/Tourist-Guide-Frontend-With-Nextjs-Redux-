import React from "react";

export default function FeaturedDestination() {
  return (
    <section className="mt-32 flex flex-col justify-start items-start gap-y-10">
      <div className="flex flex-col justify-start items-start gap-y-3 ">
        <h1 className="font-bold text-4xl">Featured Travel Destinations</h1>
        <p className="text-lg">
          Check out some of the best places you can visit around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-start justify-items-center ">
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          <div className="relative grid-cols-1 md:col-span-2 lg:col-span-12 object-cover  w-full min-h-80 lg:h-96">
            <div className=" absolute top-0 left-0 w-full h-full bg-black/10 rounded-xl z-10"></div>
            <img
              src="/assets/images/card-img-1.png"
              alt="Barcelona featured tour"
              className="object-cover rounded-xl w-full h-full absolute top-0 left-0"
            />
            <div className="flex flex-col justify-center lg:justify-end  items-center lg:items-start gap-y-3 absolute left-0 right-0 bottom-0 top-0 lg:bottom-4 lg:left-4">
              <h3 className="font-bold text-3xl text-white">Barcelona Tour</h3>
            </div>
          </div>
          <div className="relative grid-cols-1 md:col-span-2 lg:col-span-6   w-full min-h-80 lg:h-96">
            <div className=" absolute top-0 left-0 w-full h-full bg-black/10 rounded-xl z-10"></div>
            <img
              src="/assets/images/card-img-4.png"
              alt="Barcelona featured tour"
              className=" object-cover rounded-xl w-full h-full"
            />
            <div className="flex flex-col justify-center lg:justify-end  items-center lg:items-start gap-y-3 absolute left-0 right-0 bottom-0 top-0 lg:bottom-4 lg:left-4">
              <h3 className="font-bold text-3xl text-white">Barcelona Tour</h3>
            </div>
          </div>
          <div className="relative grid-cols-1 md:col-span-2 lg:col-span-6   w-full min-h-80 lg:h-96">
            <div className=" absolute top-0 left-0 w-full h-full bg-black/10 rounded-xl z-10"></div>
            <img
              src="/assets/images/card-img-5.png"
              alt="Barcelona featured tour"
              className=" object-cover rounded-xl w-full h-full"
            />
            <div className="flex flex-col justify-center lg:justify-end  items-center lg:items-start gap-y-3 absolute left-0 right-0 bottom-0 top-0 lg:bottom-4 lg:left-4">
              <h3 className="font-bold text-3xl text-white">Barcelona Tour</h3>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 gap-4">
          <div className="relative    w-full  lg:h-64">
            <div className=" absolute top-0 left-0 w-full h-full bg-black/10 rounded-xl z-10"></div>
            <img
              src="/assets/images/card-img-6.png"
              alt="Barcelona featured tour"
              className="object-cover rounded-xl w-full h-full"
            />
            <div className="flex flex-col justify-center lg:justify-end  items-center lg:items-start gap-y-3 absolute left-0 right-0 bottom-0 top-0 lg:bottom-4 lg:left-4">
              <h3 className="font-bold text-3xl text-white">Barcelona Tour</h3>
            </div>
          </div>
          <div className="relative    w-full  lg:h-64">
            <div className=" absolute top-0 left-0 w-full h-full bg-black/10 rounded-xl z-10"></div>
            <img
              src="/assets/images/card-img-3.png"
              alt="Barcelona featured tour"
              className="object-cover rounded-xl w-full h-full"
            />
            <div className="flex flex-col justify-center lg:justify-end  items-center lg:items-start gap-y-3 absolute left-0 right-0 bottom-0 top-0 lg:bottom-4 lg:left-4">
              <h3 className="font-bold text-3xl text-white">Barcelona Tour</h3>
            </div>
          </div>
          <div className="relative    w-full  lg:h-64">
            <div className=" absolute top-0 left-0 w-full h-full bg-black/10 rounded-xl z-10"></div>
            <img
              src="/assets/images/card-img-2.png"
              alt="Barcelona featured tour"
              className="object-cover rounded-xl w-full h-full"
            />
            <div className="flex flex-col justify-center lg:justify-end  items-center lg:items-start gap-y-3 absolute left-0 right-0 bottom-0 top-0 lg:bottom-4 lg:left-4">
              <h3 className="font-bold text-3xl text-white">Barcelona Tour</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
