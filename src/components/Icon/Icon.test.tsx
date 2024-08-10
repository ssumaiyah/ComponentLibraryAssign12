import { render, screen } from '@testing-library/react';
import Icon from './Icon';

test('renders primary icon', () => {
  render(<Icon name="twitter" url="https://twitter.com" type="primary" />);
  expect(screen.getByRole('img')).toBeInTheDocument(); // Adjust based on your actual rendering logic
});

test('renders disabled icon', () => {
  render(<Icon name="twitter" url="https://twitter.com" type="primary" disabled />);
  expect(screen.getByRole('img')).toHaveClass('disabled'); // Adjust based on your actual rendering logic
});
