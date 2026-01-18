import React from 'react'
import { MotionPreset } from './motion-preset'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
    eyebrow?: string
    title: string
    highlightedWord?: string
    description?: string
    align?: 'center' | 'left'
    variant?: 'dark' | 'light'
    className?: string
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const SectionHeader = ({
    eyebrow,
    title,
    highlightedWord,
    description,
    align = 'center',
    variant = 'light',
    className,
    as: Tag = 'h2'
}: SectionHeaderProps) => {
    const isCenter = align === 'center'
    const isDark = variant === 'dark'

    // Split title to insert highlighted word if provided
    const renderTitle = () => {
        if (!highlightedWord) return title

        const parts = title.split(highlightedWord)
        return (
            <>
                {parts[0]}
                <span className="text-primary">{highlightedWord}</span>
                {parts[1]}
            </>
        )
    }

    return (
        <div className={cn(
            'space-y-4 w-full',
            isCenter ? 'text-center' : 'text-left',
            className
        )}>
            {eyebrow && (
                <MotionPreset fade slide={{ direction: 'up', offset: 30 }} delay={0.2} transition={{ duration: 0.6 }}>
                    <p className="text-primary text-sm font-nav tracking-widest uppercase">
                        {eyebrow}
                    </p>
                </MotionPreset>
            )}

            <MotionPreset fade slide={{ direction: 'up', offset: 40 }} delay={0.4} transition={{ duration: 0.8 }}>
                <Tag className={cn(
                    "relative z-1 inline-block",
                    "font-serif text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight font-bold tracking-[0.3px]",
                    isDark ? "text-white" : "text-black"
                )}>
                    {renderTitle()}
                </Tag>
            </MotionPreset>

            {description && (
                <MotionPreset fade slide={{ direction: 'up', offset: 30 }} delay={0.6} transition={{ duration: 0.7 }}>
                    <p className={cn(
                        "text-base font-semibold leading-relaxed max-w-2xl whitespace-pre-line",
                        isDark ? "text-white/90" : "text-[#3c3c3c]",
                        isCenter && "mx-auto"
                    )}>
                        {description}
                    </p>
                </MotionPreset>
            )}
        </div>
    )
}

export default SectionHeader
