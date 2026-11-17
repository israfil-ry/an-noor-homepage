"use client";

import { useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { LoaderCircle, ShieldCheck, ChevronDown } from "lucide-react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { confirmWebsiteDonation } from "@/services/support/supportAction";

interface DonationPaymentFormProps {
  donationId: number;
  clientSecret: string;
  onBack: () => void;
  onSuccess: () => void;
}

const cardElementOptions = {
  style: {
    base: {
      fontSize: "16px",
      color: "#374151",
      fontFamily: "Montserrat, sans-serif",
      "::placeholder": {
        color: "#9CA3AF",
      },
    },
    invalid: {
      color: "#DC2626",
    },
  },
};

const COUNTRIES = [
  { code: "BD", name: "Bangladesh" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "IN", name: "India" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "MY", name: "Malaysia" },
  { code: "SG", name: "Singapore" },
];

export default function DonationPaymentForm({
  donationId,
  clientSecret,
  onBack,
  onSuccess,
}: DonationPaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("BD");

  const handlePayment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements || loading) return;

    const cardNumberElement = elements.getElement(CardNumberElement);

    if (!cardNumberElement) {
      toast.error("Card information is not available.");
      return;
    }

    setLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardNumberElement,
            billing_details: {
              address: {
                country,
              },
            },
          },
          return_url: `${window.location.origin}/support?donation_id=${donationId}`,
        },
        {
          handleActions: true,
        },
      );

      if (error) {
        toast.error(error.message || "Payment could not be completed.");
        return;
      }

      if (paymentIntent?.status === "succeeded") {
        const result = await confirmWebsiteDonation(donationId);

        if (!result.success) {
          toast.warning(
            result.message || "Payment received, but confirmation is pending.",
          );
          return;
        }

        if (result.status === "succeeded") {
          onSuccess();
          return;
        }

        toast.info(result.message || "Your payment is being processed.");
        return;
      }

      if (paymentIntent?.status === "processing") {
        toast.info("Your payment is processing. Please check again shortly.");
        return;
      }

      toast.error("Your payment has not been completed.");
    } catch (error) {
      console.error("Stripe payment error:", error);

      toast.error(
        "An unexpected error occurred while processing your donation.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handlePayment} className="space-y-6">
        <div className="rounded-2xl border border-border bg-white p-5 sm:p-6">
          {/* Card Information */}
          <div className="mb-5">
            <h3 className="text-lg font-bold text-gray-900">
              Card Information
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Enter your card details securely below.
            </p>
          </div>

          {/* Card Number */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Card number
            </label>

            <div className="flex h-11 items-center rounded-xl border border-input bg-white px-3 shadow-sm transition-colors focus-within:border-primary">
              <CardNumberElement
                options={{
                  ...cardElementOptions,
                  showIcon: true,
                }}
                className="w-full"
              />
            </div>
          </div>

          {/* Expiration Date and Security Code */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Expiration date
              </label>

              <div className="flex h-11 items-center rounded-xl border border-input bg-white px-3 shadow-sm transition-colors focus-within:border-primary">
                <CardExpiryElement
                  options={cardElementOptions}
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Security code
              </label>

              <div className="flex h-11 items-center rounded-xl border border-input bg-white px-3 shadow-sm transition-colors focus-within:border-primary">
                <CardCvcElement
                  options={cardElementOptions}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Country */}
          <div className="mt-4 space-y-2">
            <label
              htmlFor="card-country"
              className="text-sm font-medium text-gray-700"
            >
              Country
            </label>

            <div className="relative">
              <select
                id="card-country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                disabled={loading}
                className="h-11 w-full appearance-none rounded-xl border border-input bg-white pl-3 pr-12 text-sm text-gray-700 shadow-sm outline-none transition-colors focus:border-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                {COUNTRIES.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.name}
                  </option>
                ))}
              </select>

              {/* Custom Dropdown Arrow */}
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-700" />
            </div>
          </div>

          {/* Security Information */}
          <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Secured by Stripe payment technology.
          </div>
        </div>

        {/* Complete Donation */}
        <Button
          type="submit"
          disabled={!stripe || !elements || loading}
          className="h-14 w-full rounded-xl text-base font-bold"
        >
          {loading ? (
            <>
              <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
              Processing Payment...
            </>
          ) : (
            "Complete Donation"
          )}
        </Button>

        {/* Back Button */}
        <Button
          type="button"
          variant="outline"
          disabled={loading}
          onClick={onBack}
          className="h-12 w-full rounded-xl"
        >
          <span className="mr-2">←</span>
          Back to Donation Details
        </Button>
      </form>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 px-5 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl">
            <LoaderCircle className="mx-auto mb-5 h-12 w-12 animate-spin text-primary" />

            <h3 className="text-xl font-bold text-gray-900">
              Processing Your Donation
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Please wait while Stripe securely processes your payment.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
