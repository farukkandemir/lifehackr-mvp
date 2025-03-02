"use client";

import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Flame,
  Star,
  Clock,
  Filter,
  TrendingUp,
  Sparkles,
  Search,
  ArrowRight,
  ThumbsUp,
  Users,
  BarChart3,
  BookMarked,
  Bookmark,
  MessageSquare,
  User,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { HackCard } from "@/components/hacks/hack-card";
import { HackCardSkeleton } from "@/components/hacks/hack-card-skeleton";
import { Badge } from "@/components/ui/badge";

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

// Featured hack data
const FEATURED_HACK = {
  id: "featured-1",
  title: "Revolutionary Desk Organization System",
  description:
    "Transform your workspace with this innovative organization system that increases productivity by 40%. Based on scientific research and tested by thousands of professionals, this method will change how you work forever.",
  longDescription:
    "This comprehensive desk organization system combines principles from productivity research, ergonomics, and cognitive psychology to create an optimal workspace. The system includes specific zones for different activities, a color-coding method for prioritization, and a daily reset routine that takes just 2 minutes.",
  category: "Productivity",
  author: {
    name: "ProductivityMaster",
    image: "/avatars/productivity-master.jpg",
  },
  votes: 3842,
  comments: 327,
  createdAt: "1 day ago",
  successRate: "97%",
  timeToImplement: "15 minutes",
  benefits: [
    "40% increase in productivity",
    "Reduced stress and mental clutter",
    "Better focus and concentration",
  ],
};

type SortOption = "trending" | "top" | "new";
type TimeFilter = "today" | "week" | "month" | "all";
type ViewMode = "list" | "grid";

