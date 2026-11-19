import { Section } from './ui.jsx'
import { education as edu } from '../data.js'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="reveal">
        <p className="font-serif text-lg leading-[1.3] text-accent italic">
          <time dateTime={edu.from}>{edu.from}</time> to <time dateTime={edu.to}>{edu.to}</time>
        </p>
        <h3 className="mt-2 text-xl">{edu.degree}</h3>
        <p className="mt-1 font-medium">{edu.uni}</p>
        <p className="text-muted">{edu.college}</p>
      </div>
    </Section>
  )
}
