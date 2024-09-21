import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { cn } from '@/lib/utils';

import { Toaster } from 'react-hot-toast';
import RQProvider from '@/providers/RQProvider';
import Header from '@/components/header/Header';
import Slider from '@/components/Slider';
import Search from '@/components/Search';

const yekan = localFont({
  src: [
    {
      path: '../../public/font/YekanBakh-Light.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/font/YekanBakh-Regular.woff2',
      weight: '400',
      style: 'normal',
    },

    {
      path: '../../public/font/YekanBakh-Bold.woff2',
      weight: '700',
      style: 'normal',
    },

    {
      path: '../../public/font/YekanBakh-Fat.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-yekan',
});

export const metadata: Metadata = {
  title: {
    template: ' %s | کتاب شو ',
    default: 'کتاب شو',
  },
  description: 'معرفی و پیشنهاد کتاب',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={cn(yekan.variable, 'font-yekan ')}>
        <RQProvider>
          <Header />

          <div className="min-h-[calc(100vh-200px)]">{children}</div>
          <footer className="text-center py-4 bg-gray-100 font-bold text-sm mt-16">
            Created By Habibollahi
          </footer>
          <Toaster />
        </RQProvider>
      </body>
    </html>
  );
}
