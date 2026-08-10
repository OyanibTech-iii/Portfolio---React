import { motion } from 'framer-motion'
import { ImageWithSkeleton } from './ui/image-with-skeleton'
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import fashion from '../assets/layouts/FASHION.PNG'
import step1 from '../assets/layouts/step 1.PNG'
import step2 from '../assets/layouts/step 2.png'
import step3 from '../assets/layouts/step 3.png'

interface LayoutsSectionProps {
  onOpenDeviceModal?: (d: { src: string; title: string; desc: string }) => void
}

export default function LayoutsSection({ onOpenDeviceModal }: LayoutsSectionProps) {
  const layouts = [
    { src: fashion, title: 'Fashion Layout', desc: 'Clean magazine-style layout design with bold fashion imagery.' },
    { src: step1, title: 'Editorial Step 1', desc: 'Early-stage editorial grid exploring typography and flow.' },
    { src: step2, title: 'Editorial Step 2', desc: 'Refined composition balancing imagery, spacing and rhythm.' },
    { src: step3, title: 'Editorial Step 3', desc: 'Final editorial spread with polished hierarchy and detail.' },
  ]

  return (
    <section id="layouts" className="mt-14 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl text-neutral-900 dark:text-white">Layouts Portfolio</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl text-balance">
            A selection of editorial and page layout designs framed as a scrolling stack.
          </motion.p>
        </div>

        <ScrollStack
          itemStackDistance={45}
          stackPosition="15%"
          scaleEndPosition="8%"
          useWindowScroll
        >
            {layouts.map((item, i) => (
              <ScrollStackItem key={i} onClick={() => onOpenDeviceModal?.({ src: item.src, title: item.title, desc: item.desc })}>
                <ImageWithSkeleton
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
                  containerClassName="h-full w-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-white/80 text-sm mt-2">{item.desc}</p>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
      </div>
    </section>
  )
}