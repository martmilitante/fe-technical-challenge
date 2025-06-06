import axios from 'axios';
import type { GrandmasterProfile } from '../../chessApi/types';

export const getGrandmasterProfile = async (username: string): Promise<GrandmasterProfile> => {
  const response = await axios.get(`https://api.chess.com/pub/player/${username}`);
  return response.data;
};
