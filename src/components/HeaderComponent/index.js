import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo-red.svg';

const HeaderComponent = () => (
  <header>
    <img src={logo} alt='Logo du site' />
    <div>
      <ul>
        <li>
          <Link to='/'>Accueil</Link>
        </li>
        <li>
          <Link to='/a-propos'>A propos</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default HeaderComponent;
