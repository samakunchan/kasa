import './index.scss';
import PropTypes from 'prop-types';
import defaultArrow from '../../assets/svg/arrow-up.svg';
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
    if (content !== undefined) {
      setIsOpen(!isOpen);
    }
  };

  const alt = `Fleche vers le ${isOpen ? 'haut' : 'bas'}`;

  return (
    <div className='accordion'>
      <div className={`header-accordion-disposition`} onClick={toggleAccordion}>
        <h4>{title}</h4>
        <img className={`${isOpen && 'rotated'}`} src={defaultArrow} alt={alt} />
      </div>
      {typeof content === 'string' && (
        <p className={`para-accordion-content ${isOpen ? 'is-open' : 'is-closed'}`}>{content}</p>
      )}
      {Array.isArray(content) && (
        <ul className={`list-accordion-content ${isOpen ? 'is-open' : 'is-closed'}`}>
          {content.map(buildListEquipment)}
        </ul>
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
