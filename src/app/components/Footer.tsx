import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const formLinks = [
    {
      name: "Rudrabhishek",
      url: "https://zfrmz.in/zu1QZNH6ZBOoCnGp7RHh",
    },
    {
      name: "Ashram Visit",
      url: "https://zfrmz.in/nQKQf4fD87adthF1K8fG",
    },
    {
      name: "Diksha Request",
      url: "https://zfrmz.in/ZXmxavQkJmUFIDC5xCWE",
    },
    {
      name: "Manokamna Jyoti Kalash",
      url: "https://zfrmz.in/Hyl0pOGnOgGzueoSxLKo",
    },
    {
      name: "Jap Submission",
      url: "https://zfrmz.in/LaKApSWMkpsAMU6bUSc2",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/parampujya.prabhubaa",
      icon: '/assets/icons/facebook.png',
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/prabhubaa_official",
      icon: '/assets/icons/instagram.png',
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@prabhubaa1185",
      icon: '/assets/icons/youtube.png',
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#f7f1e7] text-[#33271E]">

      {/* ============================================
          DECORATIVE BACKGROUND
      ============================================= */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#c8873c]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#c8873c]/10 blur-3xl" />

      <div className="relative z-10">

        {/* ============================================
            TOP MESSAGE
        ============================================= */}

        <div className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">

            <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c8873c]/15">
                  <Sparkles className="h-5 w-5 text-[#e3b16e]" />
                </div>

                <div>
                  <p className="font-serif text-lg text-[#33271E]">
                    A Journey Within
                  </p>

                  <p className="text-sm text-[#33271E]/50">
                    Peace • Devotion • Awareness
                  </p>
                </div>

              </div>

              <p className="max-w-xl text-sm leading-6 text-[#33271E]/50">
                May the grace of the Guru and the blessings of Lord Shiva
                guide every step of your spiritual journey.
              </p>

            </div>

          </div>
        </div>


        {/* ============================================
            MAIN FOOTER
        ============================================= */}

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_0.8fr_1.2fr]">


            {/* ========================================
                BRAND / ADDRESS
            ========================================= */}

            <div>

              {/* Logo */}
              <Link
                href="/"
                className="mb-7 inline-flex items-center"
              >
                <div className="rounded-2xl bg-[#f7f1e7] px-5 py-3">
                  <Image
                    src="/assets/svg/logo-one.png"
                    alt="Param Pujya Prabhu Baa"
                    width={190}
                    height={75}
                    className="h-auto w-[170px] object-contain"
                  />
                </div>
              </Link>

              <h3 className="font-serif text-2xl font-semibold text-[#33271E]">
                Kashi Shivpuri Ashram
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#33271E]/55">
                A peaceful space for devotion, meditation, spiritual
                contemplation and inner transformation.
              </p>


              {/* Address */}
              <div className="mt-7 space-y-4">

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#d79a51]" />

                  <p className="text-sm leading-6 text-[#33271E]/65">
                    Village - Intali Kheda
                    <br />
                    District - Salumber
                    <br />
                    Rajasthan - 313026
                  </p>
                </div>


                <a
                  href="tel:9929681423"
                  className="flex items-center gap-3 text-sm text-[#33271E]/65 transition-colors hover:text-[#e3b16e]"
                >
                  <Phone className="h-5 w-5 text-[#d79a51]" />

                  <span>+91 99296 81423</span>
                </a>

              </div>


              {/* Social Media */}
              <div className="mt-8 flex gap-3">

                {socialLinks.map((social) => {
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c8873c] hover:bg-[#c8873c]"
                    >
                      <Image src={social.icon} alt={social.name} width={20} height={20} className="h-5 w-5 text-[#33271E]/70 transition-colors group-hover:text-[#33271E]" />
                    </a>
                  );
                })}

              </div>

            </div>


            {/* ========================================
                FORMS
            ========================================= */}

            <div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d79a51]">
                Connect
              </p>

              <h3 className="font-serif text-2xl font-semibold text-[#33271E]">
                Forms
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#33271E]/45">
                Begin your journey by submitting the appropriate request.
              </p>


              <div className="mt-7 space-y-1">

                {formLinks.map((form) => (
                  <a
                    key={form.name}
                    href={form.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300 hover:bg-white/5"
                  >

                    <span className="text-sm text-[#33271E]/65 transition-colors group-hover:text-[#33271E]">
                      {form.name}
                    </span>

                    <ArrowUpRight
                      className="h-4 w-4 text-[#33271E]/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#d79a51]"
                    />

                  </a>
                ))}

              </div>

            </div>


            {/* ========================================
                MAP
            ========================================= */}

            <div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d79a51]">
                Find Us
              </p>

              <h3 className="font-serif text-2xl font-semibold text-[#33271E]">
                Visit the Ashram
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#33271E]/45">
                We welcome you to experience the peaceful atmosphere of
                Kashi Shivpuri Ashram.
              </p>


              {/* Map */}
              <div className="group relative mt-7 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1">

                <div className="relative h-60 overflow-hidden rounded-xl">

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2738.50076840695!2d73.9534059093699!3d23.995557379233684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967097446ab923f%3A0x959701320dd99e4d!2sShivpuri%20Aashram%20Prabhu%20Baa%2C%20Intalikhera!5e1!3m2!1sen!2sin!4v1774771021074!5m2!1sen!2sin"
                    className="h-full w-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Kashi Shivpuri Ashram Location"
                  />

                </div>

              </div>


              {/* Directions */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Shivpuri+Ashram+Prabhu+Baa+Intalikhera"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#d79a51] transition-colors hover:text-[#e8b879]"
              >
                Get Directions

                <ArrowUpRight className="h-4 w-4" />
              </a>

            </div>

          </div>

        </div>


        {/* ============================================
            BOTTOM BAR
        ============================================= */}

        <div className="border-t border-white/10">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center md:flex-row md:px-10 md:text-left">

            <p className="text-xs text-[#33271E]/40">
              © {new Date().getFullYear()} Kashi Shivpuri Ashram.
              All Rights Reserved.
            </p>

            <div className="flex items-center gap-5 text-xs text-[#33271E]/40">

              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-[#33271E]"
              >
                Privacy Policy
              </Link>

              <span className="h-3 w-px bg-white/10" />

              <Link
                href="/terms"
                className="transition-colors hover:text-[#33271E]"
              >
                Terms
              </Link>

            </div>

            <p className="text-xs text-[#33271E]/30">
              Made with devotion
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}