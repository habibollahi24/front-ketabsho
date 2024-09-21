type SignupUser = { name: string; email: string; password: string };
type SigninUser = { email: string; password: string };

export async function signupMutate(values: SignupUser) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + '/user/signup',
      {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(values),
      }
    );

    // Check if response is not ok
    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message); // Explicitly throw an error
    }

    return await response.json(); // Return the parsed JSON response if successful
  } catch (error: any) {
    throw new Error(error.message || 'Something went wrong'); // Ensure the error is caught properly
  }
}
export async function signinMutate(values: SigninUser) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + '/user/signin',
      {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(values),
      }
    );

    // Check if response is not ok
    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message); // Explicitly throw an error
    }

    return await response.json(); // Return the parsed JSON response if successful
  } catch (error: any) {
    throw new Error(error.message || 'Something went wrong'); // Ensure the error is caught properly
  }
}
export async function profile() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/user/profile',
    {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      method: 'GET',
    }
  );

  // اگر ارور 401 بود، ارور را پرتاب کنید
  if (response.status === 401) {
    throw new Error('Unauthorized');
  }

  // اگر درخواست موفق بود، داده‌ها را برگردانید
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}
export async function refreshToken() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/user/refresh-token',
    {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      method: 'GET',
    }
  );

  // اگر ارور 401 بود، ارور را پرتاب کنید
  if (response.status === 401) {
    throw new Error('Unauthorized');
  }

  // اگر درخواست موفق بود، داده‌ها را برگردانید
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}
