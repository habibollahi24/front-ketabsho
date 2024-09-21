import BlogList from '@/components/BlogList';
import Search from '@/components/Search';
import getBlogList from '@/services/server/getBlogList';
import React from 'react';

export default async function CategorySearch({
  params: { categorySlug },
  searchParams,
}: {
  params: { categorySlug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { blogs, totalPage } = await getBlogList({
    params: { categorySlug },
    searchParams,
  });

  if (blogs.length === 0)
    return (
      <p className="text-center text-xl py-8 font-semibold">
        بلاگی در این دسته بندی نیست.
      </p>
    );

  return (
    <>
      <Search />
      <BlogList blogs={blogs} />
    </>
  );
}
