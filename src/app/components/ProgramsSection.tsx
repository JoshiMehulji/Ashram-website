import Image from 'next/image';

export default function ProgramsSection() {
  const programs = [
    {
      title: 'Inner Engineering',
      duration: '7 Sessions',
      description: 'A comprehensive course for personal growth and wellbeing',
      image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg',
      level: 'Beginner Friendly',
    },
    {
      title: 'Hatha Yoga',
      duration: '21 Weeks',
      description: 'Classical yoga for health, vitality, and inner transformation',
      image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg',
      level: 'All Levels',
    },
    {
      title: 'Meditation Programs',
      duration: 'Ongoing',
      description: 'Guided practices to experience inner peace and clarity',
      image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg',
      level: 'Beginner Friendly',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white px-10">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-dark mb-4">
            Meditation Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-earth-cream rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="relative h-64">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {program.level}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-serif font-bold text-earth-dark">
                    {program.title}
                  </h3>
                  <span className="text-sm text-earth-brown font-medium">
                    {program.duration}
                  </span>
                </div>
                <p className="text-earth-brown mb-6">{program.description}</p>
                <button className="btn-secondary w-full">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
