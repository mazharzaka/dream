export interface HeroAction {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface HeroSlide {
  id: string;
  tagline?: string;
  title: string;
  titleAccent?: string;
  description: string;
  image: string;
  buttons: HeroAction[];
}
