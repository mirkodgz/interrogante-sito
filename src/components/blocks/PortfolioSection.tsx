import BrandButton from '@/components/ui/BrandButton'
import { MotionPreset } from '@/components/ui/motion-preset'

import PortfolioContent from '@/components/blocks/PortfolioContent'
import SectionHeader from '@/components/ui/SectionHeader'
import { ui } from '@/i18n/ui'

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
  lang?: string
}

const Portfolio = ({ portfolioItems, lang = 'es' }: PortfolioComponentProps) => {
  const t = ui[lang as keyof typeof ui] || ui.es;

  return (
    /* SECCIÓN: PORTAFOLIO / PROYECTOS */
    <section className='space-y-8 py-8 sm:space-y-10 sm:py-16 lg:space-y-12 lg:py-24 bg-[#efeff6] text-black'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Content */}
        <div className="flex flex-col items-center">
          <SectionHeader
            title={t['home.portfolio.title']}
            highlightedWord={t['home.portfolio.highlight']}
            description={t['home.portfolio.description']}
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
