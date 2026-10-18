import { useState, type FormEvent } from 'react';
import { Icon } from './Icon';

const WHATSAPP_NUMBER = '919000000000';

const fieldClass =
  'w-full rounded-xl border border-forest-200 bg-white/70 px-4 py-3 text-sm text-forest-950 placeholder:text-forest-700/40 transition-all duration-300 focus:border-forest-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest-500/20';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-forest-900 py-16 text-ivory-50 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-forest-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: copy + details */}
          <div className="reveal">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-ivory-300">
              Plan Your Trek
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Let's shape your
              <span className="block italic text-ivory-300">next adventure.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory-100/75">
              Tell us what kind of trek you're after — sunrise ridge, family
              forest walk, or a full-day wilderness route. We'll get back
              within a day.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-ivory-50/15 bg-forest-950/40 p-4 transition-all duration-300 hover:border-green-400/50 hover:bg-forest-950"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/15 text-green-400">
                  <Icon name="MessageCircle" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ivory-50">
                    Chat on WhatsApp
                  </span>
                  <span className="block text-xs text-ivory-100/60">
                    Fastest response · +91 90000 00000
                  </span>
                </span>
                <Icon
                  name="ArrowUpRight"
                  className="ml-auto h-4 w-4 text-ivory-100/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-ivory-50/10 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ivory-50/10 text-ivory-300">
                  <Icon name="Mail" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ivory-50">
                    hello@abutrails.in
                  </span>
                  <span className="block text-xs text-ivory-100/60">
                    For group & corporate enquiries
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-ivory-50/10 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ivory-50/10 text-ivory-300">
                  <Icon name="MapPin" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ivory-50">
                    Mount Abu, Sirohi District
                  </span>
                  <span className="block text-xs text-ivory-100/60">
                    Rajasthan 307501, India
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="reveal rounded-3xl border border-ivory-50/10 bg-ivory-50/5 p-6 backdrop-blur-sm sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ivory-100/70">
                  Name
                </label>
                <input required type="text" placeholder="Your name" className={fieldClass} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ivory-100/70">
                  Email
                </label>
                <input required type="email" placeholder="you@email.com" className={fieldClass} />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ivory-100/70">
                Interested in
              </label>
              <select className={fieldClass} defaultValue="">
                <option value="" disabled>Select a trail or experience</option>
                <option>Golden Horn — Sunrise trek</option>
                <option>Table Rock — Ridge scramble</option>
                <option>Craig's Path — Forest walk</option>
                <option>Tiger Path — Wilderness trek</option>
                <option>Custom / not sure yet</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ivory-100/70">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Group size, dates, what you're hoping for…"
                className={`${fieldClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ivory-50 px-7 py-3.5 text-sm font-semibold text-forest-900 transition-all duration-300 hover:bg-ivory-300 hover:shadow-xl"
            >
              Send Enquiry
              <Icon
                name="ArrowRight"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <p
              className={`mt-4 overflow-hidden text-center text-sm text-green-300 transition-all duration-500 ${
                sent ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              Thanks! Your enquiry has been noted — we'll be in touch shortly.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
