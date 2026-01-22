import { useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Code, MessageCircle, Facebook, GitHub, Check, AlertCircle, Loader, Download, Monitor, Terminal, Package, User, Mail, Send } from 'react-feather'
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
import multilayerSwitch from './assets/multilayer-switch.png'
import routerImg from './assets/router.png'
import cisspCertImg from './assets/cissp certification.png'
import lambo from './assets/lambo.png'
import liquid from './assets/LIQUID.png'
// atmImg import removed - using icon instead

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
  const [modalDevice, setModalDevice] = useState<{ src: string; title: string; desc: string } | null>(null)
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)
  const [downloadModalProject, setDownloadModalProject] = useState<{ title: string; downloadLink: string } | null>(null)

  // Contact form states
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('gpNvhzI1YO36ma29S') // Replace with your EmailJS public key
  }, [])

  useEffect(() => {
    // prevent body scroll when modal is open
    if (modalOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [modalOpen])

  // Auto-clear error messages after 2 seconds
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({})
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [errors])

  // Auto-clear form messages after 2 seconds
  useEffect(() => {
    if (formMessage) {
      const timer = setTimeout(() => {
        setFormMessage('')
        setFormStatus('idle')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [formMessage])

  const openCertModal = (c: { src: string; title: string; issuer: string; year: string; url?: string }) => {
    setModalCert(c)
    setModalOpen(true)
  }

  const closeCertModal = () => {
    setModalOpen(false)
    setTimeout(() => setModalCert(null), 200)
  }

  const openDeviceModal = (d: { src: string; title: string; desc: string }) => {
    setModalDevice(d)
    setModalOpen(true)
  }

  const closeDeviceModal = () => {
    setModalOpen(false)
    setTimeout(() => setModalDevice(null), 200)
  }

  const openDownloadModal = (project: { title: string; downloadLink: string }) => {
    setDownloadModalProject(project)
    setDownloadModalOpen(true)
  }

  const closeDownloadModal = () => {
    setDownloadModalOpen(false)
    setTimeout(() => setDownloadModalProject(null), 200)
  }

  // Form validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form input changes
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setToast({ type: 'error', message: 'Please fix the errors above' })
      return
    }

    setFormStatus('loading')

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_0cp1z94', // Replace with your EmailJS service ID
        'template_0x0k9qg', // Replace with your EmailJS template ID
        {
          to_email: 'pacificooyanib@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      )

      setFormStatus('success')
      setFormMessage('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      setToast({ type: 'success', message: 'Email sent successfully!' })

      // Clear toast after 2 seconds
      setTimeout(() => {
        setToast(null)
      }, 2000)
    } catch (error: any) {
      console.error('Email send error:', error)
      console.error('Error status:', error?.status)
      console.error('Error text:', error?.text)
      
      // Fallback to mailto if EmailJS fails (400, 401, 403, 412)
      if (error?.status === 400 || error?.status === 401 || error?.status === 403 || error?.status === 412) {
        console.log('Falling back to mailto due to status:', error?.status)
        const mailtoLink = `mailto:pacificooyanib@gmail.com?subject=${encodeURIComponent('Portfolio contact from ' + formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' <' + formData.email + '>')}`
        window.location.href = mailtoLink
        return
      }
      
      setFormStatus('error')
      setFormMessage('Failed to send message. Please check the console or use the email address directly: pacificooyanib@gmail.com')
      setToast({ type: 'error', message: 'Failed to send email' })
    }
  }

  // Animation variants

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
            <a className="text-neutral-600 transition-colors hover:text-shamrock-500 dark:text-neutral-300" href="#java-desktop">Java Apps</a>
            <a className="text-neutral-600 transition-colors hover:text-shamrock-500 dark:text-neutral-300" href="#contact">Contact</a>
          </nav>
          {/* <div className="flex items-center gap-2">
            <motion.a 
              href="#subscribe" 
              className="btn-glow text-sm"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              Subscribe
            </motion.a>
          </div> */}
        </div>
      </header>

      <main id="home" className="mx-auto max-w-6xl px-6">
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
                { src: frameBahalaNani, title: 'Organization Frame', desc: 'Frame I designed for a school organization.' },
                { src: lambo, title: 'Lambo Poster', desc: 'Modern poster design featuring luxury automotive aesthetics.' },
                { src: liquid, title: 'Liquid Poster', desc: 'Abstract fluid art poster with dynamic visual effects.' }
              ].map((item, i) => (
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

        <section id="web-apks" className="mt-14 rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Web APKs</h2>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Progressive web app recently built.</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
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
              ].map((apk, i) => {
                const IconComponent = apk.icon
                return (
                  <motion.div key={i} whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="group relative overflow-hidden rounded-xl border border-neutral-200/70 bg-white/60 p-6 shadow-sm dark:border-neutral-800/70 dark:bg-neutral-900/50">
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
                            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-shamrock-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>Visit App</span>
                            <motion.span
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity }}
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

        <section id="java-desktop" className="mt-14 rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Java Desktop Applications</h2>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Object-oriented desktop applications built with Java.</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                {
                  title: 'ATM System',
                  description: 'A comprehensive ATM application showcasing OOP principles including encapsulation, inheritance, and abstraction. Implements transaction management, user authentication, and account operations.',
                  technologies: ['Java', 'OOP', 'CLI', 'File I/O'],
                  downloadLink: 'https://github.com/OyanibTech-iii/ATM---OOP/releases/tag/javaATM'
                },
                {
                  title: 'Movie Booking',
                  description: 'A movie booking desktop application featuring seat selection, ticket management, and reservation system. Built with Java showcasing database integration and user-friendly interface design.',
                  technologies: ['Java', 'OOP', 'CLI', 'Booking System'],
                  downloadLink: 'https://github.com/OyanibTech-iii/MovieBooking---Java/releases/tag/jarfile'
                }
              ].map((project, i) => (
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
                      onClick={() => openDownloadModal({ title: project.title, downloadLink: project.downloadLink })}
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

        <section id="posts" className="mt-10 grid grid-cols-1 gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <motion.article 
              key={post.id} 
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8 }}
              className="group card">
              <a href={`#/post/${post.id}`} className="block">
                <div className="relative overflow-hidden rounded-xl">
                  <motion.img
                    src={post.cover}
                    alt={post.title}
                    className="h-52 w-full object-cover transition-transform duration-500 ease-out"
                    whileHover={{ scale: 1.08 }}
                    loading="lazy"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" 
                  />
                </div>
                <div className="mt-5 space-y-3">
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {post.tags.map((t) => (
                      <motion.span key={t} variants={staggerItem} className="tag">{t}</motion.span>
                    ))}
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg font-semibold leading-snug transition-colors group-hover:text-shamrock-500">
                    {post.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="line-clamp-2 text-sm text-neutral-600 dark:text-neutral-300">
                    {post.excerpt}
                  </motion.p>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </section>

        <section id="about" className="relative isolate overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-8 md:grid-cols-3">
            <div className="md:col-span-1 grid grid-cols-2 gap-4">
              <img
                src={profileImg}
                alt="Profile portrait"
                className="h-40 w-full rounded-2xl object-cover shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800"
                loading="lazy"
              />
              <div className="h-40 w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800 flex items-center justify-center">
              </div>
              <div className="h-40 w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800 flex items-center justify-center">
              </div>
              <div className="h-40 w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800 flex items-center justify-center">
              </div>
              <div className="h-40 w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800 flex items-center justify-center">
              </div>
              <div className="h-40 w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800 flex items-center justify-center">
              </div>
              <div className="h-40 w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800 flex items-center justify-center">
              </div>
              <div className="h-40 w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800 flex items-center justify-center">
              </div>
              <div className="h-40 w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800 flex items-center justify-center">
              </div>
              <div className="h-40 w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-800 flex items-center justify-center">
              </div>
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
                { src: cisspCertImg, title: 'CISSP Certification', issuer: 'Cisco', year: '2025' },
                { src: myimageImg, title: 'CISS Cert', issuer: 'Cisco', year: '2024' },
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
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => modalCert ? closeCertModal() : closeDeviceModal()} />
            <div className="relative z-50 mx-4 w-full max-w-3xl rounded-xl bg-white p-6 shadow-xl dark:bg-neutral-900">
              <button
                onClick={() => modalCert ? closeCertModal() : closeDeviceModal()}
                className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
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
              {modalDevice && (
                <div>
                  <img src={modalDevice.src} alt={modalDevice.title} className="w-full rounded-md object-contain" />
                </div>
              )}
            </div>
          </div>
        )}

        {downloadModalOpen && downloadModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
              onClick={closeDownloadModal} 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative z-50 mx-4 w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-neutral-900">
              <button
                onClick={closeDownloadModal}
                className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
                aria-label="Close"
              >
                ✕
              </button>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Download {downloadModalProject.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Select a file format to download:</p>
              <div className="mt-6 space-y-3">
                <motion.a 
                  href={`${downloadModalProject.downloadLink}`}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-start gap-3 rounded-lg border border-shamrock-200/70 bg-shamrock-50 px-4 py-3 text-sm font-medium text-shamrock-700 hover:bg-shamrock-100 transition-colors dark:border-shamrock-800/70 dark:bg-shamrock-900/30 dark:text-shamrock-300 dark:hover:bg-shamrock-900/50"
                  onClick={closeDownloadModal}
                >
                  <Download className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold">Windows</span>
                    <span className="block text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">For Windows 10+</span>
                  </div>
                </motion.a>
                <motion.a 
                  href={`${downloadModalProject.downloadLink}`}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-start gap-3 rounded-lg border border-shamrock-200/70 bg-shamrock-50 px-4 py-3 text-sm font-medium text-shamrock-700 hover:bg-shamrock-100 transition-colors dark:border-shamrock-800/70 dark:bg-shamrock-900/30 dark:text-shamrock-300 dark:hover:bg-shamrock-900/50"
                  onClick={closeDownloadModal}
                >
                  <Monitor className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold">macOS</span>
                    <span className="block text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">For Mac computers</span>
                  </div>
                </motion.a>
                <motion.a 
                  href={`${downloadModalProject.downloadLink}`}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-start gap-3 rounded-lg border border-shamrock-200/70 bg-shamrock-50 px-4 py-3 text-sm font-medium text-shamrock-700 hover:bg-shamrock-100 transition-colors dark:border-shamrock-800/70 dark:bg-shamrock-900/30 dark:text-shamrock-300 dark:hover:bg-shamrock-900/50"
                  onClick={closeDownloadModal}
                >
                  <Terminal className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold">Linux</span>
                    <span className="block text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">For Linux systems</span>
                  </div>
                </motion.a>
              </div>
              <p className="mt-6 text-xs text-neutral-500 dark:text-neutral-400">All formats will open GitHub Releases where you can download the file manually.</p>
            </motion.div>
          </div>
        )}

        <section id="networking" className="mt-14 rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Core Networking Knowledge</h2>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Cisco Packet Tracer projects showcasing practical networking concepts and theory.</p>
              </div>
            </div>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Network Fundamentals</h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    { title: 'OSI Model', desc: '7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application' },
                    { title: 'TCP/IP Model', desc: '4 layers: Link, Internet, Transport, Application - modern network architecture' },
                    { title: 'TCP vs UDP', desc: 'TCP: reliable, ordered, connection-based | UDP: fast, connectionless, unreliable' },
                    { title: 'LAN vs WAN', desc: 'LAN: local networks (home/office) | WAN: wide area networks (internet)' },
                    { title: 'Client-Server', desc: 'Centralized model where clients request services from servers' },
                    { title: 'Peer-to-Peer', desc: 'Distributed model where devices act as both clients and servers' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      variants={staggerItem}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-lg border border-neutral-200/70 bg-white/60 p-4 dark:border-neutral-800/70 dark:bg-neutral-900/50">
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="font-medium text-neutral-900 dark:text-white">{item.title}</motion.p>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{item.desc}</motion.p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Networking Devices & Equipment</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {[
                    { src: multilayerSwitch, title: 'Multilayer Switch', desc: 'Layer 2/3 switch for VLAN configuration, switching, and routing' },
                    { src: routerImg, title: 'Network Router', desc: 'Routes traffic between networks using routing protocols' }
                  ].map((device, i) => (
                    <figure key={i} className="group relative overflow-hidden rounded-xl border border-neutral-200/70 bg-white/60 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-neutral-800/70 dark:bg-neutral-900/50">
                      <img src={device.src} alt={device.title} className="h-40 w-full object-cover rounded-md" loading="lazy" />
                      <figcaption className="mt-3">
                        <div className="flex items-baseline justify-between">
                          <div>
                            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{device.title}</p>
                            <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{device.desc}</p>
                          </div>
                          <button
                            onClick={() => openDeviceModal(device)}
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

              <div>
                <h3 className="text-lg font-semibold mb-4"> IP Addressing & Subnetting</h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    { title: 'IPv4 Structure', desc: '32-bit address: 4 octets (0-255) e.g., 192.168.1.1' },
                    { title: 'Public vs Private IPs', desc: 'Public: routable on internet | Private: 10.x.x.x, 172.16-31.x.x, 192.168.x.x' },
                    { title: 'CIDR Notation', desc: 'Classless Inter-Domain Routing: /24 = 255.255.255.0 subnet mask' },
                    { title: 'Subnetting', desc: '/24 = 256 IPs, /26 = 64 IPs, /28 = 16 IPs - dividing networks efficiently' }
                  ].map((item, i) => (
                    <div key={i} className="rounded-lg border border-neutral-200/70 bg-white/60 p-4 dark:border-neutral-800/70 dark:bg-neutral-900/50">
                      <p className="font-medium text-neutral-900 dark:text-white">{item.title}</p>
                      <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4"> Key Protocols</h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    { title: 'HTTP/HTTPS', desc: 'Web protocol | HTTPS adds encryption for secure communication' },
                    { title: 'FTP', desc: 'File Transfer Protocol - transferring files between systems' },
                    { title: 'DNS', desc: 'Domain Name System - translates domain names to IP addresses' },
                    { title: 'DHCP', desc: 'Automatic IP assignment to devices on a network' },
                    { title: 'ARP', desc: 'Address Resolution Protocol - maps IP addresses to MAC addresses' },
                    { title: 'ICMP (Ping)', desc: 'Internet Control Message Protocol - tests connectivity between devices' }
                  ].map((item, i) => (
                    <div key={i} className="rounded-lg border border-neutral-200/70 bg-white/60 p-4 dark:border-neutral-800/70 dark:bg-neutral-900/50">
                      <p className="font-medium text-neutral-900 dark:text-white">{item.title}</p>
                      <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className=" text-lg font-semibold mb-4">Tools & Technologies</h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { tool: 'Cisco Packet Tracer', desc: 'Network simulation - core tool for all projects' },
                    { tool: 'Cisco CLI', desc: 'Command-line configuration of routers and switches' },
                    { tool: 'Wireshark', desc: 'Packet analysis and network protocol inspection' },
                    { tool: 'Ping / Ipconfig', desc: 'Basic troubleshooting utilities' },
                    { tool: 'GNS3', desc: 'Advanced network emulation (alternative to Packet Tracer)' },
                    { tool: 'React & Git', desc: 'Portfolio and version control' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      variants={staggerItem}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-lg border border-neutral-200/70 bg-white/60 p-4 dark:border-neutral-800/70 dark:bg-neutral-900/50">
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="font-medium text-neutral-900 dark:text-white">{item.tool}</motion.p>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{item.desc}</motion.p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-14 rounded-3xl border border-neutral-200/80 bg-gradient-to-br from-white/80 to-shamrock-50/40 p-8 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-gradient-to-br dark:from-neutral-900/50 dark:to-neutral-900/30 sm:p-12">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left Side - Info */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Let's Chat</h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                Have a project in mind or just want to say hi? I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.
              </p>
              
              {/* Quick Contact Links */}
              <div className="mt-8 space-y-4">
                <div className="group flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-shamrock-100/50 text-shamrock-600 transition-all group-hover:bg-shamrock-200/70 dark:bg-shamrock-900/30 dark:text-shamrock-400 dark:group-hover:bg-shamrock-900/60">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Email</p>
                    <a href="mailto:pacificooyanib@gmail.com" className="text-sm text-neutral-900 transition-colors hover:text-shamrock-600 dark:text-neutral-100 dark:hover:text-shamrock-400">
                      pacificooyanib@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-shamrock-100/50 text-shamrock-600 transition-all group-hover:bg-shamrock-200/70 dark:bg-shamrock-900/30 dark:text-shamrock-400 dark:group-hover:bg-shamrock-900/60">
                    <Facebook className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Facebook</p>
                    <a href="https://www.facebook.com/thierd.dhee.morshed/" target="_blank" rel="noreferrer" className="text-sm text-neutral-900 transition-colors hover:text-shamrock-600 dark:text-neutral-100 dark:hover:text-shamrock-400">
                      Pacifico M. Oyanib III
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-shamrock-100/50 text-shamrock-600 transition-all group-hover:bg-shamrock-200/70 dark:bg-shamrock-900/30 dark:text-shamrock-400 dark:group-hover:bg-shamrock-900/60">
                    <GitHub className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">GitHub</p>
                    <a href="https://github.com/oyanibTech-iii" target="_blank" rel="noreferrer" className="text-sm text-neutral-900 transition-colors hover:text-shamrock-600 dark:text-neutral-100 dark:hover:text-shamrock-400">
                      oyanibTech-iii
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Chat Form */}
            <form
              className="space-y-4 rounded-2xl border border-neutral-200/50 bg-white/50 p-6 dark:border-neutral-800/50 dark:bg-neutral-800/30 md:p-8"
              onSubmit={handleFormSubmit}
            >
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <User className="h-4 w-4 text-shamrock-600 dark:text-shamrock-400" />
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-200">Your Name</label>
                </div>
                <motion.input
                  className={`w-full rounded-xl border ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-neutral-300/60 focus:ring-shamrock-200'} bg-white/80 px-4 py-3 text-sm shadow-sm outline-none transition-all placeholder:text-neutral-400 focus:border-shamrock-300 focus:ring-2 dark:border-neutral-700/60 dark:bg-neutral-900/40 dark:placeholder:text-neutral-500 dark:focus:border-shamrock-400 dark:focus:ring-shamrock-500/30`}
                  type="text"
                  name="name"
                  placeholder="What's your name?"
                  value={formData.name}
                  onChange={handleFormChange}
                  disabled={formStatus === 'loading'}
                  whileFocus={{ scale: 1.02 }}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="mt-1 text-xs text-red-500"
                    >
                      ✕ {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="h-4 w-4 text-shamrock-600 dark:text-shamrock-400" />
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-200">Your Email</label>
                </div>
                <motion.input
                  className={`w-full rounded-xl border ${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-neutral-300/60 focus:ring-shamrock-200'} bg-white/80 px-4 py-3 text-sm shadow-sm outline-none transition-all placeholder:text-neutral-400 focus:border-shamrock-300 focus:ring-2 dark:border-neutral-700/60 dark:bg-neutral-900/40 dark:placeholder:text-neutral-500 dark:focus:border-shamrock-400 dark:focus:ring-shamrock-500/30`}
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleFormChange}
                  disabled={formStatus === 'loading'}
                  whileFocus={{ scale: 1.02 }}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="mt-1 text-xs text-red-500"
                    >
                      ✕ {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="h-4 w-4 text-shamrock-600 dark:text-shamrock-400" />
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-200">Your Message</label>
                </div>
                <motion.textarea
                  className={`w-full rounded-xl border ${errors.message ? 'border-red-400 focus:ring-red-200' : 'border-neutral-300/60 focus:ring-shamrock-200'} bg-white/80 px-4 py-3 text-sm shadow-sm outline-none transition-all placeholder:text-neutral-400 focus:border-shamrock-300 focus:ring-2 dark:border-neutral-700/60 dark:bg-neutral-900/40 dark:placeholder:text-neutral-500 dark:focus:border-shamrock-400 dark:focus:ring-shamrock-500/30`}
                  name="message"
                  rows={4}
                  placeholder="Tell me a bit about your project..."
                  value={formData.message}
                  onChange={handleFormChange}
                  disabled={formStatus === 'loading'}
                  whileFocus={{ scale: 1.02 }}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="mt-1 text-xs text-red-500"
                    >
                      ✕ {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Status Message */}
              <AnimatePresence>
                {formMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className={`rounded-lg p-3 text-sm font-medium flex items-center gap-2 ${
                      formStatus === 'success'
                        ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                    }`}
                  >
                    {formStatus === 'success' ? (
                      <Check className="h-4 w-4 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    )}
                    {formMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <motion.button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  whileHover={{ scale: formStatus === 'loading' ? 1 : 1.08, boxShadow: "0 10px 25px rgba(41, 151, 110, 0.4)" }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full btn-glow inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed py-3"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Loader className="h-5 w-5" />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      >
                        <Send className="h-5 w-5" />
                      </motion.div>
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>
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
          <div>
              <p className="mt-2 max-w-prose">I’m a frontend engineer and designer who enjoys making fast, friendly interfaces.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <a className="tag hover:border-shamrock-300 hover:text-shamrock-600" href="mailto:pacificooyanib@gmail.com">pacificooyanib@gmail.com</a>
                <a className="tag hover:border-shamrock-300 hover:text-shamrock-600 inline-flex items-center gap-2" href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook className="h-4 w-4" />Facebook: Pacifico M. Oyanib III</a>
                <a className="tag hover:border-shamrock-300 hover:text-shamrock-600 inline-flex items-center gap-2" href="https://github.com/oyanibTech-iii" target="_blank" rel="noreferrer"><GitHub className="h-4 w-4" />GitHub: oyanibTech-iii</a>
          </div>
          </div>
          <p className="mt-8">© {new Date().getFullYear()} Pacifico M. Oyanib III. All rights reserved.</p>
        </div>
      </footer>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20, x: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-6 right-6 rounded-lg p-4 shadow-lg flex items-center gap-2 max-w-sm z-50 ${
              toast.type === 'success'
                ? 'bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800'
                : 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800'
            }`}
          >
            {toast.type === 'success' ? (
              <Check className="h-5 w-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
            )}
            <span className="text-sm font-medium">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