export default function TrendingPage() {
  const [sortBy, setSortBy] = useState<SortOption>("trending");
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("week");
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [isLoading, setIsLoading] = useState(true);
  const [hacks, setHacks] = useState<typeof MOCK_HACKS>([]);
  const [savedHacks, setSavedHacks] = useState<string[]>([]);

  const sortOptions = {
    trending: { label: "Trending", icon: Flame },
    top: { label: "Top", icon: Star },
    new: { label: "New", icon: Clock },
  };

  const SelectedIcon = sortOptions[sortBy].icon;

  // Simulate loading data
  useEffect(() => {
    setIsLoading(true);

    // Simulate API call delay
    const timer = setTimeout(() => {
      setHacks(MOCK_HACKS);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [sortBy, timeFilter]);

  // Toggle saved hack
  const toggleSaveHack = (id: string) => {
    setSavedHacks((prev) =>
      prev.includes(id) ? prev.filter((hackId) => hackId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50/50 to-white">
      {/* Header section with background */}
      <div className="relative bg-gradient-to-b from-zinc-100/70 to-white pt-24 pb-12 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-0 w-64 h-64 bg-zinc-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-zinc-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm font-medium text-zinc-700 bg-zinc-100 rounded-full">
            <TrendingUp className="w-4 h-4 mr-2 text-zinc-600" />
            Discover what's popular right now
          </div>
          <h1 className="text-4xl font-bold text-zinc-800 mb-3">
            Trending Hacks
          </h1>
          <p className="text-zinc-600 max-w-2xl mb-6">
            Explore the most popular life hacks that are helping thousands of
            people improve their daily lives.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Top filters bar */}
        <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-4 mb-8">
          <div className="flex flex-wrap items-center gap-4">
            {/* Categories dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 border-zinc-200">
                  <Filter className="w-4 h-4 text-zinc-600" />
                  <span>Categories</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="bg-white border border-zinc-100 shadow-md w-56"
              >
                {[
                  "All",
                  "Tech",
                  "Home",
                  "Health",
                  "Productivity",
                  "Finance",
                  "Cooking",
                  "DIY",
                ].map((category) => (
                  <DropdownMenuItem
                    key={category}
                    className={`gap-2 ${
                      category === "All"
                        ? "bg-zinc-50 text-zinc-800 font-medium"
                        : "text-zinc-600"
                    } focus:bg-zinc-50 focus:text-zinc-900`}
                  >
                    <span className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center text-xs">
                      {category === "All" ? "A" : category.charAt(0)}
                    </span>
                    <span>{category}</span>
                    <span className="ml-auto text-xs text-zinc-400">
                      {category === "All"
                        ? "350"
                        : Math.floor(Math.random() * 100)}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Difficulty dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 border-zinc-200">
                  <Star className="w-4 h-4 text-zinc-600" />
                  <span>Difficulty</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="bg-white border border-zinc-100 shadow-md w-48"
              >
                {["Beginner", "Intermediate", "Advanced"].map((level) => (
                  <DropdownMenuItem
                    key={level}
                    className="gap-2 focus:bg-zinc-50 focus:text-zinc-900"
                  >
                    <div className="flex items-center w-full">
                      <input
                        type="checkbox"
                        id={`difficulty-${level}`}
                        className="rounded border-zinc-300 text-zinc-800 focus:ring-zinc-500"
                      />
                      <label
                        htmlFor={`difficulty-${level}`}
                        className="ml-2 text-sm text-zinc-600 w-full cursor-pointer"
                      >
                        {level}
                      </label>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Implementation time dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 border-zinc-200">
                  <Clock className="w-4 h-4 text-zinc-600" />
                  <span>Time</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="bg-white border border-zinc-100 shadow-md w-48"
              >
                {[
                  "< 5 minutes",
                  "5-15 minutes",
                  "15-30 minutes",
                  "> 30 minutes",
                ].map((time) => (
                  <DropdownMenuItem
                    key={time}
                    className="gap-2 focus:bg-zinc-50 focus:text-zinc-900"
                  >
                    <div className="flex items-center w-full">
                      <input
                        type="checkbox"
                        id={`time-${time}`}
                        className="rounded border-zinc-300 text-zinc-800 focus:ring-zinc-500"
                      />
                      <label
                        htmlFor={`time-${time}`}
                        className="ml-2 text-sm text-zinc-600 w-full cursor-pointer"
                      >
                        {time}
                      </label>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Separator orientation="vertical" className="h-8 hidden sm:block" />

            {/* Time period tabs */}
            <Tabs
              value={timeFilter}
              onValueChange={(value) => setTimeFilter(value as TimeFilter)}
              className="flex-grow sm:flex-grow-0"
            >
              <TabsList className="w-full sm:w-auto bg-zinc-100/80">
                <TabsTrigger value="today" className="text-xs sm:text-sm">
                  Today
                </TabsTrigger>
                <TabsTrigger value="week" className="text-xs sm:text-sm">
                  This Week
                </TabsTrigger>
                <TabsTrigger value="month" className="text-xs sm:text-sm">
                  This Month
                </TabsTrigger>
                <TabsTrigger value="all" className="text-xs sm:text-sm">
                  All Time
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Separator orientation="vertical" className="h-8 hidden sm:block" />

            {/* Sort dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="gap-2 border-zinc-200 ml-auto"
                >
                  <SelectedIcon className="w-4 h-4 text-zinc-600" />
                  <span>{sortOptions[sortBy].label}</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white border border-zinc-100 shadow-md"
              >
                {Object.entries(sortOptions).map(
                  ([key, { label, icon: Icon }]) => (
                    <DropdownMenuItem
                      key={key}
                      onClick={() => setSortBy(key as SortOption)}
                      className="gap-2 focus:bg-zinc-50 focus:text-zinc-900"
                    >
                      <Icon className="w-4 h-4 text-zinc-600" />
                      {label}
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Two-column layout for content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content column */}
          <div className="lg:col-span-8 xl:col-span-9 order-2 lg:order-1">
            {/* Results count and view toggle */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-zinc-500" />
                <span className="text-sm text-zinc-600">
                  {isLoading ? (
                    <span>Loading results...</span>
                  ) : (
                    <>
                      Showing{" "}
                      <span className="font-medium text-zinc-800">
                        {hacks.length}
                      </span>{" "}
                      results
                    </>
                  )}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-zinc-600 hover:text-zinc-800 hover:bg-zinc-50 gap-1"
                >
                  <Search className="w-4 h-4" />
                  <span className="text-sm hidden sm:inline">Search hacks</span>
                </Button>

                <div className="bg-zinc-100 rounded-md p-1 flex">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`p-1 h-7 ${
                      viewMode === "list"
                        ? "bg-white shadow-sm"
                        : "bg-transparent"
                    } rounded`}
                    onClick={() => setViewMode("list")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-zinc-600"
                    >
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`p-1 h-7 ${
                      viewMode === "grid"
                        ? "bg-white shadow-sm"
                        : "bg-transparent"
                    } rounded`}
                    onClick={() => setViewMode("grid")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-zinc-600"
                    >
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            {/* Hack cards */}
            <div
              className={
                viewMode === "list"
                  ? "space-y-6"
                  : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6"
              }
            >
              {isLoading ? (
                // Skeleton loading state
                <>
                  {[...Array(viewMode === "list" ? 3 : 6)].map((_, index) => (
                    <div key={index} className="transition-all duration-200">
                      <HackCardSkeleton />
                    </div>
                  ))}
                </>
              ) : (
                // Actual content
                <>
                  {hacks.map((hack) => (
                    <div
                      key={hack.id}
                      className="transition-all duration-200 hover:-translate-y-1"
                    >
                      <HackCard
                        {...hack}
                        isSaved={savedHacks.includes(hack.id)}
                        onSaveToggle={() => toggleSaveHack(hack.id)}
                      />
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Load more button */}
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                className="border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-800 rounded-full px-8 py-6 shadow-sm hover:shadow transition-all duration-200"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Load more hacks"}
              </Button>
            </div>
          </div>

          {/* Right sidebar - Featured hack */}
          <div className="lg:col-span-4 xl:col-span-3 order-1 lg:order-2">
            {!isLoading && (
              <div className="sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-zinc-600 fill-zinc-200" />
                    <h2 className="text-xl font-semibold text-zinc-800">
                      Featured Hack
                    </h2>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-zinc-50 text-zinc-600 border-zinc-200"
                  >
                    Editor's Choice
                  </Badge>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-zinc-100 overflow-hidden">
                  <div className="p-5 border-b border-zinc-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        variant="outline"
                        className="bg-zinc-50 text-zinc-700 border-zinc-200"
                      >
                        {FEATURED_HACK.category}
                      </Badge>
                      <span className="text-xs text-zinc-500">
                        {FEATURED_HACK.createdAt}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-zinc-800 mb-3">
                      {FEATURED_HACK.title}
                    </h3>

                    <p className="text-sm text-zinc-600 mb-4 line-clamp-3">
                      {FEATURED_HACK.longDescription}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-zinc-500 mb-4">
                      <User className="h-3 w-3" />
                      <span>By {FEATURED_HACK.author.name}</span>
                    </div>
                  </div>

                  <div className="p-5 bg-zinc-50/50">
                    <h4 className="font-medium text-zinc-800 mb-3 text-sm">
                      Key Benefits
                    </h4>

                    <ul className="space-y-2 mb-4">
                      {FEATURED_HACK.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-700 shrink-0 mt-0.5 text-xs font-medium">
                            {index + 1}
                          </div>
                          <span className="text-sm text-zinc-700">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="flex flex-col items-center justify-center bg-white p-2 rounded-md border border-zinc-100">
                        <span className="text-xs text-zinc-500">Success</span>
                        <span className="font-medium text-zinc-800">
                          {FEATURED_HACK.successRate}
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center bg-white p-2 rounded-md border border-zinc-100">
                        <span className="text-xs text-zinc-500">Time</span>
                        <span className="font-medium text-zinc-800">
                          {FEATURED_HACK.timeToImplement}
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center bg-white p-2 rounded-md border border-zinc-100">
                        <span className="text-xs text-zinc-500">Users</span>
                        <span className="font-medium text-zinc-800">
                          {FEATURED_HACK.votes.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Button
                        className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-full text-sm px-4 py-2 h-9 group"
                        asChild
                      >
                        <a href={`/hacks/${FEATURED_HACK.id}`}>
                          View Full Hack
                          <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border-zinc-300 gap-1 h-9"
                        onClick={() => toggleSaveHack(FEATURED_HACK.id)}
                      >
                        {savedHacks.includes(FEATURED_HACK.id) ? (
                          <>
                            <BookMarked className="w-4 h-4 text-zinc-700" />
                            <span>Saved</span>
                          </>
                        ) : (
                          <>
                            <Bookmark className="w-4 h-4 text-zinc-600" />
                            <span>Save</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Additional sidebar content */}
                <div className="mt-8 bg-white rounded-xl shadow-sm border border-zinc-100 p-5">
                  <h3 className="font-medium text-zinc-800 mb-4">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Productivity",
                      "Time-saving",
                      "Money",
                      "Health",
                      "Technology",
                      "Wellness",
                      "Home",
                      "DIY",
                    ].map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
