import { ErrorModel } from '../../core/models/error-model';
import { Link } from 'react-router-dom';

/**
 * Créer la page d'érreur
 * @param errorModel {ErrorModel}
 * @return {JSX.Element}
 * @constructor
 */
const ErrorPage = ({ errorModel = ErrorModel.notFound }) => {
  return (
    <main className='error'>
      <h1>{errorModel.statusCode}</h1>
      <p>{errorModel.message}</p>
      <Link className='link' to={'/'}>
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
};

export default ErrorPage;
