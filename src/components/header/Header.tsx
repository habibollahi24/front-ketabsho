'use client';

import { cn } from '@/lib/utils';
import useProfile from '@/services/client/hooks/useProfile';
import Link from 'next/link';

export default function Header() {
  const { data, isPending } = useProfile();

  return (
    <header
      className={cn(
        'container mx-auto py-8 ',
        isPending ? 'blur-sm' : 'blur-0'
      )}
    >
      <div className="flex justify-center gap-x-5 items-center">
        <div className=" text-base"> بلاگ نویسی</div>
        <Link href="/blogs" className=" text-base">
          {' '}
          بلاگ ها
        </Link>
        <Link href="/" className="font-black text-3xl">
          کتاب شو
        </Link>
        {data?.data?.user ? (
          <Link href="/profile">پروفایل</Link>
        ) : (
          <Link href="/signin" className=" text-base">
            {' '}
            ورود
          </Link>
        )}

        <div>{data?.data?.user?.name}</div>
      </div>
    </header>
  );
}
