import React from 'react';
import PropTypes from 'prop-types';

/* import { Link } from 'gatsby'; */
import './ProjectAbbrev.css';

import { truncateString } from 'utils/helpers';
import { formatDate } from 'utils/i18n';

function ProjectAbbrev({ /* slug, */ title, date, excerpt, stack, source, production }) {
  let excerptPart;
  if (excerpt) {
    excerptPart = (
      <p
        dangerouslySetInnerHTML={{
          __html: truncateString(excerpt, 114),
        }}
      />
    );
  }

  return (
    <div className="project-container">
      <article className="project-abbrev">
        <div className="project-abbrev-content">
          <div className="project-abbrev-content-text">
            <h3>
              {/* <Link to={slug} rel="bookmark">
                {title}
              </Link> */}
              {title}
            </h3>
            <small>{formatDate(date)}</small>
            {excerptPart}
            <ul className="tech-stack">
              {stack.map((item, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <li className="tech-stack-item" key={key}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {(source || production) && (
            <div className="project-links">
              {source && (
                <a
                  className="button button-primary btn-project"
                  href={source}
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  Source
                </a>
              )}
              {production && (
                <a
                  className="button button-primary btn-project"
                  href={production}
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  Website
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

ProjectAbbrev.propTypes = {
  /* slug: PropTypes.string.isRequired, */
  title: PropTypes.string,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  stack: PropTypes.array.isRequired,
  source: PropTypes.string,
  production: PropTypes.string,
};

ProjectAbbrev.defaultProps = {
  title: null,
  excerpt: null,
  source: '',
  production: '',
};

export default ProjectAbbrev;
