import { ErrorModel } from '../../core/models/error-model';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../core/utils/theme-provider';
import { useContext } from 'react';

/**
 * Créer la page d'érreur
 * @param errorModel {ErrorModel}
 * @return {JSX.Element<ErrorPage>}
 * @constructor
 */
const ErrorPage = ({ errorModel = ErrorModel.notFound }) => {
  const { changeIndexMenuActive } = useContext(ThemeContext);
  return (
    <main className='error'>
      <h1>{errorModel.statusCode}</h1>
      <p>{errorModel.message}</p>
      <Link className='link' to={'/'} onClick={() => changeIndexMenuActive(0)}>
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
};

export default ErrorPage;
