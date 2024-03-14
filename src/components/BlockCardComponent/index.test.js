import BlockCardComponent from './index';
import { MemoryRouter } from 'react-router-dom';
import { logementMock } from '../../core/utils/utils';
import { render } from '@testing-library/react';

describe('Given we have a BlockCardComponent', () => {
  describe('When the componant is loaded', () => {
    let imageSpy;
    let linkSpy;
    let titleSpy;

    beforeEach(() => {
      const { getByRole, getByAltText } = render(
        <MemoryRouter>
          <BlockCardComponent
            id={logementMock.id}
            title={logementMock.title}
            src={logementMock.cover}
          />
        </MemoryRouter>,
      );

      linkSpy = getByRole('link');
      imageSpy = getByAltText(logementMock.title);
      titleSpy = getByRole('heading');
    });

    test('Then test if we can see the right url', () => {
      expect(linkSpy.href).toEqual('http://localhost/1/logement-test');
    });

    test('Then test if we can see the right class', () => {
      expect(linkSpy).toHaveClass('card');
    });

    test('Then test if we can see the right alt in image', () => {
      expect(imageSpy).toBeTruthy();
    });

    test('Then test if we can see the right title in the card', () => {
      expect(titleSpy.textContent).toEqual(logementMock.title);
    });
  });
});
