import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { SidebarContainer } from '@/components/sidebar';

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <SidebarContainer>
          <Outlet />
        </SidebarContainer>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
