import { motion, useScroll, useTransform } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();

  // Morph values
  const paddingY = useTransform(scrollY, [0, 120], ["16px", "8px"]);
  const scaleX = useTransform(scrollY, [0, 120], [1, 1.04]);
  const bgOpacity = useTransform(scrollY, [0, 120], [0.15, 0.3]);
  const shadowOpacity = useTransform(scrollY, [0, 120], [0.45, 0.25]);

  return (
    <header className="fixed top-6 left-0 z-50 hidden w-full md:flex justify-center">
      <motion.nav
        style={{
          paddingTop: paddingY,
          paddingBottom: paddingY,
          scaleX,
          backgroundColor: `rgba(34, 211, 238, ${bgOpacity.get()})`,
          boxShadow: `0 0 40px rgba(34, 211, 238, ${shadowOpacity.get()})`,
        }}
        className="flex items-center gap-10 rounded-full px-10 backdrop-blur-xl border border-cyan-400/20"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="text-lg font-semibold text-cyan-300 hover:text-white transition"
        >
          M<span className="text-white">.</span>
        </a>

        {/* Links */}
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium text-cyan-200 transition hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="ml-6 rounded-full bg-cyan-400 px-6 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
        >
          Contact
        </a>
      </motion.nav>
    </header>
  );
}
