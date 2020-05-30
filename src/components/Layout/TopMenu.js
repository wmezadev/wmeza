import React, { useState } from 'react';
import { Link } from 'gatsby';
import './TopMenu.css';

const TopMenu = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="container-nav">
        <button type="button" id="burger" onClick={toggleMenu} className="open-main-nav">
          <span className="burger" />
          <span className="burger-text">Menu</span>
        </button>
        <nav className={`main-nav ${menu ? 'is-open' : ''}`} id="main-nav">
          <ul>
            <li>
              <Link to="#">About me</Link>
            </li>
            <li>
              <Link to="#">Portfolio</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li>
              <Link to="#">Spanish</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TopMenu;
