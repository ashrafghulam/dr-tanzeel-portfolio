import { motion } from "framer-motion";
import { doctor } from "../data/doctor";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ComingSoon() {
  return (
    <section className="py-20 sm:py-28 bg-bg-soft">
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
              Coming in 2028
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-text mt-3 leading-tight"
            >
              Exciting Things{" "}
              <span className="font-semibold text-primary">on the Way</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-text-mid mt-4 max-w-xl mx-auto"
            >
              After completing MD — launching full practice with modern patient
              care features
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctor.comingSoon.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-6 border-2 border-dashed border-text-soft/30 hover:border-accent/50 transition-all overflow-hidden"
              >
                {/* Coming Soon ribbon */}
                <div className="absolute -top-1 -right-8 rotate-45 bg-accent text-white text-[10px] font-bold px-8 py-1 shadow-sm">
                  SOON
                </div>

                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="font-heading text-xl font-semibold text-text mb-2">
                  {item.title}
                </h3>
                <p className="text-text-mid text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="text-center mt-10">
            <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Launching after MD completion ~2028
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
