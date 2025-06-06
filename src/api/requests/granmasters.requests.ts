import axios from 'axios';
import type { GrandmastersResponse } from '../../chessApi/types';

export const getGrandmasters = async (): Promise<GrandmastersResponse> => {
  const response = await axios.get('https://api.chess.com/pub/titled/GM');
  return response.data;
};
