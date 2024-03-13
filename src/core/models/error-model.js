import { messageNotFound } from '../utils/error-messages';

export class ErrorModel {
  constructor({ statusCode = 400, message }) {
    this._statusCode = statusCode;
    this._message = message;
  }

  /**
   * @return {number}
   */
  get statusCode() {
    return this._statusCode;
  }

  /**
   * @return {String}
   */
  get message() {
    return this._message;
  }

  /**
   * Retourne le model de l'érreur 404
   * @return {ErrorModel}
   */
  static get notFound() {
    return new ErrorModel({ statusCode: 404, message: messageNotFound });
  }
}
