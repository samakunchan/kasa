import { render, screen } from '@testing-library/react';
import HomePage from './index';

describe('Given we are in the home page', () => {
  describe('When HomePage is loaded', () => {
    test('Then render the page with the correct title', () => {
      render(<HomePage />);
      const linkElement = screen.getByText(/Chez vous et partout ailleurs/i);
      expect(linkElement.parentElement).toHaveClass('layer-on-bg');
      expect(linkElement).toBeInTheDocument();
    });

    test('Then render 2 sections only', () => {
      const { getAllByRole } = render(<HomePage />);
      const sections = getAllByRole('region');
      expect(sections.length).toBe(2);
    });
  });
});
