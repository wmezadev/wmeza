import React from 'react';
import './Footer.css';
import github from '../../../content/assets/icons/github.svg';
import linkedin from '../../../content/assets/icons/linkedin.svg';
import twitter from '../../../content/assets/icons/twitter.svg';

function Footer() {
  return (
    <footer>
      <p>Copyright © 2020 by William Eduardo Meza</p>
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          margin: '0',
          width: '100px',
          justifyContent: 'space-between',
        }}
      >
        <li>
          <a href="https://github.com/wemf" target="_blank" rel="noopener noreferrer nofollow">
            <img src={github} alt="github wmeza account" />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/william-meza"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <img src={linkedin} alt="linkedin wmeza account" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/wemeza" target="_blank" rel="noopener noreferrer nofollow">
            <img src={twitter} alt="twitter wmeza account" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
