import { HeroSlide } from '../types';

export const MOCK_HERO_SLIDES: HeroSlide[] = [
  {
    id: '1',
    tagline: 'STEP INTO THE DREAM',
    title: 'UNREAL',
    titleAccent: 'ADVENTURE',
    description: "Experience the world's most advanced 3D amusement park. Cinematic rides, heart-pumping thrills, and unforgettable memories.",
    image: '/dream.jpg', // A rollercoaster/park image
    buttons: [
      { label: 'M', href: '/magic', variant: 'primary' },
      { label: 'P', href: '/portal', variant: 'secondary' }
    ]
  },
  {
    id: '2',
    tagline: 'WHERE MAGIC HAPPENS',
    title: 'DREAM',
    titleAccent: 'SAFARI',
    description: 'Explore the wonders of nature with our immersive zoo experience. Meet rare species in their curated habitats.',
    image: '/dream.jpg', // A nature/safari image
    buttons: [
      { label: 'M', href: '/magic', variant: 'primary' },
      { label: 'S', href: '/safari', variant: 'secondary' }
    ]
  }
];
