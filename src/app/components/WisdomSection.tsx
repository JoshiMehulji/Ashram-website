import Image from 'next/image';

export default function WisdomSection() {
  const wisdomItems = [
    {
      title: 'Daily Wisdom',
      description: 'Insights and teachings to guide your spiritual journey',
      image: 'https://images.pexels.com/photos/185801/pexels-photo-185801.jpeg',
    },
    {
      title: 'Video Teachings',
      description: 'Powerful discourses on life, yoga, and meditation',
      image: 'https://images.pexels.com/photos/267967/pexels-photo-267967.jpeg',
    },
    {
      title: 'Articles & Quotes',
      description: 'Written wisdom on consciousness and wellbeing',
      image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg',
    },
  ];

  return (
    <section id="wisdom" className="py-20 bg-earth-cream">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-dark mb-4">
            Wisdom for Life
          </h2>
          <p className="text-xl text-earth-brown max-w-2xl mx-auto">
            Ancient wisdom made accessible for modern living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wisdomItems.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-earth-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-earth-brown">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
