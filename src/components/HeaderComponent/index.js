import './index.scss';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../core/utils/theme-provider';
import logo from '../../assets/svg/logo-red.svg';
import { menusDatas } from '../../core/utils/menus-datas';
import { useContext } from 'react';

const HeaderComponent = () => {
  const { indexMenuActive, changeIndexMenuActive } = useContext(ThemeContext);
  menusDatas.forEach(menu => (menu.isActive = false));
  if (indexMenuActive !== -1) {
    menusDatas[indexMenuActive].isActive = true;
  }

  const buildMenus = (menu, index) => (
    <li key={index}>
      <Link
        to={menu.path}
        className={menu.isActive ? 'active' : ''}
        onClick={() => changeIndexMenuActive(index)}
      >
        {menu.label}
      </Link>
    </li>
  );

  return (
    <header className='header'>
      <Link to={'/'} onClick={() => changeIndexMenuActive(0)}>
        <img src={logo} alt='Logo du site' />
      </Link>
      <nav className='nav'>
        <ul>{menusDatas.map(buildMenus)}</ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
