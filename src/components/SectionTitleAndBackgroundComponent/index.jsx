import './index.scss';
import PropTypes from 'prop-types';

/**
 * Créer l'url du background
 * @param sourceImage {String}
 * @return {`url(/images/${string}) center/cover no-repeat`}
 */
const bgUrl = sourceImage => `url(/images/${sourceImage}) center/cover no-repeat`;

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
      aria-label={'Titre et image arrière plan'}
      className='section-title-and-bg'
      style={{
        background: bgUrl(sourceImage),
      }}
    >
      <div className={'layer-on-bg'}>{title && <h2>{title}</h2>}</div>
    </section>
  );
};

SectionTitleAndBackgroundComponent.propTypes = {
  sourceImage: PropTypes.string,
};

SectionTitleAndBackgroundComponent.defaultProps = {
  sourceImage: 'image-source-1.png',
};

export default SectionTitleAndBackgroundComponent;
