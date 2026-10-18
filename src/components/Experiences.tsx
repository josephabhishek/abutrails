import { experiences } from '@/data/content';
import { Icon } from './Icon';

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="relative overflow-hidden bg-forest-950 py-16 text-ivory-50 sm:py-24 lg:py-32"
    >
      {/* subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-forest-400 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-earth-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-ivory-300">
            Experiences
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Not just treks —
            <span className="block italic text-ivory-300">a way to meet the hills.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory-100/75">
            Whether you want a heart-pounding ridge scramble or a quiet morning
            among the birds, there's an ABU TRAILS experience shaped for
            you.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className="reveal group relative overflow-hidden rounded-2xl border border-ivory-50/10 bg-forest-900/50 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ivory-300/40 hover:bg-forest-900"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-ivory-50/10 text-ivory-300 transition-all duration-500 group-hover:bg-ivory-300 group-hover:text-forest-950">
                <Icon name={exp.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-ivory-50">
                {exp.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory-100/70">
                {exp.description}
              </p>
              <div className="mt-6 h-px w-0 bg-ivory-300 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
