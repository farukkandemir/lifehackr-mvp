"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Flame, Star, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { HackCard } from "@/components/hacks/hack-card";

// Temporary mock data
const MOCK_HACKS = [
  {
    id: "1",
    title: "The Ultimate Phone Battery Saving Technique",
    description:
      "Learn how to extend your phone's battery life by up to 50% with these simple settings adjustments and usage habits. This hack has been tested across multiple devices and OS versions.",
    category: "Tech",
    author: {
      name: "TechGuru",
    },
    votes: 1250,
    comments: 89,
    createdAt: "2 hours ago",
  },
  {
    id: "2",
    title: "Quick Home Organization Method That Actually Works",
    description:
      "A practical 15-minute daily routine that keeps your home organized without overwhelming yourself. Perfect for busy professionals and parents.",
    category: "Home",
    author: {
      name: "OrganizedLife",
    },
    votes: 983,
    comments: 145,
    createdAt: "5 hours ago",
  },
  {
    id: "3",
    title: "5-Minute Morning Productivity Ritual",
    description:
      "Start your day right with this science-backed morning routine that boosts productivity and mental clarity. No expensive tools or complicated steps required.",
    category: "Health",
    author: {
      name: "WellnessExpert",
    },
    votes: 756,
    comments: 67,
    createdAt: "1 day ago",
  },
];

type SortOption = "trending" | "top" | "new";
type TimeFilter = "today" | "week" | "month" | "all";

export default function TrendingPage() {
  const [sortBy, setSortBy] = useState<SortOption>("trending");
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("week");

  const sortOptions = {
    trending: { label: "Trending", icon: Flame },
    top: { label: "Top", icon: Star },
    new: { label: "New", icon: Clock },
  };

  const SelectedIcon = sortOptions[sortBy].icon;

  return (
    <div className="container max-w-5xl py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Trending Hacks</h1>
        <div className="flex items-center gap-4">
          <Tabs
            value={timeFilter}
            onValueChange={(value) => setTimeFilter(value as TimeFilter)}
          >
            <TabsList>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="week">This Week</TabsTrigger>
              <TabsTrigger value="month">This Month</TabsTrigger>
              <TabsTrigger value="all">All Time</TabsTrigger>
            </TabsList>
          </Tabs>
          <Separator orientation="vertical" className="h-8" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <SelectedIcon className="w-4 h-4" />
                {sortOptions[sortBy].label}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {Object.entries(sortOptions).map(
                ([key, { label, icon: Icon }]) => (
                  <DropdownMenuItem
                    key={key}
                    onClick={() => setSortBy(key as SortOption)}
                    className="gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="space-y-4">
        {MOCK_HACKS.map((hack) => (
          <HackCard key={hack.id} {...hack} />
        ))}
      </div>
    </div>
  );
}
