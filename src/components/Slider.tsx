'use client';

import { sliderList } from '@/constant';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export default function Slider() {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col-reverse gap-y-4 md:gap-y-0  md:flex-row items-center  mb-8 ">
      <div className=" flex-1 md:-ml-6 relative z-10">
        <p
          className={cn(
            'font-black bg-gray-100 shadow-xl rounded-[4rem] p-10',
            sliderList[index].size
          )}
        >
          {sliderList[index].text}
          <span className="block text-base font-semibold text-left ">
            {sliderList[index].author}
          </span>
        </p>
      </div>

      <div className=" flex-1 w-full">
        <div className="shadow-xl  bg-gray-200 h-[400px] rounded-[5rem] relative overflow-hidden">
          <Image
            src={sliderList[index].image}
            alt="sehat"
            fill
            objectFit="cover"
            className="transition-all duration-300 hover:rotate-[5deg] hover:scale-[1.1] "
          />
        </div>
        <div className="flex justify-center items-center gap-x-2 pt-4">
          {sliderList.map((ls) => {
            return (
              <button
                key={ls.id}
                className={cn(
                  'transition-all duration-150 size-4 rounded-full ',
                  sliderList[index].id === ls.id
                    ? 'bg-black size-5'
                    : 'bg-gray-300'
                )}
                onClick={() => setIndex(ls.id)}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
