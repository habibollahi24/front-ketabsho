'use client';

import { CategoryType } from '@/types/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export default function CategoryDropdown({
  categories,
}: {
  categories: CategoryType[];
}) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="bg-gray-300 font-semibold text-gray-800 px-4 py-2 text-sm rounded-lg ">
            {' '}
            دسته بندی ها
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="py-2 text-xl">
          <Link dir="rtl" href={`/blogs`}>
            <DropdownMenuItem className="cursor-pointer">
              همه
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </Link>
          {categories.map((cat) => {
            return (
              <Link
                key={cat._id}
                dir="rtl"
                href={`/blogs/category/${cat.slug}`}
              >
                <DropdownMenuItem className="cursor-pointer">
                  {cat.title}
                </DropdownMenuItem>
              </Link>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
