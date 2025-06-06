// Types for Chess.com API responses
export type GrandmastersResponse = {
  players: string[];
};

export type GrandmasterProfile = {
  player_id: number;
  '@id': string;
  url: string;
  username: string;
  title: string;
  followers: number;
  country: string;
  last_online?: number;
  joined: number;
  status: string;
  is_streamer: boolean;
  verified: boolean;
  league: string;
  streaming_platforms: string[];
  avatar?: string;
  name?: string;
  fide?: number;
};
