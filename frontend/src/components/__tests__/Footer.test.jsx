import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Footer from '../Footer';

describe('Footer Component', () => {
  it('renders the brand name and copyright', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    // Use getAllByText as the brand name appears in both logo and copyright
    const brandElements = screen.getAllByText(/Codeshestergn/i);
    expect(brandElements.length).toBeGreaterThanOrEqual(1);
    
    // Check for year
    expect(screen.getByText(new RegExp(new Date().getFullYear().toString()))).toBeInTheDocument();
  });

  it('renders quick links', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByText(/Exploration/i)).toBeInTheDocument();
    expect(screen.getByText(/Accueil/i)).toBeInTheDocument();
    expect(screen.getByText(/Formations/i)).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByText(/Kagbélén, Conakry/i)).toBeInTheDocument();
    expect(screen.getByText(/\+224/i)).toBeInTheDocument();
  });
});
