import { useQuery } from '@tanstack/react-query';
import { profile, refreshToken } from '../auth';
import { useRouter } from 'next/navigation';

export default function useProfile() {
  const router = useRouter();
  const { data, isPending } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      try {
        const data = await profile();
        router.refresh();
        return data;
      } catch (error: any) {
        // اگر ارور 401 بود، توکن را refresh کن و دوباره fetch کن
        if (error.message === 'Unauthorized') {
          await refreshToken();
          const data = await profile();
          router.refresh();
          return data; // دوباره درخواست اصلی را بفرست
        } else {
          throw error; // برای سایر ارورها
        }
      }
    },
    retry: 0,
  });

  return { data, isPending };
}
