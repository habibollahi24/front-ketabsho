import React from 'react';
import CategoryDropdown from './client-action-component/CategoryDropdown';
import getCategoryList from '@/services/server/getCategoryList';
import SearchInput from './client-action-component/SearchInput';

export default async function Search() {
  const categories = await getCategoryList();

  return (
    <div className="w-full flex items-center gap-x-4 p-3 rounded-2xl  shadow-lg bg-gray-200 sticky top-2 my-4 z-50">
      <CategoryDropdown categories={categories} />
      <SearchInput />
    </div>
  );
}
