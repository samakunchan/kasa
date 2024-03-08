import './index.scss';
import PropTypes from 'prop-types';
import arrowLeft from '../../assets/svg/arrow-left.svg';
import arrowRight from '../../assets/svg/arrow-right.svg';
import imageCarouselLarge from '../../assets/images/image-carousel-1-large.png';
// import imageCarouselSmall from '../../assets/images/image-carousel-1-small.png';
import { useState } from 'react';

/**
 * Créer le composant Carousel
 * @param pictures {String[]}
 * @param title {String}
 * @return {JSX.Element<CarouselComposant>}
 * @constructor
 */
const CarouselComposant = ({ pictures, title }) => {
  const ifIsEmpty = pictures.length === 0;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  return (
    <section className='carousel'>
      <button disabled={ifIsEmpty} className='previous' onClick={prevSlide}>
        <img src={arrowLeft} alt='Précédente' />
      </button>

      <div className='carousel-container'>
        <img
          src={ifIsEmpty ? imageCarouselLarge : pictures[currentIndex]}
          alt={ifIsEmpty ? `Vue par défaut` : `Vue de ${title} ${currentIndex + 1}`}
        />
        <p className='pagination'>
          {currentIndex + 1}/{pictures.length}
        </p>
      </div>

      <button disabled={ifIsEmpty} className='next' onClick={nextSlide}>
        <img src={arrowRight} alt='Suivante' />
      </button>
    </section>
  );
};

CarouselComposant.propType = {
  pictures: PropTypes.array.isRequired,
  title: PropTypes.array.isRequired,
};
export default CarouselComposant;
