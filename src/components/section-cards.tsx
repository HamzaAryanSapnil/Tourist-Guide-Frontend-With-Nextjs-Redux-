"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  ArrowDownRight,
  Star,
  Wallet,
  Heart,
  CalendarCheck,
  Users,
  Globe2,
  DollarSign,
} from "lucide-react";

type Role = "USER" | "ADMIN";

interface DashboardOverviewProps {
  role: Role;
}

export default function SectionCards({ role }: DashboardOverviewProps) {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 md:grid-cols-2 xl:grid-cols-4">
      {role === "USER" ? (
        <>
          {/* Total Bookings */}
          <Card>
            <CardHeader>
              <CardDescription>Total Bookings</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                12
              </CardTitle>
              <Badge variant="outline" className="mt-2">
                <CalendarCheck className="w-4 h-4 mr-1" />
                Completed
              </Badge>
            </CardHeader>
            <CardFooter className="text-sm text-muted-foreground">
              All tours you’ve booked so far
            </CardFooter>
          </Card>

          {/* Total Spent */}
          <Card>
            <CardHeader>
              <CardDescription>Total Spent</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                $2,450
              </CardTitle>
              <Badge variant="outline" className="mt-2">
                <Wallet className="w-4 h-4 mr-1" />
                +15% vs last month
              </Badge>
            </CardHeader>
            <CardFooter className="text-sm text-muted-foreground">
              Total money spent on your tours
            </CardFooter>
          </Card>

          {/* Reviews */}
          <Card>
            <CardHeader>
              <CardDescription>Reviews Given</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                5
              </CardTitle>
              <Badge variant="outline" className="mt-2">
                <Star className="w-4 h-4 mr-1" />
                Feedback matters
              </Badge>
            </CardHeader>
            <CardFooter className="text-sm text-muted-foreground">
              Share your travel experiences
            </CardFooter>
          </Card>

          {/* Favorites */}
          <Card>
            <CardHeader>
              <CardDescription>Saved Tours</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                3
              </CardTitle>
              <Badge variant="outline" className="mt-2">
                <Heart className="w-4 h-4 mr-1" />
                Favorites
              </Badge>
            </CardHeader>
            <CardFooter className="text-sm text-muted-foreground">
              Tours you’ve saved for later
            </CardFooter>
          </Card>
        </>
      ) : (
        <>
          {/* Total Revenue */}
          <Card>
            <CardHeader>
              <CardDescription>Total Revenue</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                $52,300
              </CardTitle>
              <Badge variant="outline" className="mt-2">
                <DollarSign className="w-4 h-4 mr-1" />
                +12%
              </Badge>
            </CardHeader>
            <CardFooter className="text-sm text-muted-foreground">
              Total earnings from bookings
            </CardFooter>
          </Card>

          {/* Total Bookings */}
          <Card>
            <CardHeader>
              <CardDescription>Total Bookings</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                1,234
              </CardTitle>
              <Badge variant="outline" className="mt-2">
                <CalendarCheck className="w-4 h-4 mr-1" />
                All time
              </Badge>
            </CardHeader>
            <CardFooter className="text-sm text-muted-foreground">
              Across all users
            </CardFooter>
          </Card>

          {/* Total Users */}
          <Card>
            <CardHeader>
              <CardDescription>Total Users</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                980
              </CardTitle>
              <Badge variant="outline" className="mt-2">
                <Users className="w-4 h-4 mr-1" />
                +5% new
              </Badge>
            </CardHeader>
            <CardFooter className="text-sm text-muted-foreground">
              Registered users on the platform
            </CardFooter>
          </Card>

          {/* Total Tours */}
          <Card>
            <CardHeader>
              <CardDescription>Total Tours</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                120
              </CardTitle>
              <Badge variant="outline" className="mt-2">
                <Globe2 className="w-4 h-4 mr-1" />
                Active
              </Badge>
            </CardHeader>
            <CardFooter className="text-sm text-muted-foreground">
              Tour packages available now
            </CardFooter>
          </Card>
        </>
      )}
    </div>
  );
}
