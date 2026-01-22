import React from 'react';
import { MotionPreset } from '@/components/ui/motion-preset';
import BrandButton from '@/components/ui/BrandButton';
import SectionHeader from '@/components/ui/SectionHeader';
import { ui } from '@/i18n/ui';

const FestivalCTA = ({ lang = 'es' }: { lang?: string }) => {
    const t = ui[lang as keyof typeof ui] || ui.es;

    return (
        <section className="relative py-24 bg-[#efeff6] overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col items-center">
                {/* Title */}
                <SectionHeader
                    title="FESTIVAL"
                    highlightedWord="FESTIVAL"
                    className="mb-6"
                />

                {/* Hero Image / Banner */}
                <MotionPreset
                    fade
                    slide={{ direction: 'up', offset: 40 }}
                    delay={0.2}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-6xl mb-6"
                >
                    <div className="relative aspect-[21/7] md:aspect-[21/6] rounded-sm overflow-hidden group">
                        <img
                            src="https://res.cloudinary.com/dskliu1ig/image/upload/v1768526709/A-Piedi-Nudi-FotoCover-Home_vbnzeg.jpg"
                            alt="Festival A Piedi Nudi"
                            className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 group-hover:bg-black/0 transition-colors duration-500"></div>
                    </div>
                </MotionPreset>

                {/* CTA Button */}
                <MotionPreset
                    fade
                    slide={{ direction: 'up', offset: 20 }}
                    delay={0.4}
                    transition={{ duration: 0.6 }}
                >
                    <BrandButton
                        text={t['home.festival.button']}
                        href={lang === 'es' ? '/festival/' : '/it/festival/'}
                        variant="primary"
                    />
                </MotionPreset>
            </div>
        </section>
    );
};

export default FestivalCTA;
