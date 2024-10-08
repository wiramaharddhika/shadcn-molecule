import { Cross2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

interface SearchFilterProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

export function SearchFilter({
  value, onChange, placeholder = 'Search', label, className,
}: SearchFilterProps) {
  const [searchInput, setSearchInput] = useState(value);

  const onSearchInputChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchInput(event.target.value);
  };

  const onSearch = () => {
    onChange(searchInput);
  };

  const onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  const onClear = () => {
    setSearchInput('');
    onChange('');
  };

  return (
    <div className={className}>
      {!!label && <div className="text-sm mb-1 font-semibold">{label}</div>}
      <div className="relative">
        <Input
          className="w-full pr-20 bg-white"
          placeholder={placeholder}
          value={searchInput}
          onChange={onSearchInputChange}
          onKeyUp={onKeyUp}
        />
        <Button
          tabIndex={-1}
          size="icon"
          className="absolute top-0 right-0 w-12 rounded-l-none"
          variant="ghost"
          onClick={onSearch}
        >
          <MagnifyingGlassIcon className="h-5 w-5 fill-muted-foreground" />
        </Button>
        {!!searchInput
        && (
          <Cross2Icon
            className="absolute top-1/2 right-14 -translate-y-1/2 cursor-pointer fill-muted-foreground"
            onClick={onClear}
          />
        )}
      </div>
    </div>
  );
}
