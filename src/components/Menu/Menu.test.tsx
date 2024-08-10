import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Menu from './Menu';

describe('Menu Component', () => {
  it('renders with initial state "open"', () => {
    render(<Menu initialState="open" />);
    const contentElement = screen.getByText('Menu Content');
    expect(contentElement).not.toBeNull(); // Check if the element exists
  });

  it('renders with initial state "closed"', () => {
    render(<Menu initialState="closed" />);
    const contentElement = screen.queryByText('Menu Content');
    expect(contentElement).toBeNull(); // Ensure the element is not in the document
  });

  it('toggles state when button is clicked', () => {
    render(<Menu initialState="closed" />);
    const buttonElement = screen.getByText('Open Menu');
    fireEvent.click(buttonElement);
    const contentElement = screen.getByText('Menu Content');
    expect(contentElement).not.toBeNull(); // Check if the content is now rendered

    fireEvent.click(screen.getByText('Close Menu'));
    const closedContentElement = screen.queryByText('Menu Content');
    expect(closedContentElement).toBeNull(); // Check if the content is no longer rendered
  });

  it('applies the correct class names', () => {
    render(<Menu initialState="closed" className="primary" />);
    const menuElement = screen.getByRole('button').parentElement;
    expect(menuElement?.className).toContain('menu closed primary');
  });



  it('does not toggle state when disabled', () => {
    render(<Menu initialState="closed" disabled={true} />);
    const buttonElement = screen.getByText('Open Menu');
    fireEvent.click(buttonElement);
    const contentElement = screen.queryByText('Menu Content');
    expect(contentElement).toBeNull(); // Ensure content is not rendered
  });

  it('renders with default initial state "closed" when not provided', () => {
    render(<Menu />);
    const contentElement = screen.queryByText('Menu Content');
    expect(contentElement).toBeNull(); // Check if the content is not rendered by default
  });
});
