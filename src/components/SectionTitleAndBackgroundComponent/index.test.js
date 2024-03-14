import SectionTitleAndBackgroundComponent from './index';
import { render } from '@testing-library/react';

describe('Given we have a SectionTitleAndBackgroundComponent', () => {
  describe('When the componant is loaded', () => {
    test('Then test if we can see a section with the correct class', () => {
      const { getByRole } = render(
        <SectionTitleAndBackgroundComponent sourceImage={'source-test.jpg'} />,
      );
      const section = getByRole('region');
      expect(section).toBeTruthy();
      expect(section).toHaveClass('section-title-and-bg');
    });

    test('Then render a h2 if we have a title', () => {
      const { getByRole } = render(
        <SectionTitleAndBackgroundComponent title={'mon titre'} sourceImage={'source-test.jpg'} />,
      );

      const header = getByRole('heading');
      expect(header).toBeTruthy();
      expect(header.textContent).toEqual('mon titre');
    });
  });
});
