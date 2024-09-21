import { cn, ToPersianDidit } from '@/lib/utils';
import { BlogType } from '@/types/types';
import { Group, MessageCircle, Heart, Bookmark } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BlogLikeIcon from './client-action-component/BlogLikeIcon';
import BlogBookmarkIcon from './client-action-component/BlogBookmarkIcon';

export default function BlogCart({
  _id,
  slug,
  title,
  coverImageUrl,
  category,
  commentsCount,
  author,
  readingTime,
  isLiked,
  isBookmarked,
}: BlogType) {
  return (
    <>
      <Link href={`/blogs/${slug}`}>
        <div className="relative aspect-video">
          <Image
            alt={title}
            src={coverImageUrl}
            fill
            className="  rounded-[2.5rem] object-cover"
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="flex items-center justify-between my-4 px-4">
        <div>
          <div className="text-base font-bold ">{title}</div>
          <div className="text-xs inline-flex items-center mt-1 border-2 rounded-3xl bg-gray-200 px-3">
            <Group className="size-3 ml-1" />{' '}
            <div className="text-xs">{category.title} </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-x-1 ">
          <div className="flex items-center justify-center ">
            <span className="mt-3 text-sm">
              {ToPersianDidit(commentsCount)}
            </span>
            <span className="cursor-pointer  ">
              <MessageCircle className="size-5" />
            </span>
          </div>
          <BlogLikeIcon isLiked={isLiked} id={_id} />
          <BlogBookmarkIcon isBookmarked={isBookmarked} />
        </div>
      </div>

      <div className="flex items-center justify-between mb-6 px-6">
        <div className="flex items-center gap-x-1">
          <div className=" rounded-full overflow-hidden">
            <Image
              alt={title}
              src={author.avatarUrl || '/shaban.jpg'}
              width={30}
              height={30}
            />
          </div>
          <div className="whitespace-nowrap text-sm">
            {author.name}
          </div>
        </div>
        <div className="text-sm text-gray-700">
          خواندن: {ToPersianDidit(readingTime)} دقیقه{' '}
        </div>
      </div>
    </>
  );
}
