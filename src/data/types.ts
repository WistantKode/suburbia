export interface PrismicImage {
  dimensions: { width: number; height: number };
  alt: string | null;
  copyright: string | null;
  url: string;
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  edit?: any; // Résidu du dump Prismic
}

export interface SettingsNavigationItem {
  link: {
    link_type: string;
    key?: string;
    url: string;
    text: string;
  };
}

export interface SettingsData {
  site_title: string;
  meta_description: string;
  fallback_og_image: PrismicImage;
  navigation: SettingsNavigationItem[];
  footer_image: PrismicImage;
  footer_skateboards: { skateboard: PrismicImage }[];
}

export interface CustomizerWheel {
  texture: PrismicImage;
  uid: string;
}

export interface CustomizerDeck {
  texture: PrismicImage;
  uid: string;
}

export interface CustomizerMetal {
  color: string;
  uid: string;
}

export interface CustomizerData {
  wheels: CustomizerWheel[];
  decks: CustomizerDeck[];
  metals: CustomizerMetal[];
}
