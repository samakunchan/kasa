import './index.scss';
import BlockHostComponent from '../BlockHostComponent';
import BlockTitleSubtitle from '../BlockTitleSubtitle';
import PropTypes from 'prop-types';

/**
 * Créer le composant SectionDescriptionLogementComponent de la page détail
 * @param logement {LogementModel}
 * @return {JSX.Element<SectionDescriptionLogementComponent>}
 * @constructor
 */
const SectionDescriptionLogementComponent = ({ logement }) => {
  return (
    <section className={'description-logement'}>
      <BlockTitleSubtitle title={logement.title} location={logement.location} />
      <BlockHostComponent name={logement.host.name} picture={logement.host.picture} />
    </section>
  );
};

SectionDescriptionLogementComponent.propType = {
  logement: PropTypes.object.isRequired,
};

export default SectionDescriptionLogementComponent;
