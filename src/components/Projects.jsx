import Icon from './Icon.jsx'
import { btn, Section, Tags } from './ui.jsx'
import { featuredProject as rag, projects } from '../data.js'

function RagCard() {
  return (
    <li
      className="reveal mb-6 grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] overflow-hidden rounded-lg border border-border bg-surface shadow-card max-[960px]:grid-cols-1"
      style={{ '--i': 0 }}
    >
      <div className="grid content-start gap-4 p-8 max-[520px]:p-6">
        <h3 className="text-2xl leading-[1.2]">{rag.title}</h3>
        <p className="text-muted">{rag.desc}</p>
        <ul className="grid gap-1 text-sm">
          {rag.bullets.map((b) => (
            <li
              key={b}
              className="relative pl-6 text-muted before:absolute before:top-[0.8em] before:left-0 before:h-[1.5px] before:w-2.5 before:bg-accent"
            >
              {b}
            </li>
          ))}
        </ul>
        <Tags items={rag.tags} />
        <a
          href={rag.github}
          className={`${btn.ghost} ${btn.small} justify-self-start`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" className="size-4.5" />
          View on GitHub
          <Icon name="arrow-up-right" className="size-4" />
        </a>
      </div>

      <div
        className="border-l border-border p-8 [background:radial-gradient(circle_at_85%_0%,var(--color-accent-soft),transparent_60%),var(--color-bg-alt)] max-[960px]:border-t max-[960px]:border-l-0 max-[520px]:p-6"
        role="img"
        aria-label="How it works: ingest documents, chunk, embed, store in Pinecone, query"
      >
        <p className="mb-4 font-serif text-lg text-muted italic">How it works</p>
        <ol className="grid gap-2">
          {rag.pipeline.map(({ step, note }, i) => {
            const last = i === rag.pipeline.length - 1
            return (
              <li
                key={step}
                className={`relative flex items-baseline justify-between gap-3 rounded-md border py-3 pr-4 pl-12 not-last:after:absolute not-last:after:-bottom-2.25 not-last:after:left-5 not-last:after:h-2 not-last:after:w-[1.5px] not-last:after:bg-border-strong ${
                  last ? 'border-accent bg-accent-soft' : 'border-border bg-surface'
                }`}
              >
                <span
                  className={`absolute left-4 font-serif text-lg leading-[1.3] italic ${last ? 'text-accent' : 'text-muted'}`}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <b className="font-display font-semibold">{step}</b>
                <small className="text-right text-xs text-muted">{note}</small>
              </li>
            )
          })}
        </ol>
      </div>
    </li>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ol className="grid">
        <RagCard />
        {projects.map((p, i) => (
          <li
            key={p.title}
            style={{ '--i': i + 1 }}
            className={`reveal -mx-4 grid grid-cols-[48px_minmax(0,0.9fr)_minmax(0,1.2fr)] gap-x-6 gap-y-3 rounded-md border-border px-4 py-8 transition-colors duration-180 hover:bg-surface [&:hover+li]:border-t-transparent max-[960px]:grid-cols-[40px_minmax(0,1fr)] max-[520px]:grid-cols-1 max-[520px]:py-6 ${
              i === 0 ? 'border-t-0' : 'border-t'
            }`}
          >
            <span className="font-serif text-xl leading-tight text-accent italic" aria-hidden="true">
              {String(i + 2).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-xl leading-[1.2]">{p.title}</h3>
              <p className="mt-1 font-serif text-lg text-muted italic">{p.kind}</p>
            </div>
            <div className="max-[960px]:col-start-2 max-[520px]:col-auto">
              <p className="text-muted">{p.desc}</p>
              <Tags items={p.tags} label="Highlights" className="mt-3" />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
