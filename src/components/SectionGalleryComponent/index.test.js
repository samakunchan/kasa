import SectionGalleryComponent from './index';
import { logementMock } from '../../core/utils/utils';
import { render } from '@testing-library/react';

describe('Given we have a SectionGalleryComponent', () => {
  describe('When the componant is loaded', () => {
    test('Then test if we can see a section with the correct class', () => {
      const { getByRole } = render(<SectionGalleryComponent logement={logementMock} />);

      const section = getByRole('region');

      expect(section).toBeTruthy();
      expect(section).toHaveClass('section-gallery');
    });
  });
});
