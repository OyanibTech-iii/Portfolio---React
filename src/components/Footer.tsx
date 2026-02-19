import { Facebook, GitHub } from 'react-feather'

export default function Footer() {
  return (
    <footer id="about" className="mt-10 border-t border-neutral-200/80 py-10 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
      <div className="mx-auto max-w-6xl px-6">
        <div>
          <p className="mt-2 max-w-prose">I'm a frontend engineer and designer who enjoys making fast, friendly interfaces.</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <a className="tag hover:border-shamrock-300 hover:text-shamrock-600" href="mailto:pacificooyanib@gmail.com">pacificooyanib@gmail.com</a>
            <a className="tag hover:border-shamrock-300 hover:text-shamrock-600 inline-flex items-center gap-2" href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook className="h-4 w-4" />Facebook: Pacifico M. Oyanib III</a>
            <a className="tag hover:border-shamrock-300 hover:text-shamrock-600 inline-flex items-center gap-2" href="https://github.com/oyanibTech-iii" target="_blank" rel="noreferrer"><GitHub className="h-4 w-4" />GitHub: oyanibTech-iii</a>
          </div>
        </div>
        <p className="mt-8">© {new Date().getFullYear()} Pacifico M. Oyanib III. All rights reserved.</p>
      </div>
    </footer>
  )
}