import { createContext, useState } from 'react';

/**
 * Créer le contexte.
 * Le but de ce contexte est d'aller chez un index afin de sélectionner le bon élément d'un tableau de menu `menusDatas`
 * A chaque clic, ce contexte nous dira sur quel page nous sommes.
 * @type {React.Context<number>}
 */
export const ThemeContext = createContext(-1);

/**
 * Créer le provider
 * @param children
 * @return {JSX.Element<ThemeProvider>}
 * @constructor
 */
const ThemeProvider = ({ children }) => {
  let initialIndexMenu;
  const checkUrl = window.location.pathname.split('/').filter(url => url !== '' && url !== 'kasa');

  if (checkUrl.includes('page-introuvable')) {
    initialIndexMenu = -1;
  } else if (checkUrl.includes('a-propos')) {
    initialIndexMenu = 1;
  } else {
    initialIndexMenu = 0;
  }

  const [indexMenuActive, setIndexMenuActive] = useState(initialIndexMenu);

  const changeIndexMenuActive = index => {
    setIndexMenuActive(index);
  };

  return (
    <ThemeContext.Provider value={{ indexMenuActive, changeIndexMenuActive }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
