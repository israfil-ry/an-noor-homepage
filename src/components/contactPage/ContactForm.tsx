import { ArrowUpRight, Send } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <Card className="rounded-3xl border border-gray-200 bg-white shadow-sm">
      <CardContent className="p-7 sm:p-10">
        <div className="mb-8">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            <Send className="h-5 w-5" />
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Send Us a Message
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Fill out the form below and we&apos;ll get back to you as soon as
            possible.
          </p>
        </div>

        <form className="space-y-6">
          {/* Full Name and Subject */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label
                htmlFor="fullName"
                className="text-sm font-medium text-gray-700"
              >
                Full Name <span className="text-red-500">*</span>
              </Label>

              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                required
                className="h-12 rounded-xl border-gray-200 bg-gray-50 px-4 shadow-none transition-colors focus-visible:border-emerald-600 focus-visible:bg-white focus-visible:ring-emerald-600/10"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="subject"
                className="text-sm font-medium text-gray-700"
              >
                Subject <span className="text-red-500">*</span>
              </Label>

              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Enter message subject"
                required
                className="h-12 rounded-xl border-gray-200 bg-gray-50 px-4 shadow-none transition-colors focus-visible:border-emerald-600 focus-visible:bg-white focus-visible:ring-emerald-600/10"
              />
            </div>
          </div>

          {/* Email and Contact Number */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email Address <span className="text-red-500">*</span>
              </Label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="h-12 rounded-xl border-gray-200 bg-gray-50 px-4 shadow-none transition-colors focus-visible:border-emerald-600 focus-visible:bg-white focus-visible:ring-emerald-600/10"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="contactNumber"
                className="text-sm font-medium text-gray-700"
              >
                Contact Number <span className="text-red-500">*</span>
              </Label>

              <Input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                placeholder="Enter contact number"
                required
                className="h-12 rounded-xl border-gray-200 bg-gray-50 px-4 shadow-none transition-colors focus-visible:border-emerald-600 focus-visible:bg-white focus-visible:ring-emerald-600/10"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              Messages <span className="text-red-500">*</span>
            </Label>

            <Textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows={6}
              required
              className="min-h-36 resize-y rounded-xl border-gray-200 bg-gray-50 px-4 py-3 shadow-none transition-colors focus-visible:border-emerald-600 focus-visible:bg-white focus-visible:ring-emerald-600/10"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-emerald-700 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800 sm:w-auto sm:min-w-44"
          >
            Send Message
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>

          <p className="text-xs leading-5 text-gray-400">
            Fields marked with <span className="text-red-500">*</span> are
            required.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
