import { LogementModel } from '../models/logement-model';
import { getOneLogement } from './logementService';
import { logementMock } from '../utils/utils';

global.fetch = jest.fn();

describe('Given we are using the LogementService', () => {
  describe('When we use getOneLogement method', () => {
    test('Then render only one logement the request is successful', async () => {
      const logement = new LogementModel(logementMock);

      // Simule une réponse réussie
      fetch.mockResolvedValueOnce({
        json: async () => [logement],
        ok: true,
        status: 200,
      });

      // Appeler la fonction getOneLogement avec l'ID du logement
      const result = await getOneLogement(logement.id);

      // Vérifie que fetch a été appelé avec le bon endpoint
      expect(fetch).toHaveBeenCalledWith('/datas/logements.json');

      // Vérifie que la fonction retourne les données attendues
      expect(result).toEqual(logement);
    });

    test('Then render only an empty array the request is failure', async () => {
      const logement = new LogementModel(logementMock);

      // Simulez une réponse d'erreur
      fetch.mockRejectedValueOnce(new Error('Internal Server Error'));

      // Appeler la fonction getOneLogement avec l'ID du logement
      const result = await getOneLogement(logement.id);

      // Vérifie que fetch a été appelé avec le bon endpoint
      expect(fetch).toHaveBeenCalledWith('/datas/logements.json');

      // Vérifie que la fonction retourne les données attendues
      expect(result).toEqual(LogementModel.null);
    });
  });
});
