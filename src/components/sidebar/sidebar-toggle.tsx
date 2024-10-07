import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

interface SidebarToggleProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export function SidebarToggle({ isOpen, onOpenChange }: SidebarToggleProps) {
  return (
    <div className={cn(
      'absolute top-5 z-20',
      isOpen ? 'right-4' : '-right-4',
    )}>
      <Button
        onClick={() => onOpenChange(!isOpen)}
        className={cn('rounded-md w-8 h-8', {
          'border-0 shadow-none': isOpen,
        })}
        variant="outline"
        size="icon"
      >
        <ChevronLeft
          className={cn(
            'h-4 w-4 transition-transform ease-in-out duration-700',
            isOpen ? 'rotate-0' : 'rotate-180',
          )}
        />
      </Button>
    </div>
  );
} 