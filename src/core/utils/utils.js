/**
 * @example
 * const titre = 'Mon titre au hasard'
 * console.log(getSlug(titre)) // mon-titre-au-hasard
 * @param title {string}
 * @return {string}
 */
export const getSlug = title =>
  title
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .split(' ')
    .join('-');

/**
 * Total : 5
 * @type {number}
 */
export const maximumStars = 5;

/**
 * "Titre de la section"
 * @type {string}
 */
export const defaultCardText = 'Titre de la section';
