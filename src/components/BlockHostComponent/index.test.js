import BlockHostComponent from './index';
import { render } from '@testing-library/react';

describe('Given we have a BlockAccordionComponent', () => {
  describe('When the componant is loaded', () => {
    let arrowSpy;
    const mockHost = {
      name: 'John Doe',
      picture: 'pic.png',
    };

    beforeEach(() => {
      const { getByAltText } = render(
        <BlockHostComponent name={mockHost.name} picture={mockHost.picture} />,
      );
      arrowSpy = getByAltText(mockHost.name);
    });

    test('Then render the correct picture of John Doe', () => {
      expect(arrowSpy.src).toEqual('http://localhost/pic.png');
    });
  });
});
