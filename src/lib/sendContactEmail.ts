
import "server-only";

import nodemailer from "nodemailer";

interface ContactEmailData {
  fullName: string;
  subject: string;
  email: string;
  contactNumber: string;
  message: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(data: ContactEmailData) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
  } = process.env;

  // Validate the existing SMTP environment variables.
  if (
    !SMTP_HOST ||
    !SMTP_PORT ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !SMTP_FROM
  ) {
    throw new Error("SMTP configuration is incomplete.");
  }

  // Create SMTP transporter.
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const safeName = escapeHtml(data.fullName);
  const safeSubject = escapeHtml(data.subject);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.contactNumber || "Not provided");
  const safeMessage = escapeHtml(data.message).replace(/\r?\n/g, "<br />");

  await transporter.sendMail({
    from: SMTP_FROM,

    // Your contact email address.
    to: SMTP_FROM,

    // Allows you to reply directly to the visitor.
    replyTo: data.email,

    subject: `AnNoor Website Contact: ${data.subject}`,

    text: `
New contact form submission

Name: ${data.fullName}
Subject: ${data.subject}
Email: ${data.email}
Contact Number: ${data.contactNumber || "Not provided"}

Message:
${data.message}
    `,

    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #333;">
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Contact Number:</strong> ${safePhone}</p>

        <hr />

        <h3>Message</h3>
        <p>${safeMessage}</p>
      </div>
    `,
  });
}
