import { useEffect, useMemo, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const LINES = [
  "If I could fold the world like paper, I'd bring your city next to mine.",
  "I'd tuck you into every sunrise and whisper 'I love you' into the wind.",
  "Until then, every beat of my heart travels the miles, straight to you.",
];

export default function MessageSection() {
  const [displayed, setDisplayed] = useState('');
  const [running, setRunning] = useState(true);
  const [burst, setBurst] = useState(0);

  const fullText = useMemo(() => LINES.join('\n'), []);

  useEffect(() => {
    if (!running) return;
    let i = 0;
    let currentLine = 0;
    const lines = LINES;
    const tick = () => {
      if (currentLine >= lines.length) return;
      const line = lines[currentLine];
      if (i < line.length) {
        setDisplayed((prev) => prev + line[i]);
        i += 1;
        setTimeout(tick, 35);
      } else {
        setDisplayed((prev) => prev + (currentLine < lines.length - 1 ? '\n' : ''));
        currentLine += 1;
        setTimeout(tick, 450);
      }
    };
    const id = setTimeout(tick, 450);
    return () => clearTimeout(id);
  }, [running]);

  const handleBurst = () => {
    setBurst((b) => b + 1);
  };

  return (
    <section id="message" className="relative py-16 md:py-24 bg-gradient-to-b from-rose-50 via-purple-50 to-pink-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_85%_0%,rgba(236,72,153,0.18),transparent_40%),radial-gradient(circle_at_15%_100%,rgba(147,51,234,0.18),transparent_45%)]" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/70 backdrop-blur-xl border border-white/60 shadow-sm">
          <Sparkles className="text-rose-500" size={18} />
          <span className="text-rose-600 text-sm font-medium">A message for you</span>
        </div>

        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-rose-700">
          Always, only you
        </h2>

        <div className="mt-8 text-left whitespace-pre-wrap font-medium leading-relaxed text-purple-700/90 bg-white/70 border border-white/60 backdrop-blur-xl rounded-2xl p-6 shadow">
          {displayed || fullText}
        </div>

        <div className="mt-8">
          <button
            onClick={handleBurst}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-6 py-3 shadow-lg hover:shadow-pink-300/60 hover:-translate-y-0.5 transition-all"
          >
            <Heart className="transition-transform group-hover:scale-110" />
            <span className="font-semibold">Tap to feel my love</span>
          </button>
        </div>
      </div>

      {/* Heart burst layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => {
          const drift = (Math.random() * 160 - 80).toFixed(1); // -80px to 80px
          const startX = 50 + (Math.random() * 30 - 15); // 35% to 65%
          const startY = 58 + (Math.random() * 14 - 7); // 51% to 72%
          const size = 12 + (i % 6) * 4;
          return (
            <span
              key={`${burst}-${i}`}
              className="absolute text-pink-500 animate-burst"
              style={{
                left: `${startX}%`,
                top: `${startY}%`,
                ['--drift']: `${drift}px`,
                animationDelay: `${i * 0.03}s`,
                animationDuration: `${0.9 + (i % 5) * 0.08}s`,
                filter: 'drop-shadow(0 0 8px rgba(236,72,153,0.45))',
              }}
            >
              <Heart size={size} />
            </span>
          );
        })}
      </div>

      <style>{`
        @keyframes burst {
          0% { transform: translate(0,0) scale(0.6); opacity: 1; }
          80% { opacity: 0.9; }
          100% { transform: translate(var(--drift), -120px) scale(1); opacity: 0; }
        }
        .animate-burst { animation-name: burst; animation-timing-function: ease-out; }
      `}</style>
    </section>
  );
}
