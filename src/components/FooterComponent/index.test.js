import FooterComponent from './index';
import { render } from '@testing-library/react';

describe('Given we have a HeaderComponent', () => {
  describe('When the componant is loaded', () => {
    test('Then test if we can see the logo in black and white', () => {
      const { getByAltText } = render(<FooterComponent />);

      expect(getByAltText('Logo du site en noir et blanc')).toBeTruthy();
    });
  });
});
