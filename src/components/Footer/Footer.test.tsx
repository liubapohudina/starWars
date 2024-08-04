import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe("Footer", () => {
  it('Render footer text', () => {
    render(<Footer/>);

    // checking for the text
    expect(screen.getByText('I hope that this application will be useful for you')).toBeInTheDocument();

    // checking for the link
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument(); // checking for link is in the document
    expect(link).toHaveAttribute('href', 'https://github.com/liubapohudina/starWars');// checking for correct link
  })
})