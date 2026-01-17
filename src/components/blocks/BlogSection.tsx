import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { MotionPreset } from '@/components/ui/motion-preset';
import BrandButton from '@/components/ui/BrandButton';
import SectionHeader from '@/components/ui/SectionHeader';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const onSelect = React.useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    React.useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
    }, [emblaApi, onSelect]);

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

                <div className="relative max-w-6xl mx-auto px-2 md:px-12">
                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-black/40 hover:text-primary transition-colors focus:outline-none hidden"
                    >
                        <ChevronLeft size={48} strokeWidth={1} />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-black/40 hover:text-primary transition-colors focus:outline-none hidden"
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
                                        <div className="p-6 flex flex-col items-center flex-grow">
                                            <h3 className="font-nav font-bold text-[20px] text-center uppercase tracking-normal leading-tight mb-4 min-h-[3rem] line-clamp-2">
                                                {item.data.title}
                                            </h3>

                                            <BrandButton
                                                text="LEER MÁS"
                                                href={`/blog/${item.slug}`}
                                                variant="primary"
                                                showArrow
                                                className="mt-2"
                                            />
                                        </div>
                                    </MotionPreset>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots - Visible on all screen sizes */}
                    <div className='mt-12 flex flex-col items-center gap-4'>
                        <div className='flex justify-center items-center gap-3'>
                            {scrollSnaps.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => emblaApi?.scrollTo(index)}
                                    className={cn(
                                        'rounded-full transition-all duration-500',
                                        index === selectedIndex
                                            ? 'w-10 h-2 bg-primary shadow-md shadow-primary/40'
                                            : 'w-2 h-2 bg-black/20 hover:bg-black/40'
                                    )}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        <span className='text-black/40 text-[11px] font-nav tracking-[3px] uppercase'>
                            {selectedIndex + 1} / {scrollSnaps.length}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
