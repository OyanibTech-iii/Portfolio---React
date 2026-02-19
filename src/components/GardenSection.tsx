import garden1 from '../assets/garden1.png'
import garden2 from '../assets/garden2.png'
import garden3 from '../assets/garden3.png'
import garden4 from '../assets/garden4.png'

export default function GardenSection() {
  const gardenImages = [garden1, garden2, garden3, garden4]

  return (
    <section className="mt-14 rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Garden App</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">A previous project — selected screens.</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {gardenImages.map((src, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-xl border border-neutral-200/70 bg-white/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-neutral-800/70 dark:bg-neutral-900/50">
              <img src={src} alt={`Garden app screen ${i + 1}`} className="aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}