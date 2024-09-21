import { cn } from '@/lib/utils';
import { Bookmark } from 'lucide-react';
import React from 'react';

type Props = {
  isBookmarked: boolean;
};

export default function BlogBookmarkIcon({ isBookmarked }: Props) {
  return (
    <span className="cursor-pointer transition-all duration-200 hover:-translate-y-1 ">
      <Bookmark
        className={cn('size-5', {
          'fill-black': isBookmarked,
        })}
      />
    </span>
  );
}
