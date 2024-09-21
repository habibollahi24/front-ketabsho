'use client';

import { cn } from '@/lib/utils';
import useLikeBlog from '@/services/client/hooks/useLikeBlog';
import { Heart, LoaderCircle } from 'lucide-react';

type Props = {
  isLiked: boolean;
  id: string;
};

const heartIcon = (isLiked: boolean) =>
  isLiked ? (
    <Heart className="size-5 hover:-translate-y-1" />
  ) : (
    <Heart className="size-5 fill-red-500 text-red-500" />
  );

export default function BlogLikeIcon({ isLiked, id }: Props) {
  const { isPending, like } = useLikeBlog();
  return (
    <span className="cursor-pointer transition-all duration-200  ">
      {isPending ? (
        <LoaderCircle className="size-5 animate-spin" />
      ) : (
        <div onClick={() => like(id)}>
          {isLiked ? (
            <Heart
              className={cn('size-5 fill-red-500 text-red-500')}
            />
          ) : (
            <Heart className={cn('size-5 hover:-translate-y-1')} />
          )}
        </div>
      )}
    </span>
  );
}
