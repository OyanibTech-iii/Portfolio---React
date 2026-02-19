import GitHubLanguageProgress from './GitHubLanguageProgress'
import profileImg from '../assets/profile.png'
import img01 from '../assets/01.png'
import img02 from '../assets/02.png'
import img03 from '../assets/03.png'
import img04 from '../assets/04.png'
import img05 from '../assets/05.png'
import img06 from '../assets/06.png'
import certImg from '../assets/e-cert.png'
import cert2Img from '../assets/e-cert-2.png'
import cisspCertImg from '../assets/cissp certification.png'
import isc2Cert1Img from '../assets/isc2 cert/cc domain 1.png'
import isc2Cert2Img from '../assets/isc2 cert/cc domain 2.png'

interface AboutSectionProps {
  onOpenCertModal: (cert: { src: string; title: string; issuer: string; year: string; url?: string }) => void
}

export default function AboutSection({ onOpenCertModal }: AboutSectionProps) {
  const certificates = [
    { src: certImg, title: 'Intellectual Property', issuer: 'Mindoro State University', year: '2025' },
    { src: cert2Img, title: 'Internet of Things', issuer: 'Mindoro State University', year: '2025' },
    { src: cisspCertImg, title: 'CISSP Certification', issuer: 'Cisco', year: '2025' },
    { src: isc2Cert1Img, title: 'Certified in Cybersecurity Domain 1', issuer: 'ISC2', year: '2026' },
    { src: isc2Cert2Img, title: 'Certified in Cybersecurity Domain 2', issuer: 'ISC2', year: '2026' }
  ]

  const workshops = [img01, img02, img03, img04, img05, img06]

  return (
    <section id="about" className="relative isolate overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-8 md:grid-cols-3">
        <div className="md:col-span-1 grid grid-cols-2 gap-4">
          <img
            src={profileImg}
            alt="Profile portrait"
            className="h-40 w-full rounded-2xl object-cover shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold tracking-tight">About me</h2>
          <p className="mt-4 max-w-prose text-neutral-600 dark:text-neutral-300">
            I'm a frontend engineer and designer focused on building fast, accessible,
            and visually cohesive interfaces. I enjoy design systems, delightful motion,
            and the craft of writing clear, maintainable code.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="tag">React</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Tailwind CSS</span>
            <span className="tag">Design Systems</span>
            <span className="tag">Framer Motion</span>
          </div>

          <div className="mt-6">
            <GitHubLanguageProgress username="OyanibTech-iii" />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold">Tech Stack</h3>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                <span className="tag">PHP</span>
                <span className="tag">Java</span>
                <span className="tag">JavaScript</span>
                <span className="tag">C++</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Frameworks</h3>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                <span className="tag">Laravel</span>
                <span className="tag">Symfony</span>
                <span className="tag">React</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold">UI/UX</h3>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                <span className="tag">Photoshop</span>
                <span className="tag">Illustrator</span>
                <span className="tag">Figma</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Recent Learning</h3>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                <span className="tag">Typescript</span>
                <span className="tag">Next.js</span>
                <span className="tag">React Native</span>
                <span className="tag">LLMs / Machine Learning</span>
              </div>
            </div>
            <div className="sm:col-span-2">
              <h3 className="text-sm font-semibold">Other</h3>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                <span className="tag">Tailwind CSS</span>
                <span className="tag">Bootstrap</span>
                <span className="tag">Adobe Animate</span>
                <span className="tag">Networking</span>
                <span className="tag">Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-5xl">
        <h3 className="text-lg font-semibold">Workshops & Training</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Highlights from sessions 01–06.</p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {workshops.map((src, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-xl border border-neutral-200/70 bg-white/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-neutral-800/70 dark:bg-neutral-900/50">
              <img src={src} alt={`Workshop ${i + 1}`} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-5xl">
        <h3 className="text-lg font-semibold">E‑Certificates & Awards</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Selected certificates and awards — click to view the certificate.</p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {certificates.map((c, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-xl border border-neutral-200/70 bg-white/60 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-neutral-800/70 dark:bg-neutral-900/50">
              <img src={c.src} alt={c.title} className="h-40 w-full object-cover rounded-md" loading="lazy" />
              <figcaption className="mt-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{c.title}</p>
                    <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{c.issuer} • {c.year}</p>
                  </div>
                  <button
                    onClick={() => onOpenCertModal(c)}
                    className="ml-4 inline-flex items-center rounded-md border border-shamrock-200/70 bg-shamrock-50 px-2 py-1 text-xs font-medium text-shamrock-700 hover:bg-shamrock-100"
                    type="button"
                  >
                    View
                  </button>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-56 w-56 rounded-full bg-shamrock-100 opacity-60 blur-3xl dark:bg-shamrock-800/40" />
    </section>
  )
}