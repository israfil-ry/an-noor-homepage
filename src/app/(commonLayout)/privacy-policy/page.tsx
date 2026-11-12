import Link from "next/link";
import {
  ShieldCheck,
  Mail,
  Phone,
  ChevronRight,
  ArrowUpRight,
  LockKeyhole,
  Eye,
  FileText,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

const sections = [
  {
    id: "interpretation-and-definitions",
    title: "Interpretation and Definitions",
  },
  {
    id: "collecting-personal-data",
    title: "Collecting and Using Your Personal Data",
  },
  {
    id: "cookies-and-tracking",
    title: "Cookies, Local Storage and Tracking Technologies",
  },
  { id: "use-of-personal-data", title: "Use of Your Personal Data" },
  { id: "sharing-personal-data", title: "Sharing and Disclosure" },
  { id: "data-retention", title: "Retention of Your Personal Data" },
  { id: "delete-account", title: "Delete Your Account and Personal Data" },
  { id: "data-transfer", title: "Transfer of Your Personal Data" },
  { id: "privacy-rights", title: "Your Privacy Rights and Choices" },
  { id: "data-security", title: "Security of Your Personal Data" },
  { id: "third-party-links", title: "Links to Other Websites and Services" },
  { id: "policy-changes", title: "Changes to This Privacy Policy" },
  { id: "contact-us", title: "Contact Us" },
];

const definitions = [
  {
    term: "Account",
    description:
      "means an account created to access the Service, including a Normal User account or a Masjid account.",
  },
  {
    term: "AnNoor.app, Company, We, Us or Our",
    description:
      "refers to AnNoor.app and its mobile application, website and related services.",
  },
  {
    term: "Device",
    description:
      "means a mobile phone, tablet, computer or another device used to access the Service.",
  },
  {
    term: "Personal Data",
    description:
      "means information relating to an identified or identifiable individual.",
  },
  {
    term: "Service",
    description:
      "means the AnNoor.app mobile application, associated website, directories, account tools and related features.",
  },
  {
    term: "Service Provider",
    description:
      "means a person or organization that processes information on Our behalf to provide a stated part of the Service.",
  },
  {
    term: "Usage Data",
    description:
      "means technical or activity information generated when the Service is used.",
  },
  {
    term: "You or Your",
    description:
      "means the individual using the Service, including an authorized representative acting for a masjid, business or other organization.",
  },
];

const purposes = [
  "To create and manage Your Account.",
  "To provide location-based searches, prayer settings and other requested features.",
  "To publish and maintain information You submit for a public listing.",
  "To deliver notifications You enable.",
  "To administer subscriptions, payment confirmations and app development support payments.",
  "To respond to questions, correction requests and support enquiries.",
  "To investigate abuse, impersonation, fraud or security incidents.",
  "To maintain, troubleshoot and improve the Service using the information and methods disclosed in this policy.",
  "To comply with applicable legal obligations.",
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

export const metadata: Metadata = {
  title: "Privacy Policy | AnNoor",
  description:
    "Read AnNoor's Privacy Policy to understand how we collect, use, protect, and manage your personal information when using our mobile app, website, and related Islamic services.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f8faf9] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-emerald-100 bg-white">
        <div className="absolute -right-24 -top-32 size-96 rounded-full bg-emerald-50/80 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 size-80 rounded-full bg-teal-50/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              <ShieldCheck className="size-4" />
              Your privacy matters to us
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Privacy <span className="text-emerald-600">Policy</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Your trust is important to us. Learn how AnNoor.app collects,
              uses, stores and protects your personal information when you use
              our application, website and related services.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-600 shadow-sm">
                <FileText className="size-4 text-emerald-600" />
                Last Updated: October 8, 2026
              </div>
              <div className="inline-flex items-center gap-2 text-slate-500">
                <LockKeyhole className="size-4 text-emerald-600" />
                Privacy & Data Protection
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
                      Privacy policy sections
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

            <Card className="mt-5 overflow-hidden rounded-2xl border-emerald-100 bg-emerald-50/70 shadow-none">
              <CardContent className="p-5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white">
                  <Eye className="size-5 text-emerald-600" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">
                  Questions about privacy?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We are here to help you understand how your data is handled.
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

          {/* Privacy Policy Article */}
          <article className="min-w-0">
            <Card className="rounded-2xl border-slate-200 bg-white shadow-sm">
              <CardContent className="space-y-10 p-6 sm:p-9 lg:p-11">
                {/* Introduction */}
                <div className="space-y-4">
                  <p className="text-[15px] leading-8 text-slate-600">
                    This Privacy Policy describes how AnNoor.app collects, uses,
                    stores and discloses information when You use our mobile
                    application, website and related services. It also explains
                    Your privacy choices and how to contact Us about Your
                    Personal Data.
                  </p>
                  <p className="text-[15px] leading-8 text-slate-600">
                    We use information to provide the features You request,
                    manage accounts and listings, respond to support requests
                    and maintain the Service. Where a particular activity
                    requires consent, We request that consent separately. Using
                    the Service does not replace any separate permission or
                    consent required by applicable law.
                  </p>
                </div>

                <Separator />

                {/* 01 - Interpretation */}
                <Section
                  id="interpretation-and-definitions"
                  title="Interpretation and Definitions"
                >
                  <Subheading>Interpretation</Subheading>
                  <p>
                    Capitalized terms have the meanings described below. These
                    meanings apply whether a term appears in singular or plural
                    form.
                  </p>

                  <Subheading>Definitions</Subheading>
                  <p>For the purposes of this Privacy Policy:</p>
                  <dl className="space-y-4">
                    {definitions.map((definition) => (
                      <div
                        key={definition.term}
                        className="rounded-xl border border-slate-100 bg-slate-50/70 p-4"
                      >
                        <dt className="font-semibold text-slate-800">
                          {definition.term}
                        </dt>
                        <dd className="mt-1 text-sm leading-7 text-slate-600">
                          {definition.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Section>

                <Separator />

                {/* 02 - Collecting Data */}
                <Section
                  id="collecting-personal-data"
                  title="Collecting and Using Your Personal Data"
                >
                  <Subheading>Information You Provide</Subheading>
                  <p>
                    We receive information You submit when You create or update
                    an Account, manage a masjid profile, submit a halal place
                    listing, contact Help & Support or use another feature that
                    accepts information from You.
                  </p>
                  <p>
                    Depending on the feature and the information You choose or
                    are required to submit, this can include:
                  </p>
                  <BulletList
                    items={[
                      "Your name, email address and telephone number.",
                      "Profile images and account preferences.",
                      "A selected city, address or other location information.",
                      "Masjid or business names, contact details, locations, descriptions and uploaded images.",
                      "Prayer schedules, announcements and event information submitted for publication.",
                      "Support messages and attachments.",
                      "Information needed to administer a subscription or support payment.",
                    ]}
                  />
                  <p>
                    You should provide another person’s information only when
                    You have authority or permission to do so. Do not include
                    passwords, full payment card details or unrelated sensitive
                    information in support messages or public listing fields.
                  </p>

                  <Subheading>
                    Public Masjid Place and Event Information
                  </Subheading>
                  <p>
                    Information submitted for publication in a masjid, halal
                    place or event profile can be viewed by other users. This
                    may include an organization’s name, address, contact
                    details, images, schedules and descriptions.
                  </p>
                  <p>
                    Public information may also be copied or shared outside the
                    Service by people who can access it. Consider this before
                    publishing a personal telephone number, personal email
                    address or an image containing identifiable individuals.
                  </p>
                  <p>
                    You may request a correction or removal through the
                    available profile tools or Help & Support. A public
                    organization listing and the private Account used to manage
                    it are distinct; deleting an Account must also address any
                    associated personal information as described below.
                  </p>

                  <Subheading>Location Information</Subheading>
                  <p>
                    When You permit location access, AnNoor.app uses location
                    information to support features such as nearby masjid
                    searches, nearby halal place searches, prayer time settings
                    and Qibla guidance.
                  </p>
                  <p>
                    A city, address or location You select manually is used for
                    the feature You request. Location information may be passed
                    to a mapping or place search provider where needed to
                    deliver that feature. You can change location permission in
                    Your Device settings. If You decline or withdraw permission,
                    automatic location features may be limited. Any available
                    manual location option is shown within the relevant feature.
                  </p>

                  <Subheading>
                    Qibla Prayer Preferences and Tasbih Activity
                  </Subheading>
                  <p>
                    The Qibla feature can use Device orientation or compass
                    readings to estimate direction. Prayer features may use a
                    selected location, calculation settings and reminder
                    preferences.
                  </p>
                  <p>
                    Some features can save preferences, selected masjids, Tasbih
                    counts or other activity. Use of prayer or masjid features
                    can reveal religious interests when linked to an
                    identifiable person.
                  </p>

                  <Subheading>Device and Usage Data</Subheading>
                  <p>
                    The app, website and integrated services may process
                    technical information when You connect to or use them.
                  </p>
                  <p>
                    The Service Provider disclosures below describe the
                    providers involved in this processing. This policy should be
                    read together with any feature-specific notices presented
                    before access to sensitive information.
                  </p>

                  <Subheading>
                    Prayer Reminders and Push Notifications
                  </Subheading>
                  <p>
                    You can choose whether to receive optional prayer reminders
                    and other notifications through the available app and Device
                    settings.
                  </p>
                  <p>
                    Where notifications are delivered through a server or push
                    notification provider, a notification token and the
                    information needed to deliver the selected message may be
                    processed. Notifications scheduled entirely on the Device
                    may use locally stored settings instead.
                  </p>
                  <p>
                    The actual notification provider, information processed and
                    retention arrangements are identified in the Service
                    Provider disclosures below.
                  </p>

                  <Subheading>Photos and Uploaded Materials</Subheading>
                  <p>
                    Where You choose to upload an image, the Service receives
                    the image and information included in that upload. Camera or
                    photo access is requested or handled through the Device’s
                    available permission or selection mechanism.
                  </p>
                  <p>
                    Images submitted for public profiles can become publicly
                    visible. Only upload materials You have permission to use,
                    and consider whether an image contains another person’s
                    private information.
                  </p>

                  <Subheading>
                    Subscriptions and App Development Support
                  </Subheading>
                  <p>
                    If You purchase a halal place subscription or make a payment
                    through the Donate or Support feature, the payment or app
                    store provider identified at checkout handles the relevant
                    transaction.
                  </p>
                  <p>
                    Depending on the purchase channel, AnNoor.app may receive
                    transaction identifiers, purchase confirmations,
                    subscription status, receipts or related billing information
                    needed to administer the payment and associated service.
                  </p>
                  <p>
                    The actual payment providers and the billing information
                    AnNoor.app receives or retains are identified in the Service
                    Provider disclosures below. The payment provider’s privacy
                    policy explains its own processing.
                  </p>
                </Section>

                <Separator />

                {/* 03 - Cookies */}
                <Section
                  id="cookies-and-tracking"
                  title="Cookies, Local Storage and Tracking Technologies"
                >
                  <p>
                    When You use our website or web-based features, cookies or
                    similar storage may be used to maintain a session, remember
                    preferences or record privacy choices. Mobile features may
                    use local storage for settings and other information needed
                    by the feature.
                  </p>
                  <p>
                    You can manage website cookies through the controls offered
                    by the website and Your browser. Changing storage or cookie
                    settings may affect the relevant functionality.
                  </p>
                  <p>
                    Where consent is required for nonessential tracking, We
                    obtain it before the relevant activity and provide a way to
                    withdraw it.
                  </p>
                </Section>

                <Separator />

                {/* 04 - Use of Data */}
                <Section
                  id="use-of-personal-data"
                  title="Use of Your Personal Data"
                >
                  <p>
                    We use Personal Data for the purposes relevant to the
                    features You use:
                  </p>
                  <BulletList items={purposes} />
                  <p>
                    Optional promotional communications are handled according to
                    the consent and opt-out requirements that apply to them.
                  </p>
                  <p>
                    We do not treat a Device permission as authorization for an
                    unrelated use of information. If a new purpose requires
                    additional notice or consent, We provide it before that
                    processing begins.
                  </p>
                </Section>

                <Separator />

                {/* 05 - Sharing */}
                <Section
                  id="sharing-personal-data"
                  title="Sharing and Disclosure of Your Personal Data"
                >
                  <Subheading>With Service Providers</Subheading>
                  <p>
                    We share information with the providers identified below as
                    needed to perform their stated services. These may include
                    services for hosting, account authentication, maps or place
                    searches, notifications, payments and technical support.
                  </p>
                  <p>
                    We require providers processing information on Our behalf to
                    protect it consistently with this policy and applicable
                    requirements, limit processing to the authorized purpose and
                    apply appropriate safeguards.
                  </p>

                  <Subheading>With Other Users</Subheading>
                  <p>
                    Information You submit for publication is shared through the
                    relevant public profile or listing. Private information must
                    not be placed in public fields unless You intend and are
                    authorized to publish it.
                  </p>

                  <Subheading>
                    With Your Consent or at Your Direction
                  </Subheading>
                  <p>
                    We may share information when You request a particular
                    action or separately authorize a disclosure. The relevant
                    feature or notice explains the recipient and purpose.
                  </p>

                  <Subheading>For Business Transactions</Subheading>
                  <p>
                    If AnNoor.app is involved in a merger, acquisition or
                    transfer of business assets, relevant information may be
                    transferred subject to applicable law, appropriate
                    safeguards and any required notice. A transfer does not
                    remove protections or rights that continue to apply to Your
                    information.
                  </p>

                  <Subheading>For Legal and Security Reasons</Subheading>
                  <p>
                    We may disclose information when legally required or when
                    necessary and lawful to respond to a valid request,
                    investigate fraud or wrongdoing, protect rights and safety,
                    or establish, exercise or defend a legal claim.
                  </p>
                </Section>

                <Separator />

                {/* 06 - Retention */}
                <Section
                  id="data-retention"
                  title="Retention of Your Personal Data"
                >
                  <p>
                    We retain Personal Data for the period needed for the
                    purpose described in this policy, taking account of
                    applicable legal requirements.
                  </p>
                  <p>
                    Account information is retained while the Account is active
                    and needed to provide its features. After a valid deletion
                    request, associated personal information is deleted or
                    anonymized unless specific records must be retained for a
                    lawful reason.
                  </p>
                  <p>
                    Support correspondence is retained while the request and
                    relevant follow-up matters are being handled. Billing
                    records may be retained for applicable tax, accounting or
                    other legal requirements. Security records may be retained
                    while needed to investigate a specific incident or meet a
                    related legal obligation.
                  </p>
                  <p>
                    If a record must be retained after Account deletion, We
                    explain the category, reason and applicable period or
                    criteria. Retained records are limited to that purpose
                    rather than kept for ordinary Account use.
                  </p>
                  <p>
                    Backup copies are removed according to the disclosed backup
                    schedule. Information that has been irreversibly anonymized
                    so it can no longer identify You may be kept for statistical
                    purposes.
                  </p>
                </Section>

                <Separator />

                {/* 07 - Delete Account */}
                <Section
                  id="delete-account"
                  title="Delete Your Account and Personal Data"
                >
                  <p>
                    Normal User and Masjid account holders can request Account
                    deletion using the deletion controls provided in the app,
                    through Help & Support or through the external deletion
                    request resource below:
                  </p>
                  <p>
                    We may take proportionate steps to verify that a request
                    comes from the Account holder or an authorized
                    representative.
                  </p>
                  <p>
                    Deletion removes the Account and its associated Personal
                    Data, subject to the specific lawful retention exceptions
                    described in this policy. Disabling or freezing an Account
                    is not treated as completion of a deletion request.
                  </p>
                  <p>
                    For a Masjid or business account, deletion can remove the
                    representative’s access and associated personal information.
                    Independently maintained public organization information may
                    remain only where there is a lawful basis to maintain it;
                    personal details associated with the deleted Account must be
                    removed, replaced or otherwise handled in accordance with
                    the request and applicable law.
                  </p>
                  <p>
                    Deleting the application from Your Device does not itself
                    delete Your Account or cancel a subscription. Subscription
                    cancellation follows the purchase channel’s process
                    described in the Terms & Conditions.
                  </p>
                </Section>

                <Separator />

                {/* 08 - Transfer */}
                <Section
                  id="data-transfer"
                  title="Transfer of Your Personal Data"
                >
                  <p>
                    Information may be processed where AnNoor.app and its
                    Service Providers operate. These locations can differ from
                    Your country of residence.
                  </p>
                  <p>
                    Provider processing countries are identified in the Service
                    Provider disclosures. Where applicable law requires
                    safeguards for an international transfer, We use the
                    relevant lawful mechanism and additional protections where
                    necessary.
                  </p>
                  <p>
                    You may contact Us for information about an applicable
                    transfer and its safeguards.
                  </p>
                </Section>

                <Separator />

                {/* 09 - Rights */}
                <Section
                  id="privacy-rights"
                  title="Your Privacy Rights and Choices"
                >
                  <p>
                    Depending on the law that applies to You, Your rights may
                    include:
                  </p>
                  <BulletList
                    items={[
                      "Accessing Your Personal Data.",
                      "Correcting inaccurate or incomplete information.",
                      "Requesting deletion.",
                      "Receiving a portable copy of eligible information.",
                      "Restricting or objecting to certain processing.",
                      "Withdrawing consent where processing relies on consent.",
                      "Exercising applicable opt-out rights.",
                      "Complaining to a relevant privacy authority.",
                    ]}
                  />
                  <p>
                    Contact Help & Support or the email address below to make a
                    request. We respond within applicable legal time limits and
                    explain any lawful exception or proportionate verification
                    requirement.
                  </p>
                  <p>
                    Withdrawing consent does not affect processing that was
                    lawful before the withdrawal. You can also manage
                    permissions, notifications and available preferences through
                    the app, Your Device and any applicable website controls.
                  </p>
                </Section>

                <Separator />

                {/* 10 - Security */}
                <Section
                  id="data-security"
                  title="Security of Your Personal Data"
                >
                  <p>
                    We take reasonable technical and organizational measures
                    designed to protect Personal Data against unauthorized
                    access, disclosure, alteration and loss.
                  </p>
                  <p>
                    No method of transmission or storage can guarantee absolute
                    security. Protect Your Account credentials and report
                    suspected unauthorized access through Help & Support.
                  </p>
                </Section>

                <Separator />

                {/* 11 - Third Party */}
                <Section
                  id="third-party-links"
                  title="Links to Other Websites and Services"
                >
                  <p>
                    The Service may contain links to masjid websites, business
                    pages, event resources, mapping tools or other services
                    operated by third parties.
                  </p>
                  <p>
                    When You use an independent third party service, its own
                    privacy policy governs its processing. Review that policy
                    before providing information. This does not remove Our
                    responsibility for information We disclose to providers
                    acting on Our behalf.
                  </p>
                </Section>

                <Separator />

                {/* 12 - Changes */}
                <Section
                  id="policy-changes"
                  title="Changes to This Privacy Policy"
                >
                  <p>
                    We may update this policy when the Service, data practices
                    or applicable requirements change. The revised version will
                    show a new Last Updated date.
                  </p>
                  <p>
                    We will provide notice of material changes through an
                    appropriate app, website or account communication where
                    required. If a change requires new consent, We obtain it
                    before the relevant processing begins.
                  </p>
                </Section>

                <Separator />

                {/* 13 - Contact */}
                <Section id="contact-us" title="Contact Us">
                  <p>
                    If You have questions about this Privacy Policy or wish to
                    make a privacy request, contact:
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
                            Privacy & Support Team
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
                    Thank you for trusting AnNoor.app. We are committed to
                    respecting your privacy and handling your personal
                    information responsibly.
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
