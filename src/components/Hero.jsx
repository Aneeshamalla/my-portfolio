import Icon from './Icon.jsx'
import { btn, btnIcon, SocialLinks } from './ui.jsx'
import { links } from '../data.js'
import profilePhoto from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-[clamp(2rem,1rem+3vw,3.5rem)] pb-(--curve-band) [--curve-band:clamp(4.5rem,2.5rem+6vw,8rem)]"
    >
      {/* Faint curve in the gap under the content, rising from bottom left to the right */}
      <svg
        className="hero-curve pointer-events-none absolute bottom-0 left-0 h-(--curve-band) w-full overflow-visible"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          pathLength="1"
          d="M-10 150C300 165 520 70 820 85s440-30 630-80"
          className="fill-none stroke-accent stroke-2 opacity-30 [stroke-linecap:round] [vector-effect:non-scaling-stroke]"
        />
      </svg>

      <div className="container-page relative grid grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] items-center gap-[clamp(2rem,1rem+4vw,4.5rem)] max-[860px]:grid-cols-1">
        <div>
          <p className="reveal inline-flex items-center gap-2 text-sm font-medium text-muted">
            <span className="size-2 rounded-full bg-[#2f9e5b] shadow-[0_0_0_4px_rgba(47,158,91,0.15)]" aria-hidden="true" />
            Open to full stack and backend roles
          </p>
          <h1 id="hero-title" className="reveal mt-6 text-hero leading-[0.95] font-extrabold tracking-[-0.045em]">
            Anisha Malla
          </h1>
          <p className="reveal mt-4 font-display text-2xl font-medium tracking-[-0.02em] text-muted">
            Full Stack <span className="text-text">Developer</span>
          </p>

          <p className="reveal mt-6 max-w-[44ch] text-lg text-muted">
            I build web apps end to end with React, Next.js, FastAPI and Node.js, with a particular interest in
            the backend: APIs, databases and the logic behind them.
          </p>

          <div className="reveal mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className={`${btn.primary} max-[480px]:flex-auto`}>
              View Projects
              <Icon name="arrow-right" className={`${btnIcon} group-hover:translate-x-0.75`} />
            </a>
            <a href={links.cv} className={`${btn.ghost} max-[480px]:flex-auto`} download="Anisha_Malla_CV.pdf">
              <Icon name="download" className={btnIcon} />
              Download CV
            </a>
            <SocialLinks className="ml-2 max-[480px]:ml-0" linkClass="text-muted" />
          </div>
        </div>

        {/* Plain photo: wipes up into view on load, slow zoom on hover */}
        <div className="group w-[min(100%,380px)] justify-self-end max-[860px]:row-start-1 max-[860px]:w-[min(70%,280px)] max-[860px]:justify-self-start">
          <div className="hero-frame overflow-hidden rounded-lg bg-bg-alt">
            <img
              className="hero-photo block aspect-4/5 h-auto w-full object-cover transition-transform duration-1200 ease-soft group-hover:scale-[1.04]"
              src={profilePhoto}
              alt="Portrait of Anisha Malla"
              width="720"
              height="900"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
