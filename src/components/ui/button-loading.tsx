import React from 'react';

export default function ButtonLoading() {
  return (
    <div className="flex space-x-2 justify-center items-center  ">
      <span className="sr-only">Loading...</span>
      <div className="size-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="size-3 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="size-3 bg-white rounded-full animate-bounce"></div>
    </div>
  );
}
