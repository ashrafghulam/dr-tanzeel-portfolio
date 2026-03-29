import { motion } from "framer-motion";
import { doctor } from "../data/doctor";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const highlightIcons = [
  "\u{1F3E5}", // hospital
  "\u{1F319}", // moon (night duties)
  "\u{1FA7A}", // stethoscope
  "\u{1F476}", // baby
  "\u{1F469}\u200D\u2695\uFE0F", // woman health worker
  "\u{1F6A8}", // emergency
];

export default function Experience() {
  const exp = doctor.experience[0];

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

          <motion.div
            variants={fadeUp}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold">
                  {exp.role}
                </h3>
                <p className="text-white/70 mt-1">{exp.hospital}</p>
              </div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/20 text-accent-lt text-sm font-medium self-start sm:self-auto">
                {exp.duration}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {exp.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">
                    {highlightIcons[i]}
                  </span>
                  <div>
                    <p className="font-medium text-sm leading-snug">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
