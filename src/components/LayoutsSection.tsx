import { motion } from 'framer-motion'
import { ImageWithSkeleton } from './ui/image-with-skeleton'
import fashion from '../assets/layouts/FASHION.PNG'

interface LayoutsSectionProps {
  onOpenDeviceModal?: (d: { src: string; title: string; desc: string }) => void
}

export default function LayoutsSection({ onOpenDeviceModal }: LayoutsSectionProps) {
  const layouts = [
    { src: fashion, title: 'Fashion Layout', desc: 'Clean magazine-style layout design with bold fashion imagery.' },
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
            A selection of editorial and page layout designs crafted with attention to composition and flow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {layouts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onOpenDeviceModal?.({ src: item.src, title: item.title, desc: item.desc })}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-neutral-100 dark:bg-neutral-800 ${
                i === 0 ? 'md:col-span-4 md:row-span-2' : 'md:col-span-1 md:row-span-1'
              }`}
            >
              <ImageWithSkeleton
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                containerClassName="h-full w-full"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                <motion.h3 
                  className="text-white font-bold text-lg transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-white/80 text-sm mt-2 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0 delay-75">
                  {item.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
