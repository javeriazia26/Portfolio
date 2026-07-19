import { interests, education } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section-shell py-24 md:py-32">
      <div data-reveal className="reveal">
        <span className="eyebrow">About Me</span>
        <h2 className="section-heading">Focused on secure, scalable backend systems.</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
        <div data-reveal data-reveal-delay="80" className="reveal lg:col-span-3">
          <p className="text-ink-300 leading-relaxed text-[15px] sm:text-base">
            I am pursuing a BS in Computer Science at Federal Urdu University of Arts, Science
            and Technology with a CGPA of 3.67/4.00. I enjoy solving real-world problems through
            software while focusing on secure and scalable application development. I am
            continuously improving my skills by building projects rather than only following
            tutorials.
          </p>

          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400 mt-10 mb-4">
            Primary interests
          </h3>
          <div className="flex flex-wrap gap-3">
            {interests.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-ink-700 bg-ink-900/50 text-ink-200 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div data-reveal data-reveal-delay="160" className="reveal lg:col-span-2">
          <div className="card p-6 sm:p-7">
            <div className="w-9 h-9 rounded-md bg-signal/10 border border-signal/30 grid place-items-center font-mono text-signal text-xs mb-5">
              ★
            </div>
            <h4 className="font-display text-lg text-ink-100 leading-snug">
              {education.school}
            </h4>
            <p className="mt-2 text-sm text-ink-300">{education.degree}</p>
            <p className="mt-1 font-mono text-xs text-signal">{education.gpa}</p>

            <div className="mt-6 pt-6 border-t border-ink-700">
              <h5 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400 mb-3">
                Relevant coursework
              </h5>
              <ul className="space-y-2">
                {education.coursework.map((course) => (
                  <li key={course} className="flex items-start gap-2 text-sm text-ink-300">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-signal shrink-0" />
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
