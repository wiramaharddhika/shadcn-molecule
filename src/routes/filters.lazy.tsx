import { createLazyFileRoute } from '@tanstack/react-router';
import { Filters } from '@/pages/filters';

export const Route = createLazyFileRoute('/filters')({
  component: Filters,
});
