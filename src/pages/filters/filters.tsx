import { SearchFilter } from '@/components/filters/search-filter';

export function Filters() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className="font-bold">Filters</h1>
      <div className='w-64 flex flex-col gap-2'>
        <SearchFilter value='Test' onChange={() => {}}/>
      </div>
    </div>
  );
}