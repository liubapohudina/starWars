import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

// Mock the components
vi.mock('./components/Header/Header', () => ({
  Header: () => <div data-testid="header">Header</div>
}));

vi.mock('./components/СharactersList/СharactersList', () => ({
  CharactersList: () => <div data-testid="characters-list">Characters List</div>
}));

vi.mock('./components/Footer/Footer', () => ({
  Footer: () => <div data-testid="footer">Footer</div>
}));

describe('App', () => {
  it('renders Header, CharactersList, and Footer components', () => {
    // render the App component
    render(<App />);

    // check if the Header component is rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();
    
    // check if the CharactersList component is rendered
    expect(screen.getByTestId('characters-list')).toBeInTheDocument();
    
    // check if the Footer component is rendered
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});


