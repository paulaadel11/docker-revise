import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app text', () => {
  render(<App />);
  const textElement = screen.getByText(/i luv sandoo/i);
  expect(textElement).toBeInTheDocument();
});
test('renders app text', () => {
  render(<App />);
  const textElement = screen.getByText(/i luv sandoo/i);
  expect(textElement).toBeInTheDocument();
});
test('renders app text', () => {
  render(<App />);
  const textElement = screen.getByText(/i luv sandoo/i);
  expect(textElement).toBeInTheDocument();
});

