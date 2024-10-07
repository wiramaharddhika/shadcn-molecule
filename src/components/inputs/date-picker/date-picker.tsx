import { CalendarIcon, CheckIcon, Cross2Icon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { forwardRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../../ui/button';
import { Calendar } from '../../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';

export interface DatePickerProps {
  id?: string;
  value?: string;
  onChange: (value?: string) => void;
  className?: string;
  placeholder?: string;
  clearable?: boolean;
}

const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(({
  value,
  onChange,
  id,
  className,
  placeholder,
  clearable = false,
}, ref) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState<Date | undefined>(
    value ? new Date(value) : undefined,
  );

  const onApply = () => {
    onChange(inputValue?.toISOString());
    setOpen(false);
  };

  const onClear = () => {
    onChange(undefined);
    setOpen(false);
  };

  useEffect(() => {
    setInputValue(value ? new Date(value) : undefined);
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={ref}
          id={id}
          variant="outline"
          className={cn(
            'w-full flex justify-between gap-2 text-left font-normal',
            !value && 'text-muted-foreground',
            className,
          )}
        >
          {value ? (
            format(new Date(value), 'dd-MM-yyyy')
          ) : (
            <span>{placeholder}</span>
          )}
          <CalendarIcon className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          initialFocus
          mode="single"
          selected={inputValue && new Date(inputValue)}
          onSelect={setInputValue}
          footer={(
            <div className="flex pt-6 gap-4 justify-end">
              {clearable
              && (
                <Button
                  variant="secondary"
                  className="flex gap-2"
                  onClick={onClear}
                  disabled={!inputValue}
                >
                  <Cross2Icon />
                  Clear
                </Button>
              )}
              <Button
                className="flex gap-2"
                onClick={onApply}
                disabled={!inputValue}
              >
                <CheckIcon />
                Apply
              </Button>
            </div>
          )}
        />
      </PopoverContent>
    </Popover>
  );
});

DatePicker.displayName = 'DatePicker';

export { DatePicker };
