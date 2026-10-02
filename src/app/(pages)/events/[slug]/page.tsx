"use client"
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Clock3,
  Heart,
} from "lucide-react";

const events:any = {
  "chaitanya-diwas": {
    title: "Chaitanya Diwas",
    subtitle: "A Celebration of Divine Consciousness",
    date: "January 07",
    location: "Kashi Shivpuri Ashram",
    type: "Annual Celebration",

    image: "/assets/images/events/chaitanya-diwas.jpeg",

    description:
      "Chaitanya Diwas (चैतन्य दिवस) literally means “Day of Consciousness” or “Day of Spiritual Awakening.”",

    longDescription:
      `In a spiritual or ashram context, it can refer to a special day dedicated to spiritual awareness, devotion, meditation, and inner awakening. The exact significance can vary depending on the ashram or spiritual tradition.
      For an Ashram website

If Chaitanya Diwas is one of the programs/forms on your Kashi Shivpuri Ashram website, you could describe it as:

If you tell me what Chaitanya Diwas specifically means at Kashi Shivpuri Ashram, I can write a more accurate description for the website`,

    highlights: [
      "Collective prayer and remembrance",
      "Meditation and spiritual contemplation",
      "Satsang and devotional activities",
      "Opportunity to spend time in the peaceful Ashram environment",
    ],

    quote:
      "When the mind becomes quiet, the light within begins to reveal itself.",

    visitLink: "https://zfrmz.in/nQKQf4fD87adthF1K8fG",
  },

  "sankalp-diwas": {
    title: "Sankalp Diwas",
    subtitle: "A Day of Devotion, Resolve & Inner Transformation",
    date: "May 25",
    location: "Kashi Shivpuri Ashram",
    type: "Annual Celebration",

    image: "/assets/images/events/sankalp-diwas.jpeg",

    description:
      "In a spiritual or ashram context, Sankalp means making a sincere intention or commitment before God, Guru, or oneself to follow a particular spiritual purpose or practice.",

    longDescription: `What can Sankalp Diwas involve?
🙏 Making a spiritual sankalp (संकल्प)
🕉️ Participating in puja and prayers
🧘 Meditation and self-reflection
📿 Taking a commitment toward Jap, Sadhana, seva, or spiritual discipline
🌸 Seeking blessings for fulfilling the sankalp

A sacred occasion to make a heartfelt spiritual commitment and seek divine blessings for its fulfillment. Devotees come together through prayer, meditation, chanting, and devotion to strengthen their resolve on the spiritual path.

If this is a form/service on your Kashi Shivpuri Ashram website, the form could collect the devotee's name, sankalp/purpose, preferred date, contact details, and any additional message`,

    highlights: [
      "Spiritual reflection and contemplation",
      "Prayer and meditation",
      "Devotional gatherings",
      "Renewal of personal spiritual resolve",
    ],

    quote:
      "A sincere resolve, carried with devotion, becomes a path towards transformation.",

    visitLink: "https://zfrmz.in/nQKQf4fD87adthF1K8fG",
  },

  "guru-purnima": {
    title: "Guru Purnima",
    subtitle: "A Sacred Day of Gratitude and Reverence",
    date: "N/A",
    location: "Kashi Shivpuri Ashram",
    type: "Special Occasion",

    image: "/assets/images/events/guru-purnima.jpeg",

    description:
      "If you mean Guru Purnima (गुरु पूर्णिमा), it is a sacred Hindu occasion dedicated to honouring one's Guru or spiritual teacher and expressing gratitude for their guidance",

    longDescription: `What happens on Guru Purnima?

Depending on the spiritual tradition, devotees may:

🙏 Offer Guru Puja and seek the Guru's blessings
🪷 Express gratitude and devotion to the Guru
📿 Participate in mantra chanting and meditation
🕉️ Attend satsang and spiritual discourses
🌸 Make offerings or perform Seva
🧘 Renew their commitment to their spiritual practices

A sacred occasion to express gratitude and devotion to the Guru, whose guidance illuminates the path of spiritual growth. Devotees come together for Guru Puja, meditation, chanting, satsang, and seeking the blessings of the Guru.

Guru Purnima is observed on the full moon (Purnima) of the Hindu month of Ashadha, so its Gregorian date changes every year`,

    highlights: [
      "Guru remembrance and gratitude",
      "Meditation and prayer",
      "Devotional gatherings",
      "Spiritual reflection",
    ],

    quote:
      "Gratitude opens the heart to the wisdom that guides the journey within.",

    visitLink: "https://zfrmz.in/nQKQf4fD87adthF1K8fG",
  },

  "maha-shivratri": {
    title: "Maha Shivratri",
    subtitle: "A Night of Devotion to Lord Shiva",
    date: "N/A",
    location: "Kashi Shivpuri Ashram",
    type: "Special Occasion",

    image: "/assets/images/events/shivratri.jpeg",

    description:
      "Maha Shivratri (महाशिवरात्रि) means “the Great Night of Shiva.” It is one of the most important Hindu festivals dedicated to Lord Shiva.",

    longDescription: `🕉️ Perform Shiva Puja and Rudrabhishek
📿 Chant Om Namah Shivaya and other Shiva mantras
🪔 Light diyas and Jyoti
🌿 Offer Bilva (Bel) leaves, flowers, water, and other traditional offerings
🌙 Observe fasting (Vrat) according to their tradition
🧘 Spend the night in meditation, prayer, and devotional singing
🛕 Visit Shiva temples and participate in special ceremonies

A sacred night dedicated to Lord Shiva, observed through devotion, meditation, mantra chanting, Shiva Puja, and Rudrabhishek. Devotees gather to seek divine blessings and immerse themselves in the spiritual remembrance of Shiva

Maha Shivratri is different from an ordinary Shivratri: Maha Shivratri is the major annual observance, while Shivratri can also refer to the monthly observance`,

    highlights: [
      "Lord Shiva worship and remembrance",
      "Meditation and prayer",
      "Devotional activities",
      "Peaceful spiritual gatherings",
    ],

    quote:
      "In stillness, devotion becomes prayer and silence becomes meditation.",

    visitLink: "https://zfrmz.in/nQKQf4fD87adthF1K8fG",
  },

  navratri: {
    title: "Navratri",
    subtitle: "Nine Nights of Devotion and Divine Energy",
    date: "N/A",
    location: "Kashi Shivpuri Ashram",
    type: "Annual Celebration",

    image: "/assets/images/events/mataji.jpeg",

    description:
      "Navratri (नवरात्रि) means “nine nights.” It is a major Hindu festival dedicated especially to Devi/Shakti, the Divine Feminine. The festival is observed over nine nights and ten days, with different forms of the Goddess worshipped according to tradition.",

    longDescription: `
    What happens during Navratri?

Devotees commonly:

🙏 Perform Devi Puja
🪔 Light a Jyoti/Diya
🌺 Offer flowers, fruits and traditional offerings
📿 Chant Devi mantras and prayers
🧘 Practice meditation and spiritual discipline
🌾 Perform Ghatasthapana/Kalash Sthapana at the beginning of Navratri
🎶 Participate in bhajans, kirtan, satsang, and devotional programs
🌙 Observe fasting (Vrat) according to their tradition

Navratri
A sacred festival of nine nights dedicated to Maa Shakti. Devotees come together for Devi Puja, mantra chanting, meditation, bhajans, and devotional practices, seeking the blessings of the Divine Mother for spiritual strength, peace, and inner transformation.`,

    highlights: [
      "Devotion to the Divine Mother",
      "Prayer and meditation",
      "Spiritual gatherings",
      "Collective devotional practices",
    ],

    quote:
      "Where there is devotion, the heart discovers a deeper strength within.",

    visitLink: "https://zfrmz.in/nQKQf4fD87adthF1K8fG",
  },

  "dattatreya-jayanti": {
    title: "Dattatreya Jayanti",
    subtitle: "Celebrating the Divine Teacher",
    date: "N/A",
    location: "Kashi Shivpuri Ashram",
    type: "Annual Celebration",

    image: "/assets/images/events/dattatreya-ji.jpeg",

    description:
      "Dattatreya Jayanti (दत्तात्रेय जयंती) is a Hindu festival celebrating the birth of Lord Dattatreya, who is traditionally regarded as a divine manifestation combining Brahma, Vishnu, and Shiva.",

    longDescription: `How is Dattatreya Jayanti observed?

Devotees may:

🙏 Perform Dattatreya Puja
📿 Chant Dattatreya mantras and stotras
🪔 Light lamps and make traditional offerings
🧘 Practice meditation and spiritual sadhana
📖 Listen to or read scriptures associated with Lord Dattatreya
🍚 Participate in prasad and community meals
🛕 Visit temples or participate in special ashram programs

Dattatreya Jayanti
A sacred occasion celebrating the appearance of Lord Dattatreya, revered as a symbol of divine wisdom and spiritual realization. Devotees gather for prayer, puja, mantra chanting, meditation, and satsang to seek divine blessings and deepen their spiritual journey.`,

    highlights: [
      "Dattatreya remembrance",
      "Prayer and meditation",
      "Devotional gatherings",
      "Reflection on spiritual wisdom",
    ],

    quote:
      "The whole of life can become a teacher when we learn to observe with awareness.",

    visitLink: "https://zfrmz.in/nQKQf4fD87adthF1K8fG",
  },
};

