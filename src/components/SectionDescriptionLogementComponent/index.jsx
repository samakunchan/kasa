import './index.scss';
import BlockHostComponent from '../BlockHostComponent';
import BlockTagComponent from '../BlockTagComponent';
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
      <div className='title-host'>
        <BlockTitleSubtitle title={logement.title} location={logement.location} />
        <BlockHostComponent name={logement.host.name} picture={logement.host.picture} />
      </div>
      <div className='tag-stars'>
        <BlockTagComponent tags={logement.tags} />
      </div>
    </section>
  );
};

SectionDescriptionLogementComponent.propType = {
  logement: PropTypes.object.isRequired,
};

export default SectionDescriptionLogementComponent;
