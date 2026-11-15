"use client";

import { useState } from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { LoaderCircle, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { confirmWebsiteDonation } from "@/services/support/supportAction";

interface DonationPaymentFormProps {
  donationId: number;
  onBack: () => void;
  onSuccess: () => void;
}

export default function DonationPaymentForm({
  donationId,
  onBack,
  onSuccess,
}: DonationPaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const handlePayment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements || loading) return;

    setLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
        confirmParams: {
          return_url: `${window.location.origin}/support?donation_id=${donationId}`,
        },
      });

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
          <div className="mb-5">
            <h3 className="text-lg font-bold text-gray-900">
              Card Information
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Enter your card details securely below.
            </p>
          </div>

          <PaymentElement
            options={{
              layout: "tabs",
            }}
          />

          <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Secured by Stripe payment technology.
          </div>
        </div>

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

        <Button
          type="button"
          variant="outline"
          disabled={loading}
          onClick={onBack}
          className="h-12 w-full rounded-xl"
        >
          <ArrowLeftIcon />
          Back to Donation Details
        </Button>
      </form>

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

function ArrowLeftIcon() {
  return <span className="mr-2">←</span>;
}
