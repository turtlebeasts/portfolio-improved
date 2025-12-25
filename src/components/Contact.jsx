import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white md:text-4xl"
        >
          Let’s <span className="text-cyan-400">Connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-2xl text-sm text-gray-400 md:text-base"
        >
          Have an opportunity, idea, or project in mind? Feel free to reach out
          — I’m always open to meaningful conversations and collaborations.
        </motion.p>

        {/* Content */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-sm leading-relaxed text-gray-300">
              Whether you’re a recruiter, founder, or fellow developer, I’d love
              to hear from you. Drop a message and I’ll get back to you.
            </p>

            <div className="space-y-3 text-sm">
              <p className="text-gray-300">
                📍 <span className="text-white">India</span>
              </p>
              <p className="text-gray-300">
                📧 <span className="text-white">mriganka@gmail.com</span>
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/turtlebeasts"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-400/30 px-5 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400/10"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mriganka-das-05385822a/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-400/30 px-5 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400/10"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-xl space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-cyan-400/20 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-cyan-400/20 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full rounded-lg border border-cyan-400/20 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-100 w-100 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]" />
    </section>
  );
}
