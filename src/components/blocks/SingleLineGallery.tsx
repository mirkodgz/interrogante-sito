'use client';

import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';

interface SingleLineGalleryProps {
    images: string[];
    className?: string;
}

export const SingleLineGallery = ({ images, className }: SingleLineGalleryProps) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());
        api.on('select', () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    if (!images || images.length === 0) return null;

    return (
        <section className={`py-8 ${className || ''}`}>
            <div className='relative group'>
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: 'start',
                        loop: true,
                        dragFree: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                            stopOnInteraction: false,
                        }),
                    ]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {images.map((image, index) => (
                            <CarouselItem key={index} className="pl-4 basis-[95%] md:basis-[80%] lg:basis-[75%]">
                                <div className="overflow-hidden rounded-lg aspect-[3/2]">
                                    <img
                                        src={image}
                                        alt={`Gallery image ${index + 1}`}
                                        className='h-full w-full object-contain hover:scale-105 transition-transform duration-700 cursor-grab active:cursor-grabbing'
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            {/* Interactive Dots (matching homepage style) */}
            <div className='mt-8 flex justify-center items-center gap-3'>
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={cn(
                            'rounded-full transition-all duration-500 focus:outline-none',
                            index === current
                                ? 'w-10 h-2 bg-primary shadow-md shadow-primary/40'
                                : 'w-2 h-2 bg-black/20 hover:bg-black/40'
                        )}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};
