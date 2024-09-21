import BlogList from '@/components/BlogList';
import Search from '@/components/Search';
import getBlogList from '@/services/server/getBlogList';

import queryString from 'query-string';

export default async function PostsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { blogs, totalPage } = await getBlogList({
    searchParams,
  });
  return (
    <>
      <Search />
      <BlogList blogs={blogs} />
    </>
  );
}
