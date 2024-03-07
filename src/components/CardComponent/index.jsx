import './index.scss';
import PropTypes from 'prop-types';

/**
 * Composant d'une Card
 * @param id {String} Ex: '1fe56z'
 * @param src {String} Ex: 'https://.../image.png'
 * @param title {String} Ex: 'un titre'
 * @return {JSX.Element<CardComponent>}
 * @constructor
 */
const CardComponent = ({ id, src, title }) => {
  return (
    <div className={'card'}>
      <div className={'intercalaire'}></div>
      {src && <img src={src} alt={title} />}
      <h3>{title}</h3>
    </div>
  );
};

CardComponent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default CardComponent;
