import { trails, type Trail } from '@/data/content';
import { Icon } from './Icon';

const difficultyColor: Record<Trail['difficulty'], string> = {
  Easy: 'text-forest-700 bg-forest-100 border-forest-300',
  Moderate: 'text-earth-700 bg-earth-100 border-earth-300',
  Challenging: 'text-red-700 bg-red-100 border-red-300',
};

const stats = [
  { icon: 'Ruler', label: 'Distance' },
  { icon: 'Clock', label: 'Duration' },
  { icon: 'TrendingUp', label: 'Elevation' },
];

function trailStat(trail: Trail, label: string) {
  if (label === 'Distance') return trail.distance;
  if (label === 'Duration') return trail.duration;
  return trail.elevation;
}

export default function FeaturedTrails() {
  return (
    <section id="trails" className="bg-sand py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-forest-600">
              Featured Trails
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-forest-950 sm:text-5xl">
              Four ways to lose yourself
              <span className="block italic text-forest-600">in the Aravalli.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-forest-800/80">
            Each route is guided by local trail experts who know the ridges,
            wildlife, and hidden ledges of Mount Abu.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trails.map((trail, i) => (
            <article
              key={trail.id}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl bg-forest-950 shadow-lg ring-1 ring-forest-900/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={trail.image}
                  alt={trail.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
                <span
                  className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm ${difficultyColor[trail.difficulty]}`}
                >
                  {trail.difficulty}
                </span>
                <div className="absolute inset-x-4 bottom-4">
                  <p className="mb-1 text-xs uppercase tracking-[0.18em] text-ivory-300/90">
                    {trail.tagline}
                  </p>
                  <h3 className="font-serif text-2xl font-semibold text-ivory-50">
                    {trail.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm leading-relaxed text-ivory-100/75">
                  {trail.description}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-ivory-50/10 pt-4">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="mb-1 flex items-center gap-1 text-ivory-100/50">
                        <Icon name={s.icon} className="h-3.5 w-3.5" />
                        <span className="text-[10px] uppercase tracking-wider">
                          {s.label}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-ivory-50">
                        {trailStat(trail, s.label)}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="group/btn mt-5 inline-flex items-center justify-between rounded-full border border-ivory-50/20 px-4 py-2.5 text-sm font-semibold text-ivory-50 transition-all duration-300 hover:bg-ivory-50 hover:text-forest-900"
                  aria-label={`Explore ${trail.name}`}
                >
                  Explore
                  <Icon
                    name="ArrowUpRight"
                    className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
