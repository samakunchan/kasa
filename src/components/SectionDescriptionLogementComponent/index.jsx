import './index.scss';
import BlockAccordionComponent from '../BlockAccordionComponent';
import BlockHostComponent from '../BlockHostComponent';
import BlockRatingComponent from '../BlockRatingComponent';
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
    <section aria-label={'Description du logement'} className={'description-logement'}>
      <div className='description-container'>
        <div className='title-and-tags-disposition block'>
          <BlockTitleSubtitle title={logement.title} location={logement.location} />
          <BlockTagComponent tags={logement.tags} />
        </div>
        <div className='host-and-rating-disposition block'>
          <BlockHostComponent name={logement.host.name} picture={logement.host.picture} />
          <BlockRatingComponent rating={logement.rating} />
        </div>
      </div>
      <div className='accordions-disposition'>
        <BlockAccordionComponent title={'Description'} content={logement.description} />
        <BlockAccordionComponent title={'Equipements'} content={logement.equipments} />
      </div>
    </section>
  );
};

SectionDescriptionLogementComponent.propType = {
  logement: PropTypes.object.isRequired,
};

export default SectionDescriptionLogementComponent;
