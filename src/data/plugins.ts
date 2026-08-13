export type Plugin = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  wpUrl?: string;
  tags: string[];
};

export const plugins: Plugin[] = [
  {
    slug: "band-manager",
    name: "Band Manager",
    tagline: "Shows, members, music, and photos for your band's WordPress site.",
    description:
      "Band Manager gives your band's site dedicated content types for shows, members, music, and photos, plus shortcodes ([band_shows], [band_members], [band_music], [band_gallery], [band_contact], [band_social]) and widgets for upcoming shows and your latest release, so you can drop them into any page, post, or sidebar.",
    tags: ["shortcodes", "widgets", "custom-post-types"],
  },
];
