export class AboutDatasModel {
  constructor({ title, content }) {
    this._title = title;
    this._content = content;
  }

  /**
   * @return {string}
   */
  get title() {
    return this._title;
  }

  /**
   * @return {string}
   */
  get content() {
    return this._content;
  }
}
