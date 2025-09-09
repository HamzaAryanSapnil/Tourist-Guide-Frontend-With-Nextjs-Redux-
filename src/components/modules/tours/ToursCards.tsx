/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetAllToursQuery } from "@/redux/features/Tour/tour.api";
import Link from "next/link";
import Image from "next/image";

export default function TourCard() {
  const { data, isLoading } = useGetAllToursQuery(undefined);

  if (isLoading) {
    return <p>Loading tours...</p>;
  }

  const tours = data? data : [] ; 
  console.log(tours)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tours.map((tour: any) => (
        <Card
          key={tour._id}
          className="overflow-hidden shadow-sm hover:shadow-md transition-all"
        >
          {/* Image */}
          {tour.images?.length > 0 && (
            <div className="relative w-full h-48">
              <Image
                src={tour.images[0]}
                alt={tour.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <CardContent className="p-4 space-y-3">
            {/* Title */}
            <h2 className="font-semibold text-lg line-clamp-1">{tour.title}</h2>

            {/* Description */}
            <p className="text-muted-foreground text-sm line-clamp-3">
              {tour.description}
            </p>

            {/* Button */}
            <Link href={`/all-tours/${tour?.slug}`}>
              <Button className="w-full mt-2">View Details</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

