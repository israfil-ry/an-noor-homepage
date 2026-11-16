
"use server";

import { z } from "zod";

const API_URL = process.env.BACKEND_API_URL;

const donationSchema = z.object({
  amount: z
    .string()
    .trim()
    .min(1, "Please enter a donation amount.")
    .transform(Number)
    .refine(Number.isFinite, "Please enter a valid amount.")
    .refine((value) => value >= 1, "Minimum donation is $1.00.")
    .refine((value) => value <= 10000, "Maximum donation is $10,000.")
    .refine(
      (value) => Number.isInteger(value * 100),
      "Amount can have a maximum of two decimal places.",
    ),

  donorName: z
    .string()
    .trim()
    .min(2, "Full name must contain at least 2 characters.")
    .max(100, "Full name cannot exceed 100 characters."),

  donorEmail: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),
});

export type DonationFormState = {
  status: "idle" | "error" | "ready";
  message?: string;
  fieldErrors?: {
    amount?: string[];
    donorName?: string[];
    donorEmail?: string[];
  };
  clientSecret?: string;
  donationId?: number;
};

export async function createWebsiteDonation(
  _previousState: DonationFormState,
  formData: FormData,
): Promise<DonationFormState> {
  try {
    if (!API_URL) {
      return {
        status: "error",
        message: "Donation service is not configured.",
      };
    }

    const validation = donationSchema.safeParse({
      amount: formData.get("amount"),
      donorName: formData.get("donorName"),
      donorEmail: formData.get("donorEmail"),
    });

    if (!validation.success) {
      return {
        status: "error",
        message: "Please correct the highlighted fields.",
        fieldErrors: validation.error.flatten().fieldErrors,
      };
    }

    const { amount, donorName, donorEmail } = validation.data;

    console.log("Creating website donation:", {
      amount,
      donorName,
      donorEmail,
    });

    const response = await fetch(`${API_URL}/donations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        amountCents: Math.round(amount * 100),
        currency: "USD",
        donorName,
        donorEmail,
        isAnonymous: false,
        paymentMethodType: "card",
        message: "Website donation",
        device: 'website',
      }),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || !result?.success) {
      return {
        status: "error",
        message:
          result?.message ||
          "Unable to initialize your donation. Please try again.",
      };
    }

    const clientSecret = result?.data?.clientSecret;
    const donationId = Number(result?.data?.donation?.id);

    if (
      typeof clientSecret !== "string" ||
      !clientSecret ||
      !Number.isInteger(donationId) ||
      donationId <= 0
    ) {
      return {
        status: "error",
        message: "Invalid response from the payment server.",
      };
    }

    return {
      status: "ready",
      message: "Donation initialized successfully.",
      clientSecret,
      donationId,
    };
  } catch (error) {
    console.error("Website donation creation error:", error);

    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}

export async function confirmWebsiteDonation(
  donationId: number,
) {
  try {
    if (!API_URL || !Number.isInteger(donationId) || donationId <= 0) {
      return {
        success: false,
        message: "Invalid donation information.",
      };
    }

    const response = await fetch(
      `${API_URL}/donations/${donationId}/confirm`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    const result = await response.json().catch(() => null);

    if (!response.ok || !result?.success) {
      return {
        success: false,
        message:
          result?.message || "Unable to verify your donation.",
      };
    }

    // Accommodate the donation response shape.
    const donation = result.data?.donation ?? result.data;

    return {
      success: true,
      status: donation?.status,
      message:
        result.message || "Donation verification completed.",
    };
  } catch (error) {
    console.error("Website donation confirmation error:", error);

    return {
      success: false,
      message: "Unable to verify payment right now.",
    };
  }
}
