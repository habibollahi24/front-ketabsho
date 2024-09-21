import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { signinMutate } from '../auth';
import { useRouter } from 'next/navigation';

export const useSignIn = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: signIn, isPending } = useMutation({
    // mutationKey: ['signup'],
    mutationFn: signinMutate,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      router.replace('/profile');

      toast.success(response.data.message);
    },
    onError: (err) => {
      console.log(err.message);
      toast.error(err.message);
    },
  });
  return { signIn, isPending };
};
