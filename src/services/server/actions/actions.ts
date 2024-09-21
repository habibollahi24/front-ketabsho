'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

type FormState = {
  sucssesMsg: string;
  errorMsg: string;
};

export async function addNewComment(
  prevState: FormState,
  formData: FormData
) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  const refreshToken = cookieStore.get('refreshToken');
  const text = formData.get('text');
  const postId = formData.get('blogId');

  const data = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/comment/add',
    {
      body: JSON.stringify({ text, postId }),
      headers: {
        'Content-Type': 'application/json',
        Cookie: `${accessToken?.name}=${accessToken?.value};${refreshToken?.name}=${refreshToken?.value}`,
      },
      credentials: 'include',
      method: 'POST',
      cache: 'no-store',
    }
  );
  const res = await data.json();

  console.log(res);

  if (!data.ok) {
    return {
      sucssesMsg: '',
      errorMsg: res.message,
    };
  }

  revalidatePath('/blogs/[blogSlug]');

  return {
    sucssesMsg: res.data.message,
    errorMsg: '',
  };
}
export async function repplyComment(
  prevState: FormState,
  formData: FormData
) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  const refreshToken = cookieStore.get('refreshToken');
  const text = formData.get('text');
  const postId = formData.get('blogId');
  const parentId = formData.get('parentId');

  const data = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/comment/add',
    {
      body: JSON.stringify({ text, postId, parentId }),
      headers: {
        'Content-Type': 'application/json',
        Cookie: `${accessToken?.name}=${accessToken?.value};${refreshToken?.name}=${refreshToken?.value}`,
      },
      credentials: 'include',
      method: 'POST',
      cache: 'no-store',
    }
  );
  const res = await data.json();

  console.log(res);

  if (!data.ok) {
    return {
      sucssesMsg: '',
      errorMsg: res.message,
    };
  }

  revalidatePath('/blogs/[blogSlug]');

  return {
    sucssesMsg: res.data.message,
    errorMsg: '',
  };
}
