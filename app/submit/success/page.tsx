"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle, ArrowRight, TrendingUp, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SubmitSuccessPage() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect to trending page after countdown
          window.location.href = "/trending";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50/50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-zinc-100 p-8 text-center">
        <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-zinc-700" />
        </div>

        <h1 className="text-2xl font-bold text-zinc-800 mb-2">
          Hack Submitted Successfully!
        </h1>

        <p className="text-zinc-600 mb-6">
          Thank you for sharing your hack with our community. Our team will
          review it shortly.
        </p>

        <div className="p-4 bg-zinc-50 rounded-lg mb-6">
          <p className="text-zinc-700">
            You will be redirected to the trending page in{" "}
            <span className="font-bold">{countdown}</span> seconds...
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-full shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2"
            asChild
          >
            <Link href="/trending">
              <TrendingUp className="w-4 h-4" />
              Explore Trending Hacks
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>

          <Button
            variant="outline"
            className="rounded-full border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-200 flex items-center justify-center gap-2"
            asChild
          >
            <Link href="/">
              <Home className="w-4 h-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
