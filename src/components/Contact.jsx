import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from "@emailjs/browser";
import { doctor } from "../data/doctor";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: doctor.location,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: doctor.email,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: doctor.phone,
  },
];

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setSending(false);
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-bg">
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
              Contact
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-text mt-3 leading-tight"
            >
              Let's <span className="font-semibold text-primary">Connect</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div variants={fadeUp}>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-border bg-white text-text placeholder:text-text-soft focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-border bg-white text-text placeholder:text-text-soft focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="user_phone"
                    placeholder="Your Phone"
                    className="w-full px-5 py-3.5 rounded-xl border border-border bg-white text-text placeholder:text-text-soft focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-border bg-white text-text placeholder:text-text-soft focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 bg-primary text-white font-medium rounded-xl hover:bg-primary-lt transition-colors disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-green-600 text-sm text-center font-medium">
                    Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center font-medium">
                    Failed to send. Please try again.
                  </p>
                )}
              </form>
            </motion.div>

            {/* Info + Lottie */}
            <motion.div variants={fadeUp} className="space-y-6">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-text-soft uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-text font-medium">{info.value}</p>
                  </div>
                </div>
              ))}

              <div className="flex justify-center pt-4">
                <div className="w-56 h-56">
                  <Player
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/packages/lf20_u25wwdet.json"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
