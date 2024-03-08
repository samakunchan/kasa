import './index.scss';
import PropTypes from 'prop-types';

/**
 * Créer le composant DescriptionLogementComponent de la page détail
 * @param logement {LogementModel}
 * @return {JSX.Element}
 * @constructor
 */
const DescriptionLogementComponent = ({ logement }) => {
  return <section>Description</section>;
};

DescriptionLogementComponent.propType = {
  logement: PropTypes.object.isRequired,
};

export default DescriptionLogementComponent;
