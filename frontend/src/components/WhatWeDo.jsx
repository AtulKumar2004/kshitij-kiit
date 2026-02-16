import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Sparkles, Brain, Music2, HeartPulse, Landmark } from "lucide-react";

const activities = [
  { title: "Discussions on Vedic Literatures", icon: BookOpen, description: "Explore timeless wisdom and philosophy for modern life." },
  { title: "Spiritual Sessions", icon: Sparkles, description: "Guided practices for awareness, clarity and inner peace." },
  { title: "Meditation Sessions", icon: Brain, description: "Improve focus and calmness through meditation training." },
  { title: "Singing Mantras", icon: Music2, description: "Group chanting creating a powerful positive vibration." },
  { title: "Yoga & Breathwork", icon: HeartPulse, description: "Balance body and mind through yogic practices." },
  { title: "Heritage Exploration", icon: Landmark, description: "Discover sacred culture and spiritual traditions." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function WhatWeDo() {
  const [active, setActive] = useState(null);

  return (
    <section
      className="relative w-full py-32 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/BACKGROUND.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* HERO TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl mx-auto text-center mb-24"
      >
        <div className="inline-block px-10 py-8 rounded-[40px] bg-white/10 border border-white/20 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)]">

          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            What We{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-lime-300 to-yellow-300 bg-clip-text text-transparent">
              Do
            </span>
          </h2>

          <p className="mt-6 text-white/80 text-lg max-w-2xl mx-auto">
            Activities designed to nurture knowledge, peace and spiritual growth through meaningful experiences.
          </p>

        </div>
      </motion.div>

      {/* ACTIVITIES GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {activities.map((act, i) => {
          const Icon = act.icon;

          return (
            <motion.div
              key={i}
              variants={item}
              onClick={() => setActive(i)}
              whileHover={{ y: -12 }}
              className="group cursor-pointer relative rounded-3xl p-[1px] bg-gradient-to-br from-white/30 via-white/10 to-transparent"
            >
              <div className="rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 p-8 h-full transition-all duration-500 group-hover:border-yellow-300/40 group-hover:shadow-[0_0_40px_rgba(255,215,120,0.35)]">

                <div className="flex flex-col items-center text-center gap-5">

                  <div className="p-4 rounded-2xl bg-white/10 text-yellow-300 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {act.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {act.description}
                  </p>

                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-xl w-full rounded-[36px] bg-gradient-to-b from-black/90 to-black/70 border border-white/20 p-10 text-center shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
            >
              {(() => {
                const Icon = activities[active].icon;
                return (
                  <div className="flex flex-col items-center gap-6">
                    <div className="p-5 rounded-2xl bg-yellow-300/10 text-yellow-300">
                      <Icon size={40} />
                    </div>

                    <h3 className="text-3xl font-semibold text-white">
                      {activities[active].title}
                    </h3>

                    <p className="text-white/75 leading-relaxed">
                      {activities[active].description}
                    </p>

                    <button
                      onClick={() => setActive(null)}
                      className="mt-4 px-8 py-3 rounded-xl bg-yellow-300 text-black font-semibold hover:bg-yellow-200 transition"
                    >
                      Close
                    </button>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
