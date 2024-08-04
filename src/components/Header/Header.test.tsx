import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('Render Logo', () => {
  render(<Header/>);

  // checking for the logo
  expect(screen.getByAltText('Logo star wasrs')).toBeInTheDocument();
});

