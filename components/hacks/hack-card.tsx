"use client";

import {
  ArrowUpIcon,
  ArrowDownIcon,
  ShareIcon,
  MessageSquare,
  Tag,
  Clock,
  User,
  Bookmark,
  BookMarked,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface HackCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  author: {
    name: string;
    image?: string;
  };
  votes: number;
  comments: number;
  createdAt: string;
  isDetailed?: boolean;
  isSaved?: boolean;
  onSaveToggle?: () => void;
}

export const HackCard = ({
  id,
  title,
  description,
  category,
  author,
  votes: initialVotes,
  comments,
  createdAt,
  isDetailed = false,
  isSaved = false,
  onSaveToggle,
}: HackCardProps) => {
  const [votes, setVotes] = useState(initialVotes);
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null);

  const handleVote = (type: "up" | "down") => {
    // TODO: Implement actual voting logic with API
    if (userVote === type) {
      setUserVote(null);
      setVotes(initialVotes);
    } else {
      setUserVote(type);
      setVotes(type === "up" ? initialVotes + 1 : initialVotes - 1);
    }
  };

  return (
    <Card className="overflow-hidden border border-zinc-100 shadow-sm hover:shadow transition-all duration-200 bg-white">
      <CardHeader className="space-y-2 p-5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <Badge
            variant="outline"
            className="bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200 flex items-center gap-1 px-2 py-0.5 rounded-md"
          >
            <Tag className="h-3 w-3 text-zinc-500" />
            <Link
              href={`/categories/${category.toLowerCase()}`}
              className="text-xs font-medium hover:text-zinc-900"
            >
              {category}
            </Link>
          </Badge>
          <div className="flex items-center gap-x-2 text-xs text-zinc-500">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{author.name}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{createdAt}</span>
            </div>
          </div>
        </div>
        <Link href={`/hacks/${id}`} className="group block">
          <h3 className="font-semibold text-lg text-zinc-800 group-hover:text-zinc-600 transition-colors">
            {title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <p
          className={cn("text-sm text-zinc-600", !isDetailed && "line-clamp-2")}
        >
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-3 flex items-center gap-x-4 border-t border-zinc-100">
        <div className="flex items-center gap-x-1 bg-zinc-50 rounded-full px-2 py-1">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-7 w-7 rounded-full hover:bg-zinc-100",
              userVote === "up" && "text-zinc-900 bg-zinc-100"
            )}
            onClick={() => handleVote("up")}
          >
            <ArrowUpIcon className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium min-w-10 text-center text-zinc-700">
            {votes.toLocaleString()}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-7 w-7 rounded-full hover:bg-zinc-100",
              userVote === "down" && "text-zinc-900 bg-zinc-100"
            )}
            onClick={() => handleVote("down")}
          >
            <ArrowDownIcon className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="gap-x-2 text-zinc-600 hover:text-zinc-800 hover:bg-zinc-50 rounded-full h-8 px-3"
        >
          <MessageSquare className="h-4 w-4" />
          <span className="text-xs font-medium">
            {comments.toLocaleString()} comments
          </span>
        </Button>
        <div className="ml-auto flex items-center gap-2">
          {onSaveToggle && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-zinc-50 text-zinc-600 hover:text-zinc-800"
              onClick={onSaveToggle}
            >
              {isSaved ? (
                <BookMarked className="h-4 w-4 text-zinc-700" />
              ) : (
                <Bookmark className="h-4 w-4" />
              )}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-zinc-50 text-zinc-600 hover:text-zinc-800"
          >
            <ShareIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
