export type Plugin = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  wpUrl?: string;
  repoUrl?: string;
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
  {
    slug: "radiopeng-audio-player",
    name: "RadioPeng Audio Player",
    tagline: "A live-metadata music player for AzuraCast radio stations.",
    description:
      "RadioPeng Audio Player connects to an AzuraCast station and displays live now-playing metadata: song title, artist, album artwork, DJ name, and listener count, refreshed automatically. Drop it in with the [azuracast_player] shortcode in a standard, popup, or compact mini-player mode, with play/pause, volume, and mute controls, and a responsive layout that adapts to its container.",
    repoUrl: "https://github.com/madwonko/radiopeng-audio-player",
    tags: ["shortcodes", "audio-player", "azuracast", "radio"],
  },
];
