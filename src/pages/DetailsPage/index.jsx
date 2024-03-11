import { useEffect, useState } from 'react';
import { LogementModel } from '../../core/models/logement-model';
import SectionCarouselComposant from '../../components/SectionCarouselComposant';
import SectionDescriptionLogementComponent from '../../components/SectionDescriptionLogementComponent';
import { getOneLogement } from '../../core/services/logementService';
import { useParams } from 'react-router-dom';

/**
 * Affiche le détail d'un logement à partir d'un id param de l'url
 * @return {JSX.Element<DetailsLogementPage>}
 * @constructor
 */
const DetailsLogementPage = () => {
  const [logement, setLogement] = useState(LogementModel.emptyLogement);

  const { id } = useParams();

  useEffect(() => {
    getOneLogement(id).then(setLogement);
  }, [id]);

  return (
    logement && (
      <div className='App'>
        <SectionCarouselComposant pictures={logement.pictures} title={logement.title} />
        <SectionDescriptionLogementComponent logement={logement} />
      </div>
    )
  );
};

export default DetailsLogementPage;
