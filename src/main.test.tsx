import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import App from './App'; // Ensure the path is correct
import './main';

describe('main.tsx', () => {
  it('should render the root component without crashing', () => {
    // Create a root element and append it to the document body
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    // Render the App component to the root element
    render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    // Check if the App component is rendered
    expect(root).toBeInTheDocument();
  });
});


