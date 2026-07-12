"use client";

import { motion } from "framer-motion";

const orbs = [
  { size: 480, x: "5%", y: "12%", color: "rgba(99, 102, 241, 0.22)", delay: 0 },
  { size: 360, x: "72%", y: "8%", color: "rgba(139, 92, 246, 0.18)", delay: 1.2 },
  { size: 300, x: "58%", y: "52%", color: "rgba(59, 130, 246, 0.14)", delay: 0.6 },
  { size: 220, x: "18%", y: "68%", color: "rgba(129, 140, 248, 0.12)", delay: 1.8 },
  { size: 180, x: "82%", y: "72%", color: "rgba(79, 70, 229, 0.16)", delay: 2.4 },
  { size: 140, x: "42%", y: "28%", color: "rgba(96, 165, 250, 0.1)", delay: 0.9 },
];

export function LandingBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="landing-gradient absolute inset-0" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.4) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/[0.07] blur-[120px]" />

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(70px)",
          }}
          animate={{
            y: [0, -24, 12, -16, 0],
            x: [0, 12, -8, 16, 0],
            scale: [1, 1.04, 0.97, 1.06, 1],
            opacity: [0.7, 1, 0.8, 0.95, 0.7],
          }}
          transition={{
            duration: 14 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/15 to-transparent" />
    </div>
  );
}
