import { createLazyFileRoute } from '@tanstack/react-router';
import { Inputs } from '@/pages/inputs';

export const Route = createLazyFileRoute('/inputs')({
  component: Inputs,
});