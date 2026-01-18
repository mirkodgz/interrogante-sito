'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, ZoomIn } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

// Simple Progress bar component
const Progress = ({ value, className }: { value: number; className?: string }) => (
    <div className={cn("relative h-2.5 w-full overflow-hidden rounded-full bg-white border border-black/10", className)}>
        <div
            className="h-full w-full flex-1 bg-primary transition-all duration-500 ease-out"
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
    </div>
);

interface GalleryCarouselProps {
    images: string[];
    title?: string;
    description?: string;
}

export default function GalleryCarousel({
    images,
    title = "Galería",
    description = "Revive los mejores momentos, colaboraciones y logros de nuestras ediciones anteriores."
}: GalleryCarouselProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    useEffect(() => {
        if (!api) return;

        const updateState = () => {
            // Obtenemos el progreso real (0 a 1) y lo pasamos a 0-100
            const progress = Math.max(0, Math.min(1, api.scrollProgress()));
            setScrollProgress(progress * 100);
            setCurrent(api.selectedScrollSnap());
        };

        updateState();

        api.on('scroll', updateState);
        api.on('select', updateState);
        api.on('reInit', updateState);

        return () => {
            api.off('scroll', updateState);
            api.off('select', updateState);
            api.off('reInit', updateState);
        };
    }, [api]);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + images.length) % images.length);
        }
    };

    return (
        <section className="py-12 bg-[#efeff6] overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-8 space-y-4">
                    <h2 className="font-nav font-bold text-[32px] md:text-[40px] text-primary uppercase">
                        {title}
                    </h2>
                    {description && (
                        <p className="font-sans text-lg text-black/60 max-w-3xl">
                            {description}
                        </p>
                    )}
                </div>

                <Carousel
                    setApi={setApi}
                    opts={{
                        align: 'start',
                        slidesToScroll: 1,
                    }}
                    className="relative w-full"
                >
                    <CarouselContent className="-ml-6">
                        {images.map((img, index) => (
                            <CarouselItem key={index} className="pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <motion.div
                                    transition={{ duration: 0.3 }}
                                    onClick={() => openLightbox(index)}
                                    className="cursor-pointer group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg border border-black/5"
                                >
                                    <img
                                        src={img}
                                        alt={`Imagen ${index + 1}`}
                                        className={cn(
                                            "w-full h-full object-cover transition-all duration-700",
                                            current === index ? "opacity-100" : "opacity-90 group-hover:opacity-100"
                                        )}
                                    />
                                    {/* Overlay con icono de zoom */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                                            <ZoomIn className="w-6 h-6" />
                                        </div>
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation & Progress Bar */}
                    <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-black/5">
                        <div className="flex items-center gap-4 order-2 md:order-1">
                            <CarouselPrevious
                                variant="ghost"
                                className="static translate-y-0 h-12 w-12 rounded-full border border-black/10 bg-white hover:bg-primary hover:text-white transition-all [&_svg]:h-6 [&_svg]:w-6"
                            />
                            <CarouselNext
                                variant="ghost"
                                className="static translate-y-0 h-12 w-12 rounded-full border border-black/10 bg-white hover:bg-primary hover:text-white transition-all [&_svg]:h-6 [&_svg]:w-6"
                            />
                        </div>

                        <div className="flex items-center gap-6 w-full md:max-w-md order-1 md:order-2">
                            <Progress value={scrollProgress} className="flex-1" />
                        </div>
                    </div>
                </Carousel>
            </div>

            {/* Lightbox Modal (Same as before but improved) */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                        className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[210] p-2"
                        >
                            <X size={40} strokeWidth={1.5} />
                        </button>

                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-[210] hidden md:block"
                        >
                            <ChevronLeft size={60} strokeWidth={1} />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-[210] hidden md:block"
                        >
                            <ChevronRight size={60} strokeWidth={1} />
                        </button>

                        <motion.div
                            key={selectedImage}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative max-w-7xl max-h-[85vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={images[selectedImage]}
                                alt="Galería Imagen Ampliada"
                                className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-xl"
                            />

                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/60 font-nav uppercase tracking-[0.3em] text-sm">
                                {selectedImage + 1} / {images.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
