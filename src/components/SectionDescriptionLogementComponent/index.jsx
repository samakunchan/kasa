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
    <section className={'description-logement'}>
      <div className='title-and-host block'>
        <BlockTitleSubtitle title={logement.title} location={logement.location} />
        <BlockHostComponent name={logement.host.name} picture={logement.host.picture} />
      </div>
      <div className='tag-and-rating block'>
        <BlockTagComponent tags={logement.tags} />
        <BlockRatingComponent rating={logement.rating} />
      </div>
      <div className='accordions-disposition block'>
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
