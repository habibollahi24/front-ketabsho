import { BlogType } from '@/types/types';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

export default async function getSingleBlog(
  slug: string,
  cookie?: string
): Promise<BlogType> {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  const refreshToken = cookieStore.get('refreshToken');

  const data = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/post/slug/' + slug,
    {
      headers: {
        'Content-Type': 'application/json',
        // Cookie: `${accessToken?.name}=${accessToken?.value};${refreshToken?.name}=${refreshToken?.value}`,
        Cookie: cookie!,
      },
      credentials: 'include',
      method: 'GET',
      cache: 'no-store',
    }
  );

  if (!data.ok) return notFound();

  const response = await data.json();
  return response.data.post;
}
