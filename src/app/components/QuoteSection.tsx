export default function QuoteSection() {
  return (
    <section className="py-20 bg-amber-100">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-6xl text-accent-orange">&ldquo;</span>
          </div>
          <blockquote className="text-2xl md:text-3xl font-serif italic mb-8 leading-relaxed">
            ध्यान करो भाई ध्यान करो गहरा गहरा ध्यान करो
          </blockquote>
          <p className="text-xl font-semibold text-earth-cream">— प्रभु बा</p>
        </div>
      </div>
    </section>
  );
}
