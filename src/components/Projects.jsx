import { motion } from "framer-motion";

const projects = [
  {
    title: "QuadB Tech Task Management",
    image: "quadb.png",
    description:
      "Designed a feature-rich application focused on enhancing user experience through robust functionalities such as filter options and marking capabilities; identified key areas for improvement which fixed the three biggest sources of user frustration.",
  },
  {
    title: "ILCT Platform",
    image: "ilct.png",
    description:
      "Engineered and deployed a robust full-stack application supporting real-time communication, featuring instant messaging, collaborative jamboard integration, and dynamic channel creation/joining for seamless team interaction.",
  },
  {
    title: "Starter Hive",
    image: "starterHive.png",
    description:
      "Proactively enhanced an open-source project by designing and integrating advanced search and filter functionality, resulting in a 20% increase in user engagement and significantly optimizing website accessibility.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white md:text-4xl"
        >
          Selected <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-2xl text-sm text-gray-400 md:text-base"
        >
          A curated selection of projects where I focused on solving real-world
          problems, improving user experience, and building scalable systems.
        </motion.p>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`/images/${project.image}`}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  {project.description}
                </p>
              </div>

              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-400/30 blur-[80px]" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-75 w-75 rounded-full bg-cyan-400/15 blur-[120px]" />
    </section>
  );
}
