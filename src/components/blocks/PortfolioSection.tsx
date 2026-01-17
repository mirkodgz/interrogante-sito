import BrandButton from '@/components/ui/BrandButton'
import { MotionPreset } from '@/components/ui/motion-preset'

import PortfolioContent from '@/components/blocks/PortfolioContent'
import SectionHeader from '@/components/ui/SectionHeader'

export type PortfolioItem = {
  id: string
  title: string
  description: string
  image: string
  href: string
  target?: '_blank' | '_self'
  collaboratorLogo?: string
}

type PortfolioComponentProps = {
  portfolioItems: PortfolioItem[]
}

const Portfolio = ({ portfolioItems }: PortfolioComponentProps) => {
  return (
    /* SECCIÓN: PORTAFOLIO / PROYECTOS */
    <section className='space-y-8 py-8 sm:space-y-10 sm:py-16 lg:space-y-12 lg:py-24 bg-[#efeff6] text-black'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Content */}
        <div className="flex flex-col items-center">
          <SectionHeader
            title="Cursos y talleres en español"
            highlightedWord="Cursos y talleres"
            description="Diseñamos experiencias de formación en español que transforman el aprendizaje en una vivencia artística y significativa. Inspirados en valores como la autenticidad, la innovación, la colaboración y la excelencia educativa, nuestras propuestas combinan técnicas teatrales y creativas con una profunda conexión cultural latinoamericana e hispana.

Ofrecemos actividades que inspiran a profesores, estudiantes y público en general, fomentando la creatividad, el crecimiento personal y profesional"
            className="mb-2"
          />
        </div>
      </div>
      {/* Portfolio Content */}
      <MotionPreset fade slide={{ direction: 'up', offset: 20 }} delay={1.0} transition={{ duration: 0.6 }}>
        <PortfolioContent portfolioItems={portfolioItems} />
      </MotionPreset>
    </section>
  )
}

export default Portfolio
