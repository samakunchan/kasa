import './index.scss';
import PropTypes from 'prop-types';
import emptyStar from '../../assets/svg/star-empty.svg';
import fullStar from '../../assets/svg/star-full.svg';
import { maximumStars } from '../../core/utils/utils';

/**
 * Construit une étoile vide ou pleine en fonction du nombre de valeur true
 * @param star {boolean}
 * @param index {number}
 * @return {JSX.Element}
 */
const buildStar = (star, index) => {
  switch (true) {
    case !!star:
      return <img key={index} src={fullStar} alt={`Star active ${index}`} />;
    default:
      return <img key={index} src={emptyStar} alt={`Star non active ${index}`} />;
  }
};

/**
 * Créer le composant BlockRatingComponent
 * @param rating {String}
 * @return {JSX.Element<BlockRatingComponent>}
 * @constructor
 */
const BlockRatingComponent = ({ rating }) => {
  const stars = Array.from({ length: maximumStars }).map((bool, index) => index < Number(rating));

  return <div className='rating'>{stars.map(buildStar)}</div>;
};

BlockRatingComponent.propType = {
  logement: PropTypes.string.isRequired,
};

export default BlockRatingComponent;
