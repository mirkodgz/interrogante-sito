import React from 'react';
import { motion } from 'framer-motion';
import { ui } from '@/i18n/ui';

export default function TextStrips({ lang = 'es' }: { lang?: string }) {
    const t = ui[lang as keyof typeof ui] || ui.es;

    const strips = [
        { text: t['home.strips.1'], color: "bg-secondary", direction: -1 }, // Left
        { text: t['home.strips.2'], color: "bg-primary", direction: 1 },  // Right
        { text: t['home.strips.3'], color: "bg-black", direction: -1 },       // Left
        { text: t['home.strips.4'], color: "bg-primary", direction: 1 }, // Right
    ];

    return (
        /* SECCIÓN: CINTAS DINÁMICAS - CONCEPTOS */
        <section className="py-24 bg-[#f8f8f8] overflow-hidden flex flex-col items-center">
            <div className="w-full max-w-[650px] flex flex-col gap-2 px-6">
                {strips.map((strip, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: strip.direction * 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: [0.215, 0.61, 0.355, 1]
                        }}
                        className={`
              ${strip.color} 
              py-[10px] 
              w-full 
              flex 
              items-center 
              justify-center 
              shadow-lg
              ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'}
            `}
                    >
                        <span className="text-white font-nav text-[44px] font-bold tracking-[3px] leading-none uppercase text-center">
                            {strip.text}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
