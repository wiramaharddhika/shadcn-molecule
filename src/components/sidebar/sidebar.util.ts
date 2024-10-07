import {
  Bookmark,
  LayoutGrid,
  LucideIcon,
  Settings,
  SquarePen,
  Tag,
  Users } from 'lucide-react';

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard',
          label: 'Dashboard',
          active: pathname === '/dashboard',
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Contents',
      menus: [
        {
          href: '',
          label: 'Test',
          active: pathname === '/test',
          icon: SquarePen,
          submenus: [
            {
              href: '/test/inputs',
              label: 'Date Picker',
              active: pathname === '/test/date-picker',
            },
            {
              href: '/test/new',
              label: 'New Post',
              active: pathname === '/test/new',
            },
          ],
        },
        {
          href: '/inputs',
          label: 'Inputs',
          active: pathname === '/inputs',
          icon: Bookmark,
          submenus: [],
        },
        {
          href: '/filters',
          label: 'Filters',
          active: pathname === '/filters',
          icon: Tag,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Settings',
      menus: [
        {
          href: '/users',
          label: 'Users',
          active: pathname === '/users',
          icon: Users,
          submenus: [],
        },
        {
          href: '/account',
          label: 'Account',
          active: pathname === '/account',
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}