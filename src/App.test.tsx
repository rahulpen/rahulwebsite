import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
    });
  });

  it('renders Rahul Pendyala and role', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Rahul Pendyala/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Software Engineer/i).length).toBeGreaterThan(0);
  });

  it('renders contact links and under construction status', () => {
    render(<App />);
    expect(screen.getByText(/Under Construction/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Rahul Pendyala LinkedIn/i)).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/rahul-pendyala-4a4060163/'
    );
    expect(screen.getByLabelText(/Rahul Pendyala GitHub/i)).toHaveAttribute(
      'href',
      'https://github.com/rahulpen'
    );
    expect(screen.getByText(/rahul.pen24@gmail.com/i)).toBeInTheDocument();
  });

  it('copies the email address to the clipboard', async () => {
    render(<App />);
    const button = screen.getByLabelText(/Copy email address/i);
    fireEvent.click(button);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('rahul.pen24@gmail.com');
    await waitFor(() => expect(button).toHaveAttribute('data-copied', 'true'));
  });
});
