import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders Rahul Pendyala and Software Engineer title', () => {
    render(<App />);
    expect(screen.getByText(/Rahul Pendyala/i)).toBeInTheDocument();
    expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
  });

  it('renders social links and under construction notice', () => {
    render(<App />);
    expect(screen.getByText(/Under Construction/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Rahul Pendyala/i)).toHaveAttribute(
      'href',
      'mailto:rahul.pen24@gmail.com'
    );
    expect(screen.getByLabelText(/LinkedIn/i)).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/rahul-pendyala-4a4060163/'
    );
    expect(screen.getByLabelText(/GitHub/i)).toHaveAttribute(
      'href',
      'https://github.com/rahulpen'
    );
  });
});
