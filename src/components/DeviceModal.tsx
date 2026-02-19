interface DeviceModalProps {
  device: { src: string; title: string; desc: string } | null
  onClose: () => void
}

export default function DeviceModal({ device, onClose }: DeviceModalProps) {
  if (!device) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-50 mx-4 w-full max-w-3xl rounded-xl bg-white p-6 shadow-xl dark:bg-neutral-900">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
          aria-label="Close"
        >
          ✕
        </button>
        <div>
          <img src={device.src} alt={device.title} className="w-full rounded-md object-contain" />
        </div>
      </div>
    </div>
  )
}