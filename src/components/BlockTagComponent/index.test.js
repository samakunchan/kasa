import BlockTagComponent from './index';
import { logementMock } from '../../core/utils/utils';
import { render } from '@testing-library/react';

describe('Given we have a BlockTagComponent', () => {
  describe('When the componant is loaded', () => {
    test('Then render the correct 2 tags', () => {
      const { getAllByRole } = render(<BlockTagComponent tags={logementMock.tags} />);

      const paragraphs = getAllByRole('generic');
      expect(paragraphs.length).toEqual(logementMock.tags.length);
    });
  });
});
