import './index.scss';
import PropTypes from 'prop-types';

/**
 * Créer un paragraphe pour le nom et autre pour le prénom
 * @param fullname {String}
 * @param index {number}
 * @return {JSX.Element}
 */
const buildName = (fullname, index) => <p key={index}>{fullname}</p>;

/**
 *
 * @param name {string}
 * @param picture {string}
 * @return {JSX.Element<BlockHostComponent>}
 * @constructor
 */
const BlockHostComponent = ({ name, picture }) => {
  const fullnameSeperated = name.split(' ');
  return (
    <div className='host'>
      <div className='block-name'>{fullnameSeperated.map(buildName)}</div>
      <div>
        <img src={picture} alt={name} />
      </div>
    </div>
  );
};

BlockHostComponent.propType = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
export default BlockHostComponent;
