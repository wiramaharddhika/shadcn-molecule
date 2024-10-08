import { useState } from 'react';
import { FacetedFilter, FacetedFilterOption } from '@/components/filters/faceted-filter';
import { SearchFilter } from '@/components/filters/search-filter';

export function Filters() {
  const [facetedValues, setFacetedValues] = useState<FacetedFilterOption<string>[]>([]);

  return (
    <div className='flex flex-col gap-4'>
      <h1 className="font-bold">Filters</h1>
      <div className='w-64 flex flex-col gap-2'>
        <SearchFilter value='Test' onChange={() => {}}/>
      </div>
      <div className='w-64 flex flex-col gap-2'>
        <FacetedFilter
          title='Test'
          values={facetedValues}
          options={[
            { label: 'Test', value: 'test1' },
            { label: 'Mantap', value: 'mantap' },
            { label: 'Haha', value: 'Haha' },
            { label: 'Test2', value: 'test2' },
            { label: 'Mantap2', value: 'mantap2' },
            { label: 'Haha2', value: 'Haha2' },
            { label: 'Testw', value: 'test12' },
            { label: 'Mantapw', value: 'mantap12' },
            { label: 'Hahaw', value: 'Haha12' },
            { label: 'Test2w', value: 'test22' },
            { label: 'Mantap2w', value: 'mantap21' },
            { label: 'Haha2w', value: 'Haha22' },
          ]}
          onChange={setFacetedValues}/>
      </div>
    </div>
  );
}