'use client';

import ButtonLoading from '@/components/ui/button-loading';
import { useSignIn } from '@/services/client/hooks/useSignIn';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

type SigninType = {
  email: string;
  password: string;
};

export default function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const { signIn, isPending } = useSignIn();

  const handleSignin: SubmitHandler<SigninType> = async (values) => {
    signIn(values);
  };

  return (
    <div className="container mx-auto max-w-[400px] min-h-screen pt-12">
      <form
        onSubmit={handleSubmit(handleSignin)}
        className="flex flex-col space-y-5"
      >
        <div>
          <input
            {...register('email', {
              required: 'لطفا وارد کنید.',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'ایمیل نامعتبر',
              },
            })}
            dir="ltr"
            className="w-full bg-gray-50 rounded-md px-4 py-2 placeholder:ltr:text-right"
            type="text"
            name="email"
            placeholder="ایمیل"
          />
          <p className="text-sm text-rose-600">
            {errors.email && errors.email.message}
          </p>
        </div>
        <div>
          <input
            {...register('password', {
              required: 'لطفا وارد کنید.',
              minLength: { value: 8, message: 'حداقل 8 کاراکتر' },
            })}
            dir="ltr"
            className="w-full bg-gray-50 rounded-md px-4 py-2 placeholder:ltr:text-right"
            type="text"
            name="password"
            placeholder="رمز ورود"
          />
          <p className="text-sm text-rose-600">
            {errors.password && errors.password.message}
          </p>
        </div>
        <button
          disabled={isPending}
          className="bg-indigo-500 h-10 rounded-md text-white py-2 disabled:cursor-not-allowed"
        >
          {isPending ? <ButtonLoading /> : '   ورود'}
        </button>
      </form>
      <Link
        href="/signup"
        className="underline my-4 text-xl inline-block"
      >
        {' '}
        ثبت نام
      </Link>
    </div>
  );
}
