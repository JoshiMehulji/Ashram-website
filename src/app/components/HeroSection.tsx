import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <div className="">
        <Image
          src="/assets/images/banner.png"
          alt="Meditation and spiritual practice"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* <div className="relative h-full flex items-center">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Transform Your Life Through Ancient Wisdom
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Explore yoga, meditation, and wellbeing technologies designed to create a joyful and fulfilling life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg">Explore Programs</button>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-md transition-colors text-lg">
                Watch Videos
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
