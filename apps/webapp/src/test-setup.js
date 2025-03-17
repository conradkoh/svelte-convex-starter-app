// test-setup.js
import { vi } from 'vitest';

// Mock the convex-svelte module
vi.mock('convex-svelte', async () => {
  const actual = await vi.importActual('convex-svelte');
  return {
    ...actual,
    useQuery: vi.fn().mockReturnValue({ data: null, isLoading: false, error: null }),
    useMutation: vi.fn().mockReturnValue([vi.fn(), { isLoading: false, error: null }]),
    useConvexClient: vi.fn().mockReturnValue({}),
    setupConvex: vi.fn().mockReturnValue({
      client: {},
      cleanup: vi.fn()
    })
  };
});
