import { motion } from "framer-motion";
import reactjs from "../assets/certificates/reactjs.png";
import reactAdvance from "../assets/certificates/reactjsadvance.png";
import javascript from "../assets/certificates/javascript.png";

const certificates = [
  { name: "ReactJS", image: reactjs },
  { name: "ReactJS Advance", image: reactAdvance },
  { name: "JavaScript ES6", image: javascript },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white md:text-4xl"
        >
          Certifications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-2xl text-sm text-gray-400 md:text-base"
        >
          Verified certifications showcasing my hands-on learning and
          proficiency in modern frontend technologies.
        </motion.p>

        {/* Certificates Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl"
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={cert.name}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 transition group-hover:opacity-100" />

              {/* Text */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-semibold text-white">{cert.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 -z-10 h-75 w-75 rounded-full bg-cyan-400/15 blur-[120px]" />
    </section>
  );
}
