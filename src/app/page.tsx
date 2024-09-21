import Slider from '@/components/Slider';
import Link from 'next/link';

export default async function HomePage() {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <Slider />
      <h1 className="text-xl font-semibold">
        <Link href="/blogs">
          کتاب هایتان را اینجا به اشتراک بگذارید.
        </Link>
      </h1>
    </div>
  );
}
