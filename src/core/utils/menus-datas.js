import { MenuModel } from '../models/menu-model';

/**
 * Tableau de menu
 * @type {MenuModel[]}
 */
export const menusDatas = [
  {
    label: 'Accueil',
    path: '/',
    isActive: false,
  },
  {
    label: 'A propos',
    path: '/a-propos',
    isActive: false,
  },
].map((menu, index) => new MenuModel({ id: index, ...menu }));
