"use client";

import Image from "next/image";

export default function EventsSection() {
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

  return (
    <section id="events" className="py-20 px-4 bg-earth-beige">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-dark mb-4">
            Events
          </h2>
          <p className="text-xl text-earth-brown max-w-2xl mx-auto">
            Join us for transformative experiences and celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent-orange flex items-center justify-between gap-4"
            >
              <div>
                <div className="mb-3">
                  <h3 className="text-2xl font-serif font-bold text-earth-dark">
                    {event.title}
                  </h3>
                  <span className="bg-earth-cream text-earth-brown py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                </div>
                <div className="space-y-2 text-earth-brown">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
                <button
                  className="mt-4 text-accent-orange font-semibold hover:text-accent-warm transition-colors cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://zfrmz.in/nQKQf4fD87adthF1K8fG",
                      "_blank",
                    );
                  }}
                >
                  Ashram Visit →
                </button>
              </div>
              <div className="w-[150px] h-[150px]">
                <Image
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-contain"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
