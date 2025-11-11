export default function Story() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Our Story</h2>
        <p className="mt-4 text-gray-600 text-lg">
          What began as a summer pop-up turned into a neighborhood favorite. We source dairy from small local farms and stir in seasonal fruits, spices, and house-made mix-ins.
        </p>
        <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-2xl border border-gray-100 shadow-sm">
            <p className="font-semibold text-gray-900">Real Ingredients</p>
            <p className="mt-2 text-sm text-gray-600">No artificial flavors or colors. Just the good stuff.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100 shadow-sm">
            <p className="font-semibold text-gray-900">Made Daily</p>
            <p className="mt-2 text-sm text-gray-600">Small batches churned fresh every morning.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100 shadow-sm">
            <p className="font-semibold text-gray-900">Community First</p>
            <p className="mt-2 text-sm text-gray-600">Partnering with local bakers and farmers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
