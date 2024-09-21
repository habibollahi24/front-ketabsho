'use server';
import { cookies } from 'next/headers';

export async function signupAction(formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  };
  console.log(rawFormData);
  const data = await fetch('http://localhost:5000/api/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookies().toString(),
    },
    credentials: 'include',
    body: JSON.stringify(rawFormData),
  });

  if (!data.ok) {
    console.log(data.statusText);
  }

  const response = await data.json();
  console.log(response);
}
export async function signinAction(formData: FormData) {
  const rawFormData = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  console.log(rawFormData);

  const data = await fetch('http://localhost:5000/api/user/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookies().toString(),
    },
    // credentials: 'include',
    body: JSON.stringify(rawFormData),
  });

  if (!data.ok) {
    console.log(data.statusText);
  }

  const response = await data.json();
  console.log(response);

  cookies().set({
    name: 'accessToken',
    value: response.data.accessToken,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 1, // would expire after 1 days

    path: '/',
  });
  cookies().set({
    name: 'refreshToken',
    value: response.data.refreshToken,
    maxAge: 1000 * 60 * 60 * 24 * 365,
    httpOnly: true,
    path: '/',
  });
}
