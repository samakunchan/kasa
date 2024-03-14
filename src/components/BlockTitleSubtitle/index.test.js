import BlockTitleSubtitle from './index';
import { logementMock } from '../../core/utils/utils';
import { render } from '@testing-library/react';

describe('Given we have a BlockTitleSubtitle', () => {
  describe('When the componant is loaded', () => {
    let titleSpy;
    let locationSpy;
    beforeEach(() => {
      const { getByText } = render(
        <BlockTitleSubtitle title={logementMock.title} location={logementMock.location} />,
      );

      titleSpy = getByText(logementMock.title);
      locationSpy = getByText(logementMock.location);
    });

    test('Then render the correct the correct title', () => {
      expect(titleSpy).toBeTruthy();
      expect(titleSpy).toHaveClass('title');
    });

    test('Then render the correct the correct location', () => {
      expect(locationSpy).toBeTruthy();
    });
  });
});
