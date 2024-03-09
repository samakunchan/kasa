import './index.scss';
import PropTypes from 'prop-types';

const BlockTitleSubtitle = ({ title, location }) => {
  return (
    <div>
      <h1 className='title'>{title}</h1>
      <p>{location}</p>
    </div>
  );
};

BlockTitleSubtitle.propType = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default BlockTitleSubtitle;
