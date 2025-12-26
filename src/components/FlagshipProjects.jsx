import { motion } from "framer-motion";
import ParticlesBackground from "./ParticleBackground";

const projects = [
  {
    title: "WoodsH Landing UI",
    description:
      "A clean, modern landing page/demo with crisp typography, smooth interactions, and minimalist UI built with React & Vite. Showcases visual design, component modularity, and polished frontend structure.",
    tech: ["React", "Tailwind", "Responsive UI", "Vite"],
    image: "/projects/woodsh.png",
    link: "https://woodsh.netlify.app/",
  },
  {
    title: "Fashio Frontend",
    description:
      "A stylish fashion site prototype focusing on layout hierarchy, image-driven UI, and product showcase design. Built with React & Tailwind for a sleek browsing experience.",
    tech: ["React", "Tailwind", "Responsive UX", "Vite"],
    image: "/projects/fashio.png",
    link: "https://fashio-site.netlify.app/",
  },
  {
    title: "SupportCo Landing",
    description:
      "Business/agency style landing page with feature sections, clear CTAs, structured content blocks, and polished spacing. Highlights your skill in translating design into functional React UI.",
    tech: ["React", "Tailwind", "UX Design", "Vite"],
    image: "/projects/supportco.png",
    link: "https://supportco.netlify.app/",
  },
];

export default function FlagshipProjects() {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      {/* 3D Background */}
      <ParticlesBackground />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Flagship Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mt-6">
            Projects where I focused heavily on UI clarity, UX flow, motion
            design, and clean architecture—not just functionality.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-white/20 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
