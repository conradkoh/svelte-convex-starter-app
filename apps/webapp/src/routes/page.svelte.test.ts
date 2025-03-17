import { describe, test, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

// Mock the Convex client
vi.mock('convex-svelte', () => {
  return {
    useQuery: () => ({ 
      data: { version: '1.0.0' }, 
      isLoading: false, 
      error: null 
    }),
    setupConvex: () => ({
      client: {},
      cleanup: vi.fn()
    })
  };
});

// Mock the API import
vi.mock('@workspace/backend/convex/_generated/api', () => {
  return {
    api: {
      appinfo: {
        get: 'appinfo:get'
      }
    }
  };
});

describe('/+page.svelte', () => {
	test('should render h1', () => {
		render(Page);
		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
	});
});
