import Comments from '@/components/comments/Comments';
import { getCurrentUser } from '@/services/server/getCurrentUser';
import getSingleBlog from '@/services/server/getSingleBlog';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params: { blogSlug },
}: {
  params: { blogSlug: string };
}) {
  const blog = await getSingleBlog(blogSlug);
  return {
    title: `${blog.title}`,
    description: `${blog.briefText}`,
  } as Metadata;
}

export default async function SinglePostPage({
  params: { blogSlug },
}: {
  params: { blogSlug: string };
}) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  const refreshToken = cookieStore.get('refreshToken');

  const myCookie = `${accessToken?.name}=${accessToken?.value};${refreshToken?.name}=${refreshToken?.value}`;

  const blog = await getSingleBlog(blogSlug, myCookie);
  const user = await getCurrentUser();

  return (
    <div className=" md:max-w-screen-md mx-auto mt-8">
      <h1 className="text-4xl font-black mb-2">{blog.title}</h1>
      <h2 className="text-2xl font-bold mb-2">{blog.briefText}</h2>
      <p className="text-gray-800">{blog.text}</p>
      <div className="">
        <div className="relative aspect-video  rounded-3xl overflow-hidden my-12">
          <Image
            src={blog.coverImageUrl}
            alt={blog.title}
            fill
            className="object-cover "
          />
        </div>
      </div>
      <div>
        {blog.related.length > 0 && (
          <p className="text-2xl font-semibold">پست های مرتبط</p>
        )}
        {blog.related.map((blog) => {
          return <div key={blog._id}>{blog.title}</div>;
        })}
      </div>
      <Comments blog={blog} isAuth={user} />
    </div>
  );
}
