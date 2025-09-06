/* eslint-disable @typescript-eslint/no-explicit-any */


"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  CreditCard,
  ShieldCheck,
  Users,
  MapPin,
  Calendar,
  UserMinus,
  LifeBuoy,
  Ticket,
  Star,
} from "lucide-react";
import Image from "next/image";
import { features, steps } from "@/constants";

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);



  return (
    <main className="bg-background text-foreground my-10">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-72 md:h-96 flex items-center">
          {/* Background image (replace src with real image if available) */}
          <div className="absolute inset-0 -z-0">
            <div className="w-full h-full relative">
              <Image
                src="/assets/images/hero-img.png"
                alt="Travel hero"
                fill               
                className="object-cover brightness-75"
                // if you don't have image, replace with a bg color
              />
            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-sm">
                About Tourvisto — travel made simple
              </h1>
              <p className="text-lg md:text-xl leading-7 drop-shadow-sm">
                At Tourvisto you can discover, compare and book tours with ease
                — find best prices, choose guides, manage bookings in a personal
                dashboard and pay securely via SSLCommerz or Stripe.
              </p>
              <div className="mt-6 flex gap-3">
                <Button variant="default" className="bg-primary ">
                  Explore Tours
                </Button>
                <Button
                  variant="ghost"
                  onClick={() =>
                    window.scrollTo({
                      top: document.body.scrollHeight / 3,
                      behavior: "smooth",
                    })
                  }
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Why choose Tourvisto</h2>
              <p className="text-muted-foreground mt-2 max-w-md">
                Everything you need to book confidently — great prices, secure
                payments, full control from your dashboard and fair refund
                policy.
              </p>
            </div>
            <Badge variant="secondary" className="hidden md:inline-flex">
              Trusted by travelers
            </Badge>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <Card
                  key={idx}
                  className="p-0 hover:shadow-lg transition-shadow duration-200"
                >
                  <CardHeader className="flex items-center gap-4 p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{f.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {f.desc}
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-6">How it works</h3>

          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border bg-card/50 border-border shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">{i + 1}</span>
                  </div>
                  <h4 className="font-semibold">{s.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENTS & DASHBOARD */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Payments & Security</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl">
              We process payments through trusted gateways — SSLCommerz and
              Stripe — enabling you to pay by card, mobile banking or other
              supported local methods. Payment flows use secure redirect or
              tokenized APIs depending on the provider and your country.
            </p>

            <div className="flex gap-4 items-center">
              <div className="inline-flex items-center gap-3 rounded-lg border p-3">
                <CreditCard />
                <div>
                  <div className="font-medium">SSLCommerz</div>
                  <div className="text-sm text-muted-foreground">
                    Local/regional gateway support
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-3 rounded-lg border p-3">
                <ShieldCheck />
                <div>
                  <div className="font-medium">Stripe</div>
                  <div className="text-sm text-muted-foreground">
                    Global card, wallet & multi-currency support
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="lg:w-1/3">
            <CardHeader>
              <CardTitle>Dashboard Highlights</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Manage bookings, profile, select guides and request refunds.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Ticket className="mt-1" />
                  <div>
                    <div className="font-medium">Booking Manager</div>
                    <div className="text-sm text-muted-foreground">
                      View upcoming & past tours, cancel pending ones.
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Users className="mt-1" />
                  <div>
                    <div className="font-medium">Guide Selection</div>
                    <div className="text-sm text-muted-foreground">
                      Choose or change tour guides based on availability.
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Calendar className="mt-1" />
                  <div>
                    <div className="font-medium">Profile & Availability</div>
                    <div className="text-sm text-muted-foreground">
                      Update personal info, contact and preferences anytime.
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <LifeBuoy className="mt-1" />
                  <div>
                    <div className="font-medium">Support</div>
                    <div className="text-sm text-muted-foreground">
                      24/7 help for booking or refund-related queries.
                    </div>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Button className="w-full">Go to your dashboard</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TEAM & TESTIMONIAL (light) */}
      <section className="py-16 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold">Our Team</h3>
            <div className="text-sm text-muted-foreground">
              Passionate travellers & tech-savvy builders
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { name: "Hamza", role: "Founder" },
              { name: "Aryan", role: "Head of Tours" },
              { name: "Sapnil", role: "Lead Guide Coordinator" },
            ].map((t, i) => (
              <Card key={i} className="p-4 text-center">
                <div className="mx-auto mb-3 h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary text-xl">
                    {t.name[0]}
                  </span>
                </div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

     

      {/* CTA & Refund summary */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Ready to explore?</h3>
            <p className="text-muted-foreground">
              Book with confidence — secure payments, easy cancellations for
              pending bookings and 30 days money-back guarantee.
            </p>
          </div>

          <div className="flex gap-3">
            <Button className="bg-primary text-white">Browse Tours</Button>
            <Button variant="ghost">Contact Support</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
