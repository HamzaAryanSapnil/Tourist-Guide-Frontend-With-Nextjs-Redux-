"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-hero-heading dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions about Tourvisto? Find all the answers here about
          booking, payments, guides, and our refund policies.
        </p>
      </div>

      {/* FAQ Section */}
      <Accordion type="single" collapsible className="space-y-4">
        {/* General */}
        <AccordionItem value="general-1">
          <AccordionTrigger>What is Tourvisto?</AccordionTrigger>
          <AccordionContent>
            Tourvisto is a travel and tour booking platform where you can
            explore destinations, filter tours by country, and book experiences
            at the best possible prices.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="general-2">
          <AccordionTrigger>Do I need to create an account?</AccordionTrigger>
          <AccordionContent>
            Yes, you need an account to book tours, manage your bookings, select
            tour guides, and access your personalized dashboard.
          </AccordionContent>
        </AccordionItem>

        {/* Booking & Payment */}
        <AccordionItem value="booking-1">
          <AccordionTrigger>How can I pay for my tour?</AccordionTrigger>
          <AccordionContent>
            You can pay using SSLCommerz (for Bangladeshi customers) and Stripe
            (for international payments). All transactions are secured.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="booking-2">
          <AccordionTrigger>Can I cancel a booking?</AccordionTrigger>
          <AccordionContent>
            Yes, if your tour status is still pending, you can cancel it
            directly from your dashboard. You’ll also get a 30-day money-back
            guarantee.
          </AccordionContent>
        </AccordionItem>

        {/* Tours & Guides */}
        <AccordionItem value="tours-1">
          <AccordionTrigger>Can I choose my own tour guide?</AccordionTrigger>
          <AccordionContent>
            Absolutely! You can select from available guides while booking your
            tour or later from your dashboard.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tours-2">
          <AccordionTrigger>Can I search tours by location?</AccordionTrigger>
          <AccordionContent>
            Yes, you can search tours by country, location, or tour place name.
            You can also filter them by price, rating, and other categories.
          </AccordionContent>
        </AccordionItem>

        {/* Refund Policy */}
        <AccordionItem value="refund-1">
          <AccordionTrigger>What is your refund policy?</AccordionTrigger>
          <AccordionContent>
            We offer a 30-day money-back guarantee for all pending tours. Once
            the tour starts, cancellations or refunds may no longer be
            available.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="refund-2">
          <AccordionTrigger>
            How long does it take to receive a refund?
          </AccordionTrigger>
          <AccordionContent>
            Refunds are usually processed within 7–10 business days, depending
            on your payment provider.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
