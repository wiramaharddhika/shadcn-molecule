import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Tooltip, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { Link, useLocation } from '@tanstack/react-router';
import { Ellipsis, LogOut } from 'lucide-react';
import { cn, match } from '@/lib/utils';
import { Button } from '../ui/button';
import { TooltipContent } from '../ui/tooltip';
import { CollapseMenuButton } from './collapse-menu-button';
import { getMenuList } from './sidebar.util';
import { SidebarHeader } from './sidebar-header';
import { SidebarToggle } from './sidebar-toggle';

interface SidebarProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export function Sidebar({ isOpen, onOpenChange }: SidebarProps) {
  const { pathname } = useLocation();
  const menuList = getMenuList(pathname);

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 h-screen transition-[width] ease-in-out duration-300',
        isOpen ? 'w-72' : 'w-16',
      )}
    >
      <SidebarToggle isOpen={isOpen} onOpenChange={onOpenChange} />
      <div className="flex flex-col h-full shadow-md dark:shadow-zinc-800">
        <SidebarHeader isOpen={isOpen} />
        <ScrollArea className='flex-1'>
          <nav className="mt-8 h-full w-full">
            <ul className="flex flex-col items-start space-y-1 px-2">
              {menuList.map(({ groupLabel, menus }, index) => (
                <li className={cn('w-full', groupLabel ? 'pt-5' : '')} key={index}>
                  {match(
                    [isOpen && !!groupLabel, (
                      <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                        {groupLabel}
                      </p>
                    )],
                    [!isOpen && !!groupLabel, (
                      <TooltipProvider>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger className="w-full">
                            <div className="w-full flex justify-center items-center">
                              <Ellipsis className="h-5 w-5" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            <p>{groupLabel}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )],
                    [true, (
                      <p className="pb-2" />
                    )],
                  )}
                  {menus.map(
                    ({ href, label, icon: Icon, active, submenus }, index) =>
                      submenus.length === 0 ? (
                        <div className="w-full" key={index}>
                          <TooltipProvider disableHoverableContent>
                            <Tooltip delayDuration={100}>
                              <TooltipTrigger asChild>
                                <Button
                                  variant={active ? 'secondary' : 'ghost'}
                                  className={cn('w-full h-10 mb-1', isOpen ? 'justify-start' : 'justify-center')}
                                  asChild
                                >
                                  <Link to={href}>
                                    <span
                                      className={cn({ 'mr-4' : isOpen })}
                                    >
                                      <Icon size={18} />
                                    </span>
                                    <p
                                      className={cn(
                                        'max-w-[200px] truncate',
                                        isOpen ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0',
                                      )}
                                    >
                                      {label}
                                    </p>
                                  </Link>
                                </Button>
                              </TooltipTrigger>
                              {!isOpen && (
                                <TooltipContent side="right">
                                  {label}
                                </TooltipContent>
                              )}
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      ) : (
                        <div className="w-full" key={index}>
                          <CollapseMenuButton
                            icon={Icon}
                            label={label}
                            active={active}
                            submenus={submenus}
                            isOpen={isOpen}
                          />
                        </div>
                      ),
                  )}
                </li>
              ))}
              <li className="w-full grow flex items-end">
                <TooltipProvider disableHoverableContent>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={() => {}}
                        variant="outline"
                        className="w-full justify-center h-10 mt-5"
                      >
                        <span className={cn(isOpen === false ? '' : 'mr-4')}>
                          <LogOut size={18} />
                        </span>
                        <p
                          className={cn(
                            'whitespace-nowrap',
                            isOpen ? 'opacity-100' : 'opacity-0 hidden',
                          )}
                        >
                          Sign out
                        </p>
                      </Button>
                    </TooltipTrigger>
                    {!isOpen && (
                      <TooltipContent side="right">Sign out</TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </li>
            </ul>
          </nav>
        </ScrollArea>
      </div>
    </aside>
  );
}