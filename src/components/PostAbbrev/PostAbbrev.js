import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Image from 'gatsby-image';
import './PostAbbrev.css';

import { formatReadingTime, truncateString } from 'utils/helpers';
import { formatDate } from 'utils/i18n';

import TagList from '../TagList';

function PostAbbrev({ slug, title, date, timeToRead, excerpt, tags, base, image }) {
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

  let tagsPart;
  if (tags) {
    tagsPart = <TagList tags={tags} baseUrl={`${base}tags`} />;
  }

  return (
    <div className="post-container">
      <article className="post-abbrev">
        <Link to={slug} rel="bookmark" style={{ fontSize: '0' }}>
          <Image fixed={image.childImageSharp.fixed} alt={`feature image for ${title}`} />
        </Link>
        <div className="post-abbrev-content">
          <h3>
            <Link to={slug} rel="bookmark">
              {title}
            </Link>
          </h3>
          {tagsPart}
          <small>{`${formatDate(date)} • ${formatReadingTime(timeToRead)}`}</small>
          {excerptPart}
        </div>
      </article>
    </div>
  );
}

PostAbbrev.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  excerpt: PropTypes.string,
  tags: PropTypes.array,
  base: PropTypes.string,
  image: PropTypes.object,
};

PostAbbrev.defaultProps = {
  title: null,
  excerpt: null,
  tags: null,
  base: '',
  image: null,
};

export default PostAbbrev;
