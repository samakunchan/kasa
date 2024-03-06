import { messageNotFound } from '../utils/error-messages';

export class ErrorModel {
  constructor({ statusCode = 400, message }) {
    this._statusCode = statusCode;
    this._message = message;
  }

  get statusCode() {
    return this._statusCode;
  }

  get message() {
    return this._message;
  }

  static get notFound() {
    return new ErrorModel({ statusCode: 404, message: messageNotFound });
  }
}
