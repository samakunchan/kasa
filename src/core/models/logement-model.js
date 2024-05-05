import { HostModel } from './host-model';

export class LogementModel {
  constructor({
    id,
    title,
    cover,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  }) {
    this._id = id;
    this._title = title;
    this._cover = cover;
    this._pictures = pictures;
    this._description = description;
    this._host = host;
    this._rating = rating;
    this._location = location;
    this._equipments = equipments;
    this._tags = tags;
  }

  /**
   * @return {String}
   */
  get id() {
    return this._id;
  }

  /**
   * @return {String}
   */
  get title() {
    return this._title;
  }

  /**
   * @return {String}
   */
  get cover() {
    return this._cover;
  }

  /**
   * @return {String[]}
   */
  get pictures() {
    return this._pictures;
  }

  /**
   * @param pictures {string[]}
   */
  set pictures(pictures) {
    this._pictures = pictures;
  }

  /**
   * @return {String}
   */
  get description() {
    return this._description;
  }

  /**
   * @return {HostModel}
   */
  get host() {
    return new HostModel(this._host);
  }

  /**
   * @return {String}
   */
  get rating() {
    return this._rating;
  }

  /**
   * @return {String}
   */
  get location() {
    return this._location;
  }

  /**
   * @return {String[]}
   */
  get equipments() {
    return this._equipments;
  }

  /**
   * @param equipments {string[]}
   */
  set equipments(equipments) {
    this._equipments = equipments;
  }

  /**
   * @return {String[]}
   */
  get tags() {
    return this._tags;
  }

  /**
   * @param tags {string[]}
   */
  set tags(tags) {
    this._tags = tags;
  }

  /**
   * @return {LogementModel[]}
   */
  static get emptyLogements() {
    return [];
  }

  /**
   * @return {LogementModel}
   */
  static get null() {
    return null;
  }
}
