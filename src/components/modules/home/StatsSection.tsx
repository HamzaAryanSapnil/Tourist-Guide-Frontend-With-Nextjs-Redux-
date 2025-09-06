"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Plane, Smile, Headphones } from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "25K+",
    icon: Users,
  },
  {
    title: "Tours Completed",
    value: "1.2K+",
    icon: Plane,
  },
  {
    title: "Happy Clients",
    value: "18K+",
    icon: Smile,
  },
  {
    title: "24/7 Support",
    value: "Yes",
    icon: Headphones,
  },
];

export default function StatsSection() {
  return (
    <section className="my-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Achievements
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.title}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
