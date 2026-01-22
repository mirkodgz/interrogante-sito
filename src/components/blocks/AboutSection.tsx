import React from 'react'
import { MotionPreset } from '@/components/ui/motion-preset'
import BrandButton from '@/components/ui/BrandButton'
import SectionHeader from '@/components/ui/SectionHeader'
import { ui } from '@/i18n/ui'

const AboutSection = ({ lang = 'es' }: { lang?: string }) => {
    const t = ui[lang as keyof typeof ui] || ui.es;

    return (
        /* SECCIÓN: ABOUT / INTRO - FONDO GRADIENTE DIVIDIDO */
        <section className="relative py-24 overflow-hidden">
            {/* Background with Conic Gradient (Primary and Secondary colors from theme) */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'conic-gradient(from 180deg at 50% 50%, #4338ab 0deg, #4338ab 180deg, #a48956 180deg, #a48956 360deg)'
                }}
            />

            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
                {/* Title */}
                <SectionHeader
                    title="Interrogante Spettacolo"
                    highlightedWord="Spettacolo"
                    variant="dark"
                    className="mb-12"
                    as="h1"
                />

                {/* Central Image */}
                <MotionPreset
                    fade
                    slide={{ direction: 'up', offset: 40 }}
                    delay={0.2}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-5xl mb-12"
                >
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                        <img
                            src="https://res.cloudinary.com/dskliu1ig/image/upload/v1768501444/FotoGrupoWhiteAdnBlack-1024x566-1_gdumnd.webp"
                            alt="Grupo Interrogante Spettacolo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </MotionPreset>

                {/* Description Text */}
                <MotionPreset
                    fade
                    slide={{ direction: 'up', offset: 30 }}
                    delay={0.3}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl text-center mb-12"
                >
                    <p className="text-white/90 text-[16px] font-semibold leading-relaxed">
                        {t['home.about.description']}
                    </p>
                </MotionPreset>

                {/* Button */}
                <MotionPreset
                    fade
                    slide={{ direction: 'up', offset: 20 }}
                    delay={0.4}
                    transition={{ duration: 0.5 }}
                >
                    <BrandButton
                        text={t['home.about.button']}
                        href={lang === 'es' ? '/nosotros/' : '/it/chi-siamo/'}
                        variant="white"
                    />
                </MotionPreset>
            </div>
        </section>
    )
}

export default AboutSection
