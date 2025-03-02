"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  ArrowRight,
  Clock,
  Info,
  Link2,
  ListChecks,
  Plus,
  Star,
  Tag,
  Trash2,
  Video,
  ThumbsUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

// Define the form schema with validation
const formSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(100, {
      message: "Title must not exceed 100 characters.",
    }),
  description: z
    .string()
    .min(20, {
      message: "Description must be at least 20 characters.",
    })
    .max(500, {
      message: "Description must not exceed 500 characters.",
    }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  difficulty: z.string({
    required_error: "Please select a difficulty level.",
  }),
  timeToImplement: z.string({
    required_error: "Please select an implementation time.",
  }),
  videoUrl: z.string().url({
    message: "Please enter a valid URL.",
  }),
  benefits: z.array(z.string()).min(1, {
    message: "Please add at least one benefit.",
  }),
  materials: z.array(z.string()).optional(),
  steps: z.array(z.string()).optional(),
  tags: z
    .array(z.string())
    .min(1, {
      message: "Please add at least one tag.",
    })
    .max(5, {
      message: "You can add up to 5 tags.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function SubmitHackPage() {
  const [benefits, setBenefits] = useState<string[]>([]);
  const [newBenefit, setNewBenefit] = useState("");
  const [materials, setMaterials] = useState<string[]>([]);
  const [newMaterial, setNewMaterial] = useState("");
  const [steps, setSteps] = useState<string[]>([]);
  const [newStep, setNewStep] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      difficulty: "",
      timeToImplement: "",
      videoUrl: "",
      benefits: [],
      materials: [],
      steps: [],
      tags: [],
    },
  });

  // Handle video URL changes to show preview
  const handleVideoUrlChange = (url: string) => {
    if (!url) {
      setVideoPreview(null);
      return;
    }

    // Extract video ID from YouTube URL
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      let videoId = "";
      if (url.includes("v=")) {
        videoId = url.split("v=")[1].split("&")[0];
      } else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1].split("?")[0];
      }

      if (videoId) {
        setVideoPreview(`https://www.youtube.com/embed/${videoId}`);
      }
    }
    // Extract video ID from TikTok URL
    else if (url.includes("tiktok.com")) {
      setVideoPreview(url); // For TikTok, we'll just display the URL for now
    }
  };

  // Handle form submission
  const onSubmit = (data: FormValues) => {
    // Update arrays with current state
    data.benefits = benefits;
    data.materials = materials;
    data.steps = steps;
    data.tags = tags;

    console.log(data);
    // Here you would typically send the data to your API

    // Redirect to success page
    window.location.href = "/submit/success";
  };

  // Helper functions for managing arrays
  const addBenefit = () => {
    if (newBenefit && !benefits.includes(newBenefit)) {
      const updatedBenefits = [...benefits, newBenefit];
      setBenefits(updatedBenefits);
      form.setValue("benefits", updatedBenefits);
      setNewBenefit("");
    }
  };

  const removeBenefit = (index: number) => {
    const updatedBenefits = benefits.filter((_, i) => i !== index);
    setBenefits(updatedBenefits);
    form.setValue("benefits", updatedBenefits);
  };

  const addMaterial = () => {
    if (newMaterial && !materials.includes(newMaterial)) {
      const updatedMaterials = [...materials, newMaterial];
      setMaterials(updatedMaterials);
      form.setValue("materials", updatedMaterials);
      setNewMaterial("");
    }
  };

  const removeMaterial = (index: number) => {
    const updatedMaterials = materials.filter((_, i) => i !== index);
    setMaterials(updatedMaterials);
    form.setValue("materials", updatedMaterials);
  };

  const addStep = () => {
    if (newStep) {
      const updatedSteps = [...steps, newStep];
      setSteps(updatedSteps);
      form.setValue("steps", updatedSteps);
      setNewStep("");
    }
  };

  const removeStep = (index: number) => {
    const updatedSteps = steps.filter((_, i) => i !== index);
    setSteps(updatedSteps);
    form.setValue("steps", updatedSteps);
  };

  const addTag = () => {
    if (newTag && !tags.includes(newTag) && tags.length < 5) {
      const updatedTags = [...tags, newTag];
      setTags(updatedTags);
      form.setValue("tags", updatedTags);
      setNewTag("");
    }
  };

  const removeTag = (index: number) => {
    const updatedTags = tags.filter((_, i) => i !== index);
    setTags(updatedTags);
    form.setValue("tags", updatedTags);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1:
        return "Basic Info";
      case 2:
        return "Content";
      case 3:
        return "Finalize";
      default:
        return "";
    }
  };

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Info className="w-5 h-5" />;
      case 2:
        return <Video className="w-5 h-5" />;
      case 3:
        return <Star className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-50/50">
      {/* Header section */}
      <div className="relative bg-gradient-to-b from-zinc-100/80 to-white pt-16 pb-8">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-48 left-0 w-96 h-96 bg-zinc-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-48 right-0 w-96 h-96 bg-zinc-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm font-medium text-zinc-800 bg-white rounded-full shadow-sm border border-zinc-100">
              <Video className="w-4 h-4 mr-2 text-zinc-600" />
              Share your knowledge
            </div>
            <h1 className="text-4xl font-bold text-zinc-800 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600">
              Submit a Hack
            </h1>
            <p className="text-zinc-600 text-lg mb-6">
              Share your favorite life hack with the community in just a few
              steps.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 -mt-6">
        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 mb-6">
            <div className="flex items-center justify-between relative max-w-2xl mx-auto">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center relative z-10"
                >
                  <button
                    onClick={() => setCurrentStep(index + 1)}
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      currentStep >= index + 1
                        ? "bg-zinc-800 text-white shadow-md"
                        : "bg-zinc-50 text-zinc-400"
                    }`}
                  >
                    {getStepIcon(index + 1)}
                  </button>
                  <span
                    className={`mt-3 text-sm font-medium transition-colors duration-300 ${
                      currentStep >= index + 1
                        ? "text-zinc-800"
                        : "text-zinc-400"
                    }`}
                  >
                    {getStepTitle(index + 1)}
                  </span>
                </div>
              ))}
              {/* Progress line */}
              <div className="absolute top-7 left-0 right-0 h-0.5 bg-zinc-100">
                <div
                  className="h-full bg-zinc-800 transition-all duration-300"
                  style={{
                    width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Form Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Step 1: Basic Information */}
                  <div className={currentStep === 1 ? "block" : "hidden"}>
                    <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-8 space-y-8">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base">Title</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter a catchy title for your hack"
                                className="h-12 text-base"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-3 gap-6">
                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base">
                                Category
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-12 text-base">
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="tech">Tech</SelectItem>
                                  <SelectItem value="home">Home</SelectItem>
                                  <SelectItem value="health">Health</SelectItem>
                                  <SelectItem value="productivity">
                                    Productivity
                                  </SelectItem>
                                  <SelectItem value="finance">
                                    Finance
                                  </SelectItem>
                                  <SelectItem value="cooking">
                                    Cooking
                                  </SelectItem>
                                  <SelectItem value="diy">DIY</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="difficulty"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base">
                                Difficulty
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-12 text-base">
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="beginner">
                                    Beginner
                                  </SelectItem>
                                  <SelectItem value="intermediate">
                                    Intermediate
                                  </SelectItem>
                                  <SelectItem value="advanced">
                                    Advanced
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="timeToImplement"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base">Time</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-12 text-base">
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="under5">
                                    Under 5 min
                                  </SelectItem>
                                  <SelectItem value="5to15">
                                    5-15 min
                                  </SelectItem>
                                  <SelectItem value="15to30">
                                    15-30 min
                                  </SelectItem>
                                  <SelectItem value="over30">
                                    Over 30 min
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base">
                              Description
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your hack in detail"
                                className="min-h-[120px] text-base resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="tags"
                        render={() => (
                          <FormItem>
                            <FormLabel className="text-base">
                              Tags (up to 5)
                            </FormLabel>
                            <div className="flex gap-3">
                              <FormControl>
                                <Input
                                  placeholder="Add a tag"
                                  value={newTag}
                                  onChange={(e) => setNewTag(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                      e.preventDefault();
                                      addTag();
                                    }
                                  }}
                                  className="h-12 text-base"
                                />
                              </FormControl>
                              <Button
                                type="button"
                                variant="outline"
                                onClick={addTag}
                                disabled={tags.length >= 5}
                                className="h-12 px-4"
                              >
                                <Plus className="w-5 h-5" />
                              </Button>
                            </div>
                            <FormMessage />

                            {tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-4">
                                {tags.map((tag, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="bg-zinc-50 text-zinc-700 border-zinc-200 px-3 py-1.5 text-sm flex items-center gap-2"
                                  >
                                    <span>{tag}</span>
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => removeTag(index)}
                                      className="h-5 w-5 p-0 text-zinc-400 hover:text-red-500"
                                    >
                                      <Trash2 className="w-3 h-3" />
                                    </Button>
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Step 2: Content */}
                  <div className={currentStep === 2 ? "block" : "hidden"}>
                    <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-8 space-y-8">
                      <FormField
                        control={form.control}
                        name="videoUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base">
                              Video URL
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Paste YouTube or TikTok URL"
                                {...field}
                                onChange={(e) => {
                                  field.onChange(e);
                                  handleVideoUrlChange(e.target.value);
                                }}
                                className="h-12 text-base"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <FormField
                            control={form.control}
                            name="benefits"
                            render={() => (
                              <FormItem>
                                <FormLabel className="text-base">
                                  Key Benefits
                                </FormLabel>
                                <div className="flex gap-3">
                                  <FormControl>
                                    <Input
                                      placeholder="Add a benefit"
                                      value={newBenefit}
                                      onChange={(e) =>
                                        setNewBenefit(e.target.value)
                                      }
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                          e.preventDefault();
                                          addBenefit();
                                        }
                                      }}
                                      className="h-12 text-base"
                                    />
                                  </FormControl>
                                  <Button
                                    type="button"
                                    variant="outline"
                                    onClick={addBenefit}
                                    className="h-12 px-4"
                                  >
                                    <Plus className="w-5 h-5" />
                                  </Button>
                                </div>
                                <FormMessage />

                                {benefits.length > 0 && (
                                  <ul className="mt-4 space-y-2 max-h-[240px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent">
                                    {benefits.map((benefit, index) => (
                                      <li
                                        key={index}
                                        className="flex items-center justify-between bg-zinc-50 px-4 py-3 rounded-lg"
                                      >
                                        <span className="text-zinc-700 text-sm">
                                          {benefit}
                                        </span>
                                        <Button
                                          type="button"
                                          variant="ghost"
                                          size="sm"
                                          onClick={() => removeBenefit(index)}
                                          className="h-8 w-8 p-0 text-zinc-400 hover:text-red-500"
                                        >
                                          <Trash2 className="w-4 h-4" />
                                        </Button>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </FormItem>
                            )}
                          />
                        </div>

                        <div>
                          <h3 className="text-base font-medium text-zinc-800 mb-3">
                            Materials Needed (Optional)
                          </h3>
                          <div className="flex gap-3">
                            <Input
                              placeholder="Add a material"
                              value={newMaterial}
                              onChange={(e) => setNewMaterial(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  addMaterial();
                                }
                              }}
                              className="h-12 text-base"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              onClick={addMaterial}
                              className="h-12 px-4"
                            >
                              <Plus className="w-5 h-5" />
                            </Button>
                          </div>

                          {materials.length > 0 && (
                            <ul className="mt-4 space-y-2 max-h-[240px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent">
                              {materials.map((material, index) => (
                                <li
                                  key={index}
                                  className="flex items-center justify-between bg-zinc-50 px-4 py-3 rounded-lg"
                                >
                                  <span className="text-zinc-700 text-sm">
                                    {material}
                                  </span>
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeMaterial(index)}
                                    className="h-8 w-8 p-0 text-zinc-400 hover:text-red-500"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-base font-medium text-zinc-800 mb-3">
                          Step-by-Step Instructions (Optional)
                        </h3>
                        <div className="flex gap-3">
                          <Textarea
                            placeholder="Add a step"
                            value={newStep}
                            onChange={(e) => setNewStep(e.target.value)}
                            className="min-h-[100px] text-base resize-none"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={addStep}
                            className="h-auto px-4"
                          >
                            <Plus className="w-5 h-5" />
                          </Button>
                        </div>

                        {steps.length > 0 && (
                          <ul className="mt-4 space-y-3 max-h-[320px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent">
                            {steps.map((step, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-4 bg-zinc-50 p-4 rounded-lg"
                              >
                                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 mt-0.5 text-sm font-medium shadow-sm">
                                  {index + 1}
                                </div>
                                <div className="flex-grow">
                                  <p className="text-zinc-700 text-sm">
                                    {step}
                                  </p>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeStep(index)}
                                  className="h-8 w-8 p-0 text-zinc-400 hover:text-red-500 flex-shrink-0"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Review & Submit */}
                  <div className={currentStep === 3 ? "block" : "hidden"}>
                    <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-8">
                      <h3 className="font-medium text-zinc-800 text-lg mb-6">
                        Review Your Hack
                      </h3>

                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                          <div className="bg-zinc-50 rounded-xl p-4">
                            <h4 className="text-sm font-medium text-zinc-500 mb-1">
                              Title
                            </h4>
                            <p className="text-zinc-800 font-medium">
                              {form.watch("title") || "Not provided"}
                            </p>
                          </div>
                          <div className="bg-zinc-50 rounded-xl p-4">
                            <h4 className="text-sm font-medium text-zinc-500 mb-1">
                              Category
                            </h4>
                            <p className="text-zinc-800 font-medium">
                              {form.watch("category") || "Not selected"}
                            </p>
                          </div>
                          <div className="bg-zinc-50 rounded-xl p-4">
                            <h4 className="text-sm font-medium text-zinc-500 mb-1">
                              Difficulty
                            </h4>
                            <p className="text-zinc-800 font-medium">
                              {form.watch("difficulty") || "Not selected"}
                            </p>
                          </div>
                          <div className="bg-zinc-50 rounded-xl p-4">
                            <h4 className="text-sm font-medium text-zinc-500 mb-1">
                              Time to Implement
                            </h4>
                            <p className="text-zinc-800 font-medium">
                              {form.watch("timeToImplement")
                                ? form
                                    .watch("timeToImplement")
                                    .replace("under", "Under ")
                                    .replace("to", "-")
                                    .replace("over", "Over ") + " minutes"
                                : "Not selected"}
                            </p>
                          </div>
                        </div>

                        <div className="bg-zinc-50 rounded-xl p-4">
                          <h4 className="text-sm font-medium text-zinc-500 mb-2">
                            Description
                          </h4>
                          <p className="text-zinc-800 whitespace-pre-line">
                            {form.watch("description") || "Not provided"}
                          </p>
                        </div>

                        {videoPreview && (
                          <div className="bg-zinc-50 rounded-xl p-4">
                            <h4 className="text-sm font-medium text-zinc-500 mb-2">
                              Video
                            </h4>
                            <div className="aspect-video bg-white rounded-lg overflow-hidden border border-zinc-200">
                              {videoPreview.includes("youtube.com") ? (
                                <iframe
                                  src={videoPreview}
                                  className="w-full h-full"
                                  allowFullScreen
                                  title="Video preview"
                                ></iframe>
                              ) : (
                                <div className="flex items-center justify-center h-full">
                                  <p className="text-zinc-500">
                                    <Link2 className="w-5 h-5 inline mr-2" />
                                    {videoPreview}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {benefits.length > 0 && (
                          <div className="bg-zinc-50 rounded-xl p-4">
                            <h4 className="text-sm font-medium text-zinc-500 mb-2">
                              Benefits
                            </h4>
                            <ul className="list-disc pl-5 space-y-1 text-zinc-800">
                              {benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {materials.length > 0 && (
                          <div className="bg-zinc-50 rounded-xl p-4">
                            <h4 className="text-sm font-medium text-zinc-500 mb-2">
                              Materials
                            </h4>
                            <ul className="list-disc pl-5 space-y-1 text-zinc-800">
                              {materials.map((material, index) => (
                                <li key={index}>{material}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {steps.length > 0 && (
                          <div className="bg-zinc-50 rounded-xl p-4">
                            <h4 className="text-sm font-medium text-zinc-500 mb-2">
                              Steps
                            </h4>
                            <ol className="list-decimal pl-5 space-y-2 text-zinc-800">
                              {steps.map((step, index) => (
                                <li key={index}>{step}</li>
                              ))}
                            </ol>
                          </div>
                        )}

                        {tags.length > 0 && (
                          <div className="bg-zinc-50 rounded-xl p-4">
                            <h4 className="text-sm font-medium text-zinc-500 mb-2">
                              Tags
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {tags.map((tag, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="bg-white border-zinc-200"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="h-12 px-6"
                    >
                      Previous
                    </Button>
                    {currentStep === totalSteps ? (
                      <Button
                        type="submit"
                        className="bg-zinc-800 hover:bg-zinc-700 h-12 px-8"
                      >
                        Submit Hack
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-zinc-800 hover:bg-zinc-700 h-12 px-8"
                      >
                        Continue
                      </Button>
                    )}
                  </div>
                </div>

                {/* Preview Panel */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 sticky top-6">
                    <h3 className="font-medium text-zinc-800 mb-4">
                      Live Preview
                    </h3>
                    <Card className="border border-zinc-200 rounded-xl overflow-hidden">
                      <CardHeader className="p-4 border-b border-zinc-100">
                        <h4 className="font-medium text-zinc-900">
                          {form.watch("title") || "Your Hack Title"}
                        </h4>
                        <div className="flex gap-2 mt-2">
                          {form.watch("category") && (
                            <Badge variant="outline" className="bg-zinc-50">
                              {form.watch("category")}
                            </Badge>
                          )}
                          {form.watch("difficulty") && (
                            <Badge variant="outline" className="bg-zinc-50">
                              {form.watch("difficulty")}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <p className="text-sm text-zinc-600 line-clamp-3">
                          {form.watch("description") ||
                            "Your hack description will appear here..."}
                        </p>
                        {videoPreview && (
                          <div className="mt-4 aspect-video bg-zinc-50 rounded-lg overflow-hidden border border-zinc-100">
                            {videoPreview.includes("youtube.com") ? (
                              <iframe
                                src={videoPreview}
                                className="w-full h-full"
                                allowFullScreen
                                title="Video preview"
                              ></iframe>
                            ) : (
                              <div className="flex items-center justify-center h-full">
                                <p className="text-zinc-500">
                                  <Link2 className="w-5 h-5 inline mr-2" />
                                  {videoPreview}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </CardContent>
                      <CardFooter className="p-4 bg-zinc-50 border-t border-zinc-100">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-2 text-zinc-500 text-xs">
                            <Clock className="w-3 h-3" />
                            {form.watch("timeToImplement")
                              ? form
                                  .watch("timeToImplement")
                                  .replace("under", "<")
                                  .replace("to", "-")
                                  .replace("over", ">")
                              : "Time to implement"}
                          </div>
                          <div className="flex gap-1">
                            {tags.slice(0, 2).map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs bg-white"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {tags.length > 2 && (
                              <Badge
                                variant="outline"
                                className="text-xs bg-white"
                              >
                                +{tags.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardFooter>
                    </Card>

                    <div className="mt-4 text-xs text-zinc-500">
                      <p>
                        Complete all required fields to submit your hack. The
                        preview updates as you type.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
