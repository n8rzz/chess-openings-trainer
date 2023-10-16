import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UiIf } from './UiIf.tsx';

describe('UiIf', () => {
  describe('when #condition is passed as false', () => {
    test('should not render children', () => {
      render(
        <UiIf condition={false}>
          <div>I am not rendered</div>
        </UiIf>,
      );

      expect(() => screen.getByText(/I am not rendered/)).toThrow();
    });
  });

  describe('when #condition is passed as true', () => {
    test('should render children', () => {
      render(
        <UiIf condition={true}>
          <div>I am rendered</div>
        </UiIf>,
      );

      expect(screen.getByText(/I am rendered/)).toBeInTheDocument();
    });
  });
});
