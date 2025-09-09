/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetSingleTourQuery } from "@/redux/features/Tour/tour.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

import { toast } from "sonner";
import { useCreateBookingMutation } from "@/redux/features/booking/booking.api";



function extractId(raw?: any) {
  if (!raw) return undefined;
  if (typeof raw === "string") return raw;
  if (typeof raw === "object" && raw.$oid) return raw.$oid;
  return String(raw);
}

export default function BookingPage() {
  const router = useRouter();
  const params = useParams() as { id?: string };
  const id = params?.id;

  // fetch single tour by id
  const {
    data: tourResp,
    isLoading: tourLoading,
    isError: tourError,
  } = useGetSingleTourQuery(id);

  // fetch current user info (to know login state)
  const { data: userResp, isLoading: userLoading } =
    useUserInfoQuery(undefined);

  // create booking mutation
  const [createBooking, { isLoading: creating }] = useCreateBookingMutation();

  // normalize shapes (support both {data: tour} and direct tour)
  const tour = (tourResp && ((tourResp as any).data ?? tourResp)) ?? null;
  const user = (userResp && ((userResp as any).data ?? userResp)) ?? null;
  const isLoggedIn = !!user;

  // UI state
  const [guestCount, setGuestCount] = useState<number>(1);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  // when tour loads, init guest count to 1 and total
  useEffect(() => {
    if (tour) {
      setGuestCount(1);
      const cost = Number(tour.costFrom ?? 0);
      setTotalAmount(cost * 1);
    }
  }, [tour]);

  useEffect(() => {
    if (tour) {
      const cost = Number(tour.costFrom ?? 0);
      setTotalAmount(cost * guestCount);
    }
  }, [guestCount, tour]);

  // handlers
  const incrementGuest = () => {
    const max = tour?.maxGuest ?? 20;
    setGuestCount((p) => Math.min(max, p + 1));
  };
  const decrementGuest = () => {
    setGuestCount((p) => Math.max(1, p - 1));
  };

  const handleCreateBooking = async () => {
    if (!tour) return;
    if (!isLoggedIn) {
      toast.error("Please login to book this tour");
      router.push(`/login?redirect=/book/${extractId(tour._id) ?? id}`);
      return;
    }
    const payload = {
      tour: extractId(tour._id) ?? id,
      guestCount,
      // you can add more fields like selectedDate, contact info etc.
    };

    try {
      const res = await createBooking(payload).unwrap();
      if (res?.success) {
        toast.success("Booking created, redirecting to payment...");
        if (res?.data?.paymentUrl) {
          // open payment url in new tab
          window.open(res.data.paymentUrl, "_blank");
        } else {
          // fallback: navigate to booking summary page if you have one
          router.push(`/bookings/${res?.data?._id ?? ""}`);
        }
      } else {
        toast.error(res?.message ?? "Failed to create booking");
      }
    } catch (err: any) {
      console.error(err);
      const msg = err?.data?.message ?? err?.message ?? "Booking failed";
      toast.error(msg);
    }
  };

  if (!id) {
    return (
      <div className="container mx-auto p-6">
        <p className="text-center text-sm text-red-600">
          Invalid booking link.
        </p>
      </div>
    );
  }

  if (tourLoading || userLoading) {
    return (
      <div className="container mx-auto p-6">
        <p>Loading…</p>
      </div>
    );
  }

  if (tourError || !tour) {
    return (
      <div className="container mx-auto p-6">
        <p className="text-center text-sm text-red-600">
          Failed to load tour data.
        </p>
      </div>
    );
  }

  // render
  return (
    <main className="container mx-auto px-4 lg:px-6 py-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {/* Left: tour summary */}
        <section className="lg:col-span-2 space-y-6 w-full">
          <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden bg-muted">
            <img src={tour.images[0]} alt={tour.title ?? "tour image"} 
            className="w-full h-full object-cover" />
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-2">{tour.title}</h1>
            <p className="text-sm text-muted-foreground mb-4">
              {tour.location}
            </p>
            <p className="text-base leading-relaxed">{tour.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="text-sm text-muted-foreground">Included</h4>
              <ul className="list-disc pl-5 text-sm mt-2">
                {Array.isArray(tour.included) && tour.included.length > 0 ? (
                  tour.included.map((it: string, idx: number) => (
                    <li key={idx}>{it}</li>
                  ))
                ) : (
                  <li>Details will be provided</li>
                )}
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="text-sm text-muted-foreground">Tour Plan</h4>
              <ol className="list-decimal pl-5 text-sm mt-2">
                {Array.isArray(tour.tourPlan) && tour.tourPlan.length > 0 ? (
                  tour.tourPlan.map((it: string, idx: number) => (
                    <li key={idx}>{it}</li>
                  ))
                ) : (
                  <li>Plan will be updated</li>
                )}
              </ol>
            </div>
          </div>
        </section>

        {/* Right: booking card */}
        <aside className="w-full">
          <Card className="p-4">
            <CardContent>
              <div className="mb-4">
                <h2 className="text-lg font-semibold">Reserve your spot</h2>
                <p className="text-sm text-muted-foreground">
                  Limited seats — book early.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Guests
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={decrementGuest}
                      disabled={guestCount <= 1}
                      className="w-8 h-8 rounded-full border flex items-center justify-center disabled:opacity-50"
                      aria-label="Decrease guests"
                    >
                      −
                    </button>
                    <div className="w-12 text-center font-medium">
                      {guestCount}
                    </div>
                    <button
                      onClick={incrementGuest}
                      disabled={guestCount >= (tour.maxGuest ?? 20)}
                      className="w-8 h-8 rounded-full border flex items-center justify-center disabled:opacity-50"
                      aria-label="Increase guests"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Max {tour.maxGuest ?? "N/A"} guests
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-sm">
                    <span>Price per person</span>
                    <span className="font-medium">
                      ৳{Number(tour.costFrom ?? 0).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span>Guests</span>
                    <span className="font-medium">{guestCount}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold mt-3">
                    <span>Total</span>
                    <span>৳{totalAmount.toLocaleString()}</span>
                  </div>
                </div>

                <div>
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={handleCreateBooking}
                    disabled={!isLoggedIn || creating}
                    aria-disabled={!isLoggedIn || creating}
                  >
                    {creating
                      ? "Creating..."
                      : isLoggedIn
                      ? "Book Now"
                      : "Login to Book"}
                  </Button>

                  {!isLoggedIn && (
                    <div className="text-xs text-muted-foreground mt-2">
                      Please{" "}
                      <Link
                        className="underline"
                        href={`/login?redirect=/book/${id}`}
                      >
                        login
                      </Link>{" "}
                      to continue.
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
}
