import { ErrorModel } from '../models/error-model';
import { LogementModel } from '../models/logement-model';

/**
 * Récupère l'ensemble des logements depuis l'API
 * @return {Promise<LogementModel[]>}
 */
export const getLogements = () => {
  return (
    fetch('datas/logements.json')
      .then(response => response.json())
      .then(response => response.map(datas => new LogementModel(datas)))
      // .catch(error => new ErrorModel({ message: error.message }))
      .catch(error => {
        console.error(new ErrorModel({ message: error.message }));
        return LogementModel.emptyLogements;
      })
  );
};
