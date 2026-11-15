"use client";

import { useActionState, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { Heart, LockKeyhole, LoaderCircle, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { stripePromise } from "@/lib/stripe";

import DonationPaymentForm from "./DonationPaymentForm";
import {
  createWebsiteDonation,
  type DonationFormState,
} from "@/services/support/supportAction";

const PRESET_AMOUNTS = [5, 10, 20, 50] as const;

type SelectedPreset = number | "custom";

export default function DonationAmountCard() {
  const [amount, setAmount] = useState("20");

  const [selectedPreset, setSelectedPreset] = useState<SelectedPreset>(20);

  const [paymentState, setPaymentState] = useState(false);

  const initialDonationState: DonationFormState = {
    status: "idle",
  };

  const [state, formAction, isPending] = useActionState(
    createWebsiteDonation,
    initialDonationState,
  );

  const formattedAmount = Number.isFinite(Number(amount))
    ? new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(Number(amount))
    : "0.00";

  const handlePresetSelect = (value: number) => {
    setAmount(String(value));
    setSelectedPreset(value);
  };

  const handleCustomSelect = () => {
    setAmount("");
    setSelectedPreset("custom");
  };

  const fieldError = (field: "amount" | "donorName" | "donorEmail") =>
    state.fieldErrors?.[field]?.[0];

  // PaymentIntent successfully created.
  const isPaymentReady =
    state.status === "ready" && !!state.clientSecret && !!state.donationId;

  // Show server-side general error.
  if (state.status === "error" && state.message) {
    // Errors are displayed below in the normal form.
  }

  return (
    <>
      <Card className="rounded-3xl border border-border bg-white py-0 shadow-sm ring-1 ring-foreground/5">
        <CardHeader className="px-7 pt-8 sm:px-9 sm:pt-9">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-primary">
            <Heart className="h-6 w-6" />
          </div>

          <CardTitle className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {isPaymentReady ? "Complete Your Donation" : "Make a Donation"}
          </CardTitle>

          <CardDescription className="text-sm leading-6 sm:text-base">
            {isPaymentReady
              ? "Your donation details are ready. Enter your card information to complete your contribution."
              : "Choose an amount and enter your information to support AnNoor."}
          </CardDescription>
        </CardHeader>

        <CardContent className="px-7 pb-8 sm:px-9 sm:pb-9">
          {isPaymentReady ? (
            paymentState ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-primary">
                  <Heart className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold text-emerald-800">
                  Donation Successful!
                </h3>

                <p className="mt-2 text-sm leading-6 text-emerald-700">
                  JazakAllahu Khairan! Thank you for supporting AnNoor. Your
                  contribution is greatly appreciated.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-4">
                  <div>
                    <p className="text-sm text-gray-600">Your donation</p>

                    <p className="text-2xl font-bold text-primary">
                      ${formattedAmount} USD
                    </p>
                  </div>

                  <LockKeyhole className="h-7 w-7 text-primary" />
                </div>

                <Elements
                  key={state.clientSecret}
                  stripe={stripePromise}
                  options={{
                    clientSecret: state.clientSecret!,
                    appearance: {
                      theme: "stripe",
                      variables: {
                        colorPrimary: "#0D6847",
                        borderRadius: "10px",
                        fontFamily: "Montserrat, sans-serif",
                      },
                    },
                  }}
                >
                  <DonationPaymentForm
                    donationId={state.donationId!}
                    onBack={() => window.location.reload()}
                    onSuccess={() => {
                      toast.success(
                        "JazakAllahu Khairan! Your donation was successful.",
                      );

                      setPaymentState(true);
                    }}
                  />
                </Elements>

                {paymentState && (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center">
                    <h3 className="text-xl font-bold text-emerald-800">
                      Donation Successful!
                    </h3>

                    <p className="mt-2 text-sm text-emerald-700">
                      Thank you for supporting AnNoor. JazakAllahu Khairan!
                    </p>
                  </div>
                )}
              </div>
            )
          ) : (
            <form action={formAction} noValidate className="space-y-7">
              {/* Donation Amount */}
              <div>
                <Label className="mb-4 block text-base font-semibold text-gray-900">
                  Choose an Amount
                </Label>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {PRESET_AMOUNTS.map((value) => {
                    const selected = selectedPreset === value;

                    return (
                      <button
                        key={value}
                        type="button"
                        disabled={isPending}
                        aria-pressed={selected}
                        onClick={() => handlePresetSelect(value)}
                        className={`flex h-14 items-center justify-center rounded-xl border text-lg font-bold transition-all ${
                          selected
                            ? "border-primary bg-primary text-white shadow-sm"
                            : "border-border bg-white text-gray-900 hover:border-primary hover:bg-emerald-50"
                        }`}
                      >
                        ${value}
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    disabled={isPending}
                    aria-pressed={selectedPreset === "custom"}
                    onClick={handleCustomSelect}
                    className={`col-span-2 flex h-14 items-center justify-center rounded-xl border font-bold transition-all sm:col-span-1 ${
                      selectedPreset === "custom"
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-white text-gray-900 hover:border-primary hover:bg-emerald-50"
                    }`}
                  >
                    Custom
                  </button>
                </div>

                <div className="mt-5">
                  <Label
                    htmlFor="donation-amount"
                    className="mb-2 block font-semibold"
                  >
                    Donation Amount
                  </Label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-gray-600">
                      $
                    </span>

                    <Input
                      id="donation-amount"
                      name="amount"
                      type="number"
                      min="1"
                      max="10000"
                      step="0.01"
                      required
                      value={amount}
                      disabled={isPending}
                      onChange={(event) => {
                        setAmount(event.target.value);
                        setSelectedPreset("custom");
                      }}
                      placeholder="Enter custom amount"
                      aria-invalid={!!fieldError("amount")}
                      className="h-12 rounded-xl bg-gray-50 pl-9 text-base"
                    />
                  </div>

                  <p className="mt-2 text-xs text-muted-foreground">
                    Minimum $1.00 · Maximum $10,000
                  </p>

                  {fieldError("amount") && (
                    <p className="mt-2 text-sm text-red-600">
                      {fieldError("amount")}
                    </p>
                  )}
                </div>
              </div>

              {/* Donor Information */}
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Donor Information
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Please provide your contact information.
                  </p>
                </div>

                {/* Full Name */}
                <div>
                  <Label
                    htmlFor="donorName"
                    className="mb-2 block font-semibold"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    id="donorName"
                    name="donorName"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    minLength={2}
                    maxLength={100}
                    disabled={isPending}
                    aria-invalid={!!fieldError("donorName")}
                    className="h-12 rounded-xl bg-gray-50"
                  />

                  {fieldError("donorName") && (
                    <p className="mt-2 text-sm text-red-600">
                      {fieldError("donorName")}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label
                    htmlFor="donorEmail"
                    className="mb-2 block font-semibold"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    id="donorEmail"
                    name="donorEmail"
                    type="email"
                    placeholder="example@email.com"
                    required
                    maxLength={254}
                    disabled={isPending}
                    aria-invalid={!!fieldError("donorEmail")}
                    className="h-12 rounded-xl bg-gray-50"
                  />

                  {fieldError("donorEmail") && (
                    <p className="mt-2 text-sm text-red-600">
                      {fieldError("donorEmail")}
                    </p>
                  )}
                </div>

                {/* Currency */}
                <div>
                  <Label
                    htmlFor="currency"
                    className="mb-2 block font-semibold"
                  >
                    Currency
                  </Label>

                  <Input
                    id="currency"
                    value="USD - US Dollar"
                    disabled
                    readOnly
                    className="h-12 rounded-xl bg-gray-100 font-medium text-gray-600"
                  />

                  <p className="mt-2 text-xs text-muted-foreground">
                    All donations are processed in US Dollars.
                  </p>
                </div>
              </div>

              {/* General Server Error */}
              {state.status === "error" && state.message && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                >
                  {state.message}
                </div>
              )}

              {/* Submit */}
              <div>
                <Button
                  type="submit"
                  disabled={isPending}
                  className="h-14 w-full rounded-xl text-base font-bold shadow-md"
                >
                  {isPending ? (
                    <>
                      <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                      Initializing Donation...
                    </>
                  ) : (
                    `Continue $${formattedAmount} Donation`
                  )}
                </Button>

                <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
                  <LockKeyhole className="h-4 w-4 shrink-0" />

                  <span>Secure payment processing powered by Stripe.</span>
                </div>
              </div>
            </form>
          )}
        </CardContent>
      </Card>

      {/* Full-screen loading overlay during server action */}
      {isPending && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 px-5 backdrop-blur-sm">
          <div className="flex w-full max-w-sm flex-col items-center rounded-2xl bg-white p-8 text-center shadow-2xl">
            <LoaderCircle className="mb-5 h-12 w-12 animate-spin text-primary" />

            <h3 className="text-xl font-bold text-gray-900">
              Preparing Your Donation
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Please wait while we securely initialize your payment.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
