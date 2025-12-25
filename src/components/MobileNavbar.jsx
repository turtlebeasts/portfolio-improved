import { motion } from "framer-motion";
import { useState } from "react";
import { Home, Layers, Briefcase, MessageCircle } from "lucide-react";

const items = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "Projects", href: "#projects", icon: Briefcase },
  { label: "Skills", href: "#skills", icon: Layers },
  { label: "Contact", href: "#contact", icon: MessageCircle },
];

export default function MobileNavbar() {
  const [active, setActive] = useState("Home");

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-2 rounded-2xl bg-cyan-500/10 px-4 py-3 backdrop-blur-xl border border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.35)] md:hidden"
    >
      {items.map(({ label, href, icon: Icon }) => {
        const isActive = active === label;

        return (
          <motion.a
            key={label}
            href={href}
            onClick={() => setActive(label)}
            whileTap={{ scale: 0.9 }}
            className="relative flex flex-col items-center justify-center px-3 py-2"
          >
            {/* Active bubble */}
            {isActive && (
              <motion.span
                layoutId="mobile-nav-active"
                className="absolute inset-0 rounded-xl bg-cyan-400/20"
              />
            )}

            <Icon
              size={18}
              className={`relative z-10 ${
                isActive ? "text-white" : "text-cyan-300"
              }`}
            />
            <span
              className={`relative z-10 mt-1 text-[10px] font-medium ${
                isActive ? "text-white" : "text-cyan-300"
              }`}
            >
              {label}
            </span>
          </motion.a>
        );
      })}
    </motion.nav>
  );
}
