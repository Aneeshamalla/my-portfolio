// Small building blocks shared across sections
import Icon from './Icon.jsx'
import { links } from '../data.js'

const btnBase =
  'group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-transparent px-6 font-body text-sm leading-none font-semibold transition-[background-color,border-color,color,transform] duration-180 ease-soft active:translate-y-px'

export const btn = {
  primary: `${btnBase} bg-accent text-on-accent hover:bg-accent-hover`,
  ghost: `${btnBase} border-border-strong text-text hover:border-accent hover:text-accent`,
  small: 'min-h-[42px] px-4',
}

// Icon inside a button: 18px and slides on hover
export const btnIcon = 'size-4.5 transition-transform duration-180 ease-soft'

// No display class here so callers can choose (e.g. hidden on desktop)
export const iconBtn =
  'size-11 cursor-pointer place-items-center rounded-full transition-colors duration-180 hover:bg-accent-soft hover:text-accent'

const socials = [
  { icon: 'github', href: links.github, label: 'GitHub (opens in new tab)', external: true },
  { icon: 'linkedin', href: links.linkedin, label: 'LinkedIn (opens in new tab)', external: true },
  { icon: 'mail', href: `mailto:${links.email}`, label: `Email ${links.email}` },
]

// GitHub / LinkedIn / Email icon buttons (Hero and Footer)
export function SocialLinks({ className = '', linkClass = '' }) {
  return (
    <ul className={`flex gap-1 ${className}`} aria-label="Social links">
      {socials.map(({ icon, href, label, external }) => (
        <li key={icon}>
          <a
            href={href}
            className={`${iconBtn} inline-grid ${linkClass}`}
            aria-label={label}
            {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
          >
            <Icon name={icon} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Section({ id, title, alt = false, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`py-(--section-y) ${alt ? 'border-y border-border bg-bg-alt' : ''}`}
    >
      <div className="container-page grid grid-cols-[var(--label-col)_minmax(0,1fr)] gap-16 max-[860px]:grid-cols-1 max-[860px]:gap-6">
        <h2
          id={`${id}-title`}
          className="reveal sticky top-[calc(var(--nav-h)+1.5rem)] self-start text-2xl max-[860px]:static"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}

// Pill tags (Experience stack, Skills)
export function Chips({ items, label, itemClass = 'bg-surface text-sm' }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full border border-border-strong px-3 py-0.75 font-medium transition-colors duration-180 hover:border-accent hover:text-accent ${itemClass}`}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

// Inline "A / B / C" tech list (Projects)
export function Tags({ items, label = 'Tech stack', className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-x-2 gap-y-1 ${className}`} aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className="text-xs font-semibold tracking-[0.02em] text-text not-last:after:ml-2 not-last:after:font-normal not-last:after:text-border-strong not-last:after:content-['/']"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
