import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Image from 'gatsby-image';
import './ProjectAbbrev.css';

import { truncateString } from 'utils/helpers';
import { formatDate } from 'utils/i18n';

function ProjectAbbrev({ slug, title, date, excerpt, image }) {
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
        <Link to={slug} rel="bookmark" style={{ fontSize: '0' }}>
          <Image fixed={image.childImageSharp.fixed} alt={`feature image for ${title}`} />
        </Link>
        <div className="project-abbrev-content">
          <h3>
            <Link to={slug} rel="bookmark">
              {title}
            </Link>
          </h3>
          <small>{formatDate(date)}</small>
          {excerptPart}
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
  image: PropTypes.object,
};

ProjectAbbrev.defaultProps = {
  title: null,
  excerpt: null,
  image: null,
};

export default ProjectAbbrev;
