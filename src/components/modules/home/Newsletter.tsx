"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      toast.error("Please enter your email address!");
      return;
    }
    toast.success("🎉 Thanks for subscribing!");
    setEmail(""); // clear input after success
  };

  return (
    <section className="my-32 ">
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 p-2 ">
        <div className=" flex flex-col  justify-start items-start max-w-2xl border border-primary rounded-2xl p-6 ">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="text-muted-foreground mb-6">
            Stay updated with the latest tours, travel tips, and exclusive
            offers right in your inbox.
          </p>
        
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={handleSubscribe} className="w-full sm:w-auto">
              Subscribe
            </Button>
          </div>
        </div>
        <img
          src="/assets/images/sample3.jpg"
          alt="newsletter"
          className="hidden md:block max-w-96  max-h-96  object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}
