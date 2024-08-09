import { render, screen, fireEvent } from '@testing-library/react';
import Menu from './Menu';

test('renders menu closed by default', () => {
  render(<Menu initialState="closed" />);
  expect(screen.queryByText(/Menu Content/i)).not.toBeInTheDocument();
});

test('opens and closes menu on button click', () => {
  render(<Menu initialState="closed" />);
  fireEvent.click(screen.getByText(/Open Menu/i));
  expect(screen.getByText(/Menu Content/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Close Menu/i));
  expect(screen.queryByText(/Menu Content/i)).not.toBeInTheDocument();
});
