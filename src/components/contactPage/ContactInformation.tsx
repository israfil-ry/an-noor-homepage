import Link from "next/link";
import { ArrowUpRight, MessageCircle, ShieldCheck } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { contactInformation } from "./contactData";

export default function ContactInformation() {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-3xl bg-emerald-950 p-8 text-white sm:p-10">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-700/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />

      <div className="relative">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-emerald-300">
          <MessageCircle className="h-7 w-7" />
        </div>

        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
          Contact Information
        </p>

        <h3 className="mt-4 text-3xl font-bold tracking-tight">
          Let&apos;s Start a Conversation
        </h3>

        <p className="mt-4 leading-7 text-emerald-100/75">
          Have questions about AnNoor or need help with something? Reach out to
          us through any of the contact methods below. We&apos;re always happy
          to hear from you.
        </p>

        <Separator className="my-9 bg-white/15" />

        <div className="space-y-8">
          {contactInformation.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-emerald-300">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-emerald-200/70">{item.title}</p>

                  <Link
                    href={item.href}
                    target={item.title === "Website" ? "_blank" : undefined}
                    rel={
                      item.title === "Website"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-1 inline-flex items-center gap-1 break-all font-medium text-white transition-colors hover:text-emerald-300"
                  >
                    {item.value}
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Privacy Message */}
      <div className="relative mt-auto pt-12">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-300" />
            <p className="font-semibold text-white">Your privacy matters</p>
          </div>

          <p className="mt-2 text-sm leading-6 text-emerald-100/70">
            For privacy-related questions or requests, you can contact us
            directly through our email address.
          </p>
        </div>
      </div>
    </div>
  );
}
