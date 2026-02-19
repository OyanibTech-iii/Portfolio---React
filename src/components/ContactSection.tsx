import { motion, AnimatePresence } from 'framer-motion'
import { User, Mail, MessageCircle, Check, AlertCircle, Loader, Send, Facebook, GitHub } from 'react-feather'

interface ContactSectionProps {
  formData: { name: string; email: string; message: string }
  formStatus: 'idle' | 'loading' | 'success' | 'error'
  formMessage: string
  errors: Record<string, string>
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function ContactSection({
  formData,
  formStatus,
  formMessage,
  errors,
  onFormChange,
  onFormSubmit
}: ContactSectionProps) {
  return (
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
          onSubmit={onFormSubmit}
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
              onChange={onFormChange}
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
              onChange={onFormChange}
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
              onChange={onFormChange}
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
  )
}