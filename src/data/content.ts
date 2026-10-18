export type Trail = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  distance: string;
  duration: string;
  elevation: string;
  image: string;
};

export const trails: Trail[] = [
  {
    id: 'golden-horn',
    name: 'Golden Horn',
    tagline: 'Sunrise above the clouds',
    description:
      'A ridge climb to Mount Abu\u2019s highest vantage point, where first light spills gold across the Aravalli range.',
    difficulty: 'Moderate',
    distance: '6.4 km',
    duration: '4 hrs',
    elevation: '1,220 m',
    image:
      'https://images.pexels.com/photos/7056773/pexels-photo-7056773.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  },
  {
    id: 'table-rock',
    name: 'Table Rock',
    tagline: 'Cliff-edge panorama',
    description:
      'A scramble across weathered granite plateaus ending at a sweeping cliff ledge over the Nakki valley.',
    difficulty: 'Challenging',
    distance: '8.1 km',
    duration: '5 hrs',
    elevation: '1,180 m',
    image:
      'https://images.pexels.com/photos/7016009/pexels-photo-7016009.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  },
  {
    id: 'craigs-path',
    name: "Craig's Path",
    tagline: 'Through the ancient forest',
    description:
      'A winding trail through old-growth mango and bamboo groves, quiet with birdsong and dappled light.',
    difficulty: 'Easy',
    distance: '3.7 km',
    duration: '2.5 hrs',
    elevation: '980 m',
    image:
      'https://images.pexels.com/photos/36680157/pexels-photo-36680157.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  },
  {
    id: 'tiger-path',
    name: 'Tiger Path',
    tagline: 'Into the wild Aravalli',
    description:
      'A rugged backcountry route tracing old wildlife corridors \u2014 our most immersive wilderness trek.',
    difficulty: 'Challenging',
    distance: '10.2 km',
    duration: '6 hrs',
    elevation: '1,300 m',
    image:
      'https://images.pexels.com/photos/39645968/pexels-photo-39645968.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  },
];

export type Experience = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const experiences: Experience[] = [
  {
    id: 'forest-trekking',
    title: 'Forest Trekking',
    description:
      'Multi-hour guided walks through the dense subtropical forests that cloak the Aravalli slopes.',
    icon: 'Trees',
  },
  {
    id: 'rocky-adventures',
    title: 'Rocky Adventures',
    description:
      'Granite scrambles and boulder fields \u2014 Mount Abu\u2019s ancient rock formations up close.',
    icon: 'Mountain',
  },
  {
    id: 'scenic-viewpoints',
    title: 'Scenic Viewpoints',
    description:
      'Honeymoon Point, Sunset Rock, and hidden ledges with sweeping views over the plains.',
    icon: 'Binoculars',
  },
  {
    id: 'nature-walks',
    title: 'Nature Walks',
    description:
      'Gentle, family-friendly walks focused on birds, orchids, and the Aravalli\u2019s unique ecology.',
    icon: 'Leaf',
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  span?: boolean;
};

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/38945174/pexels-photo-38945174.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    alt: 'Dilwara Temples nestled in the lush Aravalli hills of Rajasthan',
    span: true,
  },
  {
    src: 'https://images.pexels.com/photos/11382675/pexels-photo-11382675.jpeg?auto=compress&cs=tinysrgb&h=700&w=800',
    alt: 'Hiker with a backpack on a forest trail in India',
  },
  {
    src: 'https://images.pexels.com/photos/3337153/pexels-photo-3337153.jpeg?auto=compress&cs=tinysrgb&h=700&w=800',
    alt: 'Misty forest trail with autumn colors',
  },
  {
    src: 'https://images.pexels.com/photos/37514531/pexels-photo-37514531.jpeg?auto=compress&cs=tinysrgb&h=700&w=800',
    alt: 'Lone hiker enjoying a sunrise view over mountainous terrain',
    span: true,
  },
  {
    src: 'https://images.pexels.com/photos/18923527/pexels-photo-18923527.jpeg?auto=compress&cs=tinysrgb&h=700&w=800',
    alt: 'Sunrise over a misty mountain landscape with fog in the valley',
  },
  {
    src: 'https://images.pexels.com/photos/24879647/pexels-photo-24879647.jpeg?auto=compress&cs=tinysrgb&h=700&w=800',
    alt: 'Rocky forest hiking trail',
  },
  {
    src: 'https://images.pexels.com/photos/10390192/pexels-photo-10390192.jpeg?auto=compress&cs=tinysrgb&h=700&w=800',
    alt: 'Nahargarh Fort set against the lush Aravalli hills',
  },
  {
    src: 'https://images.pexels.com/photos/9284130/pexels-photo-9284130.jpeg?auto=compress&cs=tinysrgb&h=700&w=800',
    alt: 'Lone hiker on a cliff overlooking a scenic landscape at sunrise',
  },
];

export const navLinks = [
  { label: 'Trails', href: '#trails' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];
