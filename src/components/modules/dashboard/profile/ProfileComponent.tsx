"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

type UserProfile = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role?: string;
  bio?: string;
  address?: string;
  division?: string;
  city?: string;
  joinedAt?: string;
  dob?: string;
  preferences?: {
    newsletter: boolean;
    promotions: boolean;
    smsAlerts: boolean;
    tourTypes: string[];
  };
  recentBookings?: {
    id: string;
    title: string;
    date: string;
    status: string;
    guests: number;
    cost: number;
  }[];
  activities?: { id: string; time: string; text: string }[];
  avatarUrl?: string;
};

// ---------- Demo user ----------
const demoUser: UserProfile = {
  id: "user_01",
  name: "Rahim Ahmed",
  email: "rahim.ahmed@example.com",
  phone: "+8801712345678",
  role: "Traveler",
  bio: "Traveler • Nature lover • Weekend explorer. Loves beaches and hills — planning trips every other month.",
  address: "House 12, Road 4, Gulshan",
  division: "Dhaka",
  city: "Dhaka",
  joinedAt: "2023-06-12",
  dob: "1995-03-02",
  preferences: {
    newsletter: true,
    promotions: false,
    smsAlerts: true,
    tourTypes: ["Beach", "Nature"],
  },
  recentBookings: [
    {
      id: "t1",
      title: "Discover Cox's Bazar",
      date: "2025-09-15",
      status: "Confirmed",
      guests: 2,
      cost: 12000,
    },
    {
      id: "t2",
      title: "Sylhet Tea Gardens",
      date: "2025-09-20",
      status: "Pending",
      guests: 1,
      cost: 10000,
    },
  ],
  activities: [
    {
      id: "a1",
      time: "2 hours ago",
      text: "Booked 'Discover Cox's Bazar' (2 guests)",
    },
    { id: "a2", time: "3 days ago", text: "Updated profile phone number" },
  ],
  avatarUrl: "/images/avatar-demo.jpg",
};

// ---------- Helper components ----------
function Avatar({ src, name }: { src?: string; name?: string }) {
  return (
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-muted flex items-center justify-center border">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-xl font-semibold text-muted-foreground">
          {name?.slice(0, 1) ?? "U"}
        </span>
      )}
    </div>
  );
}

function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint?: string;
}) {
  return (
    <div className="p-4 bg-card border rounded-lg shadow-sm flex flex-col gap-1 text-center">
      <div className="text-xs sm:text-sm text-muted-foreground">{label}</div>
      <div className="text-lg sm:text-2xl font-bold">{value}</div>
      {hint && <div className="text-xs text-muted-foreground">{hint}</div>}
    </div>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value?: string | number | React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2 sm:gap-4 py-2 border-b last:border-b-0">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="sm:col-span-2">
        {value ?? <span className="text-muted-foreground">Not provided</span>}
      </div>
    </div>
  );
}

// ---------- Main ----------
export default function ProfilePage() {
  const [user] = useState<UserProfile>(demoUser);
  const [prefs, setPrefs] = useState(user.preferences!);

  const togglePref = (key: keyof typeof prefs) => {
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  return (
    <main className=" p-4  lg:p-6 space-y-6 w-full">
      {/* Header */}
      <div className="w-full">
        <h2 className="text-2xl sm:text-3xl font-bold">Profile</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your account, contact information and preferences.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1  xl:grid-cols-3  gap-6 w-full">
        {/* Left */}
        <section className="space-y-6 w-full">
          {/* Profile Card */}
          <div className="p-4  bg-card border rounded-lg w-full">
            <div className="flex flex-col items-start sm:items-center gap-2">
              <Avatar src={user.avatarUrl} name={user.name} />
              <div className="flex-1 space-y-2">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  {user.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <Badge variant="secondary">{user.role}</Badge>
                  <span className="text-muted-foreground">
                    Joined {new Date(user.joinedAt!).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{user.bio}</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link href="/profile/edit" legacyBehavior>
                    <Button size="sm">Edit Profile</Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => alert("Change password")}
                  >
                    Change password
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 " w-full>
            <StatCard
              label="Bookings"
              value={user.recentBookings?.length ?? 0}
            />
            <StatCard
              label="Upcoming"
              value={
                user.recentBookings?.filter(
                  (b) => new Date(b.date) >= new Date()
                ).length ?? 0
              }
            />
            <StatCard label="Reviews" value={12} />
          </div>
        </section>

        {/* Center */}
        <section className="space-y-6 w-full">
          <div className="p-4 sm:p-6 bg-card border rounded-lg w-full">
            <h3 className="text-lg font-semibold mb-3">Personal Info</h3>
            <div className="space-y-2">
              <InfoRow label="Name" value={user.name} />
              <InfoRow label="Email" value={user.email} />
              <InfoRow label="Phone" value={user.phone} />
              <InfoRow label="Date of birth" value={user.dob} />
              <InfoRow label="Address" value={user.address} />
              <InfoRow
                label="Division / City"
                value={`${user.division} / ${user.city}`}
              />
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-card border rounded-lg w-full">
            <h3 className="text-lg font-semibold mb-3">Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Email newsletter</span>
                <Checkbox
                  checked={prefs.newsletter}
                  onCheckedChange={() => togglePref("newsletter")}
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Promotional offers</span>
                <Checkbox
                  checked={prefs.promotions}
                  onCheckedChange={() => togglePref("promotions")}
                />
              </div>
              <div className="flex items-center justify-between">
                <span>SMS alerts</span>
                <Checkbox
                  checked={prefs.smsAlerts}
                  onCheckedChange={() => togglePref("smsAlerts")}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {["Beach", "Nature", "Heritage", "Adventure"].map((t) => (
                  <Badge
                    key={t}
                    className={`cursor-pointer ${
                      prefs.tourTypes.includes(t) ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => {
                      setPrefs((p) => {
                        const arr = p.tourTypes ?? [];
                        return arr.includes(t)
                          ? { ...p, tourTypes: arr.filter((x) => x !== t) }
                          : { ...p, tourTypes: [...arr, t] };
                      });
                    }}
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Right */}
        <aside className="space-y-6 w-full">
          <div className="p-4 sm:p-6 bg-card border rounded-lg w-full">
            <h4 className="font-semibold mb-3">Recent activity</h4>
            <div className="divide-y">
              {user.activities?.map((a) => (
                <div key={a.id} className="py-2">
                  <div className="text-sm">{a.text}</div>
                  <div className="text-xs text-muted-foreground">{a.time}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-card border rounded-lg w-full">
            <h4 className="font-semibold mb-3">Recent bookings</h4>
            <div className="space-y-2">
              {user.recentBookings?.map((b) => (
                <div
                  key={b.id}
                  className="p-3 bg-muted/10 rounded flex flex-col sm:flex-row sm:justify-between"
                >
                  <div>
                    <div className="font-medium">{b.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(b.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">৳{b.cost}</div>
                    <div
                      className={`text-sm ${
                        b.status === "Confirmed"
                          ? "text-green-600"
                          : b.status === "Pending"
                          ? "text-orange-600"
                          : "text-muted-foreground"
                      }`}
                    >
                      {b.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