export default function EventDetailsPage() {
  const { slug } = useParams() as { slug: string };

  const event = events[slug];

  if (!event) {
    notFound();
  }

  return (
    <main className="bg-[#faf7f1] text-[#30261e]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[650px] overflow-hidden">

        <Image
          src={event.image}
          alt={event.title}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24 lg:px-10">

          <div className="max-w-3xl">

            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-white/70">
              <Link
                href="/"
                className="transition-colors hover:text-white"
              >
                Home
              </Link>

              <span>/</span>

              <Link
                href="/#events"
                className="transition-colors hover:text-white"
              >
                Events
              </Link>

              <span>/</span>

              <span className="text-white">
                {event.title}
              </span>
            </div>

            {/* Event Type */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#e3b16e]" />

              {event.type}
            </div>

            {/* Title */}
            <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              {event.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-2xl font-serif text-xl italic leading-8 text-white/85 md:text-2xl">
              {event.subtitle}
            </p>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              {event.description}
            </p>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf7f1] to-transparent" />

      </section>


      {/* =====================================================
          EVENT INFORMATION
      ====================================================== */}

      <section className="relative z-20 -mt-10 px-6">

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">

          {/* Date */}
          <div className="rounded-2xl border border-[#e8dccb] bg-white p-6 shadow-lg">
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7ede0]">
                <CalendarDays className="h-5 w-5 text-[#b87532]" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Date
                </p>

                <p className="mt-1 font-semibold text-[#30261e]">
                  {event.date}
                </p>
              </div>

            </div>
          </div>

          {/* Location */}
          <div className="rounded-2xl border border-[#e8dccb] bg-white p-6 shadow-lg">
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7ede0]">
                <MapPin className="h-5 w-5 text-[#b87532]" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="mt-1 font-semibold text-[#30261e]">
                  {event.location}
                </p>
              </div>

            </div>
          </div>

          {/* Type */}
          <div className="rounded-2xl border border-[#e8dccb] bg-white p-6 shadow-lg">
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7ede0]">
                <Clock3 className="h-5 w-5 text-[#b87532]" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Event Type
                </p>

                <p className="mt-1 font-semibold text-[#30261e]">
                  {event.type}
                </p>
              </div>

            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT EVENT
      ====================================================== */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <div className="grid gap-14 md:grid-cols-[1.3fr_0.7fr]">

            {/* Main Content */}
            <div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b87532]">
                About the Event
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#30261e] md:text-4xl">
                A Sacred Time for Reflection
              </h2>

              <div className="mt-6 h-px w-16 bg-[#c8873c]" />

              <p className="mt-7 text-lg leading-8 text-gray-600">
                {event.longDescription}
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Whether you come for prayer, meditation, remembrance, or
                simply to experience the peaceful atmosphere of the Ashram,
                the occasion offers a space to slow down and reconnect with
                what is meaningful.
              </p>

            </div>


            {/* Quote */}
            <div className="relative flex items-center">

              <div className="rounded-3xl bg-[#33271e] p-8 md:p-10">

                <Sparkles className="mb-6 h-7 w-7 text-[#e3b16e]" />

                <p className="font-serif text-xl italic leading-8 text-white/90">
                  “{event.quote}”
                </p>

                <div className="mt-7 h-px w-12 bg-[#c8873c]" />

                <p className="mt-4 text-sm text-white/60">
                  Kashi Shivpuri Ashram
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HIGHLIGHTS
      ====================================================== */}

      <section className="bg-[#f0e8dc] px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b87532]">
              Experience
            </p>

            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              What to Expect
            </h2>

          </div>


          <div className="grid gap-5 md:grid-cols-2">

            {event.highlights.map((highlight:any, index:number) => (

              <div
                key={highlight}
                className="group rounded-2xl border border-[#e3d5c4] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex gap-5">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f7ede0] font-serif font-bold text-[#b87532] transition-colors group-hover:bg-[#b87532] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="pt-2 leading-7 text-gray-600">
                    {highlight}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ASHRAM VISIT CTA
      ====================================================== */}

      <section className="px-6 py-24">

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#33271e] px-8 py-16 text-center md:px-16">

          {/* Decorative elements */}
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#c8873c]/20 blur-3xl" />

          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#c8873c]/20 blur-3xl" />

          <div className="relative z-10">

            <Heart className="mx-auto mb-6 h-8 w-8 text-[#e3b16e]" />

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#e3b16e]">
              Visit the Ashram
            </p>

            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
              Be a Part of the Sacred Experience
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
              Come and experience the peaceful surroundings of Kashi
              Shivpuri Ashram. Submit your visit request and our team
              will get in touch with you.
            </p>

            <button
              onClick={() => window.open(event.visitLink, "_blank")}
              className="mt-8 inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#c8873c] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#d79a51] hover:shadow-xl"
            >
              Plan Your Ashram Visit

              <ArrowUpRight className="h-5 w-5" />
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}