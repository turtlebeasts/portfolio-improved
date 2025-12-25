import { motion } from "framer-motion";

import gateways2023 from "../assets/achievements/gateways2023.jpg";
import hacktoberfest2021 from "../assets/achievements/hacktoberfest2021.jpg";
import Holopin_2022_10_03 from "../assets/achievements/Holopin-2022-10-03.png";
import cyberhacktics2020 from "../assets/achievements/cyberhacktics2020.png";
import deadface2021 from "../assets/achievements/deadface2021.png";
import deadface2020 from "../assets/achievements/deadface2020.png";

const achievements = [
  {
    title: "Winner – Gateways 2023 Coding Challenge",
    image: gateways2023,
    description:
      "Won the Gateways 2023 Coding Challenge for building 'Stellar Perplexity', showcasing creative problem-solving and strong technical execution.",
  },
  {
    title: "Hacktoberfest 2021 – 10+ Merged PRs",
    image: hacktoberfest2021,
    description:
      "Contributed to 10+ open-source repositories with all pull requests merged, gaining real-world collaboration experience.",
  },
  {
    title: "Cyberhacktics 2022 – Holopin Badge",
    image: Holopin_2022_10_03,
    description:
      "Earned a Holopin badge for participating in Cyberhacktics 2022, strengthening ethical hacking and security analysis skills.",
  },
  {
    title: "Cyberhacktics 2020 Participation",
    image: cyberhacktics2020,
    description:
      "Participated in Cyberhacktics 2020, exploring real-world cybersecurity challenges involving cryptography and network security.",
  },
  {
    title: "Deadface CTF 2021",
    image: deadface2021,
    description:
      "Solved challenges across web security, reverse engineering, and cryptography in Deadface CTF 2021.",
  },
  {
    title: "Top 100 – Deadface CTF 2020 🇮🇳",
    image: deadface2020,
    description:
      "Ranked 77th out of 10,000+ participants globally, representing India in Deadface CTF 2020.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-white md:text-4xl"
        >
          Achievements & <span className="text-cyan-400">Milestones</span>
        </motion.h2>

        <p className="mt-4 max-w-2xl text-sm text-gray-400 md:text-base">
          Key moments that reflect my journey in competitive programming,
          cybersecurity, and open-source contributions.
        </p>

        {/* Achievements Grid */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {achievements.map((item) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  {item.description}
                </p>
              </div>

              {/* Card Glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-32 w-32 rounded-full bg-cyan-400/25 blur-[80px] opacity-0 transition group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>

      {/* Background Glow (SAFE SIZE) */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-70 w-70 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
    </section>
  );
}
