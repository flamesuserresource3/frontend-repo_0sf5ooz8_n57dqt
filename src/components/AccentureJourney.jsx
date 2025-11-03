import { motion } from 'framer-motion';
import { BadgeCheck, Building2, MapPin, Sparkles } from 'lucide-react';

export default function AccentureJourney() {
  return (
    <section id="accenture" className="relative py-16 md:py-24 bg-gradient-to-b from-purple-50 via-pink-50 to-rose-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_80%,rgba(168,85,247,0.18),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(244,114,182,0.2),transparent_45%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/70 backdrop-blur-xl border border-white/60 shadow-sm">
            <Sparkles className="text-purple-500" size={18} />
            <span className="text-purple-600 text-sm font-medium">A new chapter begins</span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-purple-700">
            Proud of You — Accenture Journey
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="shrink-0">
              <motion.div
                animate={{ rotate: [0, 6, 0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-400 to-purple-500 text-white shadow-lg"
              >
                <Building2 size={28} />
              </motion.div>
            </div>
            <div className="flex-1">
              <p className="text-purple-700/85 leading-relaxed">
                I’m so proud of you for starting your journey at Accenture on
                <span className="font-semibold text-purple-700"> November 26</span>. I know it’s far from home in
                <span className="font-semibold text-fuchsia-600"> Bangalore</span>, but you’re strong, brave, and absolutely incredible.
                I’m always with you, no matter the distance.
              </p>
              <p className="mt-4 text-pink-700/85 leading-relaxed">
                All the best for your onboarding — be safe, take care of yourself, and shine like you always do. The world is lucky to have your light.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 text-purple-700 px-3 py-1.5 border border-purple-100">
                  <MapPin size={16} /> Bangalore
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-pink-50 text-pink-700 px-3 py-1.5 border border-pink-100">
                  <BadgeCheck size={16} /> Onboarding: Nov 26
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
