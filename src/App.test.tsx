import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

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
    expect(screen.getByText(/rahul.pen24@gmail.com/i)).toBeInTheDocument();
  });
});
