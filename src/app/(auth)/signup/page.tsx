'use client';

import ButtonLoading from '@/components/ui/button-loading';
import { useSignUp } from '@/services/client/hooks/useSignUp';
import Link from 'next/link';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type SignupType = {
  name: string;
  email: string;
  password: string;
};

export default function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const { signUp, isPending } = useSignUp();

  const handleSignin: SubmitHandler<SignupType> = async (values) => {
    signUp(values);
  };

  return (
    <div className="container mx-auto max-w-[400px] min-h-screen pt-12">
      <form
        onSubmit={handleSubmit(handleSignin)}
        className="flex flex-col space-y-5"
      >
        <div>
          <input
            {...register('name', {
              required: 'لطفا وارد کنید.',
              minLength: { value: 3, message: 'حداقل سه کاراکتر' },
            })}
            className="w-full bg-gray-50 rounded-md px-4 py-2"
            type="text"
            name="name"
            placeholder="نام"
          />
          <p className="text-red-500 text-sm">
            {errors.name && errors.name.message}
          </p>
        </div>
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
          <p className="text-red-500 text-sm">
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
          <p className="text-red-500 text-sm">
            {errors.password && errors.password.message}
          </p>
        </div>
        <button
          disabled={isPending}
          className="bg-indigo-500 h-10 font-semibold rounded-md text-white py-2 disabled:cursor-not-allowed"
        >
          {isPending ? <ButtonLoading /> : '  ثبت نام'}
        </button>
      </form>
      <Link
        href="/signin"
        className="underline my-4 text-xl inline-block"
      >
        ورود
      </Link>
    </div>
  );
}
