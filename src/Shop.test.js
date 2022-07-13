import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import Shop from './Shop';
import Homepage from './Homepage';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

// afterEach(cleanup);

describe('First test in React', () => {
  it('shows TYLPHE', () => {
    render(<Shop />, {wrapper: MemoryRouter});
    expect(screen.getByText(/tylphe/i)).toBeTruthy();
  });
})

describe('Navigation', () => {
  it('moves to /shopping-cart/shop/ url when clicked', async () => {
    const user = userEvent.setup();
    render(<Homepage />, {wrapper: BrowserRouter});
    const link = screen.getByRole(`link`);
    expect(link).toBeInTheDocument();
    await user.click(link);
    expect(window.location.href).toBe('http://localhost/shopping-cart/shop');
  });
});