import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../Hero';

describe('Hero Component', () => {
  it('renders default text when no settings provided', () => {
    render(<Hero />);
    expect(screen.getByText(/Bienvenue chez/i)).toBeInTheDocument();
    expect(screen.getByText(/Codeshestergn/i)).toBeInTheDocument();
    expect(screen.getByText(/Expert en réparation d'imprimantes/i)).toBeInTheDocument();
  });

  it('renders custom settings when provided', () => {
    const settings = {
      hero_title: 'Custom Title',
      hero_subtitle: 'Custom Subtitle'
    };
    render(<Hero settings={settings} />);
    expect(screen.getByText(/Custom Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Custom Subtitle/i)).toBeInTheDocument();
  });

  it('renders call to action buttons', () => {
    render(<Hero />);
    expect(screen.getByText(/Prise de Rendez-vous/i)).toBeInTheDocument();
    expect(screen.getByText(/Voir nos formations/i)).toBeInTheDocument();
  });
});
