import './index.scss';
import { defaultCardText, getSlug } from '../../core/utils/utils';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Composant d'une Card
 * @param id {String} Ex: '1fe56z'
 * @param src {String} Ex: 'https://.../image.png'
 * @param title {String} Ex: 'un titre'
 * @return {JSX.Element<BlockCardComponent>}
 * @constructor
 */
const BlockCardComponent = ({ id, src, title }) => {
  return title === defaultCardText ? (
    <div className={'card'}>
      <div className={'intercalaire'}></div>
      {src && <img src={src} alt={title} />}
      <h3>{title}</h3>
    </div>
  ) : (
    <Link to={`/${id}/${getSlug(title)}`} className={'card'}>
      <div className={'intercalaire'}></div>
      {src && <img src={src} alt={title} />}
      <h3>{title}</h3>
    </Link>
  );
};

BlockCardComponent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default BlockCardComponent;
