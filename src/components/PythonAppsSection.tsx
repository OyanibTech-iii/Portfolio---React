import { motion } from 'framer-motion'
import { Package } from 'react-feather'

const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

interface PythonAppsSectionProps {
  onOpenDownloadModal: (project: { title: string; downloadLink: string }) => void
}

export default function PythonAppsSection({ onOpenDownloadModal }: PythonAppsSectionProps) {
  const projects = [
    {
      title: 'Determinant Calculator',
      description: 'A Python desktop APK that computes determinants of matrices; packaged for easy installation.',
      technologies: ['Python', 'APK', 'Matrix Math'],
      downloadLink: 'https://github.com/OyanibTech-iii/Determinant-Calculator-/archive/refs/tags/determinantAPKv4.0.zip'
    }
  ]

  return (
    <section id="python-desktop" className="mt-14 rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Python Desktop Applications</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Python-based desktop apps and APKs.</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="rounded-xl border border-neutral-200/70 bg-white/60 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800/70 dark:bg-neutral-900/50"
            >
              <div className="flex items-center justify-center w-full h-32 bg-gradient-to-br from-shamrock-50 to-shamrock-100 dark:from-shamrock-900/30 dark:to-shamrock-800/30">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-shamrock-600 dark:text-shamrock-400 cursor-pointer"
                >
                  <Package size={56} strokeWidth={1.5} />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{project.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, j) => (
                    <span key={j} className="tag text-xs">{tech}</span>
                  ))}
                </div>
                <motion.button
                  onClick={() => onOpenDownloadModal({ title: project.title, downloadLink: project.downloadLink })}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 10px 25px rgba(41, 151, 110, 0.4)"
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="mt-4 btn-glow text-sm"
                >
                  <motion.span
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  >
                    ↓
                  </motion.span>
                  Download
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}