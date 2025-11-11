import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Flavors from './components/Flavors'
import Story from './components/Story'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-amber-50 to-purple-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Flavors />
        <Story />
        <Testimonials />
        <CTA />
        <footer className="py-12 text-center text-sm text-gray-600">© {new Date().getFullYear()} Scoops & Smiles. All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
