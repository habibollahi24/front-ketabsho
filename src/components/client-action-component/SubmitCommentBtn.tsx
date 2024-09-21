'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { useFormStatus } from 'react-dom';
import ButtonLoading from '../ui/button-loading';

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SubmitCommentBtn({ children }: Props) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className={cn(
        'w-full bg-blue-500 rounded-lg h-10 text-white font-semibold text-sm disabled:bg-gray-400'
      )}
    >
      {pending ? <ButtonLoading /> : children}
    </button>
  );
}
