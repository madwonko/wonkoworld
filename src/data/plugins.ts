export type Plugin = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  wpUrl?: string;
  tags: string[];
};

// No plugins published yet — add entries here as they go live.
export const plugins: Plugin[] = [];
