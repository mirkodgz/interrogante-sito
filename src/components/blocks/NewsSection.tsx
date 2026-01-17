import React from 'react';
import { MotionPreset } from '@/components/ui/motion-preset';
import BrandButton from '@/components/ui/BrandButton';
import SectionHeader from '@/components/ui/SectionHeader';

const NewsSection = () => {
    const newsItems = [
        {
            title: "A PIEDI NUDI 4",
            highlightedWord: "4",
            image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768527003/Foto-Cover-APN4_fvdqfy.jpg",
            href: "/festival/"
        },
        {
            title: "LA CARRETILLA",
            highlightedWord: "CARRETILLA",
            image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768527018/la-carettilla-img-is_ormeeq.jpg",
            href: "/la-carretilla/"
        }
    ];

    return (
        <section className="py-16 bg-white border-t border-black/5">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <SectionHeader
                    title="NEWS"
                    highlightedWord="NEWS"
                    className="mb-10"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {newsItems.map((item, index) => (
                        <MotionPreset
                            key={index}
                            fade
                            slide={{ direction: 'up', offset: 30 }}
                            delay={0.2 * index}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center group"
                        >
                            {/* Card Title */}
                            <h3 className="font-serif font-bold text-[27px] text-black uppercase mb-6 tracking-[0.3px]">
                                {item.title.split(item.highlightedWord)[0]}
                                <span className="text-secondary">{item.highlightedWord}</span>
                                {item.title.split(item.highlightedWord)[1]}
                            </h3>

                            {/* Card Image */}
                            <div className="relative w-full max-w-[449px] aspect-[449/271] rounded-sm overflow-hidden mb-6">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* CTA Button */}
                            <BrandButton
                                text="VER MÁS"
                                href={item.href}
                                variant="primary"
                                className="scale-90"
                            />
                        </MotionPreset>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
