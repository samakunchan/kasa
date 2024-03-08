import './index.scss';
import BlockHostComponent from '../BlockHostComponent';
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
    <section className={'description-logement'}>
      <BlockTitleSubtitle title={logement.title} location={logement.location} />
      <BlockHostComponent name={logement.host.name} picture={logement.host.picture} />
    </section>
  );
};

DescriptionLogementComponent.propType = {
  logement: PropTypes.object.isRequired,
};

export default DescriptionLogementComponent;
