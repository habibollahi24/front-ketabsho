import Link from 'next/link';
import React from 'react';

export default function NotfoundDetailPost() {
  return (
    <div className="text-center h-[calc(100vh-200px)] mt-16 mb-4">
      <p className="text-3xl font-bold">متاسفانه پستی پیدا نشد.</p>
      <div>
        <Link href="/posts" className="underline ">
          برو به صفحه پست ها
        </Link>
      </div>
    </div>
  );
}
