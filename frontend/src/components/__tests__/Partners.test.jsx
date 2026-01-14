import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Partners from '../Partners';

describe('Partners Component', () => {
  it('renders nothing when no partners provided', () => {
    const { container } = render(<Partners partners={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders partner logos when provided', () => {
    const partners = [
      { id: 1, name: 'Brand A', logo: '/logo-a.png', website: 'https://a.com' },
      { id: 2, name: 'Brand B', logo: '/logo-b.png', website: 'https://b.com' }
    ];
    render(<Partners partners={partners} />);
    expect(screen.getByText(/Ils nous font confiance/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Brand A/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Brand B/i)).toBeInTheDocument();
  });
});
