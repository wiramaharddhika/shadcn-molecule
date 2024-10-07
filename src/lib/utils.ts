import { ReactNode } from '@tanstack/react-router';
import { type ClassValue,clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function match(...cases: [boolean, ReactNode][]) {
  for (const [condition, element] of cases) {
    if (condition) {
      return element;
    }
  }
  return null;
}