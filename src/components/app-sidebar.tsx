/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"
import {
  IconCamera,
  IconCar,
  IconCarTurbine,
  IconChartBar,
  IconClover,
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconFileTypeBmp,
  IconFolder,
  IconHelp,
  IconListDetails,

  IconSearch,
  IconSettings,
  IconTypeface,
  IconUser,
  IconUserDollar,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Logo from "./logo"
import { DollarSign, User } from "lucide-react"
import { useUserInfoQuery } from "@/redux/features/auth/auth.api"
import { Button } from "./ui/button"

const baseData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Projects",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Team",
      url: "#",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Your Profile",
      url: "/user/profile",
      icon: IconUser,
    },
    {
      name: "Overview",
      url: "/user/overview",
      icon: IconClover,
    },
    {
      name: "Your Bookings",
      url: "/user/bookings",
      icon: IconUserDollar,
    },
    {
      name: "Your Wishlist",
      url: "/user/wishlist",
      icon: IconCarTurbine,
    },
    {
      name: "Add Tour",
      url: "/admin/add-tour",
      icon: IconCar,
    },
    {
      name: "Add Tour Type",
      url: "/admin/add-tour-type",
      icon: IconFileTypeBmp,
    },
    {
      name: "Add Tour Division",
      url: "/admin/add-division",
      icon: IconCarTurbine,
    },
  ],
};

function isAdminRole(role?: string) {
  if (!role) return false;
  const r = role.toString().toUpperCase();
  return r === "ADMIN" || r === "SUPER_ADMIN";
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userResp, isLoading, isError } = useUserInfoQuery(undefined);
  const user = (userResp && ((userResp as any).data ?? userResp)) ?? null;
  const role =
    user && (user.role ?? user.roles ?? user.roleName)
      ? String(user.role ?? user.roles ?? user.roleName)
      : undefined;
  
  const docsForRole = React.useMemo(() => {
    const docs = baseData.documents ?? [];
    // Admin & Super Admin see all
    if (isAdminRole(role)) return docs;

    // Regular user or anonymous: hide /admin routes
    return docs.filter((d) => {
      // if url starts with /admin -> hide for non-admins
      if (!d.url) return true;
      return !d.url.toLowerCase().startsWith("/admin");
    });
  }, [role]);
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                {/* <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Tourvisto</span> */}
                <Logo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* <NavMain items={data.navMain} /> */}
        <NavDocuments items={docsForRole} />
        <NavSecondary items={baseData.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        {user ? (
          <NavUser user={user} />
        ) : (
          <div className="p-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <User className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Guest</div>
                <div className="text-xs text-muted-foreground">
                  Not signed in
                </div>
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              <Link href="/login" className="flex-1">
                <Button className="w-full">Sign in</Button>
              </Link>
              <Link href="/registration" className="flex-1">
                <Button variant="outline" className="w-full">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
