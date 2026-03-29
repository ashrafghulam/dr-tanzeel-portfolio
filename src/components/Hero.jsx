import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { doctor } from "../data/doctor";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const stats = [
  { label: "MBBS", value: "Done" },
  { label: "MD", value: "Pursuing" },
  { label: "Practice", value: "~2yr" },
];

function RangoliPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
      viewBox="0 0 800 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="rangoli" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#1B6B5A" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#1B6B5A" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#E8A838" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="20" fill="none" stroke="#1B6B5A" strokeWidth="0.5" />
          <path d="M100 20 L110 40 L100 35 L90 40 Z" fill="#1B6B5A" opacity="0.5" />
          <path d="M100 180 L110 160 L100 165 L90 160 Z" fill="#1B6B5A" opacity="0.5" />
          <path d="M20 100 L40 110 L35 100 L40 90 Z" fill="#E8A838" opacity="0.5" />
          <path d="M180 100 L160 110 L165 100 L160 90 Z" fill="#E8A838" opacity="0.5" />
          <path d="M38 38 L55 50 L48 48 L50 55 Z" fill="#1B6B5A" opacity="0.3" />
          <path d="M162 38 L145 50 L152 48 L150 55 Z" fill="#1B6B5A" opacity="0.3" />
          <path d="M38 162 L55 150 L48 152 L50 145 Z" fill="#1B6B5A" opacity="0.3" />
          <path d="M162 162 L145 150 L152 152 L150 145 Z" fill="#1B6B5A" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="800" height="800" fill="url(#rangoli)" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <RangoliPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column */}
          <div className="order-2 lg:order-1">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span>Pediatric Medicine</span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span>{doctor.location.split(",")[0]}, India</span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-text leading-tight mb-2"
            >
              {doctor.taglineHindi.split(",")[0]},
              <br />
              <span className="font-semibold text-primary">
                {doctor.taglineHindi.split(",")[1]}
              </span>
            </motion.h1>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-2"
            >
              <p className="text-lg text-text-mid font-medium">{doctor.name}</p>
              <p className="text-sm text-text-soft">
                {doctor.education[0].degree} |{" "}
                {doctor.education[1].degree} (Pursuing)
              </p>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex gap-4 sm:gap-6 my-6"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center px-4 py-3 rounded-xl bg-white/70 border border-border"
                >
                  <p className="text-lg font-semibold text-primary font-heading">
                    {s.value}
                  </p>
                  <p className="text-xs text-text-soft">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              <a
                href="#experience"
                className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-lt transition-colors"
              >
                My Journey
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 relative flex justify-center"
          >
            {/* Blob shape behind animation */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div
                className="absolute inset-0 bg-primary/10 rounded-full"
                style={{
                  borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%",
                }}
              />
              <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_5njp3vgg.json"
                className="w-full h-full relative z-10"
              />
            </div>

            {/* Floating card 1 */}
            <div className="animate-float absolute top-4 right-0 sm:right-4 bg-white rounded-xl shadow-lg px-4 py-2.5 z-20">
              <p className="text-xs text-text-soft">Currently at</p>
              <p className="text-sm font-medium text-primary">
                Khandwa Govt. Medical College
              </p>
            </div>

            {/* Floating card 2 */}
            <div className="animate-float-delayed absolute bottom-8 left-0 sm:left-4 bg-white rounded-xl shadow-lg px-4 py-2.5 z-20">
              <p className="text-sm font-medium text-text">
                <span className="mr-1">{"\u{1F476}"}</span> MD Pediatrics
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
