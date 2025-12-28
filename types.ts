export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  image: string;
  size?: 'small' | 'large';
  videoLabel?: string;
}

export interface SpecItem {
  label: string;
  value: string;
}