import Link from "next/link";
import {
  ShieldCheck,
  Mail,
  Phone,
  ChevronRight,
  ArrowUpRight,
  FileText,
  Scale,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | AnNoor",
  description:
    "Read AnNoor's Terms and Conditions to understand the rules, responsibilities, user account requirements, subscriptions, payments, and policies governing the use of our mobile app, website, and related services.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

const sections = [
  { id: "about-annoor", title: "About AnNoor.app" },
  { id: "eligibility", title: "Eligibility and Acceptance" },
  { id: "user-accounts", title: "User Accounts and Security" },
  { id: "masjid-accounts", title: "Masjid Accounts and Representatives" },
  { id: "prayer-times", title: "Prayer Times and Adhan Notifications" },
  { id: "qibla-guidance", title: "Qibla Guidance" },
  { id: "halal-listings", title: "Halal Place Listings" },
  { id: "islamic-events", title: "Islamic Events" },
  { id: "dua-tasbih", title: "Dua Tasbih and Religious Content" },
  { id: "subscriptions", title: "Halal Place Subscriptions" },
  { id: "payments", title: "Payments Fees and Refunds" },
  { id: "voluntary-support", title: "Voluntary App Development Support" },
  { id: "submitted-content", title: "Submitted Content and Moderation" },
  { id: "prohibited-uses", title: "Prohibited Uses" },
  {
    id: "intellectual-property",
    title: "Intellectual Property and Copyright Reports",
  },
  { id: "third-party-services", title: "Third Party Services" },
  {
    id: "privacy-communications",
    title: "Privacy Permissions and Communications",
  },
  { id: "account-deletion", title: "Account Deletion and Closure" },
  { id: "availability", title: "Availability Changes and Suspension" },
  { id: "disclaimers-liability", title: "Disclaimers and Liability" },
  {
    id: "organization-content",
    title: "Responsibility for Organization Content",
  },
  { id: "changes-general", title: "Changes and General Provisions" },
  { id: "contact-information", title: "Contact Information" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 space-y-5">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[26px]">
        {title}
      </h2>

      <div className="space-y-4 text-[15px] leading-8 text-slate-600">
        {children}
      </div>
    </section>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="pt-2 text-lg font-semibold tracking-tight text-slate-800">
      {children}
    </h3>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="ml-1 space-y-2.5">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-[11px] size-1.5 shrink-0 rounded-full bg-emerald-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TermsAndConditions() {
  return (
    <div id="top" className="min-h-screen bg-[#f8faf9] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-emerald-100 bg-white">
        <div className="absolute -right-24 -top-32 size-96 rounded-full bg-emerald-50/80 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 size-80 rounded-full bg-teal-50/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              <Scale className="size-4" />
              Terms of use
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Terms &amp; <span className="text-emerald-600">Conditions</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Please read these Terms and Conditions carefully before using
              AnNoor.app. They explain your rights, responsibilities and the
              rules that apply when accessing our platform and services.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-600 shadow-sm">
                <FileText className="size-4 text-emerald-600" />
                Last Updated: October 8, 2026
              </div>

              <div className="inline-flex items-center gap-2 text-slate-500">
                <ShieldCheck className="size-4 text-emerald-600" />
                Terms &amp; Legal Information
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-14">
          {/* Table of Contents */}
          <aside className="lg:sticky lg:top-8">
            <Card className="overflow-hidden rounded-2xl border-slate-200 bg-white shadow-sm">
              <CardContent className="p-5">
                <div className="mb-5 flex items-center gap-2">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-50">
                    <FileText className="size-4 text-emerald-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      On this page
                    </h3>
                    <p className="text-xs text-slate-500">
                      Terms &amp; Conditions sections
                    </p>
                  </div>
                </div>

                <nav className="space-y-1">
                  {sections.map((section, index) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-start gap-2.5 rounded-lg px-2.5 py-2 text-[13px] leading-5 text-slate-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      <span className="mt-0.5 shrink-0 text-[11px] font-medium text-slate-400 group-hover:text-emerald-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{section.title}</span>

                      <ChevronRight className="ml-auto mt-0.5 size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card className="mt-5 overflow-hidden rounded-2xl border-emerald-100 bg-emerald-50/70 shadow-none">
              <CardContent className="p-5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white">
                  <Scale className="size-5 text-emerald-600" />
                </div>

                <h3 className="mt-4 font-semibold text-slate-900">
                  Need clarification?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Have questions about our terms, subscriptions or services? Get
                  in touch with our team.
                </p>

                <a
                  href="mailto:annoor@annoor.app"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Contact our team
                  <ArrowUpRight className="size-4" />
                </a>
              </CardContent>
            </Card>
          </aside>

          {/* Terms Article */}
          <article className="min-w-0">
            <Card className="rounded-2xl border-slate-200 bg-white shadow-sm">
              <CardContent className="space-y-10 p-6 sm:p-9 lg:p-11">
                {/* Introduction */}
                <div className="space-y-4">
                  <p className="text-[15px] leading-8 text-slate-600">
                    Welcome to AnNoor.app. These Terms and Conditions explain
                    the rules for using our mobile application, website, masjid
                    and halal place directories, Islamic lifestyle features,
                    organization accounts, subscriptions and related services.
                  </p>

                  <p className="text-[15px] leading-8 text-slate-600">
                    For these Terms, “AnNoor.app,” “we,” “us” and “our” mean
                    AnNoor.app and its mobile application, website, directories,
                    software, content and related services. “Platform” means the
                    AnNoor.app application, website and related services. “You”
                    means any person or authorized organization representative
                    using the Platform.
                  </p>

                  <p className="text-[15px] leading-8 text-slate-600">
                    By accessing or using the Platform, you agree to these
                    Terms. If you do not agree, please stop using the Platform.
                  </p>
                </div>

                <Separator />

                {/* 01 - About */}
                <Section id="about-annoor" title="About AnNoor.app">
                  <p>
                    AnNoor.app helps users access Islamic lifestyle information
                    and discover community resources. Depending on the features
                    available in your location and app version, the Platform
                    includes:
                  </p>

                  <BulletList
                    items={[
                      "Prayer times and Adhan reminders.",
                      "Qibla direction guidance.",
                      "Nearby masjid searches and masjid profiles.",
                      "Halal place listings.",
                      "Islamic event information.",
                      "Tasbih counting and Dua content.",
                      "Masjid account and profile management.",
                      "Paid halal place listing plans.",
                      "Voluntary payments supporting AnNoor.app development.",
                      "Help & Support.",
                    ]}
                  />

                  <p>
                    Masjids, listed businesses and event organizers remain
                    responsible for their own activities, services and
                    information. A listing does not establish an agency,
                    partnership or endorsement relationship with AnNoor.app.
                  </p>
                </Section>

                <Separator />

                {/* 02 - Eligibility */}
                <Section id="eligibility" title="Eligibility and Acceptance">
                  <p>
                    You must be legally permitted to use the Platform. If you
                    are a minor, a parent or legal guardian must be involved
                    where required by applicable law.
                  </p>

                  <p>
                    A person accepting a paid agreement or managing an
                    organization or business account must have the legal
                    capacity and authority to do so. If you act on behalf of a
                    masjid, business or other organization, you confirm that you
                    are authorized to accept these Terms for it.
                  </p>

                  <p>
                    Additional terms may apply to a particular subscription,
                    promotion or paid service. Those terms must be presented
                    before you accept the relevant offer. Nothing in these Terms
                    overrides rights that cannot legally be waived.
                  </p>
                </Section>

                <Separator />

                {/* 03 - User Accounts */}
                <Section id="user-accounts" title="User Accounts and Security">
                  <p>
                    Some features require an account. Provide accurate
                    information, keep it current and protect your login
                    credentials. Do not use another person’s identity or give
                    unauthorized access to an organization account.
                  </p>

                  <p>
                    You are responsible for actions you authorize through your
                    account. Notify Help & Support if you suspect unauthorized
                    access or a security problem. AnNoor.app may require
                    proportionate identity or authorization checks before
                    restoring access or changing sensitive account information.
                  </p>
                </Section>

                <Separator />

                {/* 04 - Masjid Accounts */}
                <Section
                  id="masjid-accounts"
                  title="Masjid Accounts and Representatives"
                >
                  <p>
                    You may create or manage a Masjid account only with
                    permission from the relevant masjid or its authorized
                    management.
                  </p>

                  <p>
                    Masjid representatives are responsible for keeping their
                    profile, location, contact information, prayer schedules,
                    announcements and any published event information accurate.
                    They must have permission to use uploaded logos, images and
                    other materials.
                  </p>

                  <p>
                    Representatives must not claim to speak for a masjid without
                    authority, publish misleading information or disclose
                    private details without permission. AnNoor.app may request
                    evidence of authorization and restrict a disputed or
                    misleading profile while the issue is investigated.
                  </p>
                </Section>

                <Separator />

                {/* 05 - Prayer Times */}
                <Section
                  id="prayer-times"
                  title="Prayer Times and Adhan Notifications"
                >
                  <p>
                    Prayer times may depend on your selected location, time
                    zone, calculation method and local practice. Calculated
                    prayer times may differ from a masjid’s congregation or
                    Iqamah schedule.
                  </p>

                  <p>
                    Check your settings and confirm important schedules with
                    your local masjid. Masjid representatives are responsible
                    for schedules they publish.
                  </p>

                  <p>
                    Adhan reminders and notifications may be affected by device
                    permissions, battery settings, connectivity, time settings
                    or operating system restrictions. AnNoor.app does not
                    guarantee that every reminder will be delivered at the exact
                    intended time.
                  </p>
                </Section>

                <Separator />

                {/* 06 - Qibla */}
                <Section id="qibla-guidance" title="Qibla Guidance">
                  <p>
                    Qibla guidance depends on location information and device
                    orientation or compass readings. Incorrect settings, sensor
                    limitations, calibration problems and nearby magnetic
                    interference may affect the result.
                  </p>

                  <p>
                    Use the feature as a directional aid and confirm the
                    direction through another reliable method if the reading
                    appears uncertain. AnNoor.app does not guarantee identical
                    readings across all devices or environments.
                  </p>
                </Section>

                <Separator />

                {/* 07 - Halal Listings */}
                <Section id="halal-listings" title="Halal Place Listings">
                  <p>
                    Halal place information may be supplied by business owners,
                    authorized representatives or other listing sources.
                    Businesses are responsible for the accuracy of their
                    descriptions, contact details, opening hours and halal
                    claims.
                  </p>

                  <p>
                    A listing, subscription payment or listing approval does not
                    by itself certify halal status. Where a verification or
                    certification statement is displayed, its stated scope and
                    source determine what it means.
                  </p>

                  <p>
                    Before relying on a listing, confirm relevant ingredients,
                    preparation practices, certification and current services
                    directly with the business. Report inaccurate or misleading
                    information through Help & Support.
                  </p>
                </Section>

                <Separator />

                {/* 08 - Events */}
                <Section id="islamic-events" title="Islamic Events">
                  <p>
                    Event organizers are responsible for their event
                    descriptions, dates, locations, admission requirements,
                    fees, accessibility information and cancellation
                    arrangements.
                  </p>

                  <p>
                    Events may be changed, postponed or cancelled. Confirm
                    important details directly with the organizer before
                    attending or paying.
                  </p>

                  <p>
                    If you make a separate purchase from an organizer or other
                    third party, that transaction is subject to the terms
                    presented by that party. AnNoor.app remains responsible for
                    any obligations it separately undertakes for its own paid
                    services.
                  </p>
                </Section>

                <Separator />

                {/* 09 - Dua & Tasbih */}
                <Section
                  id="dua-tasbih"
                  title="Dua Tasbih and Religious Content"
                >
                  <p>
                    Dua and other Islamic content are provided for general
                    learning and reference. They do not replace advice from a
                    qualified scholar on a specific religious question.
                  </p>

                  <p>
                    Translations, transliterations and interpretations may vary.
                    Report a suspected error so it can be reviewed.
                  </p>

                  <p>
                    Tasbih counts and other app tools support personal use.
                    Their availability does not guarantee that locally saved
                    information will remain accessible after you clear app data,
                    change devices or uninstall the application.
                  </p>
                </Section>

                <Separator />

                {/* 10 - Subscriptions */}
                <Section id="subscriptions" title="Halal Place Subscriptions">
                  <p>
                    An active paid subscription may be required to publish or
                    maintain a halal place listing, as stated in the selected
                    plan.
                  </p>

                  <p>
                    Review the plan features, price, currency, applicable taxes,
                    billing period and publication requirements before
                    subscribing. Payment does not guarantee listing approval, a
                    particular search position, customer enquiries or halal
                    certification.
                  </p>

                  <p>
                    If a plan renews automatically, its renewal frequency and
                    cancellation conditions must be disclosed before purchase.
                    You authorize only the charges and renewal terms you accept.
                  </p>

                  <p>
                    Cancellation, remaining access and listing status after
                    expiry follow the plan terms presented at purchase.
                    Subscription changes and price changes will be communicated
                    as required by applicable law and the relevant purchase
                    channel. We will not impose an undisclosed additional charge
                    without your authorization.
                  </p>
                </Section>

                <Separator />

                {/* 11 - Payments */}
                <Section id="payments" title="Payments Fees and Refunds">
                  <p>
                    Payments are processed through the app store or payment
                    provider identified at checkout. Payment options may differ
                    by country, device and purchase channel. Applicable charges
                    must be disclosed before you confirm a payment.
                  </p>

                  <p>
                    Use payment details you are authorized to use. If a pricing
                    or transaction error occurs, we may correct it after
                    notifying you, seek your agreement to a corrected
                    transaction, or cancel and refund the affected payment.
                  </p>

                  <p>
                    Cancellation and refund requests follow the purchase terms,
                    applicable law and the rules of the payment channel used.
                    For an app store purchase, use that store’s available
                    subscription management or refund process where required.
                    For payments made directly to AnNoor.app, contact Help &
                    Support with your transaction details.
                  </p>

                  <p>
                    Cancelling a subscription does not automatically refund
                    earlier payments. However, nothing in these Terms excludes a
                    refund, replacement, continued access or other remedy
                    required by applicable law or the relevant app store policy.
                  </p>
                </Section>

                <Separator />

                {/* 12 - Voluntary Support */}
                <Section
                  id="voluntary-support"
                  title="Voluntary App Development Support"
                >
                  <p>
                    Payments made through AnNoor.app’s Donate or Support feature
                    help fund the application’s development, maintenance and
                    operation.
                  </p>

                  <p>
                    A support payment is voluntary. It does not provide
                    ownership, profit sharing, a guaranteed feature release or
                    another purchase benefit unless a specific offer expressly
                    states otherwise.
                  </p>

                  <p>
                    Do not treat a payment as zakat, a payment to a particular
                    masjid or a tax-deductible charitable donation unless that
                    purpose and status are expressly identified for the payment
                    and legally supported.
                  </p>

                  <p>
                    Any recurring support arrangement must disclose the amount,
                    frequency and cancellation method before authorization.
                    Refund requests follow Section 11 and the terms shown for
                    the payment.
                  </p>
                </Section>

                <Separator />

                {/* 13 - Submitted Content */}
                <Section
                  id="submitted-content"
                  title="Submitted Content and Moderation"
                >
                  <p>
                    You remain responsible for information and materials you
                    submit. You confirm that you own the content or have
                    permission to submit it and that it does not infringe
                    another person’s rights.
                  </p>

                  <p>
                    You retain ownership of your content. You grant AnNoor.app a
                    nonexclusive, royalty-free license to host, reproduce,
                    format and display it as needed to provide the Platform.
                    Service providers may process that content only as necessary
                    to perform the relevant service for us. Separate permission
                    is required for uses outside this scope where applicable.
                  </p>

                  <p>
                    We may review, decline, correct or remove content that is
                    inaccurate, misleading, unlawful, harmful or inconsistent
                    with these Terms. Report objectionable content,
                    impersonation or abusive accounts through Help & Support.
                    You may use the same contact to request a correction or
                    review of a moderation decision.
                  </p>
                </Section>

                <Separator />

                {/* 14 - Prohibited Uses */}
                <Section id="prohibited-uses" title="Prohibited Uses">
                  <p>You must not use the Platform to:</p>

                  <BulletList
                    items={[
                      "Impersonate a person, masjid, business or AnNoor.app representative.",
                      "Publish false listings, fake reviews, misleading halal claims or deceptive fundraising requests.",
                      "Harass, threaten, exploit or discriminate against another person.",
                      "Publish unlawful, hateful, sexually explicit or deliberately misleading religious content.",
                      "Upload malware, send spam or interfere with accounts, payments or Platform security.",
                      "Collect private information without permission or misuse information obtained through the Platform.",
                      "Bypass access controls, extract protected data without authorization or use our software unlawfully.",
                      "Infringe copyright, trademarks or other rights.",
                    ]}
                  />

                  <p>
                    These restrictions do not prevent lawful criticism,
                    permitted accessibility use or activities protected by
                    applicable law.
                  </p>
                </Section>

                <Separator />

                {/* 15 - Intellectual Property */}
                <Section
                  id="intellectual-property"
                  title="Intellectual Property and Copyright Reports"
                >
                  <p>
                    AnNoor.app’s branding, software, design and content supplied
                    by us are owned by the operator or its licensors. Using the
                    Platform does not transfer ownership.
                  </p>

                  <p>
                    You must not copy, sell or redistribute protected materials
                    without permission, except where applicable law permits it.
                    Logos and materials submitted by masjids or businesses
                    remain subject to their respective owners’ rights.
                  </p>

                  <p>
                    To report suspected copyright infringement, provide your
                    contact information, a description of the protected work,
                    the location of the disputed content and an explanation of
                    why its use is unauthorized. Send the report through Help &
                    Support or the contact details below.
                  </p>
                </Section>

                <Separator />

                {/* 16 - Third Party */}
                <Section id="third-party-services" title="Third Party Services">
                  <p>
                    The Platform may link to maps, masjid or business websites,
                    event pages, payment services or other third party
                    resources.
                  </p>

                  <p>
                    Those services operate under their own terms and privacy
                    practices. Review them before providing information or
                    entering a transaction. AnNoor.app does not control the
                    independent goods, services or conduct of those third
                    parties.
                  </p>
                </Section>

                <Separator />

                {/* 17 - Privacy */}
                <Section
                  id="privacy-communications"
                  title="Privacy Permissions and Communications"
                >
                  <p>
                    Our Privacy Policy explains how personal information is
                    handled, including information associated with accounts,
                    location features, support requests and payments.
                  </p>

                  <p>
                    Agreeing to these Terms does not replace a separate consent
                    required for data processing. You can manage available
                    device permissions and notification settings through the app
                    or your device settings. Disabling a permission may affect
                    its related feature.
                  </p>

                  <p>
                    We may send messages needed to manage your account, respond
                    to a request, address security issues or administer a
                    purchase. Optional reminders and marketing communications
                    are subject to the controls and consent requirements that
                    apply to them.
                  </p>
                </Section>

                <Separator />

                {/* 18 - Account Deletion */}
                <Section
                  id="account-deletion"
                  title="Account Deletion and Closure"
                >
                  <p>
                    You may request account deletion through the deletion
                    controls provided in the app or by contacting Help &
                    Support. The Privacy Policy explains the deletion procedure
                    and any lawful retention of specific records.
                  </p>

                  <p>
                    Deletion may end access to account features, organization
                    management tools and information linked to the account. The
                    treatment of submitted public content is governed by the
                    applicable deletion process described in the Privacy Policy.
                  </p>

                  <p>
                    Uninstalling the app does not itself delete your account or
                    cancel a subscription. To prevent further renewal charges,
                    use the cancellation method for the purchase channel you
                    used.
                  </p>
                </Section>

                <Separator />

                {/* 19 - Availability */}
                <Section
                  id="availability"
                  title="Availability Changes and Suspension"
                >
                  <p>
                    The Platform may be interrupted by maintenance, updates,
                    connectivity problems, security incidents or events outside
                    our reasonable control.
                  </p>

                  <p>
                    We may update features and restrict access where reasonably
                    necessary to address unlawful activity, a security threat,
                    nonpayment or a breach of these Terms. Where appropriate and
                    permitted, we will explain the reason and provide a way to
                    contact support.
                  </p>

                  <p>
                    Changes, suspension or discontinuation do not remove
                    mandatory consumer rights or allow us to avoid obligations
                    for services already paid for. Any remaining paid
                    entitlement must be handled under the applicable purchase
                    terms and law.
                  </p>
                </Section>

                <Separator />

                {/* 20 - Disclaimers */}
                <Section
                  id="disclaimers-liability"
                  title="Disclaimers and Liability"
                >
                  <p>
                    To the extent permitted by applicable law, the Platform is
                    provided on an “as is” and “as available” basis. We do not
                    guarantee uninterrupted operation or that every listing,
                    schedule or item of third party information is complete and
                    current.
                  </p>

                  <p>
                    AnNoor.app does not guarantee the services of a listed
                    business, an event’s availability, halal certification, the
                    exact delivery of a reminder or the accuracy of a device
                    compass reading.
                  </p>

                  <p>
                    To the extent permitted by applicable law, we are not liable
                    for indirect or consequential losses resulting from use of
                    the Platform. This provision does not exclude liability that
                    cannot legally be excluded, including liability for fraud,
                    legally protected consumer remedies or death or personal
                    injury caused by negligence where applicable.
                  </p>
                </Section>

                <Separator />

                {/* 21 - Organization Content */}
                <Section
                  id="organization-content"
                  title="Responsibility for Organization Content"
                >
                  <p>
                    If you manage a masjid, business or other organization
                    account, you are responsible for your organization’s
                    authorized submissions, representations and use of the
                    Platform.
                  </p>

                  <p>
                    To the extent permitted by law, you agree to compensate the
                    operator for reasonable losses and costs arising from a
                    valid third party claim caused by your unlawful content,
                    fraud or intentional breach of these Terms. This obligation
                    does not cover loss caused by the operator’s own unlawful
                    conduct or negligence.
                  </p>
                </Section>

                <Separator />

                {/* 22 - Changes */}
                <Section
                  id="changes-general"
                  title="Changes and General Provisions"
                >
                  <p>
                    We may update these Terms when features, purchase
                    arrangements or applicable requirements change. The revised
                    version will show a new Last Updated date.
                  </p>

                  <p>
                    We will notify you of material changes where required and
                    request renewed acceptance when necessary. Changes do not
                    apply retroactively to completed transactions or existing
                    disputes.
                  </p>

                  <p>
                    If a provision is unenforceable, the remaining provisions
                    continue to apply to the extent permitted by law. A failure
                    to enforce a provision on one occasion does not waive the
                    right to enforce it later.
                  </p>

                  <p>
                    These Terms and any applicable purchase terms govern your
                    use of the relevant services. The Privacy Policy separately
                    explains our handling of personal information.
                  </p>
                </Section>

                <Separator />

                {/* 23 - Contact */}
                <Section id="contact-information" title="Contact Information">
                  <p>
                    For questions about these Terms, account issues, content
                    reports, subscription concerns or payment requests, contact:
                  </p>

                  <Card className="overflow-hidden rounded-2xl border-emerald-100 bg-emerald-50/50 shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-100">
                          <ShieldCheck className="size-6 text-emerald-700" />
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-900">
                            AnNoor.app
                          </h3>

                          <p className="text-sm text-slate-500">
                            Support &amp; Legal Team
                          </p>
                        </div>
                      </div>

                      <Separator className="my-5 bg-emerald-100" />

                      <div className="space-y-4">
                        <a
                          href="mailto:annoor@annoor.app"
                          className="flex items-center gap-3 text-sm text-slate-700 transition-colors hover:text-emerald-700"
                        >
                          <div className="flex size-10 items-center justify-center rounded-lg bg-white">
                            <Mail className="size-4 text-emerald-600" />
                          </div>

                          <div>
                            <p className="text-xs text-slate-500">Email</p>
                            <p className="font-medium">annoor@annoor.app</p>
                          </div>

                          <ArrowUpRight className="ml-auto size-4 text-slate-400" />
                        </a>

                        <a
                          href="tel:9452674223"
                          className="flex items-center gap-3 text-sm text-slate-700 transition-colors hover:text-emerald-700"
                        >
                          <div className="flex size-10 items-center justify-center rounded-lg bg-white">
                            <Phone className="size-4 text-emerald-600" />
                          </div>

                          <div>
                            <p className="text-xs text-slate-500">
                              Contact Number
                            </p>
                            <p className="font-medium">9452674223</p>
                          </div>

                          <ArrowUpRight className="ml-auto size-4 text-slate-400" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </Section>

                {/* Bottom Note */}
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                  <p className="text-sm leading-7 text-slate-500">
                    Thank you for choosing AnNoor.app. By using our platform,
                    you help us build a more connected and accessible Islamic
                    community.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Back to top */}
            <div className="mt-6 flex justify-end">
              <Link
                href="#top"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:border-emerald-200 hover:text-emerald-700"
              >
                Back to top
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
