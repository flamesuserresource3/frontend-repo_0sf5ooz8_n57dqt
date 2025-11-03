import Hero from './components/Hero';
import MissYou from './components/MissYou';
import AccentureJourney from './components/AccentureJourney';
import MessageSection from './components/MessageSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-pink-200 selection:text-pink-900">
      <header className="fixed top-0 left-0 right-0 z-20">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="text-xl font-black bg-gradient-to-r from-pink-500 to-fuchsia-600 bg-clip-text text-transparent drop-shadow-sm">For My Love</a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#miss-you" className="text-pink-700 hover:text-pink-500 transition-colors">I Miss You</a>
            <a href="#accenture" className="text-fuchsia-700 hover:text-fuchsia-500 transition-colors">Accenture</a>
            <a href="#message" className="text-purple-700 hover:text-purple-500 transition-colors">Message</a>
          </div>
        </nav>
      </header>

      <main className="pt-16" id="home">
        <Hero />
        <MissYou />
        <AccentureJourney />
        <MessageSection />
      </main>

      <footer className="relative py-10 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-rose-600">
          Made with endless love, pastel skies, and a million little hearts.
        </div>
      </footer>
    </div>
  );
}

export default App;
