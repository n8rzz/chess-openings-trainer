import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SidebarFactory } from './SidebarFactory.tsx';

describe('SidebarFactory', () => {
  test('should render', () => {
    render(<SidebarFactory />);

    expect(screen.getByText(/Create Training Session/)).toBeInTheDocument();
  });
});
