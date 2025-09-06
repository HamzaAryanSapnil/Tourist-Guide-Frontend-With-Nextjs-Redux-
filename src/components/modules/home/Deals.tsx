import { Button } from "@/components/ui/button";
import { LocationEdit, Users, WatchIcon } from "lucide-react";
import React from "react";

export default function Deals() {
  return (
    <div className="w-full my-10">
      <div className="flex flex-col justify-center items-center gap-y-6 w-full">
        <h1 className="font-bold text-4xl my-10">Deals</h1>
        <div
          style={{ backgroundImage: "url(/assets/images/bandarban.png)" }}
          className="w-full min-h-[400px] p-2 bg-no-repeat bg-cover bg-center rounded-xl flex justify-center lg:justify-start items-center"
        >
          <div className="p-4 md:w-96 md:h-80 bg-white/60 rounded-2xl flex flex-col justify-center items-center gap-5 lg:ml-48">
            <div className="flex flex-wrap justify-center items-center gap-x-2 w-full">
              <span className="flex justify-center items-center gap-2">
                <WatchIcon className="text-primary h-6 w-6" />
                <p className="text-sm text-gray-600">7 Days/6 Nights</p>
              </span>
              <span className="flex justify-center items-center gap-2">
                <Users className="text-primary h-6 w-6" />
                <p className="text-sm text-gray-600">Max 10</p>
              </span>
              <span className="flex justify-center items-center gap-2">
                <LocationEdit className="text-primary h-6 w-6" />
                <p className="text-sm text-gray-600">Bandarban</p>
              </span>
            </div>
            <h1 className="text-2xl font-bold text-black">Tour to Bandarban</h1>
            <p className="text-sm text-gray-600">
              It is a popular tourist destination in Bangladesh. You can see the
              natural beauty of the hills and rivers. Sometime you can see there
              is raining in front of you but not where you are.
            </p>
            <div className="w-full space-y-2  flex flex-col  justify-center items-center md:items-start">
              <p className="font-bold dark:text-background">
                {" "}
                <span className="font-bold text-primary">Price:</span> $1000
              </p>
              <Button variant={"default"} className="font-bold text-background">
                Book Now
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(/assets/images/sazek.jpg)" }}
          className="w-full min-h-[400px] p-2 bg-no-repeat bg-cover bg-center rounded-xl flex justify-center lg:justify-end items-center"
        >
          <div className="p-4 md:w-96 md:h-80 bg-white/70 rounded-2xl flex flex-col justify-center items-center gap-5 lg:mr-48">
            <div className="flex flex-wrap justify-center items-center gap-x-2 w-full">
              <span className="flex justify-center items-center gap-2">
                <WatchIcon className="text-primary h-6 w-6" />
                <p className="text-sm text-gray-600">7 Days/6 Nights</p>
              </span>
              <span className="flex justify-center items-center gap-2">
                <Users className="text-primary h-6 w-6" />
                <p className="text-sm text-gray-600">Max 10</p>
              </span>
              <span className="flex justify-center items-center gap-2">
                <LocationEdit className="text-primary h-6 w-6" />
                <p className="text-sm text-gray-600">Sazek Valley</p>
              </span>
            </div>
            <h1 className="text-2xl font-bold text-black">
              Trip to Sazek Valley
            </h1>
            <p className="text-sm text-gray-600">
              Sazek Valley is a very popular tourist destination in Bangladesh.
              You can see the natural beauty of the hills and rivers. Sometime
              you can see there is raining in front of you but not where you
              are.
            </p>
            <div className="w-full space-y-2  flex flex-col  justify-center items-center md:items-start">
              <p className="font-bold dark:text-background">
                {" "}
                <span className="font-bold text-primary">Price:</span> $500
              </p>
              <Button variant={"default"} className="font-bold text-background">
                Book Now
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(/assets/images/sayman-hotel.jpg)" }}
          className="w-full min-h-[400px] p-2 bg-no-repeat bg-cover bg-center rounded-xl flex justify-center lg:justify-start items-center"
        >
          <div className="p-4 md:w-96 md:h-80 bg-white/60 rounded-2xl flex flex-col justify-center items-center gap-5 lg:ml-48">
            <div className="flex flex-wrap justify-center items-center gap-x-2 w-full">
              <span className="flex justify-center items-center gap-2">
                <WatchIcon className="text-primary h-6 w-6" />
                <p className="text-sm text-gray-600">7 Days/6 Nights</p>
              </span>
              <span className="flex justify-center items-center gap-2">
                <Users className="text-primary h-6 w-6" />
                <p className="text-sm text-gray-600">Max 10</p>
              </span>
              <span className="flex justify-center items-center gap-2">
                <LocationEdit className="text-primary h-6 w-6" />
                <p className="text-sm text-gray-600">Cox&apos;s Bazar</p>
              </span>
            </div>
            <h1 className="text-2xl font-bold text-black">
              Tour to Cox&apos;s Bazar
            </h1>
            <p className="text-sm text-gray-600">
              Cox&apos;s Bazar is also a very much known and popular tourist destination in Bangladesh.
              You can see the natural beauty of the sea. Sometime you might see
              there are wheels. Large waves.
            </p>
            <div className="w-full space-y-2  flex flex-col  justify-center items-center md:items-start">
              <p className="font-bold dark:text-background">
                {" "}
                <span className="font-bold text-primary">Price:</span> $1500
              </p>
              <Button variant={"default"} className="font-bold text-background">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
