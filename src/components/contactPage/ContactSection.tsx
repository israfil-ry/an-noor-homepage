import { ShieldCheck } from "lucide-react";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
            <ShieldCheck className="h-4 w-4" />
            Contact AnNoor
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch With Us
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            If you have questions about this Privacy Policy or wish to make a
            privacy request, please contact us using the form below or through
            our contact details.
          </p>
        </div>

        {/* Contact Information and Form */}
        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
