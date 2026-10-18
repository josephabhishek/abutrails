import { Icon } from './Icon';

const items = [
  'Guided sunrise treks',
  'Granite ridge climbs',
  'Family nature walks',
  'Hidden Aravalli viewpoints',
  'Small-group adventures',
  'Local ecology experts',
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="border-y border-forest-800/30 bg-forest-950 py-4 text-ivory-100/90">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-6 whitespace-nowrap pr-6">
          {loop.map((item, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="font-serif text-base italic tracking-wide sm:text-lg">
                {item}
              </span>
              <Icon name="Star" className="h-3.5 w-3.5 text-ivory-300" />
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-marquee items-center gap-6 whitespace-nowrap pr-6"
        >
          {loop.map((item, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="font-serif text-base italic tracking-wide sm:text-lg">
                {item}
              </span>
              <Icon name="Star" className="h-3.5 w-3.5 text-ivory-300" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
