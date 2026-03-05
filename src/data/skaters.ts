export interface SkaterData {
  first_name: string;
  last_name: string;
  photo_background: { url: string };
  photo_foreground: { url: string };
  customizer_link: string;
}

export const skatersData: SkaterData[] = [
  {
    first_name: "Tony",
    last_name: "Hawk",
    photo_background: { url: "/images/Z1UNmpbqstJ98M3k_paint-background.png" },
    photo_foreground: { url: "/images/Z1Nbn5bqstJ98Lhh_guy-1.png" },
    customizer_link: "/build",
  },
  {
    first_name: "Lizzie",
    last_name: "Armanto",
    photo_background: { url: "/images/Z1UNmpbqstJ98M3k_paint-background.png" },
    photo_foreground: { url: "/images/Z1NboZbqstJ98Lhl_guy-2.png" },
    customizer_link: "/build",
  },
  {
    first_name: "Rodney",
    last_name: "Mullen",
    photo_background: { url: "/images/Z1UNmpbqstJ98M3k_paint-background.png" },
    photo_foreground: { url: "/images/Z1NboJbqstJ98Lhi_guy-3.png" },
    customizer_link: "/build",
  },
  {
    first_name: "Nyjah",
    last_name: "Huston",
    photo_background: { url: "/images/Z1UNmpbqstJ98M3k_paint-background.png" },
    photo_foreground: { url: "/images/Z1NbwJbqstJ98LiW_guy-4.png" },
    customizer_link: "/build",
  }
];
