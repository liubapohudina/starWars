import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it('Render List of characters', async () => {
    render(<App />);

    // check head
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('List of characters');

    // check all lists (async test)
    const lists = await screen.findAllByRole('list');
    expect(lists.length).toBeGreaterThan(0);

    // check the list of characters (async test)
    const characterList = lists.find(list => list.querySelector('li[data-testid="card-element-10"]'));
    expect(characterList).toBeInTheDocument();
    
    // check render button footer
    const btnList = lists.find(list => list.querySelector('li[data-testid="create-btn-footer"]'));
    expect(btnList).toBeInTheDocument();
  });
});

