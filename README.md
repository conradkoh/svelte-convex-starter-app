# Svelte Convex Starter App

A starter application using Svelte and Convex with NX for workspace management.

## Project Structure

- `apps/webapp`: Svelte frontend application
- `services/backend`: Convex backend service

## Available Commands

Run these commands from the root directory:

- `pnpm run dev`: Start both the frontend and backend in development mode
- `pnpm run test`: Run tests for all projects
- `pnpm run typecheck`: Run type checking for all projects
- `pnpm run build`: Build all projects

## Development

This project uses NX to manage the workspace and run commands in parallel across all projects. The configuration is in `nx.json` and each project has its own `project.json` file.

## Testing

This project uses Vitest for testing Svelte components. The test configuration is set up to work with Svelte 5, which requires special configuration for component testing.

Key testing features:
- JSDOM environment for simulating the browser
- Mocked Convex client for testing components that use Convex data
- Browser resolution conditions to support Svelte 5 lifecycle functions

To write tests:
1. Create a `.test.ts` file next to your component
2. Import testing utilities from `@testing-library/svelte`
3. Write tests using the render function and assertions

Example:
```typescript
import { render, screen, fireEvent } from '@testing-library/svelte';
import MyComponent from './MyComponent.svelte';

test('should render correctly', () => {
  render(MyComponent, { props: { text: 'Hello' } });
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

## Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start development servers: `pnpm run dev`
