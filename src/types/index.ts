export type ProductColorVariant = {
  id: string;
  name: string;
  hex: string;
  accentHex: string;
  upperColor: string;
  soleColor: string;
  accentColor: string;
  lacesColor: string;
  roughness: number;
  metalness: number;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  category: 'Footwear' | 'Outerwear' | 'Apparel' | 'Bottoms';
  price: number;
  colorName: string;
  colorHex: string;
  description: string;
  features: string[];
  materials: string;
  sizes: string[];
  inStock: boolean;
  image: string;
  badge?: string;
  variants?: ProductColorVariant[];
};

export type CartItem = {
  productId: string;
  name: string;
  price: number;
  colorVariant: string;
  size: string;
  quantity: number;
  image: string;
  category: string;
};

export type Article = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string[];
  tags: string[];
  heroImage: string;
};

export type MaterialFeature = {
  id: string;
  title: string;
  spec: string;
  description: string;
  badge: string;
};
