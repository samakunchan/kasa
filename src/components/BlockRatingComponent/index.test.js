import BlockRatingComponent from './index';
import { render } from '@testing-library/react';

describe('Given we have a BlockHostComponent', () => {
  describe('When the componant is loaded', () => {
    test('Then render the correct 5 stars active', () => {
      const { getAllByAltText } = render(<BlockRatingComponent rating={'5'} />);
      const imagesActive = getAllByAltText(/Star active/i);
      expect(imagesActive.length).toEqual(5);
    });

    test('Then render the correct 4 stars active and one non active', () => {
      const { getAllByAltText } = render(<BlockRatingComponent rating={'4'} />);
      const imagesActive = getAllByAltText(/Star active/i);
      const imagesNonActive = getAllByAltText(/Star non active/i);
      expect(imagesActive.length).toEqual(4);
      expect(imagesNonActive.length).toEqual(1);
    });
  });
});
