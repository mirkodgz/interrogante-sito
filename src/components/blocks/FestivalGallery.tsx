'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface FestivalGalleryProps {
    images: string[];
}

export default function FestivalGallery({ images }: FestivalGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
        <section class="py-20 px-4 max-w-[1400px] mx-auto">
            {/* Grid de Imágenes */}
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => openLightbox(index)}
                        class="aspect-square rounded-sm overflow-hidden shadow-md group cursor-pointer relative"
                    >
                        <img
                            src={img}
                            alt={`Galería Festival ${index + 1}`}
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                        class="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                    >
                        <button
                            onClick={closeLightbox}
                            class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[210]"
                        >
                            <X size={40} strokeWidth={1.5} />
                        </button>

                        <button
                            onClick={prevImage}
                            class="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-[210] hidden md:block"
                        >
                            <ChevronLeft size={60} strokeWidth={1} />
                        </button>

                        <button
                            onClick={nextImage}
                            class="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-[210] hidden md:block"
                        >
                            <ChevronRight size={60} strokeWidth={1} />
                        </button>

                        <motion.div
                            key={selectedImage}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            class="relative max-w-7xl max-h-[85vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={images[selectedImage]}
                                alt="Galería Imagen Ampliada"
                                class="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
                            />

                            <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/60 font-nav uppercase tracking-[0.3em] text-sm">
                                {selectedImage + 1} / {images.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
