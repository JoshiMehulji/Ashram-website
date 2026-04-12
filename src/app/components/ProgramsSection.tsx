"use client";
import { programs } from "@/data/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProgramsSection() {
  const router = useRouter();

  return (
    <section id="programs" className="py-20 bg-orange-300 px-4 md:px-10">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-dark mb-4">
            Guru Parampara
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-earth-cream rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 w-full md:w-[30%] bg-[#f7f7f7]"
              onClick={() => {
                router.push(`/${program?.slug}`);
              }}
            >
              <div className="relative h-64 bg-[#f7f7f7] border-b">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-serif font-bold text-earth-dark h-[110px] md:h-[84px]">
                    {program.title}
                  </h3>
                </div>
                <button
                  className="bg-amber-300 rounded-[20px] cursor-pointer
                 p-2 w-full"
                  onClick={() => {
                    router.push(`/${program?.slug}`);
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
