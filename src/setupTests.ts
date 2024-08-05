import '@testing-library/jest-dom/vitest';

// create the element root in document body
const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);


// Mocking ResizeObserver to avoid errors in test environment
// ResizeObserver is a web API used for observing changes to an element's size.
// In the test environment, this API may not be available, causing errors
// when components or libraries that rely on it are used. By providing
// a mock implementation with empty methods, we ensure that tests can run
// without encountering errors related to ResizeObserver.
// 
// The mock implementation here defines the observe, unobserve, and disconnect
// methods as no-op functions, which are sufficient for the purpose of
// allowing the tests to execute without issues related to ResizeObserver.

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};


