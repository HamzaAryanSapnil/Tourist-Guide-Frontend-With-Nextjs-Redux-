import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function VideoSection() {
  return (
    <div className="mt-32 my-10 flex flex-col lg:flex-row justify-between items-center gap-10 w-full">
      <div className="flex flex-col gap-y-4 justify-start items-start lg:max-w-1/2">
        <h1 className="font-bold text-4xl">
          A simple perfect place to get lost
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          Check out a video of one of the best place in Bangladesh you can
          visit. It is the Saint Marting Island in Cox&apos;s Bazar
        </p>
        <ul className="list-disc text-muted-foreground pl-5 ">
          <li className="">
            Saint Martin&apos;s, the one and only coral island of Bangladesh
          </li>
          <li className="">It is about 10 km from the mainland at Teknaf</li>
          <li className="">
            You can reach Teknaf from any part of the country by Bus, Private
            car. Carey Sindabad, Eagle, LCT Kutubdia, Sea-Truck, Kajal,
            Sonargaon, Green Line Bay Crew (AC) can cross the Bay of Bengal in
            two-and-a-half hours to reach St. Martin from Teknaf.
          </li>
        </ul>
        <Link href="/all-tours">
          <Button variant="default" className="text-white font-semibold">
            See All Tours
          </Button>
        </Link>
      </div>
      {/* video section */}
      <div className="w-full  lg:max-w-[550px] aspect-video rounded-xl overflow-hidden shadow-lg border">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/xcCCAqhuMcc?si=ZIuU9r6hqV0cmdem"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
