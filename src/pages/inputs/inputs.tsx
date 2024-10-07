import { DatePicker, DateRangePicker } from '@/components/inputs';

export function Inputs() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className="font-bold">Inputs</h1>
      <div className='w-64 flex flex-col gap-2'>
        <label>Date Picker</label>
        <DatePicker value='2024-01-01' onChange={() => {}} clearable />
      </div>
      <div className='w-64 flex flex-col gap-2'>
        <label>Date Range Picker</label>
        <DateRangePicker onChange={() => {}} clearable />
      </div>
    </div>
  );
}