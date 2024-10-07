import { HTMLAttributes, ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';
import { Sidebar } from './sidebar';

interface SidebarContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function SidebarContainer({ children }: SidebarContainerProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='h-screen'>
      <Sidebar isOpen={isOpen} onOpenChange={setIsOpen}/>
      <main
        className={cn(
          'h-full bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300 p-10',
          isOpen ? 'ml-72' : 'ml-16',
        )}
      >
        {children}
      </main>
    </div>
  );
}