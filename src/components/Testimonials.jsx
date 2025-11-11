const quotes = [
  {
    name: "Lena K.",
    text: "The strawberry bliss is literally summer in a scoop. I'm obsessed!",
  },
  {
    name: "Marcus T.",
    text: "Creamiest mint choco I've ever had. The dark chocolate shards are perfect.",
  },
  {
    name: "Ava R.",
    text: "Friendly staff and creative flavors. New favorite weekend treat!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-pink-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 text-center">Sweet Words</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm">
              <blockquote className="text-gray-700">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-gray-900">— {q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
