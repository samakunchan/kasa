import SectionDescriptionLogementComponent from './index';
import { logementMock } from '../../core/utils/utils';
import { render } from '@testing-library/react';

describe('Given we have a SectionDescriptionLogementComponent', () => {
  describe('When the componant is loaded', () => {
    test('Then test if we can see a section with the correct class', () => {
      const { getByRole, getAllByRole } = render(
        <SectionDescriptionLogementComponent logement={logementMock} />,
      );

      const section = getByRole('region');
      const headers = getAllByRole('heading');
      const h1Headers = headers.filter(header => header.tagName.toLowerCase() === 'h1');

      expect(section).toHaveClass('description-logement');
      expect(h1Headers).toBeTruthy();
    });
  });
});
