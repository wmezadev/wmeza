import React from 'react';
import PropTypes from 'prop-types';

import Image from 'gatsby-image';

import { Link, StaticQuery, graphql } from 'gatsby';

import TopMenu from './TopMenu';
import './Header.css';

/**
 * base MUST include slash (eg: en/)
 *
 * @param {*object} { title, base}
 */
function Header({ title, base }) {
  const elHeader = React.useRef();
  const [headerSticky, setHeaderSticky] = React.useState(false);

  React.useEffect(() => {
    const sticky = elHeader.current.offsetHeight;

    const stickyMenu = () => {
      setHeaderSticky(window.pageYOffset > sticky);
    };

    window.onscroll = () => {
      stickyMenu();
    };
  }, [elHeader]);

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
        maxWidth: '900px',
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
                  <Image fixed={data.logo.childImageSharp.fixed} alt={`logo ${title}`} />
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
};

Header.defaultProps = {
  title: null,
  base: '',
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
    site {
      siteMetadata {
        author
        description
      }
    }
  }
`;

export default Header;
