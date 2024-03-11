import './index.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo-red.svg';
import { menusDatas } from '../../core/utils/menus-datas';
import { useState } from 'react';

const HeaderComponent = () => {
  const menuHome = menusDatas.find(({ path }) => path === '/');

  const setState = useState(null);

  const isMenuActive = index => {
    menusDatas.forEach(menu => (menu.isActive = false));
    menusDatas[index].isActive = true;
    setState[1]([]);
  };

  const buildMenus = (menu, index) => (
    <li key={index}>
      <Link
        to={menu.path}
        className={menu.isActive ? 'active' : ''}
        onClick={() => isMenuActive(index)}
      >
        {menu.label}
      </Link>
    </li>
  );

  return (
    <header className='header'>
      <Link to={menuHome.path}>
        <img src={logo} alt='Logo du site' />
      </Link>
      <nav className='nav'>
        <ul>{menusDatas.map(buildMenus)}</ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
