import './index.scss';
import BlockTitleSubtitle from '../BlockTitleSubtitle';
import PropTypes from 'prop-types';

/**
 * Créer le composant DescriptionLogementComponent de la page détail
 * @param logement {LogementModel}
 * @return {JSX.Element}
 * @constructor
 */
const DescriptionLogementComponent = ({ logement }) => {
  return (
    <section>
      <BlockTitleSubtitle title={logement.title} location={logement.location} />
    </section>
  );
};

DescriptionLogementComponent.propType = {
  logement: PropTypes.object.isRequired,
};

export default DescriptionLogementComponent;
