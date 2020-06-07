import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import './ProjectAbbrev.css';

import { truncateString } from 'utils/helpers';
import { formatDate } from 'utils/i18n';

function ProjectAbbrev({ slug, title, date, excerpt, stack }) {
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
          <h3>
            <Link to={slug} rel="bookmark">
              {title}
            </Link>
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
      </article>
    </div>
  );
}

ProjectAbbrev.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  stack: PropTypes.array.isRequired,
};

ProjectAbbrev.defaultProps = {
  title: null,
  excerpt: null,
};

export default ProjectAbbrev;
