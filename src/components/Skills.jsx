import { Chips, Section } from './ui.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" alt>
      <dl className="grid max-w-[820px] grid-cols-2 gap-x-12 gap-y-8 max-[560px]:grid-cols-1">
        {skills.map((group, i) => {
          // Backend spans the full row and gets accent chips
          const main = i === 0
          return (
            <div
              key={group.name}
              className={`reveal pt-4 ${main ? 'col-span-full border-t-2 border-accent' : 'border-t border-border-strong'}`}
            >
              <dt className="mb-3 font-display text-lg font-semibold">{group.name}</dt>
              <dd>
                <Chips
                  items={group.items}
                  itemClass={
                    main ? '!border-transparent bg-accent-soft px-4 py-1.5 text-base text-accent' : 'bg-surface text-sm'
                  }
                />
              </dd>
            </div>
          )
        })}
      </dl>
    </Section>
  )
}
