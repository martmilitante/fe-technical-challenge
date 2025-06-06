import { useQuery } from '@tanstack/react-query';
import { getGrandmasterProfile } from '../requests/grandmasterProfile.requests';

export const useGrandmasterProfile = (username: string) => {
  return useQuery({
    queryKey: ['grandmaster-profile', username],
    queryFn: () => getGrandmasterProfile(username),
    enabled: !!username,
  });
};
