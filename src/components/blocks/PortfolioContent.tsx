'use client'

import { useEffect, useState } from 'react'

import Autoplay from 'embla-carousel-autoplay'

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'

import BrandButton from '@/components/ui/BrandButton'
import { cn } from '@/lib/utils'

import type { PortfolioItem } from './PortfolioSection'

type PortfolioContentProps = {
  portfolioItems: PortfolioItem[]
}

const PortfolioContent = ({ portfolioItems }: PortfolioContentProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const getSlideScale = () => {
    return 'md:basis-1/2 lg:basis-1/3'
  }

  return (
    <div className="relative group">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'center',
          loop: false,
          containScroll: false, // Permite centrar la primera y última foto aunque no haya loop
          slidesToScroll: 1,
          duration: 45
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnFocusIn: false
          })
        ]}
      >
        {/* Carousel Content */}
        <CarouselContent className='ml-0'>
          {portfolioItems.map((item, index) => {
            const isActive = current === index

            return (
              <CarouselItem
                key={item.id}
                className={cn(
                  'flex basis-full cursor-grab items-center justify-center transition-all duration-700 ease-in-out px-4 py-8',
                  getSlideScale(),
                  !isActive && 'scale-90 opacity-30 blur-[2px]' // Más desenfoque a los lados para resaltar el centro
                )}
              >
                <div className='flex flex-col items-center gap-8 w-full transition-transform duration-700'>
                  {/* Portfolio Image */}
                  <div
                    onClick={() => !isActive && api?.scrollTo(index)}
                    className={cn(
                      'relative overflow-hidden rounded-xl w-full aspect-[4/3] shadow-2xl transition-all duration-700 cursor-pointer',
                      isActive ? 'shadow-primary/40 ring-1 ring-black/5 scale-105' : 'shadow-none'
                    )}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-full h-full object-cover rounded-xl'
                    />
                  </div>

                  {/* Project Details */}
                  <div className={cn(
                    'w-full space-y-3 text-center transition-all duration-700 min-h-[120px]',
                    isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-40 translate-y-2 scale-90 blur-[1px]'
                  )}>
                    <h3 className={cn(
                      'font-nav font-bold text-black uppercase transition-all duration-700',
                      isActive ? 'text-2xl lg:text-3xl tracking-normal' : 'text-lg lg:text-xl tracking-normal opacity-40'
                    )}>
                      {item.title}
                    </h3>
                    {/* Solo mostramos descripción y colaborador si está activo */}
                    <div className={cn(
                      'flex items-center justify-center gap-2 text-black font-sans text-base transition-opacity duration-700',
                      isActive ? 'opacity-100' : 'opacity-0'
                    )}>
                      <span className="font-semibold tracking-normal">{item.description}</span>
                      {item.collaboratorLogo && (
                        <img
                          src={item.collaboratorLogo}
                          alt="Colaborador"
                          className="w-[35px] h-[35px] object-contain rounded-sm border border-black/10 bg-white p-0.5"
                        />
                      )}
                    </div>

                    {/* CTA Button - Only visible when active */}
                    <div className={cn(
                      'pt-4 transition-all duration-700 flex justify-center',
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    )}>
                      <BrandButton
                        href={item.href}
                        target={item.target}
                        variant="primary"
                        className="px-8"
                      >
                        Más información
                      </BrandButton>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>

      {/* Navigation Dots */}
      <div className='mt-12 flex flex-col items-center gap-4'>
        <div className='flex justify-center items-center gap-3'>
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                'rounded-full transition-all duration-500',
                index === current
                  ? 'w-10 h-2.5 bg-primary shadow-md shadow-primary/40' // Barra más larga e intensa
                  : 'w-2.5 h-2.5 bg-black/30 hover:bg-black/60' // Puntos inactivos más visibles
              )}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <span className='text-black/40 text-[11px] font-nav lg:text-[12px] tracking-[3px] uppercase'>
          {current + 1} / {portfolioItems.length}
        </span>
      </div>
    </div>
  )
}

export default PortfolioContent
