import Search from '@/components/Search';
import React from 'react';

export default function SingleBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto max-w-screen-lg">
      {children}
    </div>
  );
}
