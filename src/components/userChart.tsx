"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// 🔹 User ডেমো ডাটা (নিজস্ব রিকোয়েস্ট / বুকিং ট্র্যাক)
const userData = [
  { date: "2024-06-01", requests: 1 },
  { date: "2024-06-02", requests: 0 },
  { date: "2024-06-03", requests: 2 },
  { date: "2024-06-04", requests: 1 },
  { date: "2024-06-05", requests: 3 },
];

const userChartConfig = {
  requests: { label: "My Requests", color: "var(--primary)" },
} satisfies ChartConfig;

export function UserRequestsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Dashboard</CardTitle>
        <CardDescription>My Blood Requests (last 5 days)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={userChartConfig} className="h-[250px] w-full">
          <AreaChart data={userData}>
            <defs>
              <linearGradient id="fillRequests" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-requests)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-requests)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="requests"
              type="natural"
              fill="url(#fillRequests)"
              stroke="var(--color-requests)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
