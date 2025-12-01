import { useMemo, useState, useEffect } from 'react'
import GitHubLanguageProgress from './components/GitHubLanguageProgress'
import profileImg from './assets/profile.png'
import img01 from './assets/01.png'
import img02 from './assets/02.png'
import img03 from './assets/03.png'
import img04 from './assets/04.png'
import img05 from './assets/05.png'
import img06 from './assets/06.png'
import garden1 from './assets/garden1.png'
import garden2 from './assets/garden2.png'
import garden3 from './assets/garden3.png'
import garden4 from './assets/garden4.png'
import artboard1 from './assets/Artboard 1.png'
import lanyard from './assets/lanyard.png'
import myimageImg from './assets/myimage.png'
import certImg from './assets/e-cert.png'
import cert2Img from './assets/e-cert-2.png'
import frameBahalaNani from './assets/Frame Bahala nani.png'

type Post = {
  id: string
  title: string
  excerpt: string
  cover: string
  tags: string[]
  date: string
  readTime: string
}

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalCert, setModalCert] = useState<{ src: string; title: string; issuer: string; year: string; url?: string } | null>(null)

  useEffect(() => {
    // prevent body scroll when modal is open
    if (modalOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [modalOpen])

  const openCertModal = (c: { src: string; title: string; issuer: string; year: string; url?: string }) => {
    setModalCert(c)
    setModalOpen(true)
  }

  const closeCertModal = () => {
    setModalOpen(false)
    setTimeout(() => setModalCert(null), 200)
  }

  const posts = useMemo<Post[]>(() => [
    {
      id: 'intro-tailwind-motion',
      title: 'Designing with Motion: Subtle Transitions that Feel Fast',
      excerpt: 'A practical guide to layering micro-interactions, easing curves, and timing to craft a snappy yet calm UI.',
      cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',
      tags: ['UI/UX', 'Animation', 'React'],
      date: 'Sep 20, 2025',
      readTime: '6 min'
    },
    {
      id: 'next-shamrock-theme',
      title: 'Using a Custom Shamrock Palette for Consistent Branding',
      excerpt: 'Tips for color ramps, accessible contrast, and component tokens using Tailwind CSS.',
      cover: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop',
      tags: ['Design System', 'Tailwind'],
      date: 'Sep 12, 2025',
      readTime: '4 min'
    },
    {
      id: 'writing-productive',
      title: 'Write More by Lowering the Friction',
      excerpt: 'My lightweight workflow for drafting, editing, and publishing—without overthinking the tooling.',
      cover: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop',
      tags: ['Productivity', 'Writing'],
      date: 'Aug 30, 2025',
      readTime: '3 min'
    }
  ], [])

  return (
    <div className="min-h-dvh bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-950">
      <header className="sticky top-0 z-30 border-b border-neutral-200/80 bg-white/70 backdrop-blur-md transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-950/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-semibold tracking-tight">
            <span className="text-shamrock-500">/</span> Pacifico
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a className="text-neutral-600 transition-colors hover:text-shamrock-500 dark:text-neutral-300" href="#posts">Posts</a>
            <a className="text-neutral-600 transition-colors hover:text-shamrock-500 dark:text-neutral-300" href="#about">About</a>
            <a className="text-neutral-600 transition-colors hover:text-shamrock-500 dark:text-neutral-300" href="#graphics">Graphics</a>
            <a className="text-neutral-600 transition-colors hover:text-shamrock-500 dark:text-neutral-300" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#subscribe" className="btn-primary">Subscribe</a>
          </div>
      </div>
      </header>

      <main id="home" className="mx-auto max-w-6xl px-6">
        <section className="relative isolate overflow-hidden py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-shamrock-200/60 bg-shamrock-50 px-3 py-1 text-xs font-medium text-shamrock-700 dark:border-shamrock-800/70 dark:bg-shamrock-900/30 dark:text-shamrock-100">
              New • curated insights
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Thoughts on building delightful products
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-neutral-600 dark:text-neutral-300">
              Essays on design systems, frontend engineering, and the creative process.
        </p>
      </div>

          <div className="pointer-events-none absolute -left-24 -top-24 -z-10 aspect-square w-72 rounded-full bg-shamrock-100 opacity-70 blur-3xl dark:bg-shamrock-800/40" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 -z-10 aspect-square w-72 rounded-full bg-shamrock-100 opacity-70 blur-3xl dark:bg-shamrock-800/40" />
        </section>

        <section id="graphics" className="mt-14 rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Graphics</h2>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Recent graphic works and mockups.</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { src: artboard1, title: 'Brand Logo', desc: 'Brand logo I designed for a vegan restaurant.' },
                { src: lanyard, title: 'Lanyard Design', desc: 'My own version design of our school lanyard.' },
                { src: frameBahalaNani, title: 'Organization Frame', desc: 'Frame I designed for a school organization.' }
              ].map((item, i) => (
                <figure key={i} className="group relative overflow-hidden rounded-xl border border-neutral-200/70 bg-white/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-neutral-800/70 dark:bg-neutral-900/50">
                  <img src={item.src} alt={item.title} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                  <figcaption className="p-3">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{item.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="posts" className="mt-10 grid grid-cols-1 gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group card">
              <a href={`#/post/${post.id}`} className="block">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="h-52 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="mt-5 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold leading-snug transition-colors group-hover:text-shamrock-500">
                    {post.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-neutral-600 dark:text-neutral-300">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </section>

        <section id="about" className="relative isolate overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-8 md:grid-cols-3">
            <div className="md:col-span-1 grid grid-cols-2 gap-4">
              <img
                src={profileImg}
                alt="Profile portrait 1"
                className="h-40 w-full rounded-2xl object-cover shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800"
                loading="lazy"
              />
              <img
                src={myimageImg}
                alt="Profile portrait 2"
                className="h-40 w-full rounded-2xl object-cover shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800"
                loading="lazy"
              />
              <img
                src={profileImg}
                alt="Profile portrait 3"
                className="h-40 w-full rounded-2xl object-cover shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800"
                loading="lazy"
              />
              <img
                src={profileImg}
                alt="Profile portrait 4"
                className="h-40 w-full rounded-2xl object-cover shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800"
                loading="lazy"
              />
              <img
                src={profileImg}
                alt="Profile portrait 5"
                className="h-40 w-full rounded-2xl object-cover shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800"
                loading="lazy"
              />
                <img
                  src={profileImg}
                  alt="Profile portrait 6"
                  className="h-40 w-full rounded-2xl object-cover shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800"
                  loading="lazy"
                />
                <img
                  src={profileImg}
                  alt="Profile portrait 7"
                  className="h-40 w-full rounded-2xl object-cover shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800"
                  loading="lazy"
                />
                <img
                  src={profileImg}
                  alt="Profile portrait 8"
                  className="h-40 w-full rounded-2xl object-cover shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800"
                  loading="lazy"
                />
                <img
                  src={profileImg}
                  alt="Profile portrait 9"
                  className="h-40 w-full rounded-2xl object-cover shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800"
                  loading="lazy"
                />
                <img
                  src={profileImg}
                  alt="Profile portrait 10"
                  className="h-40 w-full rounded-2xl object-cover shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800"
                  loading="lazy"
                />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight">About me</h2>
              <p className="mt-4 max-w-prose text-neutral-600 dark:text-neutral-300">
                I’m a frontend engineer and designer focused on building fast, accessible,
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
              {[img01, img02, img03, img04, img05, img06].map((src, i) => (
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
              {[
                { src: certImg, title: 'Intellectual Property', issuer: 'Mindoro State University', year: '2025' },
                { src: cert2Img, title: 'Internet of Things', issuer: 'Mindoro State University', year: '2025' },
                { src: myimageImg, title: 'UI Design', issuer: 'Design School', year: '2023' },
                { src: myimageImg, title: 'Backend Basics', issuer: 'Dev Institute', year: '2022' }
              ].map((c, i) => (
                <figure key={i} className="group relative overflow-hidden rounded-xl border border-neutral-200/70 bg-white/60 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-neutral-800/70 dark:bg-neutral-900/50">
                  <img src={c.src} alt={c.title} className="h-40 w-full object-cover rounded-md" loading="lazy" />
                  <figcaption className="mt-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{c.title}</p>
                        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{c.issuer} • {c.year}</p>
                      </div>
                      <button
                        onClick={() => openCertModal(c)}
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

        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeCertModal} />
            <div className="relative z-50 mx-4 w-full max-w-3xl rounded-xl bg-white p-6 shadow-xl dark:bg-neutral-900">
              <button
                onClick={closeCertModal}
                className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200"
                aria-label="Close"
              >
                ✕
              </button>
              {modalCert && (
                <div className="grid gap-4 md:grid-cols-2">
                  <img src={modalCert.src} alt={modalCert.title} className="h-64 w-full rounded-md object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{modalCert.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{modalCert.issuer} • {modalCert.year}</p>
                    <div className="mt-4">
                      {modalCert.url ? (
                        <a href={modalCert.url} target="_blank" rel="noreferrer" className="btn-primary inline-block">Open certificate</a>
                      ) : (
                        <span className="inline-flex items-center rounded-md border border-neutral-200 px-3 py-2 text-sm">No link provided</span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <section id="contact" className="mt-14 rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                Have a project in mind or just want to say hi? Reach out via the form or any of the links below.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <a className="tag hover:border-shamrock-300 hover:text-shamrock-600" href="mailto:pacificooyanib@gmail.com">pacificooyanib@gmail.com</a>
                <a className="tag hover:border-shamrock-300 hover:text-shamrock-600" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook: Pacifico M. Oyanib III</a>
                <a className="tag hover:border-shamrock-300 hover:text-shamrock-600" href="https://github.com/oyanibTech-iii" target="_blank" rel="noreferrer">GitHub: oyanibTech-iii</a>
              </div>
            </div>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget as HTMLFormElement
                const data = new FormData(form)
                const name = String(data.get('name') || '')
                const email = String(data.get('email') || '')
                const message = String(data.get('message') || '')
                const mailto = `mailto:pacificooyanib@gmail.com?subject=${encodeURIComponent('Portfolio contact from ' + name)}&body=${encodeURIComponent(message + '\n\nfrom: ' + name + ' <' + email + '>')}`
                window.location.href = mailto
              }}
            >
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  className="mt-1 w-full rounded-xl border border-neutral-200/80 bg-white/80 px-3 py-2 text-sm shadow-sm outline-none transition-colors focus:border-shamrock-300 focus:ring-2 focus:ring-shamrock-200 dark:border-neutral-800/80 dark:bg-neutral-900/60"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  className="mt-1 w-full rounded-xl border border-neutral-200/80 bg-white/80 px-3 py-2 text-sm shadow-sm outline-none transition-colors focus:border-shamrock-300 focus:ring-2 focus:ring-shamrock-200 dark:border-neutral-800/80 dark:bg-neutral-900/60"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  className="mt-1 w-full rounded-xl border border-neutral-200/80 bg-white/80 px-3 py-2 text-sm shadow-sm outline-none transition-colors focus:border-shamrock-300 focus:ring-2 focus:ring-shamrock-200 dark:border-neutral-800/80 dark:bg-neutral-900/60"
                  name="message"
                  rows={5}
                  placeholder="Tell me a bit about your project..."
                  required
                />
              </div>
              <div className="pt-2">
                <button type="submit" className="btn-primary">Send message</button>
              </div>
            </form>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Garden App</h2>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">A previous project — selected screens.</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[garden1, garden2, garden3, garden4].map((src, i) => (
                <figure key={i} className="group relative overflow-hidden rounded-xl border border-neutral-200/70 bg-white/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-neutral-800/70 dark:bg-neutral-900/50">
                  <img src={src} alt={`Garden app screen ${i + 1}`} className="aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="about" className="mt-10 border-t border-neutral-200/80 py-10 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">About</h4>
              <p className="mt-2 max-w-prose">I’m a frontend engineer and designer who enjoys making fast, friendly interfaces.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <a className="tag hover:border-shamrock-300 hover:text-shamrock-600" href="mailto:pacificooyanib@gmail.com">pacificooyanib@gmail.com</a>
                <a className="tag hover:border-shamrock-300 hover:text-shamrock-600" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook: Pacifico M. Oyanib III</a>
                <a className="tag hover:border-shamrock-300 hover:text-shamrock-600" href="https://github.com/oyanibTech-iii" target="_blank" rel="noreferrer">GitHub: oyanibTech-iii</a>
              </div>
            </div>
            <div>
              <h4 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">Links</h4>
              <div className="mt-2 flex flex-wrap gap-3">
                <a className="tag hover:border-shamrock-300 hover:text-shamrock-600" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                <a className="tag hover:border-shamrock-300 hover:text-shamrock-600" href="https://github.com/oyanibTech-iii" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          <p className="mt-8">© {new Date().getFullYear()}&copy Pacifico M. Oyanib III. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
