"use client";

import { programs } from "@/data/data";
import { useParams, useRouter } from "next/navigation";

const page = () => {
  const params = useParams();
  const router = useRouter();
  const data: any = programs.find((program) => program.slug === params.slug);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center gap-2 mb-4 w-max px-2 bg-amber-300 rounded-[20px] text-sm py-1 cursor-pointer font-semibold" onClick={() => router.back()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-arrow-left-icon lucide-arrow-left text-sm"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        Back
      </div>
      {/* Image */}
      <div className="w-full h-[400px] overflow-hidden rounded-2xl shadow-md bg-[#f7f7f7]">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content Card */}
      <div className="bg-amber-50 shadow-lg rounded-2xl p-6 mt-6">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          {data.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
          <span className="bg-amber-400 px-3 py-1 rounded-full font-semibold">
            Birth: {data.Birth}
          </span>
          {data.Mahasamadhi && <span className="bg-amber-400 px-3 py-1 rounded-full font-semibold">
            Mahasamadhi: {data.Mahasamadhi}
          </span>}
        </div>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {data.content}
        </p>
      </div>
    </div>
  );
};

export default page;
