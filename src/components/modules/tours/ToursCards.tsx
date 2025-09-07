"use client";

import { Card } from "@/components/ui/card";

export default function TourCard() {
  
  const tours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="space-y-4">
      {tours.map((tour) => (
        <Card key={tour} className="p-6 shadow-sm">
          <h2 className="font-semibold text-lg">Tour Package {tour}</h2>
          <p className="text-muted-foreground">
            Short description of the tour goes here...
          </p>
        </Card>
      ))}
    </div>
  );
}
