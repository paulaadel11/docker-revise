import { render, screen } from '@testing-library/react';
import App from './App';

test('renders love message', () => {
  render(<App />);
  const textElement = screen.getByText(/to my love/i);
  expect(textElement).toBeInTheDocument();
});