import '@testing-library/jest-dom/vitest';

// create the element root in document body
const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);