import { render, screen } from '@testing-library/react';
import Icon from './Icon';


test('renders primary icon', () => {
  render(<Icon type="primary" />);
  expect(screen.getByRole('img')).toBeInTheDocument(); // Adjust based on your actual rendering logic
});

test('renders disabled icon', () => {
  render(<Icon type="primary" disabled />);
  expect(screen.getByRole('img')).toHaveClass('disabled'); // Adjust based on your actual rendering logic
});
