import { CheckIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { FacetedFilterOption } from './faceted-filter.type';

interface FacetedFilterProps<T = string, M = object> {
  title?: string;
  values: FacetedFilterOption<T, M>[];
  options: FacetedFilterOption<T, M>[];
  onChange: (newValues: FacetedFilterOption<T, M>[]) => void;
}

export function FacetedFilter<T, M>({
  title,
  options,
  values,
  onChange,
}: FacetedFilterProps<T, M>) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 w-fit">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          {title}
          {values?.length > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {values.length}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {values.length > 2 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {values.length} selected
                  </Badge>
                ) : (
                  values
                    .map((value) => (
                      <Badge
                        variant="secondary"
                        key={value.label}
                        className="rounded-sm px-1 font-normal"
                      >
                        {value.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = values.map(value => value.value).includes(option.value);
                return (
                  <CommandItem
                    key={option.label}
                    onSelect={() => {
                      if (isSelected) {
                        onChange(values.filter(value => value.value !== option.value));
                      } else {
                        onChange([...values, { ...option }]);
                      }
                    }}
                  >
                    <div
                      className={cn(
                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                        isSelected
                          ? 'bg-primary text-primary-foreground'
                          : 'opacity-50 [&_svg]:invisible',
                      )}
                    >
                      <CheckIcon className={cn('h-4 w-4')} />
                    </div>
                    <span>{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
          {values.length > 0 && (
            <div>
              <CommandSeparator />
              <CommandGroup>
                <CommandItem
                  onSelect={() => onChange([])}
                  className="justify-center text-center"
                >
                  Clear filters
                </CommandItem>
              </CommandGroup>
            </div>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
}
