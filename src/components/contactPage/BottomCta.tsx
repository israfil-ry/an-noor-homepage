import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <div className="mt-12 rounded-3xl bg-emerald-50 px-7 py-10 text-center sm:px-10">
      <h3 className="text-2xl font-bold text-gray-900">
        Prefer to contact us directly?
      </h3>

      <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
        You can also send us an email. We&apos;ll be happy to assist you with
        your questions and requests.
      </p>

      <Link
        href="mailto:annoor@annoor.app"
        className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-emerald-700 px-6 font-semibold text-white transition-colors hover:bg-emerald-800"
      >
        <Mail className="mr-2 h-4 w-4" />
        Email AnNoor
        <ArrowUpRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}
