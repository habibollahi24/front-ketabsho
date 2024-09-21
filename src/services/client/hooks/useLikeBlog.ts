import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

async function likeBlog(id: string) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + '/post/like/' + id,
      {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        method: 'POST',
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

export default function useLikeBlog() {
  const router = useRouter();
  const { mutate: like, isPending } = useMutation({
    mutationFn: likeBlog,
    onSuccess: (response) => {
      //   queryClient.invalidateQueries({ queryKey: ['user'] });

      router.refresh();
      toast.success(response.data.message);
    },
    onError: (err) => {
      console.log(err.message);
      toast.error(err.message);
    },
  });
  return { like, isPending };
}
