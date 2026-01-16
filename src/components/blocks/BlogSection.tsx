import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { MotionPreset } from '@/components/ui/motion-preset';
import BrandButton from '@/components/ui/BrandButton';
import SectionHeader from '@/components/ui/SectionHeader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogItem {
    id: string;
    slug: string;
    data: {
        title: string;
        cover?: string;
        summary?: string;
    };
}

interface BlogSectionProps {
    blogItems: BlogItem[];
}

const BlogSection = ({ blogItems }: BlogSectionProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: true
    });

    const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <section className="py-24 bg-[#efeff6] overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <SectionHeader
                    title="BLOG EN ESPAÑOL"
                    highlightedWord="BLOG"
                    className="mb-16"
                />

                <div className="relative max-w-6xl mx-auto px-12">
                    {/* Navigation Arrows */}
                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-black/40 hover:text-primary transition-colors focus:outline-none"
                    >
                        <ChevronLeft size={48} strokeWidth={1} />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-black/40 hover:text-primary transition-colors focus:outline-none"
                    >
                        <ChevronRight size={48} strokeWidth={1} />
                    </button>

                    {/* Carousel */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-6">
                            {blogItems.map((item) => (
                                <div key={item.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                                    <MotionPreset
                                        fade
                                        slide={{ direction: 'up', offset: 20 }}
                                        className="bg-white rounded-sm overflow-hidden shadow-sm h-full flex flex-col group"
                                    >
                                        {/* Image */}
                                        <div className="aspect-square w-full overflow-hidden">
                                            <img
                                                src={item.data.cover || "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=800"}
                                                alt={item.data.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex flex-col items-center flex-grow">
                                            <h3 className="font-nav font-bold text-[18px] text-center uppercase tracking-tight leading-tight mb-8 min-h-[3rem] line-clamp-2">
                                                {item.data.title}
                                            </h3>

                                            <BrandButton
                                                text="LEER MÁS"
                                                href={`/blog/${item.slug}`}
                                                variant="primary"
                                                showArrow
                                                className="mt-auto scale-90"
                                            />
                                        </div>
                                    </MotionPreset>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
