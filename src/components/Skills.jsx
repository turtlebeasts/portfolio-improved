import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PHP", "MySQL"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "REST APIs", "JWT Auth"],
  },
  {
    title: "Other Interests",
    skills: ["Cybersecurity", "CTF Challenges", "Open Source"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white md:text-4xl"
        >
          Skills & <span className="text-cyan-400">Expertise</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-2xl text-sm text-gray-400 md:text-base"
        >
          Technologies and areas I actively work with while building scalable,
          user-focused applications.
        </motion.p>

        {/* Skills Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium text-cyan-300 transition hover:bg-cyan-400/20 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-75 w-75 rounded-full bg-cyan-400/15 blur-[120px]" />
    </section>
  );
}
