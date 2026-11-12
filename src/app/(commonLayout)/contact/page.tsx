import ContactCTA from "@/components/contactPage/BottomCta";
import ContactHero from "@/components/contactPage/ContactHero";
import ContactSection from "@/components/contactPage/ContactSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white " id="top">
      <ContactHero />

      <ContactSection />

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactCTA />
        </div>
      </section>
    </div>
  );
}
