import { motion } from "framer-motion";
import { doctor } from "../data/doctor";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function FocusAreas() {
  return (
    <section id="focus" className="py-20 sm:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="text-center mb-12">
            <motion.span
              variants={fadeUp}
              className="text-sm font-medium text-accent tracking-wider uppercase"
            >
              Areas of Expertise
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-text mt-3 leading-tight"
            >
              What I{" "}
              <span className="font-semibold text-primary">Specialize In</span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctor.focusAreas.map((area, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all cursor-default"
              >
                <span className="text-4xl block mb-4">{area.icon}</span>
                <h3 className="font-heading text-xl font-semibold text-text mb-2">
                  {area.title}
                </h3>
                <p className="text-text-mid text-sm leading-relaxed">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
