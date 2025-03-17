import { describe, test, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Button from './Button.svelte';

describe('Button.svelte', () => {
  test('should render with default text', () => {
    render(Button);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  test('should render with custom text', () => {
    render(Button, { props: { text: 'Click Me' } });
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('should call onClick handler when clicked', async () => {
    const onClick = vi.fn();
    render(Button, { props: { onClick } });
    
    await fireEvent.click(screen.getByText('Button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
