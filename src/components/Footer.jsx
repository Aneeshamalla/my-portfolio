import Icon from './Icon.jsx'
import { SocialLinks } from './ui.jsx'

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container-page flex flex-wrap items-center justify-between gap-4 max-[560px]:flex-col max-[560px]:text-center">
        <p className="text-sm text-muted">© {new Date().getFullYear()} Anisha Malla</p>
        <SocialLinks />
        <a
          href="#home"
          className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted transition-colors duration-180 hover:text-accent"
        >
          Back to top
          <Icon name="arrow-up" className="size-4 transition-transform duration-180 ease-soft group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  )
}
