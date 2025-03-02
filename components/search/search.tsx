"use client";

import {
  Search as SearchIcon,
  TrendingUp,
  Grid,
  Home,
  Heart,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export const Search = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => unknown) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group px-3 py-2 rounded-full flex items-center gap-x-2 w-full hover:bg-blue-50 border border-zinc-200 hover:border-blue-200 transition-all duration-200 shadow-sm hover:shadow"
      >
        <SearchIcon className="w-4 h-4 text-zinc-500 group-hover:text-blue-500 transition-colors" />
        <p className="text-sm text-zinc-500 group-hover:text-blue-500 font-medium transition-colors">
          Search hacks...
        </p>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-zinc-100 px-1.5 font-mono text-[10px] font-medium text-zinc-500 opacity-100 ml-auto">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search all hacks..." />
        <CommandList>
          <CommandEmpty>
            <div className="py-6 text-center flex flex-col items-center">
              <SearchIcon className="w-10 h-10 mb-2 text-zinc-300" />
              <p>No results found.</p>
              <p className="text-xs mt-1">Try a different search term</p>
            </div>
          </CommandEmpty>
          <CommandGroup heading="Quick Links">
            <CommandItem
              onSelect={() => runCommand(() => router.push("/trending"))}
            >
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <TrendingUp className="w-3 h-3 text-blue-600" />
              </div>
              <span>Trending Hacks</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/categories"))}
            >
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <Grid className="w-3 h-3 text-green-600" />
              </div>
              <span>Browse Categories</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Popular Categories">
            <CommandItem
              onSelect={() => runCommand(() => router.push("/categories/home"))}
            >
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <Home className="w-3 h-3 text-blue-600" />
              </div>
              <span>Home Hacks</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/categories/tech"))}
            >
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <SearchIcon className="w-3 h-3 text-green-600" />
              </div>
              <span>Tech Hacks</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() => router.push("/categories/health"))
              }
            >
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                <Heart className="w-3 h-3 text-orange-600" />
              </div>
              <span>Health Hacks</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
