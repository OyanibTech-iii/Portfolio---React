// No imports needed for this component

interface HeaderProps {
  // Add props if needed, e.g., for theme toggle
}

export default function Header({}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200/80 bg-white/70 backdrop-blur-md transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-950/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center">
          <div className="flex items-center justify-center rounded-full bg-shamrock-500 p-2">
            <img src="/logo.png" alt="Pacifico Logo" className="h-8 w-auto" />
            <span className="ml-2 text-sm font-medium text-white">Pacifico/Creates </span>
          </div>
        </a>
        <nav className="hidden gap-6 text-sm md:flex">
          <a className="text-neutral-600 transition-colors hover:text-shamrock-500 dark:text-neutral-300" href="#about">About</a>
          <a className="text-neutral-600 transition-colors hover:text-shamrock-500 dark:text-neutral-300" href="#graphics">Graphics</a>
          <a className="text-neutral-600 transition-colors hover:text-shamrock-500 dark:text-neutral-300" href="#java-desktop">Apps</a>
          <a className="text-neutral-600 transition-colors hover:text-shamrock-500 dark:text-neutral-300" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          {/* Theme toggle can be added here if needed */}
        </div>
      </div>
    </header>
  )
}