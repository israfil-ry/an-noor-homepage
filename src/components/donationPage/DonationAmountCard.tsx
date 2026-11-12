"use client";

import { useState } from "react";
import { Heart, LockKeyhole } from "lucide-react";

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

const PRESET_AMOUNTS = [5, 10, 20, 50] as const;

type SelectedPreset = number | "custom";

export default function DonationAmountCard() {
  const [amount, setAmount] = useState("25");
  const [selectedPreset, setSelectedPreset] =
    useState<SelectedPreset>("custom");

  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState<
    "error" | "info" | "success" | ""
  >("");

  const numericAmount = Number(amount);

  const isValidAmount =
    amount.trim() !== "" &&
    Number.isFinite(numericAmount) &&
    numericAmount >= 1 &&
    numericAmount <= 10000;

  const formattedAmount = Number.isFinite(numericAmount)
    ? new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
      }).format(numericAmount)
    : "0";

  const handlePresetSelect = (value: number) => {
    setAmount(String(value));
    setSelectedPreset(value);
    setFeedback("");
    setFeedbackType("");
  };

  const handleCustomSelect = () => {
    setSelectedPreset("custom");
    setFeedback("");
    setFeedbackType("");
    setAmount("");
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
    setSelectedPreset("custom");
    setFeedback("");
    setFeedbackType("");
  };

  const handleContinue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidAmount) {
      setFeedback(
        "Please enter a valid donation amount between $1 and $10,000.",
      );
      setFeedbackType("error");
      return;
    }

    // TODO: Connect your secure donation payment checkout here.
    // Pass numericAmount to your payment API or server action.
    // Never trust the client amount without validating it on the server.

    setFeedback(
      `Your selected donation is $${formattedAmount}. Payment checkout is not connected yet.`,
    );

    setFeedbackType("info");
  };

  return (
    <Card className="rounded-3xl border border-border bg-white py-0 shadow-sm ring-1 ring-foreground/5">
      <CardHeader className="px-7 pt-8 sm:px-9 sm:pt-9">
        {/* <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-primary">
          <Heart className="h-6 w-6" />
        </div> */}

        <CardTitle className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Make a Donation
        </CardTitle>

        <CardDescription className="text-sm leading-6 sm:text-base">
          Choose an amount that feels right for you. Every contribution is
          appreciated.
        </CardDescription>
      </CardHeader>

      <CardContent className="px-7 pb-8 sm:px-9 sm:pb-9">
        <form onSubmit={handleContinue}>
          {/* Preset Amounts */}
          <div className="mt-7">
            <Label className="mb-4 block text-base font-semibold text-gray-900">
              Choose an Amount
            </Label>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {PRESET_AMOUNTS.map((value) => {
                const isSelected = selectedPreset === value;

                return (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => handlePresetSelect(value)}
                    className={`flex h-14 items-center justify-center rounded-xl border text-lg font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                      isSelected
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
                aria-pressed={selectedPreset === "custom"}
                onClick={handleCustomSelect}
                className={`col-span-2 flex h-14 items-center justify-center rounded-xl border text-base font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:col-span-1 ${
                  selectedPreset === "custom"
                    ? "border-primary bg-primary text-white shadow-sm"
                    : "border-border bg-white text-gray-900 hover:border-primary hover:bg-emerald-50"
                }`}
              >
                Custom
              </button>
            </div>
          </div>

          {/* Custom Amount Input */}
          <div className="mt-8">
            <Label
              htmlFor="donation-amount"
              className="mb-3 block text-base font-semibold text-gray-900"
            >
              Enter Amount (USD)
            </Label>

            <div className="relative">
              <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xl font-medium text-gray-600">
                $
              </span>

              <Input
                id="donation-amount"
                type="number"
                min="1"
                max="10000"
                step="0.01"
                placeholder="Enter donation amount"
                value={amount}
                onChange={handleAmountChange}
                onFocus={handleCustomSelect}
                aria-invalid={feedbackType === "error" && !isValidAmount}
                className="h-14 rounded-xl border-2 border-border bg-gray-50 pl-12 text-lg font-medium text-gray-900 transition-colors focus-visible:border-primary focus-visible:ring-primary/20"
              />
            </div>

            <p className="mt-2 text-xs text-muted-foreground">
              Minimum donation: $1.00
            </p>
          </div>

          {/* Feedback */}
          {feedback && (
            <div
              role="status"
              aria-live="polite"
              className={`mt-5 rounded-xl border px-4 py-3 text-sm leading-6 ${
                feedbackType === "error"
                  ? "border-red-200 bg-red-50 text-red-700"
                  : "border-emerald-200 bg-emerald-50 text-emerald-800"
              }`}
            >
              {feedback}
            </div>
          )}

          {/* Continue Button */}
          <div className="mt-8">
            <Button
              type="submit"
              size="lg"
              className="h-14 w-full rounded-xl bg-primary text-base font-bold text-white shadow-md transition-all hover:bg-primary/90 sm:text-lg"
            >
              Continue ${formattedAmount} Donation
            </Button>
          </div>

          {/* Security Information */}
          <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
            <LockKeyhole className="h-4 w-4 shrink-0" />
            <span>
              Secure payment processing will be available at checkout.
            </span>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
