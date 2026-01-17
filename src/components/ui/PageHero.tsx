import React from 'react';
import { MotionPreset } from './motion-preset';
import { cn } from '@/lib/utils';

interface PageHeroProps {
    title: string;
    image: string;
    height?: string;
    overlayOpacity?: string;
    className?: string;
    children?: React.ReactNode;
}

const PageHero = ({
    title,
    image,
    height = "60vh",
    overlayOpacity = "bg-black/40",
    className,
    children
}: PageHeroProps) => {
    return (
        <section
            className={cn("relative w-full overflow-hidden flex items-center justify-center", className)}
            style={{ height }}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className={cn("absolute inset-0", overlayOpacity)}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
                <MotionPreset
                    fade
                    slide={{ direction: 'up', offset: 20 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-white text-[32px] md:text-[40px] uppercase tracking-wider subpixel-antialiased drop-shadow-lg">
                        {title}
                    </h1>
                    {children}
                </MotionPreset>
            </div>
        </section>
    );
};

export default PageHero;
