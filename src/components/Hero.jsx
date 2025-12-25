import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      <div className="mx-auto max-w-4xl text-center md:text-left">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-medium tracking-wide text-cyan-300"
        >
          WELCOME TO MY WORLD ✨
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl"
        >
          Hi, I&apos;m <span className="text-cyan-400">Mriganka</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-2 text-4xl font-extrabold text-cyan-300 md:text-6xl"
        >
          Full Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-gray-300 md:text-base"
        >
          Passionate full-stack developer building clean, scalable, and
          user-focused web applications. I turn ideas into reliable products
          with modern technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4 justify-center md:justify-start"
        >
          <button className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(34,211,238,0.5)] transition hover:bg-cyan-300">
            My Projects
          </button>

          <button className="rounded-full border border-cyan-400/40 px-6 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/10">
            Download CV
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex gap-4 justify-center md:justify-start"
        >
          {["in", "gh", "x", "fb"].map((icon) => (
            <button
              key={icon}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 text-cyan-300 transition hover:bg-cyan-400/20 hover:text-white"
            >
              {icon.toUpperCase()}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Glow blob */}
      <div className="pointer-events-none absolute -z-10 h-100 w-100 rounded-full bg-cyan-400/20 blur-[120px]" />
    </section>
  );
}
