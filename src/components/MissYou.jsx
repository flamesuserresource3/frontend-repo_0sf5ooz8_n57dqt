import { useEffect, useMemo, useState } from 'react';
import { CalendarHeart, HeartHandshake, Hourglass, Sparkles } from 'lucide-react';

function formatDays(diffMs) {
  return Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
}

export default function MissYou() {
  const [apartSince, setApartSince] = useState('');
  const [nextMeet, setNextMeet] = useState('');

  // Load saved dates
  useEffect(() => {
    const a = localStorage.getItem('apartSince');
    const n = localStorage.getItem('nextMeet');
    if (a) setApartSince(a);
    if (n) setNextMeet(n);
  }, []);

  // Persist dates
  useEffect(() => {
    if (apartSince) localStorage.setItem('apartSince', apartSince);
  }, [apartSince]);
  useEffect(() => {
    if (nextMeet) localStorage.setItem('nextMeet', nextMeet);
  }, [nextMeet]);

  const today = new Date();

  const daysApart = useMemo(() => {
    if (!apartSince) return 0;
    const d = new Date(apartSince);
    if (isNaN(d)) return 0;
    return formatDays(today - d);
  }, [apartSince, today]);

  const daysUntilMeet = useMemo(() => {
    if (!nextMeet) return 0;
    const d = new Date(nextMeet + 'T23:59:59');
    if (isNaN(d)) return 0;
    return formatDays(d - today);
  }, [nextMeet, today]);

  return (
    <section id="miss-you" className="relative py-16 md:py-24 bg-gradient-to-b from-pink-50 via-rose-50 to-purple-50">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(244,114,182,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(192,132,252,0.22),transparent_45%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/60 backdrop-blur-xl border border-white/60 shadow-sm">
            <Sparkles className="text-fuchsia-500" size={18} />
            <span className="text-pink-600 text-sm font-medium">I Miss You</span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-pink-700">
            Every day without you feels incomplete
          </h2>
          <p className="mt-2 text-purple-700/75 max-w-2xl mx-auto">
            Distance means nothing when someone means everything. Until we're in each other's arms again, I'm sending you light, love, and a thousand soft hugs.
          </p>
        </div>

        {/* Counters */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 bg-white/70 backdrop-blur-xl border border-white/60 shadow-lg hover:shadow-rose-200/80 transition-shadow">
            <div className="flex items-center gap-3">
              <CalendarHeart className="text-rose-500" />
              <h3 className="font-semibold text-rose-600">When did the distance start?</h3>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <input
                type="date"
                value={apartSince}
                onChange={(e) => setApartSince(e.target.value)}
                className="w-full rounded-xl border border-rose-200 bg-white/80 px-3 py-2 text-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-rose-600">
                <Hourglass size={18} />
                <span className="font-medium">Days apart</span>
              </div>
              <div className="text-3xl font-black text-rose-500 drop-shadow-sm">{daysApart}</div>
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white/70 backdrop-blur-xl border border-white/60 shadow-lg hover:shadow-violet-200/80 transition-shadow">
            <div className="flex items-center gap-3">
              <HeartHandshake className="text-violet-500" />
              <h3 className="font-semibold text-violet-600">When do we meet next?</h3>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <input
                type="date"
                value={nextMeet}
                onChange={(e) => setNextMeet(e.target.value)}
                className="w-full rounded-xl border border-violet-200 bg-white/80 px-3 py-2 text-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-300"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-violet-600">
                <Hourglass size={18} />
                <span className="font-medium">Days to go</span>
              </div>
              <div className="text-3xl font-black text-violet-500 drop-shadow-sm">{daysUntilMeet}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
