"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Home,
  TrendingUp,
  Grid,
  Info,
  Menu,
  Sparkles,
  Heart as HeartIcon,
  Smartphone as SmartphoneIcon,
  Wrench as WrenchIcon,
  LogIn,
  Zap,
  Star,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search } from "@/components/search/search";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const routes = [
    {
      label: "Home",
      href: "/",
      active: pathname === "/",
      icon: <Home className="h-4 w-4" />,
    },
    {
      label: "Trending Hacks",
      href: "/trending",
      active: pathname === "/trending",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      label: "Categories",
      href: "/categories",
      active: pathname?.includes("/categories"),
      icon: <Grid className="h-4 w-4" />,
      subItems: [
        {
          label: "Home",
          href: "/categories/home",
          icon: <Home className="h-4 w-4" />,
          description: "Organization & cleaning tips",
        },
        {
          label: "Tech",
          href: "/categories/tech",
          icon: <SmartphoneIcon className="h-4 w-4" />,
          description: "Digital life made simple",
        },
        {
          label: "Health",
          href: "/categories/health",
          icon: <HeartIcon className="h-4 w-4" />,
          description: "Wellness & fitness tricks",
        },
        {
          label: "DIY",
          href: "/categories/diy",
          icon: <WrenchIcon className="h-4 w-4" />,
          description: "Creative solutions & fixes",
        },
      ],
    },
    {
      label: "About",
      href: "/about",
      active: pathname === "/about",
      icon: <Info className="h-4 w-4" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full h-16 px-4 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-zinc-100 shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between h-full">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-x-2">
            <div className="p-1.5 bg-zinc-100 rounded-lg">
              <Sparkles className="h-5 w-5 text-zinc-700" />
            </div>
            <span className="font-medium text-xl text-zinc-800">LifeHackr</span>
          </Link>

          <NavigationMenu className="hidden md:flex ml-8">
            <NavigationMenuList className="gap-2">
              {routes.map((route) => (
                <NavigationMenuItem key={route.href}>
                  {route.subItems ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          "px-3 py-2 rounded-md transition-all duration-200 flex items-center gap-x-1",
                          route.active
                            ? "text-zinc-900 font-medium bg-zinc-100"
                            : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                        )}
                      >
                        {route.icon}
                        <span className="ml-1.5">{route.label}</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid grid-cols-2 gap-3 p-4 w-[400px] bg-white rounded-md shadow-sm border border-zinc-100">
                          {route.subItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-x-3 p-3 rounded-md transition-all duration-200 hover:bg-zinc-50"
                            >
                              <div className="p-2 rounded-md bg-zinc-100 text-zinc-700">
                                {item.icon}
                              </div>
                              <div className="space-y-1">
                                <div className="text-sm font-medium text-zinc-800">
                                  {item.label}
                                </div>
                                <p className="text-xs text-zinc-500 line-clamp-1">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={route.href}
                      className={cn(
                        "px-3 py-2 rounded-md transition-all duration-200 flex items-center gap-x-1",
                        route.active
                          ? "text-zinc-900 font-medium bg-zinc-100"
                          : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                      )}
                    >
                      {route.icon}
                      <span className="ml-1.5">{route.label}</span>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="hidden md:block w-[220px]">
            <Search />
          </div>

          <Link
            href="/trending"
            className="hidden md:flex items-center gap-1.5 bg-zinc-100 text-zinc-700 px-3 py-1.5 rounded-md text-xs font-medium"
          >
            <Star className="w-3 h-3" />
            <span>New Features</span>
          </Link>

          <Button
            variant="ghost"
            className="hidden md:flex rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
            asChild
          >
            <Link href="/auth/login">
              <LogIn className="h-4 w-4 mr-1.5" />
              <span>Login</span>
            </Link>
          </Button>

          <Button
            className="hidden md:flex rounded-md bg-zinc-900 hover:bg-zinc-800 text-white"
            asChild
          >
            <Link href="/auth/register">
              <Zap className="h-4 w-4 mr-1.5" />
              <span>Get Started</span>
            </Link>
          </Button>

          {/* Mobile menu button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 p-0 overflow-y-auto border-l border-zinc-100 bg-white"
            >
              <div className="p-6">
                <Link
                  href="/"
                  className="flex items-center gap-x-2"
                  onClick={() => setOpen(false)}
                >
                  <div className="p-1.5 bg-zinc-100 rounded-lg">
                    <Sparkles className="h-5 w-5 text-zinc-700" />
                  </div>
                  <span className="font-medium text-xl text-zinc-800">
                    LifeHackr
                  </span>
                </Link>

                <div className="mt-6 mb-4">
                  <Search />
                </div>

                <Link
                  href="/trending"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-1.5 bg-zinc-100 text-zinc-700 px-3 py-1.5 rounded-md text-xs font-medium mt-4"
                >
                  <Star className="w-3 h-3" />
                  <span>Check out our new features!</span>
                </Link>

                <div className="flex flex-col gap-y-2 mt-6">
                  {routes.map((route) => (
                    <div key={route.label}>
                      {route.subItems ? (
                        <Accordion type="single" collapsible>
                          <AccordionItem
                            value="categories"
                            className="border-none"
                          >
                            <AccordionTrigger
                              className={cn(
                                "px-3 py-2 rounded-md transition-all duration-200 flex items-center gap-x-2",
                                route.active
                                  ? "text-zinc-900 font-medium bg-zinc-100"
                                  : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                              )}
                            >
                              {route.icon}
                              <span>{route.label}</span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col gap-y-1 mt-1 pl-2">
                                {route.subItems.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-x-2 p-2 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-all duration-200"
                                  >
                                    <div className="p-1 rounded-md bg-zinc-100 text-zinc-700">
                                      {item.icon}
                                    </div>
                                    <div className="text-sm">{item.label}</div>
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <Link
                          href={route.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "px-3 py-2 rounded-md transition-all duration-200 flex items-center gap-x-2",
                            route.active
                              ? "text-zinc-900 font-medium bg-zinc-100"
                              : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                          )}
                        >
                          {route.icon}
                          <span>{route.label}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-y-2 mt-6 pt-4 border-t border-zinc-100">
                  <Button
                    variant="ghost"
                    className="w-full justify-start rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                    asChild
                  >
                    <Link href="/auth/login" onClick={() => setOpen(false)}>
                      <LogIn className="h-4 w-4 mr-2" />
                      Login
                    </Link>
                  </Button>
                  <Button
                    className="w-full justify-start rounded-md bg-zinc-900 hover:bg-zinc-800 text-white"
                    asChild
                  >
                    <Link href="/auth/register" onClick={() => setOpen(false)}>
                      <Zap className="h-4 w-4 mr-2" />
                      Get Started
                    </Link>
                  </Button>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                  <p className="flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    Join over 10,000 life hackers
                  </p>
                  <p className="mt-1">© 2023 LifeHackr. All rights reserved.</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
