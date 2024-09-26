import React from 'react';
import logo from '../images/logo.png';
import corner1 from '../images/corner1.png';
import corner2 from '../images/corner2.png';
import corner3 from '../images/corner3.png';
import corner4 from '../images/corner4.png';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className='header__image-container'>
          <img src={logo} alt="Logo" className="header__logo" />
          <img src={corner1} alt="Corner" className="header__corner-image header__corner-image--top-left" />
          <img src={corner2} alt="Corner" className="header__corner-image header__corner-image--top-right" />
          <img src={corner3} alt="Corner" className="header__corner-image header__corner-image--bottom-left" />
          <img src={corner4} alt="Corner" className="header__corner-image header__corner-image--bottom-right" />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item"><a href="#" className="header__nav-link">Главное</a></li>
            <li className="header__nav-item"><a href="#" className="header__nav-link">Технология</a></li>
            <li className="header__nav-item"><a href="#" className="header__nav-link">График полетов</a></li>
            <li className="header__nav-item"><a href="#" className="header__nav-link">Гарантии</a></li>
            <li className="header__nav-item"><a href="#" className="header__nav-link">О компании</a></li>
            <li className="header__nav-item"><a href="#" className="header__nav-link">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;