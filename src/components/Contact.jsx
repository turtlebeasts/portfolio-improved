import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          formRef.current.reset();
        },
        () => {
          setStatus("Failed to send message ❌");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="relative px-6 py-28 overflow-hidden">
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
          {/* Left */}
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
                className="rounded-full border border-cyan-400/30 p-2 text-cyan-300 transition hover:bg-cyan-400/10"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mriganka-das-05385822a/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-400/30 p-2 text-cyan-300 transition hover:bg-cyan-400/10"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-xl space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-cyan-400/20 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-lg border border-cyan-400/20 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="w-full rounded-lg border border-cyan-400/20 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center text-sm text-cyan-300">{status}</p>
            )}
          </motion.form>
        </div>
      </div>

      {/* Background Glow (FIXED SIZE) */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-75 w-75 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]" />
    </section>
  );
}
