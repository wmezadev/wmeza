import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import { fromPairs } from 'ramda';
import { useLang } from 'context/LanguageContext';

import './LanguageBar.css';

/**
 * base MUST include slash (eg: en/)
 * This function was refactored to show only two languages. it might need work to display more than 2 lang.
 *
 * @param {*object} { lang }
 */
function LanguageBar({ lang: langKey }) {
  const { lang } = useLang();

  return (
    <StaticQuery
      // eslint-disable-next-line no-use-before-define
      query={supportedLanguagesQuery}
      render={(data) => {
        const { langsEntries } = data.site.siteMetadata;

        if (langsEntries.length < 2) {
          return null;
        }

        const currentLang = langsEntries.filter((lg) => lg[0] !== lang)[0];

        const supportedLanguages = fromPairs(langsEntries);
        const language = supportedLanguages[langKey];

        if (!language) {
          return null;
        }

        return (
          <>
            <Link to={currentLang[0] !== 'en' ? `/${currentLang[0]}` : '/'} className="lang-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="icon-language"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
              </svg>
              {currentLang[1]}
            </Link>
          </>
        );
      }}
    />
  );
}

LanguageBar.propTypes = {
  lang: PropTypes.string,
};

LanguageBar.defaultProps = {
  lang: 'en',
};

const supportedLanguagesQuery = graphql`
  query SupportedLanguagesQuery {
    site {
      siteMetadata {
        lang
        langsEntries
      }
    }
  }
`;

export default LanguageBar;
