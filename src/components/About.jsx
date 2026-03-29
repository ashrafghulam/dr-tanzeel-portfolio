import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { doctor } from "../data/doctor";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const chips = [
  doctor.education[0].degree,
  doctor.education[1].degree,
  "Khandwa MP",
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Text */}
          <div>
            <motion.span
              variants={fadeUp}
              className="text-sm font-medium text-accent tracking-wider uppercase"
            >
              About Me
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-text mt-3 mb-6 leading-tight"
            >
              Healing little lives
              <br />
              <span className="font-semibold text-primary">with big heart</span>
            </motion.h2>

            <motion.blockquote
              variants={fadeUp}
              className="border-l-4 border-accent pl-4 py-2 mb-6 bg-accent/5 rounded-r-lg"
            >
              <p className="text-lg italic text-text-mid font-heading">
                "Bacchon ki sehat, mera junoon"
              </p>
              <p className="text-sm text-text-soft mt-1">
                — "Child health is my passion"
              </p>
            </motion.blockquote>

            <motion.p variants={fadeUp} className="text-text-mid leading-relaxed mb-4">
              {doctor.name} is a passionate medical professional dedicated to
              pediatric care. After completing her MBBS from{" "}
              {doctor.education[0].college}, she gained hands-on clinical
              experience as a Medical Officer at{" "}
              {doctor.experience[0].hospital}, managing everything from
              routine OPD consultations to emergency obstetric care.
            </motion.p>

            <motion.p variants={fadeUp} className="text-text-mid leading-relaxed mb-6">
              Now pursuing her MD in {doctor.specialization} at{" "}
              {doctor.education[1].college}, she is committed to building
              expertise in newborn and child healthcare — ensuring every child
              gets the healthy start they deserve.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Lottie */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="w-72 h-72 sm:w-96 sm:h-96">
              <Player
                autoplay
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_pk5oeiof.json"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
