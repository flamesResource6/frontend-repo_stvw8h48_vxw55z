export default function CTA() {
  return (
    <section id="visit" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-amber-400 p-1 shadow-lg">
          <div className="rounded-3xl bg-white p-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">Come say hi or get delivery</h3>
            <p className="mt-2 text-gray-600">123 Scoop Street, Sweet City · Open daily 11am – 10pm</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="#order" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800">Order for Delivery</a>
              <a href="#map" className="inline-flex items-center rounded-full bg-white text-gray-900 ring-1 ring-gray-200 px-6 py-3 text-sm font-semibold shadow-sm hover:shadow">Get Directions</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
