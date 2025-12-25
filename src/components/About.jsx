import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white md:text-4xl"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 grid gap-8 md:grid-cols-2"
        >
          {/* Left: Description */}
          <div className="space-y-4 text-sm leading-relaxed text-gray-300 md:text-base">
            <p>
              Hi, I&apos;m{" "}
              <span className="font-semibold text-white">Mriganka Das</span>, a
              passionate and driven MCA student at Presidency College, India.
              I’m always eager to learn and explore new technologies, with a
              strong focus on coding and solving complex problems.
            </p>

            <p>
              I specialize in{" "}
              <span className="text-cyan-300">
                HTML, CSS, JavaScript, ReactJS, PHP, and MySQL
              </span>
              , and I constantly work on improving my skills to build efficient,
              user-friendly, and scalable applications.
            </p>

            <p>
              Beyond development, I have a deep interest in{" "}
              <span className="text-cyan-300">cybersecurity</span>. I’ve
              participated in challenges like <strong>Deadface CTF</strong> and
              <strong> Hacktoberfest</strong>, where I contributed to
              open-source projects and gained hands-on experience in ethical
              hacking and security practices.
            </p>

            <p>
              My goal is to grow as a developer every day and land a role at a
              reputable company where I can contribute to impactful projects,
              collaborate with talented teams, and continue pushing my limits.
            </p>
          </div>

          {/* Right: Highlights */}
          <div className="grid gap-4">
            {[
              "MCA Student at Presidency College, India",
              "Full Stack Development Focus",
              "Strong Problem-Solving Mindset",
              "Open Source Contributor (Hacktoberfest)",
              "CTF Participant (Deadface CTF)",
              "Interest in Cybersecurity & Ethical Hacking",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4 text-sm text-gray-200 backdrop-blur-md"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <a
            href="https://github.com/turtlebeasts"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-6 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/10"
          >
            View GitHub
          </a>
        </motion.div>
      </div>

      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-75 w-75 rounded-full bg-cyan-400/20 blur-[120px]" />
    </section>
  );
}
