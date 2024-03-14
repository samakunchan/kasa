import SectionCarouselComposant from './index';
import { logementMock } from '../../core/utils/utils';
import { render } from '@testing-library/react';

describe('Given we have a SectionCarouselComposant', () => {
  describe('When the componant is loaded with pictures', () => {
    let arrowLeftSpy;
    let arrowRightSpy;
    let pictureSpy;
    beforeEach(() => {
      const { getByAltText } = render(
        <SectionCarouselComposant title={logementMock.title} pictures={logementMock.pictures} />,
      );

      arrowLeftSpy = getByAltText('Précédente');
      arrowRightSpy = getByAltText('Suivante');
      pictureSpy = getByAltText(`Vue de ${logementMock.title} 1`);
    });

    test('Then render the arrow left', () => {
      expect(arrowLeftSpy).toBeTruthy();
      expect(arrowLeftSpy.src).toEqual('http://localhost/arrow-left.svg');
    });

    test('Then render the correct the arrow right', () => {
      expect(arrowRightSpy).toBeTruthy();
      expect(arrowRightSpy.src).toEqual('http://localhost/arrow-right.svg');
    });

    test('Then render the correct picture', () => {
      expect(pictureSpy).toBeTruthy();
      expect(pictureSpy.src).toEqual('http://localhost/pic1.jpg');
    });
  });

  describe('When the componant is loaded with no pictures', () => {
    let pictureSpy;
    beforeEach(() => {
      const { getByAltText } = render(
        <SectionCarouselComposant title={logementMock.title} pictures={[]} />,
      );
      pictureSpy = getByAltText(`Vue par défaut`);
    });

    test('Then render the correct default picture', () => {
      expect(pictureSpy).toBeTruthy();
      expect(pictureSpy.src).toEqual('http://localhost/image-carousel-1-large.png');
    });
  });
});
