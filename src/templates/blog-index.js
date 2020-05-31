import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import PostAbbrev from 'components/PostAbbrev';
import { useLang } from 'context/LanguageContext';
import { formatMessage } from 'utils/i18n';

function BlogIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges.filter(
    ({ node }) => node.fields.subFolder.sourceInstanceName === 'blog',
  );

  const projects = data.allMarkdownRemark.edges.filter(
    ({ node }) => node.fields.subFolder.sourceInstanceName === 'portfolio',
  );

  const { lang, homeLink } = useLang();

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={formatMessage('tIndTitle')} keywords={formatMessage('taIndKeywords')} />
      <div style={{ maxWidth: '900px', margin: 'auto', padding: '0 20px' }}>
        <h4>{formatMessage('tLatestPosts')}</h4>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <PostAbbrev
              lang={lang}
              base={homeLink}
              key={node.fields.slug}
              slug={node.fields.slug}
              date={node.frontmatter.date}
              timeToRead={node.timeToRead}
              title={title}
              excerpt={node.frontmatter.description || node.excerpt}
              tags={node.frontmatter.tags}
            />
          );
        })}
        <h4>{formatMessage('tPortfolio')}</h4>
        {projects.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <PostAbbrev
              lang={lang}
              base={homeLink}
              key={node.fields.slug}
              slug={node.fields.slug}
              date={node.frontmatter.date}
              timeToRead={node.timeToRead}
              title={title}
              excerpt={node.frontmatter.description || node.excerpt}
              tags={node.frontmatter.tags}
            />
          );
        })}
      </div>
    </Layout>
  );
}

BlogIndex.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

BlogIndex.defaultProps = {};

export default BlogIndex;

export const pageQuery = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      filter: { fields: { langKey: { eq: $langKey } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
            langKey
            subFolder {
              sourceInstanceName
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
