import { cookies } from 'next/headers';

export async function getCurrentUser(): Promise<any> {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  const refreshToken = cookieStore.get('refreshToken');
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/user/profile',
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
  const data = await response.json();
  const user = data?.data?.user;
  return user || null;
}
