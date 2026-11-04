"use server";

import { sendContactEmail } from "@/lib/sendContactEmail";



export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    fullName?: string;
    subject?: string;
    email?: string;
    contactNumber?: string;
    message?: string;
  };
}

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const contactNumber = String(
    formData.get("contactNumber") ?? ""
  ).trim();
  const message = String(formData.get("message") ?? "").trim();

  // Honeypot: real users should leave this field empty.
  const website = String(formData.get("website") ?? "").trim();

  if (website) {
    return {
      success: false,
      message: "Unable to process your submission.",
    };
  }

  const errors: NonNullable<ContactFormState["errors"]> = {};

  // Full name validation
  if (!fullName) {
    errors.fullName = "Please enter your full name.";
  } else if (fullName.length < 2 || fullName.length > 100) {
    errors.fullName = "Name must be between 2 and 100 characters.";
  }

  // Subject validation
  if (!subject) {
    errors.subject = "Please enter a subject.";
  } else if (subject.length > 150) {
    errors.subject = "Subject cannot exceed 150 characters.";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (email.length > 254 || !emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  // Contact number validation (optional)
  if (contactNumber && !/^[+()\d\s.-]{7,20}$/.test(contactNumber)) {
    errors.contactNumber = "Please enter a valid contact number.";
  }

  // Message validation
  if (!message) {
    errors.message = "Please enter your message.";
  } else if (message.length < 10 || message.length > 5000) {
    errors.message = "Message must be between 10 and 5000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the errors below.",
      errors,
    };
  }

  try {
    await sendContactEmail({
      fullName,
      subject,
      email,
      contactNumber,
      message,
    });

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    // Log the actual error on the server, not in the browser.
    console.error("Contact form email error:", error);

    return {
      success: false,
      message:
        "Something went wrong while sending your message. Please try again later.",
    };
  }
}