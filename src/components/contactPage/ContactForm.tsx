"use client";

import { useActionState } from "react";
import { ArrowUpRight, Send } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  ContactFormState,
  submitContactForm,
} from "@/services/contact/contactAction";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

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

        <form action={formAction} className="space-y-6">
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
                minLength={2}
                maxLength={100}
                autoComplete="name"
                aria-invalid={!!state.errors?.fullName}
                aria-describedby={
                  state.errors?.fullName ? "fullName-error" : undefined
                }
                className="h-12 rounded-xl border-gray-200 bg-gray-50 px-4 shadow-none transition-colors focus-visible:border-emerald-600 focus-visible:bg-white focus-visible:ring-emerald-600/10"
              />

              {state.errors?.fullName && (
                <p id="fullName-error" className="text-sm text-red-600">
                  {state.errors.fullName}
                </p>
              )}
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
                maxLength={150}
                aria-invalid={!!state.errors?.subject}
                aria-describedby={
                  state.errors?.subject ? "subject-error" : undefined
                }
                className="h-12 rounded-xl border-gray-200 bg-gray-50 px-4 shadow-none transition-colors focus-visible:border-emerald-600 focus-visible:bg-white focus-visible:ring-emerald-600/10"
              />

              {state.errors?.subject && (
                <p id="subject-error" className="text-sm text-red-600">
                  {state.errors.subject}
                </p>
              )}
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
                maxLength={254}
                autoComplete="email"
                aria-invalid={!!state.errors?.email}
                aria-describedby={
                  state.errors?.email ? "email-error" : undefined
                }
                className="h-12 rounded-xl border-gray-200 bg-gray-50 px-4 shadow-none transition-colors focus-visible:border-emerald-600 focus-visible:bg-white focus-visible:ring-emerald-600/10"
              />

              {state.errors?.email && (
                <p id="email-error" className="text-sm text-red-600">
                  {state.errors.email}
                </p>
              )}
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
                maxLength={20}
                autoComplete="tel"
                aria-invalid={!!state.errors?.contactNumber}
                aria-describedby={
                  state.errors?.contactNumber
                    ? "contactNumber-error"
                    : undefined
                }
                className="h-12 rounded-xl border-gray-200 bg-gray-50 px-4 shadow-none transition-colors focus-visible:border-emerald-600 focus-visible:bg-white focus-visible:ring-emerald-600/10"
              />

              {state.errors?.contactNumber && (
                <p id="contactNumber-error" className="text-sm text-red-600">
                  {state.errors.contactNumber}
                </p>
              )}
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
              minLength={10}
              maxLength={5000}
              aria-invalid={!!state.errors?.message}
              aria-describedby={
                state.errors?.message ? "message-error" : undefined
              }
              className="min-h-36 resize-y rounded-xl border-gray-200 bg-gray-50 px-4 py-3 shadow-none transition-colors focus-visible:border-emerald-600 focus-visible:bg-white focus-visible:ring-emerald-600/10"
            />

            {state.errors?.message && (
              <p id="message-error" className="text-sm text-red-600">
                {state.errors.message}
              </p>
            )}
          </div>

          {/* Honeypot field - hidden from real users */}
          <div
            className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
            aria-hidden="true"
          >
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* General success/error message */}
          {state.message && (
            <p
              role="status"
              aria-live="polite"
              className={`rounded-lg p-3 text-sm ${
                state.success
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {state.message}
            </p>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={pending}
            className="h-12 w-full rounded-full bg-emerald-700 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800 sm:w-auto sm:min-w-44"
          >
            {pending ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </>
            )}
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
