import './index.scss';
import logo from '../../assets/svg/logo-white.svg';

const FooterComponent = () => (
  <footer className='footer'>
    <img src={logo} alt='Logo du site en noir' />
    <p>© 2024 Kasa. All rights reserved</p>
  </footer>
);

export default FooterComponent;
