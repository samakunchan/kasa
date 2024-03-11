import './index.scss';
import SectionGalleryComponent from '../../components/SectionGalleryComponent';
import SectionTitleAndBackgroundComponent from '../../components/SectionTitleAndBackgroundComponent';

/**
 * Construit la Home Page
 * @return {JSX.Element<HomePage>}
 * @constructor
 */
const HomePage = () => (
  <div className='App'>
    <SectionTitleAndBackgroundComponent title={'Chez vous et partout ailleurs'} />
    <SectionGalleryComponent />
  </div>
);

export default HomePage;
