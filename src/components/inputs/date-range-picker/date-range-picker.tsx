import { ArrowRightIcon, CalendarIcon, CheckIcon,Cross2Icon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { forwardRef, useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { Button } from '../../ui/button';
import { Calendar } from '../../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';

export interface DateRangeValue {
  from: string,
  to: string
}

export interface DateRangePickerProps {
  id?: string;
  value?: DateRangeValue;
  onChange: (value?: DateRangeValue) => void;
  className?: string;
  placeholder?: string;
  clearable?: boolean;
}

const DateRangePicker = forwardRef<HTMLButtonElement, DateRangePickerProps>(
  ({
    value,
    onChange,
    id,
    className,
    placeholder,
    clearable = false,
  }, ref) => {
    const [open, setOpen] = useState(false);

    const [inputValue, setInputValue] = useState<DateRange | undefined>({
      from: value?.from ? new Date(value.from) : undefined,
      to: value?.to ? new Date(value.to) : undefined,
    });

    const disabledAction = !inputValue?.from || !inputValue.to;

    const onApply = () => {
      onChange({
        from: inputValue!.from!.toISOString(),
        to: inputValue!.to!.toISOString(),
      });
      setOpen(false);
    };

    const onClear = () => {
      onChange(undefined);
      setOpen(false);
    };

    useEffect(() => {
      setInputValue({
        from: value?.from ? new Date(value.from) : undefined,
        to: value?.to ? new Date(value.to) : undefined,
      });
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
              <div className="flex items-center gap-2">
                {format(new Date(value.from), 'dd-MM-yyyy')}
                <ArrowRightIcon className="w-3 h-3" />
                {value.to && format(new Date(value.to), 'dd-MM-yyyy')}
              </div>
            ) : (
              <span>{placeholder}</span>
            )}
            <CalendarIcon className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" sideOffset={-150}>
          <Calendar
            initialFocus
            mode="range"
            numberOfMonths={2}
            selected={inputValue}
            onSelect={setInputValue}
          />
          <div className="flex p-3 gap-4 justify-end">
            {clearable
              && (
                <Button
                  variant="secondary"
                  className="flex gap-2"
                  onClick={onClear}
                  disabled={disabledAction}
                >
                  <Cross2Icon />
                  Clear
                </Button>
              )}
            <Button
              className="flex gap-2"
              onClick={onApply}
              disabled={disabledAction}
            >
              <CheckIcon />
              Apply
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
);

DateRangePicker.displayName = 'DateRangePicker';

export { DateRangePicker };
