import './index.scss';
import PropTypes from 'prop-types';
import arrowDown from '../../assets/svg/arrow-down.svg';
import arrowUp from '../../assets/svg/arrow-up.svg';
import { useState } from 'react';

/**
 * Construit la liste des équipements
 * @param data {String}
 * @param index {number}
 * @return {JSX.Element}
 */
const buildListEquipment = (data, index) => <li key={index}>{data}</li>;

/**
 * Créer le composant BlockAccordionComponent.
 * @param title {String}
 * @param content {String | String[]}
 * @return {JSX.Element<BlockAccordionComponent>}
 * @constructor
 */
const BlockAccordionComponent = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const src = isOpen ? arrowUp : arrowDown;
  const alt = `Fleche vers le ${isOpen ? 'haut' : 'bas'}`;

  return (
    <div className='accordion'>
      <div className='header-accordion-disposition' onClick={toggleAccordion}>
        <h4>{title}</h4>
        <img src={src} alt={alt} />
      </div>
      {isOpen && typeof content === 'string' && <p className='accordion-content'>{content}</p>}
      {isOpen && Array.isArray(content) && (
        <ul className='accordion-content'>{content.map(buildListEquipment)}</ul>
      )}
      {content === undefined && <p className='accordion-content'>Aucun renseignement fournis</p>}
    </div>
  );
};

BlockAccordionComponent.propType = {
  title: PropTypes.string.isRequired,
};

BlockAccordionComponent.defaultProps = {
  title: 'Ajouter un titre',
};

export default BlockAccordionComponent;
