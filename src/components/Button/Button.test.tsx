import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with primary variant', () => {
  render(<Button variant="primary">Primary Button</Button>);
  expect(screen.getByText(/Primary Button/i)).toBeInTheDocument();
});

test('renders disabled button', () => {
  render(<Button variant="primary" disabled>Disabled Button</Button>);
  expect(screen.getByText(/Disabled Button/i)).toBeDisabled();
});
