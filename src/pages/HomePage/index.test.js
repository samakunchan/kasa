import { render, screen } from '@testing-library/react';
import HomePage from './index';

describe('Given we are in the home page', () => {
  describe('When HomePage is loaded', () => {
    let getAllByRoleSpy;

    beforeEach(() => {
      const { getAllByRole } = render(<HomePage />);
      getAllByRoleSpy = getAllByRole;
    });

    test('Then render the page with the correct title', () => {
      const linkElement = screen.getByText(/Chez vous et partout ailleurs/i);
      expect(linkElement.parentElement).toHaveClass('layer-on-bg');
      expect(linkElement).toBeInTheDocument();
    });

    test('Then render 2 sections only', () => {
      const sections = getAllByRoleSpy('region');
      expect(sections.length).toBe(2);
    });
  });
});
