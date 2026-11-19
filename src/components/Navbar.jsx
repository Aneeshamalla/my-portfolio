import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { iconBtn } from './ui.jsx'
import { navItems } from '../data.js'

const root = document.documentElement
const systemDark = window.matchMedia('(prefers-color-scheme: dark)')

// Saved choice wins; otherwise follow the system
const currentTheme = () => root.getAttribute('data-theme') || (systemDark.matches ? 'dark' : 'light')

export default function Navbar() {
  const [theme, setTheme] = useState(currentTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState(null)

  /* ---------- Theme ---------- */
  useEffect(() => {
    const sync = () => setTheme(currentTheme())
    systemDark.addEventListener('change', sync)
    return () => systemDark.removeEventListener('change', sync)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    root.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {}
    setTheme(next)
  }

  /* ---------- Mobile menu: close on Escape or when the screen gets wide ---------- */
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    const wide = window.matchMedia('(min-width: 861px)')
    const onWide = (mq) => mq.matches && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    wide.addEventListener('change', onWide)
    return () => {
      document.removeEventListener('keydown', onKey)
      wide.removeEventListener('change', onWide)
    }
  }, [])

  /* ---------- Border once the page scrolls ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ---------- Highlight the section in view ---------- */
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    document.querySelectorAll('main section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 h-(--nav-h) border-b bg-[color-mix(in_srgb,var(--color-bg)_80%,transparent)] backdrop-blur-[14px] backdrop-saturate-[1.6] transition-colors duration-180 ${
        scrolled ? 'border-border' : 'border-transparent'
      }`}
    >
      <div className="container-page flex h-full items-center justify-between gap-4">
        <a href="#home" className="group inline-flex" aria-label="Anisha Malla, back to top">
          <span
            className="inline-grid size-10.5 place-items-center rounded-md bg-text font-mono text-[0.95rem] font-bold tracking-[-0.06em] text-bg transition-[background-color,transform] duration-180 ease-soft group-hover:-rotate-6 group-hover:bg-accent"
            aria-hidden="true"
          >
            &lt;/&gt;
          </span>
        </a>

        <nav
          id="nav-menu"
          aria-label="Primary"
          className={`max-[860px]:fixed max-[860px]:inset-x-0 max-[860px]:top-(--nav-h) max-[860px]:border-b max-[860px]:border-border max-[860px]:bg-bg max-[860px]:px-(--gutter) max-[860px]:pt-3 max-[860px]:pb-6 max-[860px]:transition-[opacity,transform,visibility] max-[860px]:duration-180 ${
            menuOpen ? '' : 'max-[860px]:invisible max-[860px]:-translate-y-2 max-[860px]:opacity-0'
          }`}
          onClick={(e) => e.target.closest('a') && setMenuOpen(false)}
        >
          <ul className="flex items-center gap-1 max-[860px]:flex-col max-[860px]:items-stretch max-[860px]:gap-0 max-[860px]:[&>li:last-child>a]:border-b-0">
            {navItems.map(({ id, label }) => {
              const isActive = active === id
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative inline-block px-3 py-2 text-sm font-medium transition-colors duration-180 hover:text-text after:absolute after:right-3 after:bottom-0.5 after:left-3 after:h-[1.5px] after:origin-left after:bg-accent after:transition-transform after:duration-180 after:ease-soft max-[860px]:block max-[860px]:border-b max-[860px]:border-border max-[860px]:px-0 max-[860px]:py-3 max-[860px]:font-display max-[860px]:text-xl max-[860px]:after:hidden ${
                      isActive ? 'text-text after:scale-x-100 max-[860px]:text-accent' : 'text-muted after:scale-x-0'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className={`${iconBtn} inline-grid text-text`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={toggleTheme}
          >
            <Icon name={theme === 'dark' ? 'moon' : 'sun'} />
          </button>
          <button
            type="button"
            className={`${iconBtn} hidden text-text max-[860px]:inline-grid`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'x' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}
