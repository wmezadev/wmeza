import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Bio from 'components/Bio';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import PostAbbrev from 'components/PostAbbrev';
import { useLang } from 'context/LanguageContext';
import { formatMessage } from 'utils/i18n';

function PorfolioIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const projects = data.allMarkdownRemark.edges;

  const { lang, homeLink } = useLang();

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={formatMessage('tIndTitle')} keywords={formatMessage('taIndKeywords')} />
      <div style={{ maxWidth: '900px', margin: 'auto', padding: '0 20px' }}>
        <aside>
          <Bio />
        </aside>
        <h4>{formatMessage('tfIndCountPosts', data.allMarkdownRemark.totalCount)}</h4>
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
            />
          );
        })}
      </div>
    </Layout>
  );
}

PorfolioIndex.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

PorfolioIndex.defaultProps = {};

export default PorfolioIndex;

export const pageQuery = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      filter: {
        fields: {
          langKey: { eq: $langKey }
          subFolder: { sourceInstanceName: { eq: "portfolio" } }
        }
      }
    ) {
      totalCount
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
            langKey
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            image {
              childImageSharp {
                fixed(height: 200, width: 300) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
