import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden py-14 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-shamrock-200/60 bg-shamrock-50 px-3 py-1 text-xs font-medium text-shamrock-700 dark:border-shamrock-800/70 dark:bg-shamrock-900/30 dark:text-shamrock-100">
          New • curated insights
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Thoughts on building delightful products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-balance text-neutral-600 dark:text-neutral-300">
          Essays on design systems, frontend engineering, and the creative process.
        </motion.p>
      </div>

      <div className="pointer-events-none absolute -left-24 -top-24 -z-10 aspect-square w-72 rounded-full bg-shamrock-100 opacity-70 blur-3xl dark:bg-shamrock-800/40" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 -z-10 aspect-square w-72 rounded-full bg-shamrock-100 opacity-70 blur-3xl dark:bg-shamrock-800/40" />
    </section>
  )
}