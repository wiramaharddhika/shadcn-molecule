import { Link } from '@tanstack/react-router';
import { PanelsTopLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarHeaderProps {
  isOpen: boolean
}

export function SidebarHeader({ isOpen }: SidebarHeaderProps) {
  return (
    <Link to="/" className={cn(
      'flex items-center h-16 p-3 gap-2',
    )}>
      <PanelsTopLeft className="w-10 h-10 flex-shrink-0" />
      <div className={cn(
        'transition-[width] ease-in-out duration-300 overflow-hidden', 
        isOpen ? 'w-full' : 'w-0',
      )}>
        <h1 className='font-bold whitespace-nowrap'>
          Title
        </h1>
        <h2 className='font-semibold text-sm'>Subtitle</h2>
      </div>
    </Link>
  );
}