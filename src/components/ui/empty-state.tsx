import { motion } from 'framer-motion'
import { ImageOff } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EmptyStateProps {
  title?: string
  description?: string
  className?: string
}

export function EmptyState({
  title = 'Nothing here yet',
  description = 'No items found in this category. Check back soon!',
  className,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'col-span-full flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 py-16 px-6 text-center',
        className
      )}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
        <ImageOff className="h-8 w-8 text-neutral-400 dark:text-neutral-500" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
    </motion.div>
  )
}