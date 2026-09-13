import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const EXPECTED_EMAIL = ['rahul.pen24', 'gmail.com'].join('@');

describe('App', () => {
  it('renders Rahul Pendyala and role', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Rahul Pendyala/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
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
    expect(screen.getByText(/^Email$/)).toBeInTheDocument();
  });

  it('does not expose the email address until the visitor interacts', () => {
    const { container } = render(<App />);
    expect(container.innerHTML).not.toContain(EXPECTED_EMAIL);
    expect(container.innerHTML).not.toContain('mailto:');

    const link = screen.getByLabelText(/Email Rahul Pendyala/i);
    expect(link).not.toHaveAttribute('href');

    fireEvent.focus(link);
    expect(link).toHaveAttribute('href', `mailto:${EXPECTED_EMAIL}`);
    expect(link).toHaveAttribute('title', EXPECTED_EMAIL);
  });
});
