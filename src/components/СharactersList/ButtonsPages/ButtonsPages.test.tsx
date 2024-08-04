import { describe, expect, it, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import { ButtonsPages } from './ButtonsPages';


describe('ButtonsPages', () => {
  it('should render button for navigate between the pages', async () => {
    // mock function
    const handlePrev = vi.fn();
    const handleNext = vi.fn();
      
    render(
      <ButtonsPages handlePrev={handlePrev} handleNext={handleNext} prevPage="prevPageUrl" nextPage="nextPageUrl" />
    );
      
     // checking for all lists (async test)
     const lists = await screen.findAllByRole('list');
     expect(lists.length).toBeGreaterThan(0);
     // checking for the button left if page is number one
     const btnListNavLeft = lists.find(list => list.querySelector('button[data-testid="create-btn-navigate"]'));
     expect(btnListNavLeft).not.toBeDisabled();
      // checking for render button for navigate between the pages
    const btnListNav = lists.find(list => list.querySelector('li[data-testid="create-item-navigate"]'));
    expect(btnListNav).toBeInTheDocument();
  })
});