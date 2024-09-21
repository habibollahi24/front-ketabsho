import React from 'react';
import BlogCart from './BlogCart';
import getBlogList from '@/services/server/getBlogList';
import { BlogType } from '@/types/types';

export default async function BlogList({
  blogs,
}: {
  blogs: BlogType[];
}) {
  // const { blogs, totalPage } = await getBlogList();

  return (
    <div className="grid grid-cols-12 gap-4 ">
      {blogs?.map((blog) => {
        return (
          <div
            key={blog._id}
            className="relative w-full  rounded-[3rem] bg-gradient-to-t from-gray-100 from-20% to-transparent  p-4 col-span-12 md:col-span-4"
          >
            <BlogCart {...blog} />
          </div>
        );
      })}
    </div>
  );
}
