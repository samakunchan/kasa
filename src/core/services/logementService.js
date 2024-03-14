// import { ErrorModel } from '../models/error-model';
import { LogementModel } from '../models/logement-model';

/**
 * Récupère l'ensemble des logements depuis l'API
 * @return {Promise<LogementModel[]>}
 */
export const getLogements = () => {
  return fetch('/datas/logements.json')
    .then(getJson)
    .then(response => mapRecords(response))
    .catch(catchError);
};

/**
 * Récupère un seul logement en fonction de l'id
 * @param id {String}
 * @return {Promise<LogementModel>}
 */
export const getOneLogement = id => {
  return fetch('/datas/logements.json')
    .then(getJson)
    .then(response => mapRecords(response))
    .then(response => getOneById(response, id))
    .catch(catchError);
};

/**
 * @param response
 * @return {Response}
 */
const getJson = response => response.json();

/**
 * @param records
 * @return {LogementModel[]}
 */
const mapRecords = records => records.map(datas => new LogementModel(datas));

/**
 * @return {LogementModel}
 * @param response {Record[]}
 * @param id {string}
 */
const getOneById = (response, id) => response.find(datas => datas.id === id);

/**
 * @return {LogementModel[]}
 */
const catchError = () => {
  // console.error(new ErrorModel({ message: error.message }));
  return LogementModel.emptyLogements;
};
