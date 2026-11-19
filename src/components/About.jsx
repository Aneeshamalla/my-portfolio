import { Section } from './ui.jsx'
import { about } from '../data.js'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="reveal grid max-w-[62ch] gap-4">
        {about.map((text, i) => (
          <p key={i} className={`text-lg ${i === 0 ? 'text-text' : 'text-muted'}`}>
            {text}
          </p>
        ))}
      </div>
    </Section>
  )
}
