import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import './TopMenu.css';
import { formatMessage } from 'utils/i18n';
import { useLang } from 'context/LanguageContext';
import LanguageBar from './LanguageBar';
import ReadModeToggle from './ReadModeToggle';

const TopMenu = () => {
  const { homeLink } = useLang();

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (menu) {
      document.documentElement.style.overflow = 'hidden';
    }
    return () => {
      document.documentElement.style.overflow = 'unset';
    };
  });

  return (
    <>
      <div className="container-nav">
        <button type="button" id="burger" onClick={toggleMenu} className="open-main-nav">
          <span className="burger" />
        </button>
        <nav className={`main-nav ${menu ? 'is-open' : ''}`} id="main-nav">
          <ul>
            <li>
              <Link to={`${homeLink}about-me`}>{formatMessage('tMenuAboutMe')}</Link>
            </li>
            <li>
              <Link to={`${homeLink}portfolio`}>{formatMessage('tPortfolio')}</Link>
            </li>
            {/* <li>
              <Link to="/">Blog</Link>
            </li> */}
            <li>
              <Link to={`${homeLink}contact`}>{formatMessage('tMenuContact')}</Link>
            </li>
            <li>
              <LanguageBar />
            </li>
            <li>
              <ReadModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TopMenu;
