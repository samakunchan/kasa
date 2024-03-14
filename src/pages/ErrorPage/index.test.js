import { Link, MemoryRouter } from 'react-router-dom';
import ThemeProvider, { ThemeContext } from '../../core/utils/theme-provider';
import { fireEvent, render, screen } from '@testing-library/react';
import ErrorPage from './index';

/**
 * Tests d'intégrations
 */
describe('Given we are in the Error page', () => {
  describe('When Error page is loaded', () => {
    let getByRoleSpy;

    beforeEach(() => {
      const { getByRole } = render(
        <MemoryRouter>
          <ErrorPage />
        </MemoryRouter>,
      );
      getByRoleSpy = getByRole;
    });

    test('Then render the page with the correct title', () => {
      const title = getByRoleSpy('heading');
      expect(title).toBeInTheDocument();
      expect(title.textContent).toEqual('404');
    });

    test('Then render the page with the correct paragraph', () => {
      const text = screen.getByText(`Oups! La page que vous demandez n'existe pas.`);
      expect(text).toBeInTheDocument();
    });

    test('Then render the page with the correct link', () => {
      const link = getByRoleSpy(`link`);
      expect(link).toBeInTheDocument();
      expect(link.textContent).toEqual(`Retourner sur la page d'accueil`);
      expect(link.href).toEqual(`http://localhost/`);
    });
  });
});

/**
 * Tests unitaires
 */
describe('Given we are in the Error page', () => {
  describe('When Error page is loaded', () => {
    test('Then test the click to return to homepage is called', () => {
      const changeIndexMenuActive = jest.fn();
      const value = { changeIndexMenuActive };
      render(
        <ThemeProvider value={{ value }}>
          <MemoryRouter>
            <Link
              className='link'
              to={'/'}
              onClick={() => {
                changeIndexMenuActive();
              }}
            >
              Retourner sur la page d'accueil
            </Link>
          </MemoryRouter>
        </ThemeProvider>,
      );

      const link = screen.getByRole(`link`);
      fireEvent.click(link);
      expect(changeIndexMenuActive).toHaveBeenCalledTimes(1);
    });

    test('Then changeIndexMenuActive is called when link is clicked', () => {
      const changeIndexMenuActiveMock = jest.fn();
      const value = { changeIndexMenuActive: changeIndexMenuActiveMock };

      render(
        <ThemeContext.Provider value={value}>
          <MemoryRouter initialEntries={['/error-page']}>
            <ErrorPage />
          </MemoryRouter>
        </ThemeContext.Provider>,
      );

      const link = screen.getByRole('link', { name: /Retourner sur la page d'accueil/i });
      fireEvent.click(link);

      expect(changeIndexMenuActiveMock).toHaveBeenCalledTimes(1);
    });
  });
});
