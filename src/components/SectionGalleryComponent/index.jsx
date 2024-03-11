import './index.scss';
import { useEffect, useState } from 'react';
import BlockCardComponent from '../BlockCardComponent';
import { LogementModel } from '../../core/models/logement-model';
import { defaultCardText } from '../../core/utils/utils';
import { getLogements } from '../../core/services/logementService';

/**
 * Construit les cards
 * @param id {String} Ex: '1fe56z'
 * @param title {String} Ex: 'https://.../image.png'
 * @param cover {String} Ex: 'un titre'
 * @param index {number} Ex: 1
 * @return {JSX.Element<BlockCardComponent>}
 */
const buildCardForLogement = ({ id, title, cover }, index) => (
  <BlockCardComponent key={index} id={id} title={title} src={cover} />
);

/**
 * Composant de la Gallery
 * @return {JSX.Element<SectionGalleryComponent>}
 * @constructor
 */
const SectionGalleryComponent = () => {
  const fakeArrayForCards = Array.of(...Array(5).keys()).map((_, index) => ({
    id: index.toString(),
    title: defaultCardText,
  }));

  const [logements, setLogements] = useState(LogementModel.emptyLogements);
  useEffect(() => {
    getLogements().then(setLogements);
  }, []);

  return (
    <section className={'section-gallery'}>
      <div className={'card-layout'}>
        <div className={'card-container'}>
          {logements.length !== 0
            ? logements.map(buildCardForLogement)
            : fakeArrayForCards.map(buildCardForLogement)}
        </div>
      </div>
    </section>
  );
};

export default SectionGalleryComponent;
