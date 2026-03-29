import { motion } from "framer-motion";
import { doctor } from "../data/doctor";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const activeIcons = ["\u{1F3E5}", "\u{1F6CF}\uFE0F", "\u{1FA7A}", "\u{1F52C}"];

const completedIcons = [
  "\u{1F3E5}",
  "\u{1F319}",
  "\u{1FA7A}",
  "\u{1F476}",
  "\u{1F469}\u200D\u2695\uFE0F",
  "\u{1F6A8}",
];

export default function Experience() {
  const current = doctor.experience[0];
  const past = doctor.experience[1];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            variants={fadeUp}
            className="text-sm font-medium text-accent-lt tracking-wider uppercase"
          >
            Clinical Experience
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light mt-3 mb-12 leading-tight"
          >
            From Labour Room
            <br />
            <span className="font-semibold text-accent-lt">
              to Little Hearts
            </span>
          </motion.h2>

          {/* JR-1 Current Role Card */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-accent mb-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(232,168,56,0.15) 0%, rgba(255,255,255,0.08) 100%)",
              boxShadow: "0 0 30px rgba(232,168,56,0.2), 0 0 60px rgba(232,168,56,0.08)",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-semibold mb-3">
                  {"\u{1F7E2}"} CURRENTLY ACTIVE
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold">
                  {current.role}
                </h3>
                <p className="text-white/70 mt-1">{current.hospital}</p>
              </div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/20 text-accent-lt text-sm font-medium self-start sm:self-auto">
                {current.duration}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {current.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 bg-white/10 rounded-xl p-4 border border-accent/20 hover:bg-white/15 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">
                    {activeIcons[i]}
                  </span>
                  <p className="font-medium text-sm leading-snug">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Past Medical Officer Card */}
          <motion.div
            variants={fadeUp}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-semibold mb-3">
                  {"\u2705"} Completed
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold">
                  {past.role}
                </h3>
                <p className="text-white/70 mt-1">{past.hospital}</p>
              </div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white/60 text-sm font-medium self-start sm:self-auto">
                {past.duration}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {past.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">
                    {completedIcons[i]}
                  </span>
                  <p className="font-medium text-sm leading-snug">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
