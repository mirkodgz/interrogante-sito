import Gallery from '@/components/shadcn-studio/blocks/gallery-component-08/gallery-component-08'

const gallery = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-34.png',
    alt: 'Flowers'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-35.png',
    alt: 'Flowers'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-36.png',
    alt: 'Flowers'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-37.png',
    alt: 'Flowers'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-76.png',
    alt: 'Flowers'
  }
]

const GalleryPage = () => {
  return <Gallery gallery={gallery} />
}

export default GalleryPage
