import { motion } from 'framer-motion'
import { Code, MessageCircle } from 'react-feather'

export default function WebAPKsSection() {
  const apks = [
    {
      name: 'Web App Launcher',
      description: 'A progressive web app for launching and managing web applications.',
      link: 'https://webapplaucher.netlify.app/',
      icon: Code
    },
    {
      name: 'Random Quote Generator',
      description: 'A web app that generates random quotes for inspiration and motivation.',
      link: 'https://randomqt-quotegenerator.netlify.app/',
      icon: MessageCircle
    }
  ]

  return (
    <section id="web-apks" className="mt-14 rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Web APKs</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Progressive web app recently built.</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {apks.map((apk, i) => {
            const IconComponent = apk.icon
            return (
              <motion.div key={i} whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="group relative overflow-hidden rounded-xl bg-white/60 shadow-sm dark:bg-neutral-900/50">
                <a href={apk.link} target="_blank" rel="noreferrer" className="block">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <motion.div
                        className="inline-flex items-center justify-center rounded-lg bg-shamrock-100 p-3 dark:bg-shamrock-900/30"
                        whileHover={{ rotate: 6, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="h-6 w-6 text-shamrock-600 dark:text-shamrock-400" />
                      </motion.div>
                      <h3 className="mt-4 text-lg font-semibold transition-colors group-hover:text-shamrock-600 dark:group-hover:text-shamrock-400">{apk.name}</h3>
                      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{apk.description}</p>
                      <motion.div
                        className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-shamrock-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Visit App</span>
                        <motion.span
                          className="ml-1"
                          animate={{ x: [0, 2, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                </a>
              </motion.div>
            )
          })}
        </div>
        <p className="mt-6 text-xs text-neutral-500 dark:text-neutral-400">More APKs coming soon...</p>
      </div>
    </section>
  )
}