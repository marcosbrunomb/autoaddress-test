export interface ITrending {
  data: GiphyData[];
  pagination: GiphyPagination;
  meta: Meta;
}

export interface GiphyData {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_url: string;
  bitly_gif_url: string;
  is_sticker: number;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  content_url: string;
  user?: User;
  source_tld: string;
  source_post_url: string;
  update_datetime?: string;
  create_datetime?: string;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  title: string;
  alt_text: string;
  analytics_response_payload: string;
  analytics: Analytics;
}

interface User {
  avatar_url: string;
  banner_url: string;
  banner_image: string;
  description: string;
  instagram_url: string;
  website_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  is_verified: boolean;
}

interface Analytics {
  onload: {
    url: string;
  };
  onclick: {
    url: string;
  };
  onsent: {
    url: string;
  };
}

interface Images {
  fixed_height: FixedHeight;
  fixed_height_still?: FixedHeightStill;
  fixed_height_downsampled: FixedHeightDownsampled;
  fixed_width: FixedWidth;
  fixed_width_still?: FixedWidthStill;
  fixed_width_downsampled: FixedWidthDownsampled;
  fixed_height_small: FixedHeightSmall;
  fixed_height_small_still?: FixedHeightSmallStill;
  fixed_width_small: FixedWidthSmall;
  fixed_width_small_still?: FixedWidthSmallStill;
  downsized?: Downsized;
  downsized_still?: DownsizedStill;
  downsized_large?: DownsizedLarge;
  downsized_medium?: DownsizedMedium;
  downsized_small?: DownsizedSmall;
  original: Original;
  original_still?: OriginalStill;
  looping?: Looping;
  preview?: Preview;
  preview_gif?: PreviewGif;
}

interface FixedHeight {
  url: string;
  width: string;
  height: string;
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
}

interface FixedHeightStill {
  url: string;
  width: string;
  height: string;
}

interface FixedHeightDownsampled {
  url: string;
  width: string;
  height: string;
  size: string;
  webp: string;
  webp_size: string;
}

interface FixedWidth {
  url: string;
  width: string;
  height: string;
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
}

interface FixedWidthStill {
  url: string;
  width: string;
  height: string;
}

interface FixedWidthDownsampled {
  url: string;
  width: string;
  height: string;
  size: string;
  webp: string;
  webp_size: string;
}

interface FixedHeightSmall {
  url: string;
  width: string;
  height: string;
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
}

interface FixedHeightSmallStill {
  url: string;
  width: string;
  height: string;
}

interface FixedWidthSmall {
  url: string;
  width: string;
  height: string;
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
}

interface FixedWidthSmallStill {
  url: string;
  width: string;
  height: string;
}

interface Downsized {
  url: string;
  width: string;
  height: string;
  size: string;
}

interface DownsizedStill {
  url: string;
  width: string;
  height: string;
}

interface DownsizedLarge {
  url: string;
  width: string;
  height: string;
  size: string;
}

interface DownsizedMedium {
  url: string;
  width: string;
  height: string;
  size: string;
}

interface DownsizedSmall {
  mp4: string;
  width: string;
  height: string;
  mp4_size: string;
}

interface Original {
  url: string;
  width: string;
  height: string;
  size: string;
  frames: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
  hash: string;
}

interface OriginalStill {
  url: string;
  width: string;
  height: string;
}

interface Looping {
  mp4: string;
}

interface Preview {
  mp4: string;
  mp4_size: string;
  width: string;
  height: string;
}

interface PreviewGif {
  url: string;
  width: string;
  height: string;
}

interface GiphyPagination {
  offset: number;
  total_count: number;
  count: number;
}

interface Meta {
  msg: string;
  status: number;
  response_id: string;
}
