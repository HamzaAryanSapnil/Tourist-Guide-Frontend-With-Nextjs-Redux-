import { useId } from "react";
import { DockIcon, HouseIcon, InboxIcon, SearchIcon, ZapIcon } from "lucide-react";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ModeToggle } from "./theme-toggler";
import Search from "./search-input/search";
import Link from "next/link";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home", icon: HouseIcon},
  { href: "/about", label: "About", icon: DockIcon },
  { href: "#", label: "Insights", icon: ZapIcon },
];

export default function Navbar() {
  const id = useId();
  console.log(id);

  return (
    <header className="  sticky top-0 z-50 bg-background ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-center md:justify-between gap-2">
          {/* Left side */}
          <div className="flex flex-1 items-center gap-2">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group size-8 lg:hidden"
                  variant="ghost"
                  size="icon"
                >
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-36 p-1 lg:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                    {navigationLinks.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <NavigationMenuItem key={index} className="w-full">
                          <NavigationMenuLink
                            href={link.href}
                            className="flex-row items-center gap-2 py-1.5"
                          >
                            <Icon
                              size={16}
                              className="text-muted-foreground/80"
                              aria-hidden="true"
                            />
                            <span>{link.label}</span>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      );
                    })}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
            {/* Logo */}
            <div className="flex items-center">
              <Link href="#" className=" font-black  hover:text-primary/90">
                <Logo />
              </Link>
            </div>
          </div>
          {/* Middle area */}
          <NavigationMenu className="max-lg:hidden">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      className="text-foreground hover:text-primary flex-row items-center gap-2 py-1.5 font-medium"
                    >
                      <Icon
                        size={16}
                        className="text-muted-foreground/80"
                        aria-hidden="true"
                      />
                      <span>{link.label}</span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          {/* Right side */}
          <div className="flex flex-1 items-center justify-end gap-2">
            <ModeToggle />
            <div className="relative">
              <Search id={id} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
