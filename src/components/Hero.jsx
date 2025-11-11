export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_30%_10%,#ffe4e6_0%,transparent_60%),radial-gradient(40%_50%_at_70%_20%,#fef3c7_0%,transparent_55%),radial-gradient(50%_50%_at_60%_70%,#ddd6fe_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-8">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pink-600 bg-pink-50 rounded-full px-3 py-1">
            Small batch • Hand-crafted • Daily fresh
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Scoop up joy with every bite
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            From classic vanilla bean to adventurous seasonal swirls, our creamy scoops are churned with love and the finest ingredients.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#order" className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-amber-400 text-white px-6 py-3 text-sm font-semibold shadow hover:shadow-md transition-all">
              Order Now
            </a>
            <a href="#flavors" className="inline-flex items-center rounded-full bg-white text-gray-900 ring-1 ring-gray-200 px-6 py-3 text-sm font-semibold shadow-sm hover:shadow transition-all">
              Explore Flavors
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
            <div className="flex -space-x-2">
              <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=5" alt="" />
              <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=11" alt="" />
              <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=3" alt="" />
            </div>
            <span>1,200+ happy customers</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -left-10 h-72 w-72 bg-amber-200 rounded-full blur-3xl opacity-40" />
          <div className="absolute -bottom-12 -right-12 h-72 w-72 bg-pink-200 rounded-full blur-3xl opacity-40" />

          <div className="relative mx-auto w-full max-w-md aspect-square">
            <div className="absolute inset-0 rounded-3xl bg-white shadow-xl border border-gray-100" />
            <div className="absolute -top-8 -left-8 h-24 w-24 bg-pink-300/60 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -right-8 h-24 w-24 bg-amber-300/60 rounded-full blur-2xl" />

            <div className="absolute inset-6 rounded-2xl bg-gradient-to-tr from-pink-50 via-amber-50 to-purple-50 p-6 grid grid-rows-2 grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1749524504630-9a812e20925a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpY2VjcmVhbSUyMDF8ZW58MHwwfHx8MTc2Mjg2OTQ3Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="icecream 1" className="object-cover rounded-xl shadow" />
              <img src="https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=1200&auto=format&fit=crop" alt="icecream 2" className="object-cover rounded-xl shadow" />
              <img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop" alt="icecream 3" className="object-cover rounded-xl shadow" />
              <img src="https://images.unsplash.com/photo-1532678465554-94846274c297?q=80&w=1200&auto=format&fit=crop" alt="icecream 4" className="object-cover rounded-xl shadow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
