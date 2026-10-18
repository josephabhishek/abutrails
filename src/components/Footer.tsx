import { navLinks } from '@/data/content';
import { Icon } from './Icon';

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-ivory-100/80">
      <div className="mx-auto max-w-8xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5 text-ivory-50">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory-50/30">
                <Icon name="Compass" className="h-5 w-5" />
              </span>
              <span className="font-serif text-xl font-semibold tracking-tight">
                ABU <span className="text-ivory-300">TRAILS</span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-ivory-100/60">
              Guided treks and outdoor adventures across the Aravalli hills of
              Mount Abu, Rajasthan. Beyond the hill station, into the wild.
            </p>
            <div className="mt-6 flex gap-3">
              {['Instagram', 'Facebook', 'MessageCircle'].map((s) => (
                <a
                  key={s}
                  href="#contact"
                  aria-label={s}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-50/15 text-ivory-100/70 transition-all duration-300 hover:border-ivory-300/50 hover:bg-forest-900 hover:text-ivory-50"
                >
                  <Icon name={s} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:justify-self-center">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-ivory-300">
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-ivory-100/70 transition-colors hover:text-ivory-50"
                  >
                    <Icon
                      name="ArrowRight"
                      className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-ivory-300">
              Get in touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Icon name="Phone" className="h-4 w-4 text-ivory-300" />
                +91 90000 00000
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" className="h-4 w-4 text-ivory-300" />
                hello@abutrails.in
              </li>
              <li className="flex items-center gap-3">
                <Icon name="MapPin" className="h-4 w-4 text-ivory-300" />
                Mount Abu, Rajasthan 307501
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory-50/10 pt-8 text-xs text-ivory-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} ABU TRAILS. Demo website — sample content.</p>
          <p className="flex items-center gap-1.5">
            Crafted with care in the Aravalli
            <Icon name="Leaf" className="h-3.5 w-3.5 text-forest-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
