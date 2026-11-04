import ContactCTA from "@/components/contactPage/BottomCta";
import ContactHero from "@/components/contactPage/ContactHero";
import ContactSection from "@/components/contactPage/ContactSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white" id="top">
      <ContactHero />

      <ContactSection />

      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <ContactCTA />
        </div>
      </section>
    </div>
  );
}
