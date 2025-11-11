import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#flavors", label: "Flavors" },
    { href: "#about", label: "Our Story" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#visit", label: "Visit Us" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-tr from-pink-400 via-fuchsia-400 to-amber-300 shadow-md" />
            <span className="font-extrabold tracking-tight text-gray-900 text-lg">
              Scoops & Smiles
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#order" className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-amber-400 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition-all">
              Order Now
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-white/60" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-3 grid gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-2 text-gray-700 font-medium" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#order" className="mt-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-amber-400 text-white px-4 py-2 text-sm font-semibold shadow" onClick={() => setOpen(false)}>
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
