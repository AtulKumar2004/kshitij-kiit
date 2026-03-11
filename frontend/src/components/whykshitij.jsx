import { useState } from "react";
import { Leaf, Brain, BookOpen, Users, Landmark, Sparkles } from "lucide-react";

const items = [
  { icon: Leaf, title: "Live Your Potential", desc: "Discover purpose and inner strength." },
  { icon: Brain, title: "Inner Peace", desc: "Calm your mind amid college chaos." },
  { icon: BookOpen, title: "Spiritual Knowledge", desc: "Wisdom from the Gita & Upanishads." },
  { icon: Users, title: "Community", desc: "Walk the spiritual journey together." },
  { icon: Landmark, title: "Heritage Exploration", desc: "Explore sacred Odisha sites." },
  { icon: Sparkles, title: "Divine Connection", desc: "Experience devotion and transformation." }
];

export default function WhyKshitij() {
  const [open, setOpen] = useState(false);

  const radius = 260; // distance of cards from center

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">

      {/* soft overlay for readability on forest */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center">

        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
          Why <span className="text-yellow-400">KSHITIJ</span>
        </h2>

        {/* Main container */}
        <div className="relative w-[720px] h-[620px] flex items-center justify-center">

          {/* Cards */}
          {items.map((item, index) => {

            const angle = (index / items.length) * 2 * Math.PI;

            const x = open ? radius * Math.cos(angle) : 0;
            const y = open ? radius * Math.sin(angle) : 0;

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-out"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  opacity: open ? 1 : 0
                }}
              >
                <div className="w-44 p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center shadow-xl hover:scale-105 transition">

                  <Icon className="mx-auto mb-2 text-yellow-300" size={30} />

                  <h3 className="font-semibold mb-1">{item.title}</h3>

                  <p className="text-sm text-white/80">{item.desc}</p>

                </div>
              </div>
            );
          })}

          {/* Vintage Treasure Chest */}
          <div
            onClick={() => setOpen(!open)}
            className="relative cursor-pointer flex flex-col items-center group"
          >

            {/* Chest Lid */}
            <div
              className={`w-56 h-20 bg-gradient-to-b from-yellow-700 to-yellow-900 border-4 border-yellow-950 rounded-t-[30px] origin-bottom transition-transform duration-700 shadow-xl ${
                open ? "-rotate-45" : "rotate-0"
              }`}
            ></div>

            {/* Chest Body */}
            <div className="w-56 h-36 bg-gradient-to-b from-yellow-800 to-yellow-950 border-4 border-yellow-950 rounded-b-2xl flex items-center justify-center shadow-[0_15px_50px_rgba(0,0,0,0.7)]">

              <img
                src="/Logo.png"
                alt="Kshitij Logo"
                className="w-20 h-20 drop-shadow-[0_0_15px_gold]"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}






