import React from 'react';
import PropTypes from 'prop-types';

import Image from 'gatsby-image';

import { Link, StaticQuery, graphql } from 'gatsby';
import withThemeFlag from '../../utils/withThemeFlag';

import TopMenu from './TopMenu';
import './Header.css';

/**
 * base MUST include slash (eg: en/)
 *
 * @param {*object} { title, base}
 */
function Header({ title, base, isLightTheme }) {
  const elHeader = React.useRef();
  const [headerSticky, setHeaderSticky] = React.useState(false);

  const stickyMenu = () => {
    setHeaderSticky(window.pageYOffset > 20);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', stickyMenu);
    return () => {
      window.removeEventListener('scroll', stickyMenu);
    };
  });

  const innerDiv = (child) => {
    if (headerSticky) {
      return <div className="inner-menu">{child}</div>;
    }
    return <>{child}</>;
  };

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '30px 20px',
        maxWidth: '1100px',
        margin: 'auto',
      }}
      className={headerSticky ? 'sticky-menu' : ''}
      ref={elHeader}
    >
      {innerDiv(
        <>
          <StaticQuery
            // eslint-disable-next-line no-use-before-define
            query={headerQuery}
            render={(data) => {
              return (
                <Link
                  style={{
                    boxShadow: 'none',
                    textDecoration: 'none',
                    color: 'var(--textTitle)',
                  }}
                  to={base}
                >
                  <Image
                    fixed={
                      isLightTheme
                        ? data.logo.childImageSharp.fixed
                        : data.logoDark.childImageSharp.fixed
                    }
                    alt={`logo ${title}`}
                  />
                </Link>
              );
            }}
          />
          <TopMenu />
        </>,
      )}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  base: PropTypes.string,
  isLightTheme: PropTypes.bool,
};

Header.defaultProps = {
  title: null,
  base: '',
  isLightTheme: true,
};

const headerQuery = graphql`
  query headerQuery {
    logo: file(absolutePath: { regex: "/wmeza-logo.png/" }) {
      childImageSharp {
        fixed(width: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logoDark: file(absolutePath: { regex: "/wmeza-logo-white.png/" }) {
      childImageSharp {
        fixed(width: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        description
      }
    }
  }
`;

export default withThemeFlag(Header);
