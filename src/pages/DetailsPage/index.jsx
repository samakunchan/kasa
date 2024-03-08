import { useEffect, useState } from 'react';
import CarouselComposant from '../../components/CarouselComposant';
import { LogementModel } from '../../core/models/logement-model';
import { getOneLogement } from '../../core/services/logementService';
import { useParams } from 'react-router-dom';

/**
 * Affiche le détail d'un logement à partir d'un id param de l'url
 * @return {JSX.Element<DetailsLogementPage>}
 * @constructor
 */
const DetailsLogementPage = () => {
  const [logement, setLogement] = useState(LogementModel.emptyLogement);

  const { slug } = useParams();
  const partial = slug.split('-');
  const id = partial[1];

  useEffect(() => {
    getOneLogement(id).then(setLogement);
  }, [id]);

  return (
    <div>
      {logement && <CarouselComposant pictures={logement.pictures} title={logement.title} />}
      <div>{logement && logement.title}</div>
    </div>
  );
};

export default DetailsLogementPage;
