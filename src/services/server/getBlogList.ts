import { BlogType } from '@/types/types';
import { cookies } from 'next/headers';

type UrlType = {
  params?: { [key: string]: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function getBlogList({
  params,
  searchParams,
}: UrlType): Promise<{
  totalPage: number;
  blogs: BlogType[];
}> {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  const refreshToken = cookieStore.get('refreshToken');

  const queries = { ...params, ...searchParams };
  // console.log(queries); //{ categorySlug: 'sport', search: 'javascript', sort: 'first' }
  const queryString = Object.keys(queries)
    .map((key) => `${key}=${queries[key]}`)
    .join('&');

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queryString}`;

  const data = await fetch(
    url,

    {
      headers: {
        'Content-Type': 'application/json',
        Cookie: `${accessToken?.name}=${accessToken?.value};${refreshToken?.name}=${refreshToken?.value}`,
      },
      credentials: 'include',
      method: 'GET',
      cache: 'no-store',
    }
  );
  const response = await data.json();
  return {
    blogs: response?.data?.posts,
    totalPage: response?.data?.totalPages,
  };
}
