'use client'

import { useEffect, useState } from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'
import { Progress } from '@/components/ui/progress'

import { cn } from '@/lib/utils'

type galleryImage = {
  image: string
  alt: string
}[]

const Gallery = ({ gallery }: { gallery: galleryImage }) => {
  const [screenSize, setScreenSize] = useState<'small' | 'medium' | 'large'>('small')
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('small')
      } else if (window.innerWidth < 768) {
        setScreenSize('medium')
      } else {
        setScreenSize('large')
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 space-y-4 sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>The Art of What We Do</h2>
          <p className='text-muted-foreground text-xl'>
            Discover the beauty of our projects, collaborations, and achievements through our gallery.
          </p>
        </div>

        <Carousel
          className='relative w-full space-y-12 sm:space-y-16 lg:space-y-24'
          setApi={setApi}
          opts={{
            align: 'start',
            slidesToScroll: 1
          }}
        >
          <CarouselContent className='h-80.5 items-center'>
            {gallery.map((item, index) => (
              <CarouselItem key={index} className='pl-6 sm:basis-1/2 md:basis-1/4'>
                <img
                  src={item.image}
                  alt={item.alt}
                  className={cn('h-80.5 rounded-lg object-cover transition-all duration-600 max-sm:mx-auto sm:h-68', {
                    'sm:h-80.5': current == index
                  })}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='flex items-center justify-center gap-4 md:justify-end'>
            <CarouselPrevious variant='ghost' className='static size-9 translate-y-0 [&>svg]:!size-6' />
            <Progress
              value={(() => {
                switch (screenSize) {
                  case 'small':
                    return (current * 100) / gallery.length
                  case 'medium':
                    return (current * 100) / gallery.length + 100 / gallery.length
                  case 'large':
                    return (current * 100) / gallery.length + (100 / gallery.length) * 3
                  default:
                    return (current * 100) / gallery.length
                }
              })()}
              className='h-1.5 w-50'
            />
            <CarouselNext variant='ghost' className='static size-9 translate-y-0 [&>svg]:!size-6' />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Gallery
