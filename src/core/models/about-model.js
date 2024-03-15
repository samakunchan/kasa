import { AboutDatasModel } from './about-datas-model';

export class AboutModel {
  constructor({ fiability, respect, service, security }) {
    this._fiability = new AboutDatasModel(fiability);
    this._respect = new AboutDatasModel(respect);
    this._service = new AboutDatasModel(service);
    this._security = new AboutDatasModel(security);
  }

  /**
   * @return {AboutDatasModel}
   */
  get fiability() {
    return this._fiability;
  }

  /**
   * @return {AboutDatasModel}
   */
  get respect() {
    return this._respect;
  }

  /**
   * @return {AboutDatasModel}
   */
  get service() {
    return this._service;
  }

  /**
   * @return {AboutDatasModel}
   */
  get security() {
    return this._security;
  }
}
