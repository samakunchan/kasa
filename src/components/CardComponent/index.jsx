import './index.scss';
import { Link } from 'react-router-dom';
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
  const slug = title
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .split(' ')
    .join('-');
  return (
    <Link to={`/logements-${id}-${slug}`} className={'card'}>
      <div className={'intercalaire'}></div>
      {src && <img src={src} alt={title} />}
      <h3>{title}</h3>
    </Link>
  );
};

CardComponent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default CardComponent;
