import { motion } from "framer-motion";
import { doctor } from "../data/doctor";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Credibility() {
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
              Trust & Credibility
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-text mt-3 leading-tight"
            >
              Why Families Trust{" "}
              <span className="font-semibold text-primary">{doctor.name}</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-text-mid mt-4 max-w-xl mx-auto"
            >
              Not just studying medicine — actively practicing it every single
              day
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Card 1 — Dual Qualification */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-primary/20 shadow-sm hover:shadow-lg transition-all"
            >
              <span className="text-4xl block mb-4">{"\u{1F393}"}</span>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Dual Qualification
              </h3>
              <p className="text-text-mid text-sm leading-relaxed">
                MBBS completed from {doctor.education[0].college} + MD
                Pediatrics actively pursuing at{" "}
                {doctor.education[1].college} — combining strong foundation
                with advanced training
              </p>
            </motion.div>

            {/* Card 2 — Govt. Verified */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative bg-white rounded-2xl p-6 sm:p-8 border border-accent/30 shadow-sm hover:shadow-lg transition-all"
            >
              <span className="text-4xl block mb-4">{"\u{1F3DB}\uFE0F"}</span>
              <h3 className="font-heading text-xl font-semibold text-accent mb-3">
                Govt. Verified Practitioner
              </h3>
              <p className="text-text-mid text-sm leading-relaxed">
                Appointed as Junior Resident (JR-1) by MP State Government at
                Khandwa Govt. Medical College — a verified mark of medical
                competence and trust
              </p>
              <span className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                {"\u{1F1EE}\u{1F1F3}"} Sarkari Doctor
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
