import './index.scss';
import PropTypes from 'prop-types';

/**
 * Construit un tag suite au mappage
 * @param tag {String}
 * @param index {number}
 * @return {JSX.Element}
 */
const buildTag = (tag, index) => <p key={index}>{tag}</p>;

/**
 * Créer le composant BlockTagComponent
 * @param tags {String[]}
 * @return {JSX.Element<BlockTagComponent>}
 * @constructor
 */
const BlockTagComponent = ({ tags }) => {
  return <div className='tags'>{tags.map(buildTag)}</div>;
};

BlockTagComponent.propsType = {
  tags: PropTypes.array.isRequired,
};

export default BlockTagComponent;
