import { galleryImages } from '@/data/content';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-sand py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-forest-600">
              Gallery
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-forest-950 sm:text-5xl">
              Moments from the
              <span className="block italic text-forest-600">Aravalli.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-forest-800/80">
            Trekkers, ridges, and morning light — a glimpse of what waits on
            the trail.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <figure
              key={i}
              className={`reveal group relative overflow-hidden rounded-2xl ${
                img.span ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-sm text-ivory-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
