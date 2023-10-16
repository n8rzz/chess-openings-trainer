import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UiButton } from './UiButton.tsx';

describe('UiButton', () => {
  test('should render', () => {
    render(<UiButton>I am button</UiButton>);

    expect(screen.getByText(/I am button/)).toBeInTheDocument();
  });
});
