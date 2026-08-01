import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ImageWithSkeleton } from './ui/image-with-skeleton'
import { ChevronDown } from 'lucide-react'

// Import Code Connect photos (6 images)
import codeConnect01 from '../assets/code connect/01.png'
import codeConnect02 from '../assets/code connect/02.png'
import codeConnect03 from '../assets/code connect/03.png'
import codeConnect04 from '../assets/code connect/04.png'
import codeConnect05 from '../assets/code connect/05.png'
import codeConnect06 from '../assets/code connect/06.png'

// Import KOICA training photos (4 images)
import koica01 from '../assets/KOICA training/752371645_799372853201399_1595168922641361854_n.jpg'
import koica02 from '../assets/KOICA training/753738443_958106467245049_5368518652102475940_n.jpg'
import koica03 from '../assets/KOICA training/753932816_1587276313002219_7133902288636821914_n.jpg'
import koica04 from '../assets/KOICA training/754699820_1026988080247467_1145187470146971317_n.jpg'

// Import ILCDB-DICT photos (4 images)
import ilcdb01 from '../assets/ILCDB-DICT/746661071_122129077755224496_3842201627723828445_n.jpg'
import ilcdb02 from '../assets/ILCDB-DICT/747536732_122129077809224496_5419325080763265165_n.jpg'
import ilcdb03 from '../assets/ILCDB-DICT/747561441_122129077743224496_9049096089464338659_n.jpg'
import ilcdb04 from '../assets/ILCDB-DICT/747573336_122129077827224496_5771217729217214914_n.jpg'

export default function WorkshopsSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'code-connect' | 'koica' | 'ilcdb'>('all')
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const programs = [
    {
      id: 'code-connect',
      title: 'Code Connect',
      subtitle: 'Software Development & Bootcamps',
      description: 'Intensive hands-on developer bootcamps and workshops focused on core programming foundations, modern web technologies, and team collaboration.',
      images: [codeConnect01, codeConnect02, codeConnect03, codeConnect04, codeConnect05, codeConnect06],
    },
    {
      id: 'koica',
      title: 'KOICA Training',
      subtitle: 'Global Capacity Development',
      description: 'International training program sponsored by Korea International Cooperation Agency, enhancing technical skills and sharing digital transformation strategies.',
      images: [koica01, koica02, koica03, koica04],
    },
    {
      id: 'ilcdb',
      title: 'ILCDB-DICT',
      subtitle: 'Government ICT Competency Training',
      description: 'ICT capability-building training administered by the Department of Information and Communications Technology - ILCDB, focused on advanced networking and system solutions.',
      images: [ilcdb01, ilcdb02, ilcdb03, ilcdb04],
    }
  ]

  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(p => p.id === activeCategory)

  return (
    <section id="workshops" className="mt-20 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Workshops & Training
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl text-balance text-lg"
          >
            A compilation of professional training courses, technical bootcamps, and specialized programs completed to continuously sharpen my technical skills.
          </motion.p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['all', 'code-connect', 'koica', 'ilcdb'].map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category as any)
                setExpandedCard(null)
              }}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-shamrock-500 text-white shadow-md'
                  : 'bg-white/80 text-neutral-600 border border-neutral-200/80 hover:bg-neutral-100 dark:bg-neutral-900/60 dark:text-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-800'
              }`}
            >
              {category === 'all' && 'Show All'}
              {category === 'code-connect' && 'Code Connect'}
              {category === 'koica' && 'KOICA Training'}
              {category === 'ilcdb' && 'ILCDB-DICT'}
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => {
              const isExpanded = expandedCard === program.id

              return (
                <motion.div
                  layout
                  key={program.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`group flex flex-col rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-neutral-800/80 dark:bg-neutral-900/40 backdrop-blur-sm ${
                    isExpanded ? 'md:col-span-3' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div>
                      <span className="text-xs font-semibold text-shamrock-500 dark:text-shamrock-400 tracking-wider uppercase block">
                        {program.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mt-0.5">
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed flex-1">
                    {program.description}
                  </p>

                  {/* Collapse/Expand Action Button */}
                  <div className="mt-6">
                    <button
                      onClick={() => setExpandedCard(isExpanded ? null : program.id)}
                      className="flex items-center gap-1.5 text-xs font-bold text-shamrock-600 hover:text-shamrock-500 dark:text-shamrock-400 dark:hover:text-shamrock-300 transition-colors uppercase tracking-wider"
                    >
                      {isExpanded ? 'Hide Images' : 'View Program Images'}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Expanded Images Panel */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-6"
                      >
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                          {program.images.map((imgSrc, i) => (
                            <motion.figure
                              key={i}
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              whileHover={{ scale: 1.02 }}
                              className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/60 shadow-sm transition-all duration-300 dark:border-neutral-800/70 dark:bg-neutral-900/50"
                            >
                              <ImageWithSkeleton
                                src={imgSrc}
                                alt={`${program.title} image ${i + 1}`}
                                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                containerClassName="h-full w-full"
                                loading="lazy"
                              />
                            </motion.figure>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
