// Generated by https://quicktype.io

export interface ObjectInfo {
  __class__:        string;
  __href__:         string;
  __resource_key__: string;
  __links__:        Actions;
  __actions__:      Actions;
  total:            number;
  items:            Item[];
}

export interface Actions {
}

export interface Item {
  __class__:           string;
  __href__:            string;
  __links__:           Links;
  __actions__:         Actions;
  id:                  string;
  external_id:         string;
  channel_id:          string;
  title:               string;
  description:         string;
  promo_title:         string;
  promo_description:   string;
  type:                string;
  slug:                string;
  slug_title:          string;
  images:              Images;
  episode_metadata:    EpisodeMetadata;
  playback:            string;
  linked_resource_key: string;
  type:                string;
  s_num?:              string;
  f_num?:              string;
  movie_metadata?:     {
    movie_listing_id: string;
    movie_listing_title: string
  };
  isSelected?:         boolean
}

export interface Links {
  "episode/season":   EpisodeSeason;
  "episode/series":   EpisodeSeason;
  resource:           EpisodeSeason;
  "resource/channel": EpisodeSeason;
  streams:            EpisodeSeason;
}

export interface EpisodeSeason {
  href: string;
}

export interface EpisodeMetadata {
  series_id:          string;
  series_title:       string;
  series_slug_title:  string;
  season_id:          string;
  season_title:       string;
  season_slug_title:  string;
  season_number:      number;
  episode_number:     number;
  episode:            string;
  sequence_number:    number;
  duration_ms:        number;
  ad_breaks:          AdBreak[];
  episode_air_date:   string;
  is_premium_only:    boolean;
  is_mature:          boolean;
  mature_blocked:     boolean;
  is_subbed:          boolean;
  is_dubbed:          boolean;
  is_clip:            boolean;
  available_offline:  boolean;
  maturity_ratings:   string[];
  subtitle_locales:   string[];
  availability_notes: string;
}

export interface AdBreak {
  type:      string;
  offset_ms: number;
}

export interface Images {
  thumbnail: Array<Thumbnail[]>;
}

export interface Thumbnail {
  width:  number;
  height: number;
  type:   string;
  source: string;
}
