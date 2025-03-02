import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const HackCardSkeleton = () => {
  return (
    <Card className="overflow-hidden border border-zinc-100 shadow-sm bg-white">
      <CardHeader className="space-y-2 p-5">
        <div className="flex items-center gap-x-2">
          <Skeleton className="h-6 w-20 rounded-md" />
          <Skeleton className="h-4 w-40 rounded-full" />
        </div>
        <Skeleton className="h-7 w-full max-w-md rounded-md" />
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-3 flex items-center gap-x-4 border-t border-zinc-100">
        <Skeleton className="h-8 w-24 rounded-full" />
        <Skeleton className="h-8 w-32 rounded-full" />
        <div className="ml-auto">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </CardFooter>
    </Card>
  );
};
