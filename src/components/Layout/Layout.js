import React from 'react';
import PropTypes from 'prop-types';

import { useLang } from 'context/LanguageContext';

import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from '../Breadcrumbs';

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
      }}
    >
      <Header base={homeLink} title={title} />
      <Breadcrumbs
        base={homeLink}
        langKey={lang}
        data={breadcrumbs}
        showTop={true}
        style={{ marginTop: '-1.5rem' }}
      />
      <main>{children}</main>
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
