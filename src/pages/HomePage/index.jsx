import './index.scss';
import GallerySectionComponent from '../../components/sections/GallerySectionComponent';
import TitleAndBackgroundSectionComponent from '../../components/sections/TitleAndBackgroundSectionComponent';

const HomePage = () => (
  <div className='App'>
    <TitleAndBackgroundSectionComponent title={'Chez vous et partout ailleurs'} />
    <GallerySectionComponent />
  </div>
);

export default HomePage;
