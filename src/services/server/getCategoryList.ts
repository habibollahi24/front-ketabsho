import { CategoryType } from '@/types/types';

export default async function getCategoryList(): Promise<
  CategoryType[]
> {
  const data = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/category/list'
  );
  const response = await data.json();
  return response.data.categories;
}
