export class MenuModel {
  constructor({ id, label = 'Home', path = '/', isActive = false }) {
    this._id = id;
    this._label = label;
    this._path = path;
    this._isActive = isActive;
  }

  /**
   * @return {number}
   */
  get id() {
    return this._id;
  }

  /**
   * @return {string}
   */
  get label() {
    return this._label;
  }

  /**
   * @return {string}
   */
  get path() {
    return this._path;
  }

  /**
   * @return {boolean}
   */
  get isActive() {
    return this._isActive;
  }

  /**
   * @param isActive
   */
  set isActive(isActive) {
    this._isActive = isActive;
  }
}
