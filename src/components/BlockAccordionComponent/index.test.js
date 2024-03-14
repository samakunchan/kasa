import BlockAccordionComponent from './index';
import { render } from '@testing-library/react';

describe('Given we have a BlockAccordionComponent', () => {
  describe('When the componant is loaded', () => {
    let arrowSpy;
    let titleSpy;

    beforeEach(() => {
      const { getByAltText, getByRole } = render(
        <BlockAccordionComponent title={'Mon Header test'} content={'Le content test'} />,
      );

      titleSpy = getByRole('heading');
      arrowSpy = getByAltText(`Fleche vers le bas`);
    });

    test('Then render the correct title', () => {
      expect(titleSpy.textContent).toEqual('Mon Header test');
    });

    test('Then render the arrow for deploy the accordion', () => {
      expect(arrowSpy.src).toEqual('http://localhost/arrow-up.svg');
    });
  });
});
