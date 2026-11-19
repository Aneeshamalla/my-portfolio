import { Chips, Section } from './ui.jsx'
import { experience } from '../data.js'

export default function Experience() {
  const { role, org, start, end, work } = experience

  return (
    <Section id="experience" title="Experience" alt>
      <article className="reveal max-w-215 rounded-lg border border-border bg-surface p-8 max-[560px]:p-6">
        <header className="mb-8 flex flex-wrap items-start justify-between gap-x-6 gap-y-3 border-b border-border pb-6">
          <div>
            <h3 className="text-xl leading-[1.2]">{role}</h3>
            <p className="mt-1 font-medium text-muted">{org}</p>
          </div>
          <p className="rounded-full bg-bg-alt px-3 py-1 text-sm font-medium">
            <time dateTime={start.datetime}>{start.label}</time> to <time dateTime={end.datetime}>{end.label}</time>
          </p>
        </header>

        {/* The three sites as a small timeline */}
        <ul className="grid gap-8">
          {work.map((item) => (
            <li
              key={item.name}
              className="relative grid gap-1 pl-8 before:absolute before:top-1.5 before:left-0 before:size-2.5 before:rounded-full before:border-2 before:border-accent before:bg-surface not-last:after:absolute not-last:after:top-5.5 not-last:after:-bottom-6.5 not-last:after:left-1 not-last:after:w-0.5 not-last:after:bg-border"
            >
              <p className="text-sm leading-normal font-medium text-accent">{item.type}</p>
              <h4 className="text-lg leading-tight">{item.name}</h4>
              <p className="mt-1 max-w-[62ch] text-muted">{item.desc}</p>
              {item.stack.length > 0 && (
                <div className="mt-1">
                  <Chips items={item.stack} label="Tech stack" itemClass="bg-bg text-xs" />
                </div>
              )}
            </li>
          ))}
        </ul>
      </article>
    </Section>
  )
}
