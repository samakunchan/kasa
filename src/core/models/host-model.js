export class HostModel {
  constructor({ name, picture }) {
    this._name = name;
    this._picture = picture;
  }

  /**
   * @return {String}
   */
  get name() {
    return this._name;
  }

  /**
   * @return {String}
   */
  get picture() {
    return this._picture;
  }
}
