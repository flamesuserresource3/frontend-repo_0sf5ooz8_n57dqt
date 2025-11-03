import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Heart, Music2, MusicOff, Sparkles } from 'lucide-react';

export default function Hero() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('bg-music-enabled');
    if (stored === 'true') {
      // Do not autoplay; wait for a user gesture to start
      setPlaying(false);
    }
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    try {
      if (playing) {
        await audioRef.current.pause();
        setPlaying(false);
        localStorage.setItem('bg-music-enabled', 'false');
      } else {
        await audioRef.current.play();
        setPlaying(true);
        localStorage.setItem('bg-music-enabled', 'true');
      }
    } catch (e) {
      // Ignore play interruptions (browser policies)
    }
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient and sparkle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-pink-50/40 to-purple-50/60" />

      {/* Floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-400/70 animate-float-up"
            style={{
              left: `${(i * 53) % 100}%`,
              bottom: `${Math.random() * -40}%`,
              animationDelay: `${(i % 7) * 0.8}s`,
              animationDuration: `${12 + (i % 5) * 2}s`,
              filter: 'drop-shadow(0 0 6px rgba(236,72,153,0.35))',
            }}
          >
            <Heart size={18 + (i % 4) * 6} />
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/60 backdrop-blur-xl shadow-sm border border-white/50">
          <Sparkles className="text-pink-500" size={18} />
          <span className="text-sm font-medium text-pink-600">A little piece of my heart for you</span>
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
          Hi my love, even though we're miles apart,
          <br className="hidden md:block" /> you're always in my heart.
        </h1>
        <p className="mt-5 text-base md:text-lg text-purple-700/80 leading-relaxed">
          This is our little magical space—soft, warm, and full of love—where distance melts into
          colors and gentle light. Close your eyes, feel the glow, and remember I'm always with you.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={toggleMusic}
            className="group inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-xl border border-white/60 px-5 py-2.5 text-pink-700 shadow hover:shadow-lg hover:-translate-y-0.5 transition-all"
            aria-label={playing ? 'Pause background music' : 'Play background music'}
          >
            {playing ? <MusicOff size={18} /> : <Music2 size={18} />}
            <span className="font-semibold">
              {playing ? 'Pause music' : 'Play soft music'}
            </span>
          </button>
        </div>
      </div>

      {/* Hidden audio element (royalty-free ambient track) */}
      <audio
        ref={audioRef}
        loop
        preload="none"
        src="https://cdn.pixabay.com/download/audio/2023/03/13/audio_3ad0a8d1f3.mp3?filename=romantic-piano-142859.mp3"
      />

      {/* Styles for floating hearts */}
      <style>{`
        @keyframes float-up {
          0% { transform: translateY(20%); opacity: 0; }
          10% { opacity: 0.8; }
          100% { transform: translateY(-120%); opacity: 0; }
        }
        .animate-float-up { animation-name: float-up; animation-timing-function: ease-in; }
      `}</style>
    </section>
  );
}
