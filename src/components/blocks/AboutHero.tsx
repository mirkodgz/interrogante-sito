import React from 'react';
import { MotionPreset } from '@/components/ui/motion-preset';

const AboutHero = () => {
    return (
        <section className="relative h-[90vh] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://res.cloudinary.com/dskliu1ig/image/upload/v1768534859/FotoGrupo1_sfbyvs.webp"
                    alt="Nosotros - Interrogante Spettacolo"
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <MotionPreset
                    fade
                    scale
                    transition={{ duration: 1 }}
                >
                    <h1 className="font-serif text-white text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter mix-blend-overlay opacity-90">
                        Nosotros
                    </h1>
                </MotionPreset>
            </div>
        </section>
    );
};

export default AboutHero;
