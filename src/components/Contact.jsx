import Icon from './Icon.jsx'
import { links } from '../data.js'

const listLink =
  'underline-grow inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted hover:text-text'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-y border-border bg-bg-alt py-(--section-y)">
      <div className="container-page">
        <h2
          id="contact-title"
          className="reveal font-serif text-[clamp(2rem,1.4rem+2.4vw,3rem)] font-normal tracking-normal text-accent italic"
        >
          Say hello
        </h2>
        <p className="reveal mt-3 max-w-[52ch] text-muted">
          Email is the easiest way to reach me. I'm happy to talk about roles, projects, or anything on this page.
        </p>
        <a
          href={`mailto:${links.email}`}
          className="reveal group mt-8 inline-flex items-center gap-[0.2em] bg-[linear-gradient(var(--color-accent),var(--color-accent))] bg-[length:0_0.06em] bg-left-bottom bg-no-repeat font-display text-[clamp(1.4rem,0.1rem+6vw,5rem)] leading-[1.05] font-bold tracking-[-0.04em] [overflow-wrap:anywhere] transition-[color,background-size] duration-600 ease-soft hover:bg-[length:100%_0.06em] hover:text-accent"
        >
          {links.email}
          <Icon
            name="arrow-up-right"
            className="!size-[0.7em] text-accent [stroke-width:2.25] transition-transform duration-180 ease-soft group-hover:translate-x-0.75 group-hover:-translate-y-0.75"
          />
        </a>
        <ul className="reveal mt-8 flex flex-wrap gap-x-8 gap-y-1 border-t border-border pt-4">
          <li>
            <a href={`tel:+977${links.phone}`} className={listLink}>
              <Icon name="phone" className="size-4 text-accent" />
              {links.phone}
            </a>
          </li>
          <li>
            <a href={links.linkedin} className={listLink} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" className="size-4 text-accent" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href={links.cv} className={listLink} download="Anisha_Malla_CV.pdf">
              <Icon name="download" className="size-4 text-accent" />
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
