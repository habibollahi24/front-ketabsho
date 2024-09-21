import getCategoryList from '@/services/server/getCategoryList';
import Link from 'next/link';
import React from 'react';

export default async function CategoryList() {
  const categories = await getCategoryList();

  return (
    <div className="shadow-lg rounded-[3rem] py-12 sticky top-10">
      <p className="text-xl font-bold text-center py-4">
        دسته بندی <span className="font-black">کتاب شو</span> ها
      </p>
      <div className="text-center space-y-3 text-lg font-medium">
        {categories.map((cat) => {
          return (
            <div className="cursor-pointer" key={cat._id}>
              <Link
                className="block hover:font-bold"
                href={`/posts/${cat.slug}`}
              >
                {' '}
                {cat.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
