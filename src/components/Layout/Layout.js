import React from 'react';
import PropTypes from 'prop-types';

import { useLang } from 'context/LanguageContext';
import { rhythm } from 'utils/typography';

import LanguageBar from './LanguageBar';
import Header from './Header';
import Footer from './Footer';
import ReadModeToggle from './ReadModeToggle';
import Breadcrumbs from '../Breadcrumbs';
import TopMenu from './TopMenu';

function Layout({ children, location, title, breadcrumbs }) {
  const { lang, homeLink, refresh } = useLang();

  React.useEffect(() => {
    refresh(location);
  }, [location, refresh]);

  return (
    <div
      style={{
        color: 'var(--textNormal)',
        background: 'var(--bg)',
        transition: 'color 0.2s ease-out, background 0.2s ease-out',
        minHeight: '100vh',
        fontFamily: 'var(--systemFont)',
      }}
    >
      <header
        style={{
          display: 'flex',
        }}
      >
        <Header base={homeLink} location={location} title={title} />
        <TopMenu />
        <ReadModeToggle />
      </header>
      <Breadcrumbs
        base={homeLink}
        langKey={lang}
        data={breadcrumbs}
        showTop={true}
        style={{ marginTop: '-1.5rem' }}
      />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object.isRequired,
  title: PropTypes.string,
  breadcrumbs: PropTypes.array,
};

Layout.defaultProps = {
  children: null,
  title: null,
  breadcrumbs: null,
};

export default Layout;
