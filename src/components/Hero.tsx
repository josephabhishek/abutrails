import { Icon } from './Icon';

const stats = [
  { value: '24', label: 'Marked trails' },
  { value: '1,722m', label: 'Highest peak' },
  { value: '9+', label: 'Years guiding' },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/38945174/pexels-photo-38945174.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000"
          alt="The Aravalli hills of Mount Abu, Rajasthan"
          className="h-full w-full object-cover animate-slow-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-950/45 to-forest-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/55 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-8xl flex-col justify-center px-5 pt-28 pb-16 sm:px-8">
        <div className="max-w-3xl">
          <p className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-ivory-50/25 bg-forest-950/30 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-ivory-100/90 backdrop-blur-sm">
            <Icon name="MapPin" className="h-3.5 w-3.5" />
            Mount Abu · Rajasthan · India
          </p>

          <h1 className="animate-fade-up font-serif text-[2.75rem] font-semibold leading-[1.05] tracking-tightest text-ivory-50 text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Beyond the Hill Station.
            <span className="block italic text-ivory-300">Into the Wild.</span>
          </h1>

          <p
            className="animate-fade-up mt-7 max-w-xl text-base leading-relaxed text-ivory-100/85 sm:text-lg"
            style={{ animationDelay: '0.12s' }}
          >
            Guided treks and adventures across the ancient Aravalli hills —
            hidden viewpoints, granite ridges, and forest trails far from the
            crowds of Mount Abu.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
            style={{ animationDelay: '0.24s' }}
          >
            <a
              href="#trails"
              className="group inline-flex items-center gap-2 rounded-full bg-ivory-50 px-7 py-3.5 text-sm font-semibold text-forest-900 shadow-xl transition-all duration-300 hover:bg-ivory-300 hover:shadow-2xl"
            >
              Explore Trails
              <Icon
                name="ArrowRight"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-ivory-50/40 bg-forest-950/20 px-7 py-3.5 text-sm font-semibold text-ivory-50 backdrop-blur-sm transition-all duration-300 hover:border-ivory-50 hover:bg-forest-950/40"
            >
              Book a Trek
              <Icon
                name="ArrowUpRight"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Stats */}
          <div
            className="animate-fade-up mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-ivory-50/15 pt-8"
            style={{ animationDelay: '0.36s' }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl font-semibold text-ivory-50 sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-ivory-100/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-fade-in">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory-50/40 pt-2">
          <span className="h-2 w-1 rounded-full bg-ivory-50/80 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
