import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tax Info Collector', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tax Info Collector/i);
  expect(linkElement).toBeInTheDocument();
});
