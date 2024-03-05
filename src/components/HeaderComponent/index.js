import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo-red.svg';

const HeaderComponent = () => (
  <header className='header'>
    <img src={logo} alt='Logo du site' />
    <nav className='nav'>
      <ul>
        <li>
          <Link to='/'>Accueil</Link>
        </li>
        <li>
          <Link to='/a-propos'>A propos</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default HeaderComponent;
