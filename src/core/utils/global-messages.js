import { AboutModel } from '../models/about-model';

export const aboutDatas = {
  fiability: {
    title: `Fiabilité`,
    content: `Les annonces postées sur Kasa garantissent une fiabilité totale. 
    Les photos sont conformes aux logements, et toutes les informations 
    sont régulièrement vérifiées  par nos équipes.`,
  },
  respect: {
    title: `Respect`,
    content: `La bienveillance fait partie des valeurs fondatrices de Kasa. 
    Tout comportement discriminatoire ou de perturbation du 
    voisinage entraînera une exclusion de notre plateforme.`,
  },
  service: {
    title: `Service`,
    content: `La bienveillance fait partie des valeurs fondatrices de Kasa. 
    Tout comportement discriminatoire ou de perturbation du 
    voisinage entraînera une exclusion de notre plateforme.`,
  },
  security: {
    title: `Sécurité`,
    content: `La sécurité est la priorité de Kasa. 
    Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond 
    aux critères de sécurité établis par nos services. En laissant une note aussi bien 
    à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards 
    sont bien respectés. 
    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`,
  },
};

/**
 * Les messges des la pages "a propos" en objet
 * @type {AboutModel}
 */
export const aboutModel = new AboutModel(aboutDatas);
