import { motion } from 'framer-motion'
import { Play } from 'react-feather'

export default function YouTubeTutorialsSection() {
  const tutorials = [
    {
      name: 'Windows Server Installation on VirtualBox',
      description: 'Step-by-step guide to installing Windows Server on VirtualBox virtual machine.',
      link: 'https://youtu.be/B2-acqrZJck',
      thumbnail: 'https://img.youtube.com/vi/B2-acqrZJck/maxresdefault.jpg'
    },
    {
      name: 'Windows 10 Pro Installation on VirtualBox',
      description: 'Complete tutorial for installing Windows 10 Pro in a VirtualBox environment.',
      link: 'https://youtu.be/tuEz271T4Ps',
      thumbnail: 'https://img.youtube.com/vi/tuEz271T4Ps/maxresdefault.jpg'
    }
  ]

  return (
    <section id="youtube-tutorials" className="mt-14 rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">YouTube Tutorials</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Virtual machine installation guides.</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {tutorials.map((tutorial, i) => (
            <motion.div key={i} whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="group relative overflow-hidden rounded-xl bg-white/60 shadow-sm dark:bg-neutral-900/50">
              <a href={tutorial.link} target="_blank" rel="noreferrer" className="block">
                <div className="relative">
                  <img src={tutorial.thumbnail} alt={tutorial.name} className="w-full h-48 object-cover rounded-t-xl" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-shamrock-600 dark:group-hover:text-shamrock-400">{tutorial.name}</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{tutorial.description}</p>
                  <motion.div
                    className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-shamrock-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Watch Tutorial</span>
                    <motion.span
                      className="ml-1"
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-xs text-neutral-500 dark:text-neutral-400">More tutorials coming soon...</p>
      </div>
    </section>
  )
}