const flavors = [
  {
    name: "Vanilla Bean",
    desc: "Madagascar vanilla with real bean specks.",
    color: "from-amber-100 to-amber-50",
    img: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Strawberry Bliss",
    desc: "Sun-ripened berries folded into cream.",
    color: "from-pink-100 to-rose-50",
    img: "https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Mint Choco",
    desc: "Fresh mint with dark chocolate shards.",
    color: "from-emerald-100 to-teal-50",
    img: "https://images.unsplash.com/photo-1625944522643-8a1e642aca3b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Cookie Galaxy",
    desc: "Vanilla base swirled with cookie chunks.",
    color: "from-purple-100 to-indigo-50",
    img: "https://images.unsplash.com/photo-1623227779364-6a838429da38?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Flavors() {
  return (
    <section id="flavors" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Our Signature Flavors</h2>
          <a href="#order" className="hidden sm:inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2 text-sm font-semibold hover:bg-gray-800">Order a Pint</a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flavors.map((f) => (
            <article key={f.name} className={`group rounded-2xl p-4 bg-gradient-to-br ${f.color} border border-white shadow-sm hover:shadow-md transition-shadow`}> 
              <div className="aspect-square rounded-xl overflow-hidden">
                <img src={f.img} alt={f.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="mt-4 font-bold text-gray-900">{f.name}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
