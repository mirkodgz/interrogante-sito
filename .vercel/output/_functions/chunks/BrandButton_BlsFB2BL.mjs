import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function BrandButton({
  text,
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  showArrow = true
}) {
  const variants = {
    primary: "bg-primary text-white border-transparent hover:bg-primary/90",
    secondary: "bg-secondary text-white border-transparent hover:bg-secondary/90",
    outline: "bg-transparent text-primary border-primary hover:bg-primary hover:text-white",
    black: "bg-black text-white border-transparent hover:bg-gray-900",
    ghost: "bg-transparent text-black border-transparent hover:bg-gray-100",
    white: "bg-white text-primary border-primary hover:bg-transparent hover:text-white hover:border-white"
  };
  const Component = href ? "a" : "button";
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      className: `inline-block ${className}`,
      children: /* @__PURE__ */ jsxs(
        Component,
        {
          href,
          onClick,
          className: `
          relative flex items-center justify-between gap-4 
          px-8 py-4 border-2 transition-all duration-300
          font-nav text-[18px] tracking-[2px] uppercase group rounded-full
          ${variants[variant]}
        `,
          children: [
            /* @__PURE__ */ jsx("span", { className: "relative z-10", children: children || text }),
            showArrow && /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { x: 0 },
                whileHover: { x: 5 },
                transition: { type: "spring", stiffness: 400, damping: 10 },
                className: "bg-white/20 p-1 rounded-full",
                children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 transition-colors group-hover:text-white" })
              }
            )
          ]
        }
      )
    }
  );
}

export { BrandButton as B };
