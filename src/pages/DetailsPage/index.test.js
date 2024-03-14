import { MemoryRouter, useNavigate, useParams } from 'react-router-dom';
import { act, render } from '@testing-library/react';
import DetailsLogementPage from './index';
import { LogementModel } from '../../core/models/logement-model';
import { getOneLogement } from '../../core/services/logementService';
import { logementMock } from '../../core/utils/utils';
jest.mock('../../core/services/logementService');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('Given we are in the home page', () => {
  describe('When DetailsLogementPage is loaded', () => {
    /**
     * @type {LogementModel}
     */
    let logement;

    let navigateMock;

    beforeEach(() => {
      logement = new LogementModel(logementMock);
      useParams.mockReturnValue({ id: logement.id });
      navigateMock = jest.fn();
      useNavigate.mockReturnValue(navigateMock);
    });

    test('Then render the page with the correct logement', async () => {
      // Configure le mock pour retourner le logement simulé
      getOneLogement.mockResolvedValue(logement);

      let getByText;
      await act(async () => {
        const { getByText: getByTextWrapper } = render(
          <MemoryRouter initialEntries={[`/details/${logement.id}`]}>
            <DetailsLogementPage />
          </MemoryRouter>,
        );
        getByText = getByTextWrapper;
      });

      // Effectue des assertions sur le rendu du composant
      expect(getByText(logement.title)).toBeInTheDocument();
      expect(getByText(logement.description)).toBeInTheDocument();
      expect(getOneLogement).toHaveBeenCalled();
      expect(getOneLogement).toHaveBeenCalledWith(logement.id);
    });
  });

  describe('When DetailsLogementPage not is loaded', () => {
    let navigateMock;

    beforeEach(() => {
      useParams.mockReturnValue({ id: undefined });
      navigateMock = jest.fn();
      useNavigate.mockReturnValue(navigateMock);
    });

    test('Then make a redirection to /error', async () => {
      // Configure le mock pour retourner le logement simulé
      getOneLogement.mockResolvedValue(undefined);

      await act(async () => {
        render(
          <MemoryRouter initialEntries={[`/details/123`]}>
            <DetailsLogementPage />
          </MemoryRouter>,
        );
      });

      expect(navigateMock).toHaveBeenCalledWith('/error');
    });
  });
});
