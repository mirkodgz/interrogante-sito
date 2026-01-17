import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FeatureItem {
    text: string
}

interface DoubleBlockSectionProps {
    title?: string
    image: string
    imageAlt?: string
    imageSide?: 'left' | 'right'
    blocks: {
        subtitle: string
        text?: string | React.ReactNode
        features?: string[]
    }[]
    className?: string
}

const DoubleBlockSection = ({
    title,
    image,
    imageAlt = "Feature Image",
    imageSide = 'left',
    blocks,
    className
}: DoubleBlockSectionProps) => {
    return (
        <section className={cn("py-24 container mx-auto px-6 max-w-7xl", className)}>
            {title && (
                <div className="text-center mb-20">
                    <h2 className="font-nav text-4xl md:text-5xl text-primary uppercase tracking-tight font-bold">
                        {title}
                    </h2>
                </div>
            )}

            <div className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start",
                imageSide === 'right' && "lg:flex-row-reverse"
            )}>
                {/* Image Column */}
                <motion.div
                    initial={{ opacity: 0, x: imageSide === 'left' ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={cn(
                        "rounded-sm overflow-hidden shadow-2xl",
                        imageSide === 'right' && "lg:order-2"
                    )}
                >
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-full object-cover aspect-[3/4]"
                    />
                </motion.div>

                {/* Content Column */}
                <motion.div
                    initial={{ opacity: 0, x: imageSide === 'left' ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={cn(
                        "space-y-10",
                        imageSide === 'right' && "lg:order-1"
                    )}
                >
                    {blocks.map((block, idx) => (
                        <div key={idx} className="space-y-4">
                            <h3 className="font-nav text-[20px] md:text-[22px] text-black uppercase font-bold tracking-[0.2px]">
                                {block.subtitle}
                            </h3>
                            <div className="font-sans text-gray-700 text-[15px] md:text-[16px] leading-relaxed">
                                {block.text}
                            </div>
                            {block.features && (
                                <ul className="space-y-1 font-sans text-gray-700 text-[15px] md:text-[16px] mt-4">
                                    {block.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex gap-3 items-start leading-snug">
                                            <span className="text-secondary mt-1.5">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default DoubleBlockSection
