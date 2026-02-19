import { motion } from 'framer-motion'
import artboard1 from '../assets/Artboard 1.png'
import lanyard from '../assets/lanyard.png'
import frameBahalaNani from '../assets/Frame Bahala nani.png'
import lambo from '../assets/lambo.png'
import liquid from '../assets/LIQUID.png'

const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function GraphicsSection() {
  const graphics = [
    { src: artboard1, title: 'Brand Logo', desc: 'Brand logo I designed for a vegan restaurant.' },
    { src: lanyard, title: 'Lanyard Design', desc: 'My own version design of our school lanyard.' },
    { src: frameBahalaNani, title: 'Organization Frame', desc: 'Frame I designed for a school organization.' },
    { src: lambo, title: 'Lambo Poster', desc: 'Modern poster design featuring luxury automotive aesthetics.' },
    { src: liquid, title: 'Liquid Poster', desc: 'Abstract fluid art poster with dynamic visual effects.' }
  ]

  return (
    <section id="graphics" className="mt-14 rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Graphics</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Recent graphic works and mockups.</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {graphics.map((item, i) => (
            <motion.figure
              key={i}
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-xl border border-neutral-200/70 bg-white/60 shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800/70 dark:bg-neutral-900/50">
              <motion.img
                src={item.src}
                alt={item.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
                loading="lazy"
              />
              <figcaption className="p-3">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm font-medium">{item.title}</motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{item.desc}</motion.p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}