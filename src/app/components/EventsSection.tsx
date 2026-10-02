"use client";

import Image from "next/image";
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function EventsSection() {
  const router = useRouter();

  const events = [
    {
      title: "Chaitanya Diwas",
      date: "January 07",
      location: "Kashi Shivpuri Ashram",
      type: "Annual Celebration",
      image: "/assets/images/events/chaitanya-diwas.jpeg",
    },
    {
      title: "Sankalp Diwas",
      date: "May 25",
      location: "Kashi Shivpuri Ashram",
      type: "Annual Celebration",
      image: "/assets/images/events/sankalp-diwas.jpeg",
    },
    {
      title: "Guru Purnima",
      date: "N/A",
      location: "Kashi Shivpuri Ashram",
      type: "Special Occasion",
      image: "/assets/images/events/guru-purnima.jpeg",
    },
    {
      title: "Maha Shivratri",
      date: "N/A",
      location: "Kashi Shivpuri Ashram",
      type: "Special Occasion",
      image: "/assets/images/events/shivratri.jpeg",
    },
    {
      title: "Navratri",
      date: "N/A",
      location: "Kashi Shivpuri Ashram",
      type: "Annual Celebration",
      image: "/assets/images/events/mataji.jpeg",
    },
    {
      title: "Dattatreya Jayanti",
      date: "N/A",
      location: "Kashi Shivpuri Ashram",
      type: "Annual Celebration",
      image: "/assets/images/events/dattatreya-ji.jpeg",
    },
  ];

  const visitLink = "https://zfrmz.in/nQKQf4fD87adthF1K8fG";

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#f6f0e7] py-24 px-4"
    >
      {/* Decorative background elements */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#c8873c]/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#957e66]/15 blur-3xl" />

      <div className="section-container relative z-10">
        {/* =====================================
            SECTION HEADER
        ====================================== */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#c8873c]" />

            <Sparkles className="h-5 w-5 text-[#c8873c]" />

            <span className="h-px w-12 bg-[#c8873c]" />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b87532]">
            Sacred Gatherings
          </p>

          <h2 className="font-serif text-4xl font-bold text-earth-dark md:text-5xl lg:text-6xl">
            Events
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-earth-brown md:text-lg">
            Join us in celebrating sacred occasions, spiritual gatherings,
            and timeless traditions at Kashi Shivpuri Ashram.
          </p>
        </div>

        {/* =====================================
            EVENTS GRID
        ====================================== */}

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="group overflow-hidden rounded-2xl border border-[#e8dccb] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-[#eee5d8]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Event type */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/30 bg-black/30 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    {event.type}
                  </span>
                </div>

                {/* Date badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-sm">
                  <CalendarDays className="h-4 w-4 text-[#b87532]" />

                  <span className="text-sm font-semibold text-earth-dark">
                    {event.date}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-earth-dark transition-colors duration-300 group-hover:text-[#b87532]">
                  {event.title}
                </h3>

                {/* Location */}
                {/* <div className="mt-4 flex items-start gap-2 text-sm text-earth-brown">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#b87532]" />

                  <span>{event.location}</span>
                </div> */}

                {/* Divider */}
                <div className="my-5 h-px bg-[#eee4d6]" />

                {/* CTA */}
                <button
                  onClick={() => router.push(`/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="group/btn flex w-full cursor-pointer items-center justify-between rounded-xl bg-[#f7eee2] px-5 py-3.5 text-sm font-semibold text-[#9d632c] transition-all duration-300 hover:bg-[#b87532] hover:text-white"
                >
                  <span>View Details</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/70 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:bg-white/20">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================
            BOTTOM CTA
        ====================================== */}

        <div className="mt-16 text-center">
          <p className="mb-4 text-sm text-earth-brown">
            Experience the divine atmosphere of Kashi Shivpuri Ashram
          </p>

          <button
            onClick={() => window.open(visitLink, "_blank")}
            className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-earth-dark px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 bg-[#b87532] hover:shadow-xl"
          >
            Plan Your Ashram Visit

            <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}