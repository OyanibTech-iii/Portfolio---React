import { motion } from 'framer-motion'
import { Download, Monitor, Terminal } from 'react-feather'

interface DownloadModalProps {
  project: { title: string; downloadLink: string } | null
  onClose: () => void
}

export default function DownloadModal({ project, onClose }: DownloadModalProps) {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="relative z-50 mx-4 w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-neutral-900">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
          aria-label="Close"
        >
          ✕
        </button>
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Download {project.title}</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Select a file format to download:</p>
        <div className="mt-6 space-y-3">
          <motion.a
            href={`${project.downloadLink}`}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-start gap-3 rounded-lg border border-shamrock-200/70 bg-shamrock-50 px-4 py-3 text-sm font-medium text-shamrock-700 hover:bg-shamrock-100 transition-colors dark:border-shamrock-800/70 dark:bg-shamrock-900/30 dark:text-shamrock-300 dark:hover:bg-shamrock-900/50"
            onClick={onClose}
          >
            <Download className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <div>
              <span className="block font-semibold">Windows</span>
              <span className="block text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">For Windows 10+</span>
            </div>
          </motion.a>
          <motion.a
            href={`${project.downloadLink}`}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-start gap-3 rounded-lg border border-shamrock-200/70 bg-shamrock-50 px-4 py-3 text-sm font-medium text-shamrock-700 hover:bg-shamrock-100 transition-colors dark:border-shamrock-800/70 dark:bg-shamrock-900/30 dark:text-shamrock-300 dark:hover:bg-shamrock-900/50"
            onClick={onClose}
          >
            <Monitor className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <div>
              <span className="block font-semibold">macOS</span>
              <span className="block text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">For Mac computers</span>
            </div>
          </motion.a>
          <motion.a
            href={`${project.downloadLink}`}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-start gap-3 rounded-lg border border-shamrock-200/70 bg-shamrock-50 px-4 py-3 text-sm font-medium text-shamrock-700 hover:bg-shamrock-100 transition-colors dark:border-shamrock-800/70 dark:bg-shamrock-900/30 dark:text-shamrock-300 dark:hover:bg-shamrock-900/50"
            onClick={onClose}
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
  )
}