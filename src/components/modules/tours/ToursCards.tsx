"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function TourCard() {
  
  const tours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
      {tours.map((tour) => (
        <Card key={tour} className="p-6 shadow-sm min-h-96">
          <h2 className="font-semibold text-lg">Tour Package {tour}</h2>
          <p className="text-muted-foreground">
            Short description of the tour goes here...
          </p>
          <Link href={`/all-tours/${tour}`}>
            <Button className="w-full mt-4">View Details</Button>
          </Link>
        </Card>
      ))}
    </div>
  );
}
