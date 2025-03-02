import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Home as HomeIcon,
  Smartphone as SmartphoneIcon,
  Heart as HeartIcon,
  Wrench as WrenchIcon,
  Sparkles,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle,
  Search,
  Star,
  Award,
  ThumbsUp,
  Share2,
  ChevronRight,
  Zap,
  Rocket,
  LightbulbIcon,
  Clock,
  Shield,
  Video,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-20 md:py-32 overflow-hidden bg-gradient-to-br from-white to-zinc-50/50">
        {/* Background elements - simplified */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 border border-zinc-200/30 rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 border border-zinc-200/30 rounded-lg transform -rotate-12"></div>
          <div className="absolute top-40 left-1/4 w-20 h-20 border border-zinc-200/30 rounded-lg transform rotate-45"></div>

          {/* Subtle accents */}
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-zinc-300/0 via-zinc-300/20 to-zinc-300/0"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-300/0 via-zinc-300/20 to-zinc-300/0"></div>

          {/* Transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm font-medium text-zinc-700 bg-zinc-100 rounded-full">
              <Zap className="w-4 h-4 mr-2 text-zinc-600" />
              Join thousands discovering life-changing hacks daily
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-zinc-800">
              Discover & Share the
              <span className="block">Best Life Hacks</span>
            </h1>
            <p className="text-zinc-600 md:text-xl max-w-[500px] mx-auto lg:mx-0">
              Your go-to platform for clever solutions that make everyday life
              easier, more efficient, and more enjoyable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="bg-zinc-800 hover:bg-zinc-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 gap-2 min-w-[160px] group rounded-full"
                asChild
              >
                <Link href="/auth/register">
                  <Users className="w-4 h-4" />
                  Join Community
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="shadow-md hover:shadow-lg transition-all duration-200 gap-2 min-w-[160px] border-zinc-200 hover:border-zinc-300 hover:text-zinc-700 rounded-full"
                asChild
              >
                <Link href="/trending">
                  <TrendingUp className="w-4 h-4" />
                  Explore Hacks
                </Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-1 pt-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-zinc-400 to-zinc-500"
                  ></div>
                ))}
              </div>
              <div className="ml-2 text-sm text-zinc-600">
                <span className="font-semibold">4.9/5</span> from over 10,000
                users
              </div>
            </div>
          </div>

          {/* Hero illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-300/20 via-zinc-300/20 to-zinc-300/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-zinc-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                    <Star className="w-5 h-5 text-zinc-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-800">
                      Top Rated Hack
                    </h3>
                    <p className="text-xs text-zinc-500">24.5K views</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1 bg-zinc-100 text-zinc-700 px-2 py-1 rounded-full text-xs font-medium">
                    <ThumbsUp className="w-3 h-3" /> 98% Success
                  </div>
                </div>

                <h4 className="text-lg font-semibold mb-2">
                  Double Your Phone Battery Life
                </h4>
                <p className="text-sm text-zinc-600 mb-4">
                  Simple settings changes that can dramatically improve your
                  smartphone's battery performance.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-semibold text-xs">
                      M
                    </div>
                    <span className="text-xs text-zinc-500">Michael C.</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 rounded-full"
                    >
                      <Share2 className="w-4 h-4 text-zinc-500" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 rounded-full"
                    >
                      <ThumbsUp className="w-4 h-4 text-zinc-500" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growing Community Section */}
      <section className="relative px-4 pt-8 pb-16 bg-white overflow-hidden">
        {/* Decorative elements - simplified */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-zinc-300/0 via-zinc-300/10 to-zinc-300/0"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 border border-zinc-200/20 rounded-lg transform rotate-12"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 border border-zinc-200/20 rounded-lg transform -rotate-12"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-zinc-800">
              Our Growing Community
            </h2>
            <p className="text-zinc-600 mt-2">
              Join thousands of users who are already transforming their daily
              lives
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative overflow-hidden p-6 bg-white rounded-2xl flex flex-col items-center justify-center group hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl border border-zinc-100"
              >
                {/* Background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="relative z-10 text-3xl md:text-4xl font-bold text-zinc-800 mb-1 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="relative z-10 text-sm font-medium text-zinc-600 group-hover:text-zinc-800 transition-colors">
                  {stat.label}
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-zinc-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works section */}
      <section className="relative px-4 py-24 bg-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-zinc-50 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-zinc-50 rounded-full opacity-50"></div>
          <div className="absolute top-1/2 right-0 w-32 h-32 bg-zinc-50 rounded-full opacity-50"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-2 text-sm font-medium text-zinc-700 bg-zinc-100 rounded-full">
              <Sparkles className="w-4 h-4 mr-2 text-zinc-600" />
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-800">
              How LifeHackr Works
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
              Join our community in three simple steps and start transforming
              your daily life
            </p>
          </div>

          {/* Steps with connecting line */}
          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step number badge */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-sm font-bold text-zinc-700 border border-zinc-100">
                    {index + 1}
                  </div>

                  {/* Card with hover effects */}
                  <div className="w-full p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-100 group-hover:-translate-y-2">
                    {/* Icon with background */}
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/20 to-transparent"></div>
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-zinc-800">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-600 mb-6">{step.description}</p>

                    {/* Action link */}
                    <div className="inline-flex items-center text-zinc-600 text-sm font-medium">
                      Learn more
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action button */}
          <div className="mt-16 text-center">
            <Button
              className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <Link href="/how-it-works">
                <span className="font-medium">See Detailed Process</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Hacks Section */}
      <section className="relative px-4 py-24 overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50/50 to-zinc-100/30"></div>

        {/* Decorative elements - simplified */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-zinc-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-zinc-200/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-2 text-sm font-medium text-zinc-700 bg-zinc-100 rounded-full">
              <TrendingUp className="w-4 h-4 mr-2 text-zinc-600" />
              Popular Right Now
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-800">
              Trending Life Hacks
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
              Check out these popular hacks that our community loves
            </p>
          </div>

          {/* Featured hack with larger card */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-zinc-100">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image/gradient side */}
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-zinc-500 to-zinc-600 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/90 to-zinc-600/90 group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium inline-flex items-center w-fit mb-3">
                      <Star className="w-3 h-3 mr-1 fill-zinc-200 text-zinc-200" />
                      Editor's Choice
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Ultimate Productivity System
                    </h3>
                    <p className="text-white/90 mb-4">
                      A complete framework to organize your life and boost
                      productivity by 200%
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm">
                        Over 50K people tried this
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-semibold">
                        J
                      </div>
                      <div>
                        <div className="font-medium">James Wilson</div>
                        <div className="text-xs text-zinc-500">
                          Productivity Expert
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-zinc-100 text-zinc-700 px-2 py-1 rounded-full text-xs font-medium">
                      <ThumbsUp className="w-3 h-3" /> 99% Success
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mb-3">
                    Why this works:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-700">
                        Based on proven neuroscience research
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-700">
                        Adaptable to any lifestyle or schedule
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-700">
                        Takes less than 10 minutes to implement
                      </span>
                    </li>
                  </ul>

                  <div className="mt-auto">
                    <Button
                      className="w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded-full py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                      asChild
                    >
                      <Link href="/hacks/productivity-system">
                        <span className="font-medium">View Full Hack</span>
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regular hack cards in grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredHacks.map((hack, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 border border-zinc-100"
              >
                <div className="h-48 relative overflow-hidden">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-400/80 to-zinc-600/80 group-hover:scale-105 transition-transform duration-500"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white rounded-full px-3 py-1 text-xs font-medium">
                    {hack.category}
                  </div>

                  {/* Rating badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-zinc-600 rounded-full px-2 py-1 text-xs font-medium flex items-center">
                    <Star className="w-3 h-3 mr-1 fill-zinc-500 text-zinc-500" />
                    {hack.rating}
                  </div>

                  {/* Views count */}
                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm text-white rounded-full px-2 py-1 text-xs font-medium flex items-center">
                    <Search className="w-3 h-3 mr-1" />
                    {hack.views} views
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-zinc-600 transition-colors">
                    {hack.title}
                  </h3>
                  <p className="text-sm text-zinc-600 mb-4">
                    {hack.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 text-xs font-semibold">
                        {hack.author.charAt(0)}
                      </div>
                      <span className="text-xs text-zinc-500">
                        {hack.author}
                      </span>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-zinc-600 hover:text-zinc-700 hover:bg-zinc-50 gap-1 rounded-full"
                      asChild
                    >
                      <Link href={`/hacks/${hack.slug}`}>
                        View
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-zinc-200 text-zinc-600 hover:bg-zinc-50 rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300 group"
              asChild
            >
              <Link href="/trending">
                <span className="font-medium">View All Trending Hacks</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800">
              Explore Popular Categories
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Find hacks that match your interests and discover solutions to
              everyday challenges
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex flex-col items-center text-center gap-4">
                  <div className="p-3 rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow group-hover:bg-zinc-50 w-16 h-16 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-zinc-800 group-hover:text-zinc-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1">
                      {category.description}
                    </p>
                  </div>
                  <span className="mt-2 text-zinc-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                    Explore <ArrowRight className="ml-1 w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-gradient-to-b from-zinc-100/70 to-white py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-0 w-64 h-64 bg-zinc-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-zinc-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-800 mb-4">
              Real User Stories
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              See what our community members have to say about their experience
              with LifeHackr.
            </p>
          </div>

          {/* Featured testimonial */}
          <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="aspect-square bg-zinc-100 rounded-lg"></div>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center">
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-zinc-300"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <blockquote className="text-xl font-medium text-zinc-800 mb-4">
                  "I've tried dozens of productivity apps, but LifeHackr is
                  different. The community-driven approach means I'm constantly
                  discovering new ways to improve my daily routines."
                </blockquote>
                <div className="flex items-center">
                  <div className="mr-4 w-12 h-12 rounded-full bg-zinc-100"></div>
                  <div>
                    <div className="font-medium text-zinc-900">
                      David Nguyen
                    </div>
                    <div className="text-zinc-500">Product Manager</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regular testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-zinc-100 p-6"
              >
                <div className="mb-4">
                  <svg
                    className="w-6 h-6 text-zinc-300"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <blockquote className="text-zinc-700 mb-4">
                  {testimonial.quote}
                </blockquote>
                <div>
                  <div className="font-medium text-zinc-900">
                    {testimonial.name}
                  </div>
                  <div className="text-zinc-500">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Your Hack CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm font-medium text-zinc-700 bg-zinc-100 rounded-full">
                  <LightbulbIcon className="w-4 h-4 mr-2 text-zinc-600" />
                  Share your knowledge
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">
                  Got a brilliant life hack?
                </h2>
                <p className="text-zinc-600 mb-6">
                  Share your innovative solutions with our community. Your hack
                  could be featured on our trending page and help thousands of
                  people.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-full px-6 py-6 shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2"
                    asChild
                  >
                    <Link href="/submit">
                      <Video className="w-4 h-4" />
                      Submit Your Hack
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="bg-zinc-100 relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/50 to-zinc-100/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Video className="w-10 h-10 text-zinc-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-zinc-900 text-white py-20">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900">
          {/* Animated particles */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-zinc-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-zinc-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-zinc-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute -top-12 -left-12 w-24 h-24 text-white/10">
            <Sparkles className="w-full h-full" />
          </div>
          <div className="absolute -bottom-12 -right-12 w-24 h-24 text-white/10">
            <Sparkles className="w-full h-full" />
          </div>

          {/* Main content card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                <Rocket className="w-4 h-4 mr-2 animate-pulse" />
                Join over 10,000 life hackers today
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                Ready to Transform Your Daily Life?
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-zinc-100 max-w-2xl">
                Join our community today and discover amazing life hacks that
                will make your life easier, more efficient, and more enjoyable.
              </p>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
                <div className="flex items-center space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="p-2 bg-zinc-500/30 rounded-lg">
                    <LightbulbIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white text-sm font-medium">
                    Thousands of proven hacks
                  </p>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="p-2 bg-zinc-500/30 rounded-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white text-sm font-medium">
                    Save hours every week
                  </p>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="p-2 bg-zinc-500/30 rounded-lg">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white text-sm font-medium">
                    Trusted by experts
                  </p>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white hover:bg-zinc-50 text-zinc-700 shadow-xl hover:shadow-2xl transition-all duration-300 gap-2 px-8 py-6 rounded-full group"
                  asChild
                >
                  <Link href="/auth/register">
                    <span className="font-bold">Sign Up Now - It's Free</span>
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white/50 text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-300 gap-2 px-8 py-6 rounded-full"
                  asChild
                >
                  <Link href="/about">
                    <span className="font-medium">Learn More</span>
                  </Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-8 border-t border-white/20 w-full">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-zinc-300" />
                  <span className="text-white text-sm">
                    No credit card required
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-zinc-300" />
                  <span className="text-white text-sm">Cancel anytime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-zinc-300" />
                  <span className="text-white text-sm">
                    Access to all features
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-zinc-300" />
                  <span className="text-white text-sm">New hacks daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const stats = [
  {
    value: "10K+",
    label: "Active Users",
    icon: <Users className="w-5 h-5 text-zinc-600" />,
  },
  {
    value: "50K+",
    label: "Life Hacks",
    icon: <Sparkles className="w-5 h-5 text-zinc-600" />,
  },
  {
    value: "100K+",
    label: "Monthly Views",
    icon: <Search className="w-5 h-5 text-zinc-600" />,
  },
  {
    value: "4.9/5",
    label: "User Rating",
    icon: <Star className="w-5 h-5 text-zinc-600" />,
  },
];

const steps = [
  {
    title: "Discover Hacks",
    description:
      "Browse through thousands of life hacks shared by our community",
    icon: <Search className="w-5 h-5 text-white" />,
  },
  {
    title: "Vote & Try",
    description: "Test out hacks and vote for the ones that work best",
    icon: <ThumbsUp className="w-5 h-5 text-white" />,
  },
  {
    title: "Earn Badges",
    description: "Share your own hacks and earn recognition from the community",
    icon: <Award className="w-5 h-5 text-white" />,
  },
];

const categories = [
  {
    name: "Home",
    description: "Organization & cleaning tips",
    href: "/categories/home",
    icon: <HomeIcon className="w-6 h-6 text-zinc-600" />,
  },
  {
    name: "Tech",
    description: "Digital life made simple",
    href: "/categories/tech",
    icon: <SmartphoneIcon className="w-6 h-6 text-zinc-600" />,
  },
  {
    name: "Health",
    description: "Wellness & fitness tricks",
    href: "/categories/health",
    icon: <HeartIcon className="w-6 h-6 text-zinc-600" />,
  },
  {
    name: "DIY",
    description: "Creative solutions & fixes",
    href: "/categories/diy",
    icon: <WrenchIcon className="w-6 h-6 text-zinc-600" />,
  },
];

const featuredHacks = [
  {
    title: "Double Your Phone Battery Life",
    description:
      "Simple settings changes that can dramatically improve your smartphone's battery performance.",
    category: "Tech",
    rating: "4.9",
    views: "24.5K",
    author: "Michael Chen",
    slug: "double-phone-battery-life",
  },
  {
    title: "5-Minute Morning Routine",
    description:
      "Start your day right with this science-backed morning routine that boosts productivity.",
    category: "Health",
    rating: "4.8",
    views: "18.3K",
    author: "Emma Rodriguez",
    slug: "5-minute-morning-routine",
  },
  {
    title: "Natural Cleaning Solutions",
    description:
      "Make effective cleaning products using common household ingredients that are eco-friendly.",
    category: "Home",
    rating: "4.7",
    views: "15.9K",
    author: "Sarah Johnson",
    slug: "natural-cleaning-solutions",
  },
];

const testimonials = [
  {
    quote:
      "LifeHackr has completely changed how I organize my home. The cleaning hacks alone saved me hours every week!",
    name: "Sarah Johnson",
    title: "Busy Parent",
  },
  {
    quote:
      "As a tech enthusiast, I'm always looking for new tricks. The smartphone hacks on this platform are genuinely useful.",
    name: "Michael Chen",
    title: "Software Developer",
  },
  {
    quote:
      "The wellness tips have helped me establish a morning routine that has improved my energy levels dramatically.",
    name: "Emma Rodriguez",
    title: "Fitness Coach",
  },
];
