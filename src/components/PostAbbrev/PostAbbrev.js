import React from 'react';
import PropTypes from 'prop-types';

import { Link, Image } from 'gatsby';

import './PostAbbrev.css';

import { formatReadingTime, truncateString } from 'utils/helpers';
import { formatDate } from 'utils/i18n';

import TagList from '../TagList';

function PostAbbrev({ slug, title, date, timeToRead, excerpt, tags, base }) {
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
    <article className="post-abbrev">
      <Link style={{ boxShadow: 'none', margin: '0 0 -8px 0' }} to={slug} rel="bookmark">
        <img src="https://via.placeholder.com/300x190.png" alt="placeholder" />
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
};

PostAbbrev.defaultProps = {
  title: null,
  excerpt: null,
  tags: null,
  base: '',
};

export default PostAbbrev;
