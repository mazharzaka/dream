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

export interface AttractionTag {
  label: string;
  variant?: 'white' | 'dark' | 'outline' | 'green';
}

export interface Attraction {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  tags?: AttractionTag[];
  waitTime?: string;
  minHeight?: string;
  category?: string;
  bookPass?: boolean;
  icon?: string; // name of icon like 'Rocket', 'Droplet'
  layout: {
    colSpan: number;
    rowSpan: number;
    customStyle?: 'crimson' | 'sky' | 'nebula' | 'amazon' | 'phoenix' | 'midas';
  };
}
