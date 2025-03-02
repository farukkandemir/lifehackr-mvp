"use client";

import Link from "next/link";
import {
  Github,
  Twitter,
  Instagram,
  Facebook,
  Sparkles,
  Heart,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send this to your API
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "Pricing", href: "/pricing" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Categories",
      links: [
        { label: "Home Hacks", href: "/categories/home" },
        { label: "Tech Hacks", href: "/categories/tech" },
        { label: "Health Hacks", href: "/categories/health" },
        { label: "DIY Hacks", href: "/categories/diy" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 md:py-16">
        {/* Newsletter Section */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 p-6 md:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-xl font-bold text-zinc-900 mb-2">
                Join our newsletter
              </h3>
              <p className="text-zinc-600">
                Get weekly life hacks and tips delivered straight to your inbox.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md flex-col sm:flex-row gap-2"
            >
              <div className="relative flex-grow">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-full border-zinc-300 bg-white px-4 py-2 pr-10 focus:border-blue-500 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
              </div>
              <Button
                type="submit"
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 flex items-center gap-x-1 px-5"
                disabled={subscribed}
              >
                {subscribed ? (
                  <>
                    <Heart className="h-4 w-4" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo and Social Links */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-x-2 mb-6">
              <div className="p-1.5 bg-gradient-to-br from-blue-600 to-green-500 rounded-md">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500">
                LifeHackr
              </span>
            </Link>
            <p className="text-zinc-600 mb-4 text-sm">
              Discover, share, and vote on the best life hacks to simplify your
              everyday life.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-900 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-zinc-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-zinc-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-zinc-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} LifeHackr. All rights reserved.
            </p>
            <div className="flex items-center gap-x-2">
              <span className="text-zinc-500 text-sm">Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              <span className="text-zinc-500 text-sm">
                by the LifeHackr Team
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
