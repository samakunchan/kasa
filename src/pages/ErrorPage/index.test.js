import { render, screen } from '@testing-library/react';
import ErrorPage from './index';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Tests d'intégrations
 */
describe('Given we are in the Error page', () => {
  describe('When Error is loaded', () => {
    test('Then render the page with the correct title', () => {
      render(
        <Router>
          <ErrorPage />
        </Router>,
      );

      const title = screen.getByRole('heading');
      expect(title).toBeInTheDocument();
      expect(title.textContent).toEqual('404');
    });

    test('Then render the page with the correct paragraph', () => {
      render(
        <Router>
          <ErrorPage />
        </Router>,
      );

      const text = screen.getByText(`Oups! La page que vous demandez n'existe pas.`);
      expect(text).toBeInTheDocument();
    });

    test('Then render the page with the correct link', () => {
      render(
        <Router>
          <ErrorPage />
        </Router>,
      );

      const text = screen.getByRole(`link`);
      expect(text).toBeInTheDocument();
      expect(text.textContent).toEqual(`Retourner sur la page d'accueil`);
      expect(text.href).toEqual(`http://localhost/`);
    });
  });
});

/**
 * Tests unitaires
 */
