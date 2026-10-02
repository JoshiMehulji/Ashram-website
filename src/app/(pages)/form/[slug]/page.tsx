import Image from "next/image";
import { notFound } from "next/navigation";
import {
  CalendarDays,
  MapPin,
  ClipboardList,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

// --------------------------------------------------
// FORM DATA
// --------------------------------------------------

const forms: any = {
  rudrabhishek: {
    title: "Rudrabhishek",
    subtitle:
      "Rudrabhishek (रुद्राभिषेक) is a Hindu ritual of worship in which Lord Shiva, usually in the form of a Shiva Lingam, is ceremonially bathed (abhishek) while sacred mantras associated with Rudra, a Vedic form of Shiva, are chanted.",
    description: `The name comes from Rudra (a name/form of Shiva) + Abhishek (ritual bathing or anointing). A central part of the ceremony is often the chanting of the Shri Rudram, a Vedic hymn from the Yajurveda.

During Rudrabhishek, the Shiva Lingam may be offered water, milk, yogurt, honey, ghee, sugar or sugarcane juice, along with bilva (bel) leaves, flowers, sandalwood, and other offerings. The exact procedure varies by tradition and temple.

Devotees traditionally perform it as an expression of bhakti (devotion) and pray for things such as peace, well-being, health, prosperity, removal of difficulties, and spiritual growth. It is especially associated with Mondays, Maha Shivaratri, and the month of Shravan/Sawan, although it can be performed at other times as well.

There are also more elaborate forms, such as Laghu Rudra, Maha Rudra, and Ati Rudra, involving increasingly extensive recitations of the Shri Rudram.

If you'd like, I can also explain how Rudrabhishek is performed step-by-step at home, including the mantras and the meaning of each offering.`,
    image: "/assets/images/rudrabhishek.jpg",
    formLink: "https://zfrmz.in/zu1QZNH6ZBOoCnGp7RHh",
  },

  "ashram-visit": {
    title: "Ashram Visit",
    subtitle: "An Ashram Visit (आश्रम दर्शन/भ्रमण) means visiting an ashram to spend time in a peaceful and spiritual environment, participate in activities, and receive darshan, guidance, meditation, or blessings according to the ashram's traditions.",
    description: `What can an Ashram Visit include?

Depending on the ashram, visitors may:

🛕 Take darshan of the deity or Guru
🧘 Meditate or practice yoga
📿 Participate in puja, chanting, or spiritual programs
🕉️ Attend satsang or spiritual discussions
🌿 Spend quiet time in the ashram's natural surroundings
🍚 Receive prasad or community meals
🙏 Seek spiritual guidance or blessings
🏡 Stay at the ashram for a short period, if accommodation is available
If you're referring to an "Ashram Visit" form

For your Kashi Shivpuri Ashram website, an Ashram Visit page/form could be used to allow devotees or visitors to submit a request before visiting. It could collect:

Name → Mobile Number → Number of Visitors → Preferred Date → Purpose of Visit → Accommodation Required → Message → Submit Request

You could describe it on the website as:

“Plan your visit to Kashi Shivpuri Ashram and experience a peaceful spiritual environment through darshan, meditation, satsang, and devotional activities.”`,
    image: "/assets/images/ashram-visit.jpg",
    formLink: "https://zfrmz.in/nQKQf4fD87adthF1K8fG",
  },

  "diksha-request": {
    title: "Diksha Request",
    subtitle: "A Diksha Request (दीक्षा अनुरोध) is a formal request made by a person who wishes to receive spiritual initiation (Diksha) from a Guru or spiritual teacher",
    description: `What does Diksha mean?

Diksha is traditionally understood as a spiritual initiation through which a Guru accepts or guides a disciple on a particular spiritual path. Depending on the tradition, Diksha may involve:

🙏 Receiving the Guru's blessings
📿 Receiving a mantra or spiritual practice
🧘 Learning a particular method of meditation or sadhana
🕉️ Making a commitment to follow certain spiritual principles
🌿 Beginning a more structured spiritual relationship with the Guru/ashram

What is a "Diksha Request" on an Ashram website?

If you're creating this for Kashi Shivpuri Ashram, the Diksha Request form can allow a devotee to express their interest in receiving Diksha. Submitting the form would normally be a request, not an automatic grant of Diksha; the Guru or ashram would decide the appropriate process.

Spiritual Details

Why do you wish to receive Diksha?
Have you previously received Diksha from any Guru?
How long have you been associated with the ashram?
Preferred date for Diksha, if applicable

Declaration

I understand that submission of this request does not guarantee Diksha.
I agree to follow the guidance and process prescribed by the Ashram`,
    image: "/assets/images/diksha.jpg",
    formLink: "https://zfrmz.in/ZXmxavQkJmUFIDC5xCWE",
  },
  "manokamna-jyoti-kalash": {
    title: "Manokamna Jyoti Kalash",
    subtitle: "Manokamna Jyoti Kalash (मनोकामना ज्योति कलश) is a devotional offering in which a lamp (Jyoti/दीपक) is kept burning in a sacred Kalash (कलश) or as part of a Kalash arrangement, with a devotee's Manokamna (मनोकामना)—a sincere wish, prayer, or spiritual intention—dedicated before the deity.",
    description: `Meaning of the words\n
Manokamna (मनोकामना) → A heartfelt wish or prayer\n
Jyoti (ज्योति) → Sacred flame or lamp\n
Kalash (कलश) → Sacred vessel traditionally used in Hindu पूजा \n

How it is generally done
\n
Depending on the temple or ashram tradition, a devotee may: \n
🪔 Sponsor or establish a Jyoti in their name. \n
🙏 State their Manokamna or prayer. \n
🛕 The Jyoti is placed at a designated sacred place. \n
📿 Mantras or prayers may be recited.\n
🔥 The lamp may be kept burning for a specified period, such as one day, several days, or a longer period.
\n
If you are planning this as an online service/form, you could have options such as Devotee Name, Manokamna/Prayer, Preferred Date, Duration of Jyoti, Contact Number, and Offering Amount.`,
    image: "/assets/images/diksha.jpg",
    formLink: "https://zfrmz.in/Hyl0pOGnOgGzueoSxLKo",
  },
  "jap-submission": {
    title: "Jap Submission",
    subtitle: "Jap Submission (जप सबमिशन) generally means submitting a record of the mantra chanting (Jap/Japa) you have completed to an ashram or spiritual organization.",
    description: `What is Jap?
\n
Jap (जप) is the repeated chanting or mental repetition of a mantra or sacred name, often using a mala. For example, a devotee may be given a target such as 1,08,000 mantra repetitions over a particular period.
\n
What does "Jap Submission" mean?
\n
If this is an option on the Kashi Shivpuri Ashram website, it could allow devotees to report their completed spiritual practice.
\n
For example:\n

Devotee Name \n
Mobile Number \n
Mantra / Jap Name \n
Number of Jap Completed \n
Start Date \n
Completion Date \n
Guru/Initiation details, if applicable \n
Remarks \n
Submit \n

The exact meaning and procedure should follow your ashram's own rules, especially if Jap is connected with a specific mantra or Diksha`,
    image: "/assets/images/diksha.jpg",
    formLink: "https://zfrmz.in/LaKApSWMkpsAMU6bUSc2",
  },
};

// --------------------------------------------------
// PAGE
// --------------------------------------------------

export default async function Page({ params }: any) {
  const { slug } = await params;

  const form = forms[slug];

  if (!form) {
    notFound();
  }

  return (
    <main className="bg-[#faf8f3] text-[#2d241c]">
      {/* ============================================
          HERO
      ============================================ */}

      <section className="relative min-h-[650px] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src={form.image}
          alt={form.title}
          fill
          priority
          className="object-cover"
        />

        {/* Dark / warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="max-w-3xl">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm">
              <Sparkles className="w-4 h-4" />
              Kashi Shivpuri Ashram
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.05] mb-6">
              {form.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 font-serif italic mb-6">
              {form.subtitle}
            </p>

            {/* Description */}
            <p className="max-w-2xl text-base md:text-lg text-white/80 leading-8">
              {form.description}
            </p>

            {/* CTA */}
            <a
              href={form.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 px-7 py-4 rounded-full bg-[#c8873c] hover:bg-[#b7752e] text-white font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Fill the Form
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf8f3] to-transparent" />
      </section>

      {/* ============================================
          DETAILS
      ============================================ */}

      {/* <section className="relative -mt-8 z-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {form.details.map((detail: any, index: number) => {
              const Icon = detail.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-[#eee6da] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#f8eee2] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#b87532]" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        {detail.title}
                      </p>

                      <p className="font-semibold text-[#33271e]">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* ============================================
          INFORMATION
      ============================================ */}

      {/* <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.25em] text-sm text-[#b87532] font-semibold mb-4">
              Before You Begin
            </p>

            <h2 className="text-3xl md:text-4xl font-serif text-[#30251d]">
              Important Information
            </h2>

            <div className="w-16 h-[2px] bg-[#c8873c] mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {form.instructions.map((instruction: any, index: number) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-[#eee6da] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#f8eee2] text-[#b87532] flex items-center justify-center font-semibold group-hover:bg-[#c8873c] group-hover:text-white transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-7 pt-1">{instruction}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ============================================
          FORM CTA
      ============================================ */}

      <section className="px-6 pb-24">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl bg-[#33271e90] px-8 py-14 md:px-16 text-center">
          {/* Decorative circles */}
          <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-[#c8873c]/20 blur-2xl" />

          <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-[#c8873c]/20 blur-2xl" />

          <div className="relative z-10">
            <Sparkles className="w-7 h-7 mx-auto mb-5 text-[#e3b16e]" />

            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Ready to Begin?
            </h2>

            <p className="max-w-xl mx-auto text-white/70 leading-7 mb-8">
              Please complete the form with the required information. Our Ashram
              team will get in touch with you regarding your request.
            </p>

            <a
              href={form.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#c8873c] hover:bg-[#d99a50] text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Open {form.title} Form
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
