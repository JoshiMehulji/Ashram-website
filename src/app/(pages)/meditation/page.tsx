"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  return (
    <div className="mx-auto p-4 bg-gray-100 w-full">
      <div className="max-w-4xl mx-auto">
        <div
          className="max-w-4xl flex items-center gap-2 mb-4 w-max px-2 bg-amber-300 rounded-[20px] text-sm py-1 cursor-pointer font-semibold"
          onClick={() => router.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left-icon lucide-arrow-left text-sm"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back
        </div>
      </div>
      {/* Image */}
      <div className="max-w-4xl mx-auto w-full h-[400px] overflow-hidden rounded-2xl bg-white">
        <Image
          src={"/assets/images/meditation.jpg"}
          alt={"meditation"}
          width={500}
          height={500}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content Card */}
      <div className="max-w-4xl mx-auto bg-amber-50 shadow-lg rounded-2xl p-6 mt-6">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Meditation
        </h1>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          Dhyaan(meditation) is the process of becoming attuned with the self,
          thoughtless, and free of all burdens. True Dhyaan happens only after
          Sadguru activates Kundalini Shakti. Dhyaan cannot be performed or
          taught. It is the result of Sadguru’s grace.
          <br />
          <br />
          Dhyaan is the cleansing of mind. One is immersed in the joy of various
          kriyaas. Sadhak does not need to search for pleasures in the world
          out. Sadhak discovers Teerth (sacred places), Vrata (religious
          course), festivals, Gods, all in himself.
          <br />
          <br />
          Sadhana(an ego-transcending spiritual practice) clears the path of
          Kundalini Shakti so it can unite with God Shiva. This same power
          fulfills every wish of the Sadhak. It grants extra sensory vision and
          abilities of a Siddha (superhuman), clears the nervous system, causes
          ashta satvik feelings (8 pure emotions), activates the third eye, and
          finally eliminates the threat of death.
          <br />
          <br />
          Dhyaan purifies the mind and speech, provides endless energy, and
          creates non-binding love. Sadhak’s face glows with mystical charm.
          When Dhyaan blossoms, Sadhak attains the ultimate state of being and
          achieves Nirvana. Samadhi is the eventual result of Dhyaan. Samadhi
          occurs when physical, metaphysical and psychological unease ends.
          Dhyaan helps Sadhak transcend this unease.
          <br />
          <br />
          If one thinks this to be the final birth and is determined to find the
          decisive treasures then Sadguru’s grace opens the channel for Shiva
          and Shakti’s union. Doors will open on their own.
          <br />
          <br />
          Sadguru is committed to take his disciples till that very point. In
          fact, Sadguru is the one who works through his disciple. Hence we only
          need to surrender ourselves to Sadguru as he is the one responsible
          for our transcendence.
          <br />
          <br />
          Passage from Shiv Purana says, “There’s no Teerth, Penance, or Yagya
          comparable to Dhyaan.” Hence, Dhyaan is the primary duty of every
          Sadhak.
        </p>
      </div>
    </div>
  );
};

export default page;
