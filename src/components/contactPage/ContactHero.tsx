export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-emerald-950">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-emerald-700/30 blur-3xl" />
        <div className="absolute -bottom-48 -left-20 h-[420px] w-[420px] rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-950 to-teal-950" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {/* <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-emerald-200 shadow-lg backdrop-blur">
          <MessageCircle className="h-7 w-7" />
        </div> */}

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          We&apos;re here to help
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Contact Us
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-emerald-100/80 sm:text-lg">
          Have a question or need assistance? We&apos;d love to hear from you.
          Get in touch with the AnNoor team.
        </p>
      </div>
    </section>
  );
}
