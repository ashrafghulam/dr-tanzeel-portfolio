import { motion } from "framer-motion";
import { doctor } from "../data/doctor";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 bg-bg-soft">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm font-medium text-accent tracking-wider uppercase"
          >
            Education
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-text mt-3 leading-tight"
          >
            Academic <span className="font-semibold text-primary">Journey</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-lt to-accent hidden sm:block" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-8 sm:space-y-12"
          >
            {/* MBBS */}
            <motion.div variants={fadeUp} className="relative sm:flex sm:items-center">
              <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-bg-soft z-10" />
              <div className="sm:w-1/2 sm:pr-12 sm:text-right">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 justify-start sm:justify-end mb-3">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                      Completed
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-primary">
                    {doctor.education[0].degree}
                  </h3>
                  <p className="text-text-mid mt-1">{doctor.education[0].college}</p>
                  <p className="text-sm text-text-soft mt-1">{doctor.education[0].year}</p>
                </div>
              </div>
              <div className="sm:w-1/2" />
            </motion.div>

            {/* MD Pediatrics */}
            <motion.div variants={fadeUp} className="relative sm:flex sm:items-center">
              <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-bg-soft z-10 animate-pulse-gold" />
              <div className="sm:w-1/2" />
              <div className="sm:w-1/2 sm:pl-12">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-accent/30 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold animate-pulse-gold">
                      In Progress
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-primary">
                    {doctor.education[1].degree}
                  </h3>
                  <p className="text-text-mid mt-1">{doctor.education[1].college}</p>
                  <p className="text-sm text-text-soft mt-1">{doctor.education[1].year}</p>
                </div>
              </div>
            </motion.div>

            {/* Future */}
            <motion.div variants={fadeUp} className="relative sm:flex sm:items-center">
              <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-lt border-4 border-bg-soft z-10" />
              <div className="sm:w-1/2 sm:pr-12 sm:text-right">
                <div className="rounded-2xl p-6 border-2 border-dashed border-text-soft/30 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-2 justify-start sm:justify-end mb-3">
                    <span className="px-3 py-1 rounded-full bg-bg text-text-soft text-xs font-semibold">
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-text-mid">
                    MD Complete + Practice
                  </h3>
                  <p className="text-text-soft mt-1">Full-time Pediatric Practice</p>
                  <p className="text-sm text-text-soft mt-1">~2028</p>
                </div>
              </div>
              <div className="sm:w-1/2" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
