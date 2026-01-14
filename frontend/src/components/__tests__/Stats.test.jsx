import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Stats from '../Stats';

describe('Stats Component', () => {
  it('renders default values when no settings are provided', () => {
    render(<Stats />);
    expect(screen.getByText(/500\+/i)).toBeInTheDocument();
    expect(screen.getByText(/98%/i)).toBeInTheDocument();
    expect(screen.getByText(/Élèves formés/i)).toBeInTheDocument();
  });

  it('renders custom values from settings prop', () => {
    const customSettings = {
      students_count: '1200+',
      satisfaction_rate: '100%',
      years_expertise: '15+',
      support_hours: '24/7/365'
    };
    render(<Stats settings={customSettings} />);
    expect(screen.getByText(/1200\+/i)).toBeInTheDocument();
    expect(screen.getByText(/100%/i)).toBeInTheDocument();
    expect(screen.getByText(/15\+/i)).toBeInTheDocument();
    expect(screen.getByText(/24\/7\/365/i)).toBeInTheDocument();
  });
});
