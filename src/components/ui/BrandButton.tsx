import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface BrandButtonProps {
    text?: string;
    children?: React.ReactNode;
    href?: string;
    target?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'black' | 'ghost' | 'white';
    className?: string;
    onClick?: () => void;
    showArrow?: boolean;
}

export default function BrandButton({
    text,
    children,
    href,
    target,
    variant = 'primary',
    className = '',
    onClick,
    showArrow = true
}: BrandButtonProps) {

    // Estilos base según la variante
    const variants = {
        primary: "bg-primary text-white border-transparent hover:bg-primary/90",
        secondary: "bg-secondary text-white border-transparent hover:bg-secondary/90",
        outline: "bg-transparent text-primary border-primary hover:bg-primary hover:text-white",
        black: "bg-black text-white border-transparent hover:bg-gray-900",
        ghost: "bg-transparent text-black border-transparent hover:bg-gray-100",
        white: "bg-white text-primary border-primary hover:bg-transparent hover:text-white hover:border-white"
    };

    const Component = href ? 'a' : 'button';

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`inline-block ${className}`}
        >
            <Component
                href={href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                onClick={onClick}
                className={`
          relative flex items-center justify-between gap-4 
          px-4 py-2 border-2 transition-all duration-300
          font-nav font-normal text-[18px] tracking-[1px] uppercase group rounded-full
          ${variants[variant]}
        `}
            >
                <span className="relative z-10">{children || text}</span>

                {showArrow && (
                    <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="bg-white/20 p-1 rounded-full"
                    >
                        <ArrowRight className="w-5 h-5 transition-colors group-hover:text-white" />
                    </motion.div>
                )}
            </Component>
        </motion.div>
    );
}
