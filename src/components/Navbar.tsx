import { useState } from 'react';
import { navLinks } from '@/data/content';
import { useScrolled } from '@/hooks/useReveal';
import { Icon } from './Icon';

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-forest-950/85 backdrop-blur-md border-b border-forest-700/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-ivory-50"
          aria-label="ABU TRAILS home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory-50/30">
            <Icon name="Compass" className="h-5 w-5" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight">
            ABU <span className="text-ivory-300">TRAILS</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium tracking-wide text-ivory-100/90 transition-colors hover:text-ivory-50"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-ivory-300 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ivory-50 px-5 py-2.5 text-sm font-semibold text-forest-900 transition-all duration-300 hover:bg-ivory-300 hover:shadow-lg"
          >
            Book a Trek
            <Icon name="ArrowUpRight" className="h-4 w-4" />
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-50/30 text-ivory-50 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon name={open ? 'X' : 'Menu'} className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden md:hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-5 mt-3 space-y-1 rounded-2xl bg-forest-950/95 p-4 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-ivory-100 transition-colors hover:bg-forest-800 hover:text-ivory-50"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-1">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-xl bg-ivory-50 px-4 py-3 text-center text-base font-semibold text-forest-900"
            >
              Book a Trek
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
