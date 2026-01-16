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
            href: "#"
        },
        {
            title: "LA CARRETILLA",
            highlightedWord: "CARRETILLA",
            image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768527018/la-carettilla-img-is_ormeeq.jpg",
            href: "/la-carretilla/"
        }
    ];

    return (
        <section className="py-24 bg-white border-t border-black/5">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <SectionHeader
                    title="NEWS"
                    highlightedWord="NEWS"
                    className="mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
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
                            <h3 className="font-nav font-bold text-3xl md:text-4xl text-black uppercase mb-8 tracking-tighter">
                                {item.title.split(item.highlightedWord)[0]}
                                <span className="text-primary">{item.highlightedWord}</span>
                                {item.title.split(item.highlightedWord)[1]}
                            </h3>

                            {/* Card Image */}
                            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden mb-8">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* CTA Button */}
                            <BrandButton
                                text="VER MÁS"
                                href={item.href}
                                variant="primary"
                                className="scale-90 md:scale-100"
                            />
                        </MotionPreset>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
