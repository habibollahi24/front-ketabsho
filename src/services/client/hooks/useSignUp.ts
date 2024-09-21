import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { signupMutate } from '../auth';
import { useRouter } from 'next/navigation';

export const useSignUp = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: signUp, isPending } = useMutation({
    // mutationKey: ['signup'],
    mutationFn: signupMutate,
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
  return { signUp, isPending };
};
