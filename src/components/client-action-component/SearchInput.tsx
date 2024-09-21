'use client';

import { Search } from 'lucide-react';
import React, { useRef } from 'react';
import {
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';

export default function SearchInput() {
  const searchRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchValue = searchRef?.current?.value;

    const newParams = new URLSearchParams(searchParams);

    if (searchValue) {
      newParams.set('search', searchValue);
    } else {
      newParams.delete('search');
    }

    console.log({ newParams: newParams.toString() });
    console.log({ newParams: Object.fromEntries(newParams) });

    router.push(pathname + '?' + newParams);
  };

  return (
    <div className="flex-1">
      <form onSubmit={submitHandler}>
        <div className="flex items-center justify-between  bg-gray-300 font-semibold  px-4 py-2 text-sm rounded-lg ">
          <input
            ref={searchRef}
            type="text"
            name="search"
            placeholder="جستجو..."
            className="bg-transparent w-full placeholder:text-gray-500 focus:outline-none"
          />
          <button type="submit">
            <Search />
          </button>
        </div>
      </form>
    </div>
  );
}
