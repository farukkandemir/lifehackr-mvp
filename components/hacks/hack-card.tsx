"use client";

import {
  ArrowUpIcon,
  ArrowDownIcon,
  ShareIcon,
  MessageSquare,
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
    <Card className="overflow-hidden">
      <CardHeader className="space-y-1 p-4">
        <div className="flex items-center gap-x-2">
          <Link
            href={`/categories/${category.toLowerCase()}`}
            className="text-xs font-medium text-primary hover:underline"
          >
            {category}
          </Link>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">
            Posted by {author.name}
          </span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{createdAt}</span>
        </div>
        <Link href={`/hacks/${id}`} className="group">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p
          className={cn(
            "text-sm text-muted-foreground",
            !isDetailed && "line-clamp-2"
          )}
        >
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center gap-x-4">
        <div className="flex items-center gap-x-1">
          <Button
            variant="ghost"
            size="icon"
            className={cn("h-8 w-8", userVote === "up" && "text-primary")}
            onClick={() => handleVote("up")}
          >
            <ArrowUpIcon className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium min-w-10 text-center">
            {votes}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className={cn("h-8 w-8", userVote === "down" && "text-destructive")}
            onClick={() => handleVote("down")}
          >
            <ArrowDownIcon className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="gap-x-2">
          <MessageSquare className="h-4 w-4" />
          <span className="text-sm">{comments}</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 ml-auto">
          <ShareIcon className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
