import { useQuery } from '@tanstack/react-query';
import { getGrandmasters } from '../requests/granmasters.requests';

export const useGrandmasters = () => {
  return useQuery({
    queryKey: ['grandmasters'],
    queryFn: getGrandmasters,
  });
};
