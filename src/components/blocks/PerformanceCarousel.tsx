import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface PerformanceCarouselProps {
    images: string[];
    title: string;
}

export function PerformanceCarousel({ images, title }: PerformanceCarouselProps) {
    if (!images || images.length === 0) return null;

    return (
        <div className="w-full rounded-sm overflow-hidden shadow-2xl bg-gray-100 relative">
            <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                    {images.map((img, idx) => (
                        <CarouselItem key={idx}>
                            <div className="aspect-[4/5] w-full relative">
                                <img
                                    src={img}
                                    alt={`${title} gallery ${idx + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
            </Carousel>
        </div>
    );
}
