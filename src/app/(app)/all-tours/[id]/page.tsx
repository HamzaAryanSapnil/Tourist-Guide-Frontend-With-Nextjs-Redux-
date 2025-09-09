/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useGetSingleTourQuery } from "@/redux/features/Tour/tour.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

/**
 * Tour details page using RTK queries:
 * - fetch single tour via useGetSingleTourQuery(id)
 * - fetch current user via useUserInfoQuery()
 * - Book Now enabled only if user exists
 *
 * Adapt small parts if your hook return shape differs (eg. data.data vs data).
 */

// Helpers to support Mongo object id / $date formats etc.
function extractId(raw?: any) {
  if (!raw) return undefined;
  if (typeof raw === "string") return raw;
  if (typeof raw === "object" && raw.$oid) return raw.$oid;
  return String(raw);
}
function parseApiDate(d?: any) {
  if (!d) return null;
  if (typeof d === "string") return new Date(d);
  if (typeof d === "object" && d.$date) return new Date(d.$date);
  return null;
}

// Default images (place in public/images/)
const defaultImages = [
  "/assets/images/hero-img.png",
  "/assets/images/hero-img.png",
  "/assets/images/hero-img.png",
];

export default  function TourDetailsPageClient() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  

  // --- RTK queries ---
  // assume hook signature: useGetSingleTourQuery(id)
  const {
    data: singleResp,
    isLoading: tourLoading,
    error: tourError,
  } = useGetSingleTourQuery(id);

  console.log("Tour details page client rendered.", singleResp);
  // assume hook signature: useUserInfoQuery()
  const { data: userResp, } =
    useUserInfoQuery(undefined);

  // Normalize/defensive: many APIs return { data: tour } or direct object
  const tour = singleResp?.data  ?? null;

  // user presence check: many APIs return { data: user } or user object
  const user =
  
    (userResp && (userResp.data ?? userResp)) ?? null;

  const isLoggedIn = !!user;

  // Loading / error UI
  if (!id) {
    return (
      <div className="container mx-auto p-6">
        <p className="text-center text-sm text-red-600">
          Tour id missing in URL.
        </p>
      </div>
    );
  }

  if (tourLoading) {
    return (
      <div className="container mx-auto p-6">
        <p>Loading tour…</p>
      </div>
    );
  }

  if (tourError) {
    return (
      <div className="container mx-auto p-6">
        <p className="text-center text-sm text-red-600">Failed to load tour.</p>
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="container mx-auto p-6">
        <p className="text-center text-sm text-muted-foreground">
          Tour not found.
        </p>
      </div>
    );
  }

  // prepare data
  const realId = extractId(tour._id) ?? tour._id ?? id;
  const images =
    Array.isArray(tour.images) && tour.images.length > 0
      ? tour.images
      : defaultImages;
  const start = parseApiDate(tour.startDate);
  const end = parseApiDate(tour.endDate);
  const formattedDateRange =
    start && end
      ? `${start.toLocaleDateString()} — ${end.toLocaleDateString()}`
      : start
      ? start.toLocaleDateString()
      : "Dates TBA";

  const durationDays =
    start && end
      ? Math.max(
          1,
          Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
        )
      : null;

  return (
    <main className="container mx-auto px-4 lg:px-6 py-8">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            aria-label="Go back"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted/10 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back</span>
          </button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              {tour.title ?? "Untitled Tour"}
            </h1>
            <div className="text-sm text-muted-foreground mt-1">
              {tour.location ?? tour.arrivalLocation ?? ""}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm text-muted-foreground hidden sm:block">
            {formattedDateRange}
          </div>
          <div className="text-sm text-muted-foreground">
            {tour.costFrom
              ? `From ৳${Number(tour.costFrom).toLocaleString()}`
              : "Price on request"}
          </div>
        </div>
      </div>

      {/* Image grid */}
      <section className="mb-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          <div className="relative md:col-span-2 md:row-span-2 h-64 md:h-[520px] rounded-xl overflow-hidden bg-muted">
            <Image
              src={images[0]}
              alt={`${tour.title ?? "Tour"} main`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>

          <div className="relative h-44 md:h-[250px] rounded-xl overflow-hidden bg-muted">
            <Image
              src={images[1] ?? images[0]}
              alt={`${tour.title ?? "Tour"} image 2`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 20vw"
            />
          </div>

          <div className="relative h-44 md:h-[250px] rounded-xl overflow-hidden bg-muted">
            <Image
              src={images[2] ?? images[0]}
              alt={`${tour.title ?? "Tour"} image 3`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 20vw"
            />
          </div>
        </div>
      </section>

      {/* tags & meta */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{tour.location ?? tour.arrivalLocation ?? "Location TBA"}</span>
        </div>
        {tour.maxGuest && (
          <Badge className="uppercase text-xs px-3 py-1">
            {tour.maxGuest} seats
          </Badge>
        )}
        {tour.minAge && (
          <Badge className="uppercase text-xs px-3 py-1">
            Min age {tour.minAge}
          </Badge>
        )}
        <div className="ml-auto text-sm text-muted-foreground">
          <span>
            {tour.costFrom
              ? `From ৳${Number(tour.costFrom).toLocaleString()}`
              : "Price on request"}
          </span>
        </div>
      </div>

      {/* content + booking */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article className="lg:col-span-2 space-y-4">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {tour.description ?? "No description provided for this tour."}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm text-muted-foreground">Departure</h4>
                  <div className="font-medium">
                    {tour.departureLocation ?? "TBA"}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Arrival</h4>
                  <div className="font-medium">
                    {tour.arrivalLocation ?? "TBA"}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Dates</h4>
                  <div className="font-medium">{formattedDateRange}</div>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Group size</h4>
                  <div className="font-medium">{tour.maxGuest ?? "—"}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent>
                <h3 className="font-semibold mb-2">What&apos;s included</h3>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  {tour.included && tour.included.length > 0 ? (
                    tour.included.map((it: string, i: number) => (
                      <li key={i}>{it}</li>
                    ))
                  ) : (
                    <li>Details will be updated</li>
                  )}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="font-semibold mb-2">What&apos;s excluded</h3>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  {tour.excluded && tour.excluded.length > 0 ? (
                    tour.excluded.map((it: string, i: number) => (
                      <li key={i}>{it}</li>
                    ))
                  ) : (
                    <li>Details will be updated</li>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent>
              <h3 className="font-semibold mb-2">Tour Plan</h3>
              <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                {tour.tourPlan && tour.tourPlan.length > 0 ? (
                  tour.tourPlan.map((p: string, i: number) => (
                    <li key={i}>{p}</li>
                  ))
                ) : (
                  <li>Plan will be updated</li>
                )}
              </ol>
            </CardContent>
          </Card>
        </article>

        <aside>
          <Card className="p-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Reserve your spot</h3>
              <p className="text-sm text-muted-foreground">
                Secure your seat now — limited availability.
              </p>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">From</p>
                  <p className="text-2xl font-bold">
                    ৳
                    {tour.costFrom
                      ? Number(tour.costFrom).toLocaleString()
                      : "—"}
                  </p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p>Duration</p>
                  <p className="font-medium">
                    {durationDays ? `${durationDays} days` : "—"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-3">
         
                <Button
                  className="w-full"
                  onClick={() => router.push(`/booking/${tour?.slug}`)}
                  disabled={!isLoggedIn}
                  aria-disabled={!isLoggedIn}
                >
                  Book Now
                </Button>
       

              {!isLoggedIn && (
                <p className="mt-2 text-xs text-muted-foreground">
                  Please{" "}
                  <Link
                    className="font-medium underline"
                    href={`/login?redirect=/all-tours/${realId}`}
                  >
                    login
                  </Link>{" "}
                  to enable booking.
                </p>
              )}
            </div>

            <div className="text-xs text-muted-foreground">
              <p>Free cancellation within 48 hours (subject to terms).</p>
            </div>
          </Card>

          <Card className="p-4 mt-4">
            <h4 className="font-semibold mb-2">Need help?</h4>
            <p className="text-sm text-muted-foreground">
              Contact our support for booking assistance.
            </p>
            <Button
              variant="ghost"
              className="w-full mt-3"
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
