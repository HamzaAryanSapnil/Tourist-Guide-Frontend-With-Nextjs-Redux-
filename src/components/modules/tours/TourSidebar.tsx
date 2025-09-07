// ToursSidebar.tsx
"use client";

import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Twitter } from "lucide-react";

interface Props {
  mobile?: boolean;
}

export default function ToursSidebar({ mobile = false }: Props) {
  // don't use fixed here — we rely on the parent wrapper's sticky
  return (
    <div>
      <Card className="p-4 mb-6">
        <h3 className="font-semibold text-xl mb-3">Travel Tips</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Pack light but smart</li>
          <li>Keep a copy of your passport</li>
          <li>Learn basic local phrases</li>
        </ul>
      </Card>

      <Card className="p-4 mb-6">
        <h3 className="font-semibold text-xl mb-3">Recent Trips</h3>
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="h-20 bg-muted rounded-md flex items-center justify-center text-xs text-muted-foreground"
            >
              Trip {i + 1}
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold text-xl mb-3">Connect to Us</h3>
        <div className="flex gap-3">
          <a className="p-2 rounded-full bg-primary text-primary-foreground">
            {" "}
            <Facebook size={16} />{" "}
          </a>
          <a className="p-2 rounded-full bg-primary text-primary-foreground">
            {" "}
            <Instagram size={16} />{" "}
          </a>
          <a className="p-2 rounded-full bg-primary text-primary-foreground">
            {" "}
            <Twitter size={16} />{" "}
          </a>
        </div>
      </Card>
    </div>
  );
}
