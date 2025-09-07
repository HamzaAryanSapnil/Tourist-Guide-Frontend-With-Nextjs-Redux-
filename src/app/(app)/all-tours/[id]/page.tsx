"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Tour {
  id?: string | number;
  title: string;
  location: string;
  images: string[]; // at least 3 images recommended
  tags: string[];
  price?: string;
  duration?: string;
  groupSize?: string;
  description: string;
}

interface Props {
  tour?: Tour;
  isLoggedIn?: boolean;
}

export default function TourDetailsPage({ tour, isLoggedIn = false }: Props) {
  const router = useRouter();

  // fallback/sample tour (use actual data from server in real usage)
  const sample: Tour = {
    id: "t-001",
    title: "Enchanting Saint Martin's Island Getaway",
    location: "Saint Martin's Island, Cox's Bazar, Bangladesh",
    images: ["/assets/images/hero-img.png", "/assets/images/hero-img.png", "/assets/images/hero-img.png" ],
    tags: ["Beach", "Island", "Luxury"],
    price: "USD 120",
    duration: "2 days",
    groupSize: "Up to 10 people",
    description:
      "Enjoy a relaxing escape to Saint Martin's Island — crystal clear waters, white coral beaches and unforgettable sunsets. This package includes boat transfer, accommodation, guided island tour, and a special seafood dinner. Perfect for families and couples.",
  };

  const t = tour ?? sample;

  return (
    <main className="container mx-auto px-4 lg:px-6 py-8">
      {/* Back button + title */}
      <div className="mb-6 flex items-center gap-4">
        <button
          onClick={() => router.back()}
          aria-label="Go back"
          className="inline-flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted/40 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Go back</span>
        </button>

        <h1 className="text-2xl md:text-3xl font-bold">{t.title}</h1>
      </div>

      {/* location row */}
      <div className="mb-6 flex items-center gap-3 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4" />
        <p>{t.location}</p>
      </div>

      {/* Image grid */}
      <section className="mb-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* Large image (left) */}
          <div className="relative md:col-span-2 md:row-span-2 h-64 md:h-[520px] rounded-xl overflow-hidden">
            <Image
              src={t.images[0]}
              alt={`${t.title} - main`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>

          {/* Top-right small */}
          <div className="relative h-32 md:h-[250px] rounded-xl overflow-hidden">
            <Image
              src={t.images[1]}
              alt={`${t.title} - 2`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 20vw"
            />
          </div>

          {/* Bottom-right small */}
          <div className="relative h-32 md:h-[250px] rounded-xl overflow-hidden">
            <Image
              src={t.images[2]}
              alt={`${t.title} - 3`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 20vw"
            />
          </div>
        </div>
      </section>

      {/* tags, meta */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        {t.tags.map((tag, i) => (
          <Badge key={i} className="uppercase text-xs px-3 py-1">
            {tag}
          </Badge>
        ))}

        {/* meta chips */}
        <div className="ml-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          {t.duration && (
            <span className="px-2 py-1 rounded bg-muted/10">{t.duration}</span>
          )}
          {t.groupSize && (
            <span className="px-2 py-1 rounded bg-muted/10">{t.groupSize}</span>
          )}
          {t.price && (
            <span className="px-2 py-1 rounded bg-muted/10 font-medium">
              {t.price}
            </span>
          )}
        </div>
      </div>

      {/* details + booking card layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* details */}
        <article className="lg:col-span-2 space-y-4">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Tour Details</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.description}
              </p>

              {/* optionally more structured details */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">{t.duration}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Group size</p>
                  <p className="font-medium">{t.groupSize}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-medium">{t.price}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* extra info section (optional) */}
          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">
                What&apos;s included
              </h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Boat transfer to the island</li>
                <li>1-night accommodation</li>
                <li>Guided island tour</li>
                <li>Seafood dinner (special)</li>
              </ul>
            </CardContent>
          </Card>
        </article>

        {/* booking card (right column) */}
        <aside className="lg:col-span-1">
          <Card className="p-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Reserve your spot</h3>
              <p className="text-sm text-muted-foreground">
                Secure payment. 30-day money-back for pending bookings.
              </p>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">From</p>
                  <p className="text-xl font-bold">{t.price}</p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p>Duration</p>
                  <p className="font-medium">{t.duration}</p>
                </div>
              </div>
            </div>

            {/* Book Now button only when logged in */}
            {isLoggedIn ? (
              <Button
                className="w-full"
                onClick={() => router.push(`/book/${t.id ?? "unknown"}`)}
              >
                Book Now
              </Button>
            ) : (
              <div className="space-y-2">
                {/* Per your request, Book Now only shows if logged in.
                    We show a subtle prompt to login instead. Remove or customize as needed. */}
                <p className="text-sm text-muted-foreground">
                  Please login to book this tour.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    router.push(`/login?redirect=/tours/${t.id ?? ""}`)
                  }
                >
                  Login to continue
                </Button>
              </div>
            )}
          </Card>

          {/* small help/contact card */}
          <Card className="p-4 mt-4">
            <p className="text-sm text-muted-foreground">
              Need help? Contact our support for booking assistance.
            </p>
            <Button
              variant="ghost"
              className="mt-3 w-full"
              onClick={() => router.push("/contact")}
            >
              Contact Support
            </Button>
          </Card>
        </aside>
      </div>
    </main>
  );
}
