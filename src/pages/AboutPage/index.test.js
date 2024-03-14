import AboutPage from './index';
import { render } from '@testing-library/react';

describe('Given we are in the about page', () => {
  describe('When AboutPage is loaded', () => {
    let getAllByRoleSpy;

    beforeEach(() => {
      const { getAllByRole } = render(<AboutPage />);
      getAllByRoleSpy = getAllByRole;
    });

    test('Then render the page with 2 sections', () => {
      const sections = getAllByRoleSpy('region');
      expect(sections).toHaveLength(2);
    });

    test('Then the section accordion contain the right title', () => {
      const sections = getAllByRoleSpy('heading');
      expect(sections).toHaveLength(4);
    });
  });
});
