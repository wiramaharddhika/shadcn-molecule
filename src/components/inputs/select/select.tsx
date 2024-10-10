import { Cross2Icon } from '@radix-ui/react-icons';
import { ForwardedRef, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../../ui/button';
import {
  Select as BaseSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';

export interface SelectOption<T, M> {
  label: string;
  value: T;
  meta?: M;
}

export interface SelectProps<T, M> {
  value?: T;
  options: SelectOption<T, M>[];
  onChange: (value?: T) => void;
  placeholder?: string;
  id?: string;
  className?: string;
  clearable?: boolean;
}

function SelectInner<T extends string | number, M>({
  value,
  options,
  onChange,
  placeholder,
  id,
  className,
  clearable = false,
}: SelectProps<T, M>, ref: ForwardedRef<HTMLButtonElement>) {
  const onValueChange = (newValue: string) => {
    if (typeof options[0]?.value === 'number') {
      onChange(Number(newValue) as T);
    } else {
      onChange(newValue as T);
    }
  };

  const onValueClear = () => {
    onChange(undefined);
  };

  return (
    <BaseSelect onValueChange={onValueChange} value={`${value}`}>
      <SelectTrigger className={cn('w-full bg-white', className)} id={id} ref={ref}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {clearable && !!value && (
          <Button
            variant="ghost"
            onClick={onValueClear}
            className="w-full flex justify-end items-center gap-2 text-sm h-8 px-2 text-muted-foreground"
          >
            <Cross2Icon className="h-3.5 w-3.5" />
            Clear
          </Button>

        )}
        {options.map((option) => (
          <SelectItem key={option.value} value={`${option.value}`}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </BaseSelect>
  );
}

export const Select = forwardRef(
  SelectInner,
) as <T, M>(props: SelectProps<T, M> & { ref?: ForwardedRef<HTMLButtonElement> }
) => ReturnType<typeof SelectInner>;
