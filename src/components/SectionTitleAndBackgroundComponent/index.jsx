import './index.scss';
import PropTypes from 'prop-types';

/**
 * Créer une section avec un titre et un background
 * @param title {String} Un titre court
 * @param sourceImage {String} Sans slash, sans rien d'autres. Ex: "`image-source-1.png`"
 * @return {JSX.Element<SectionTitleAndBackgroundComponent>}
 * @constructor
 */
const SectionTitleAndBackgroundComponent = ({ title, sourceImage }) => {
  return (
    <section
      className='section-title-and-bg'
      style={{
        background: `url(/images/${sourceImage}) center/cover no-repeat`,
      }}
    >
      <div className={'layer-on-bg'}>
        <h2>{title}</h2>
      </div>
    </section>
  );
};

SectionTitleAndBackgroundComponent.propTypes = {
  title: PropTypes.string,
  sourceImage: PropTypes.string,
};

SectionTitleAndBackgroundComponent.defaultProps = {
  title: 'Ajouter votre texte ici',
  sourceImage: 'image-source-1.png',
};

export default SectionTitleAndBackgroundComponent;
