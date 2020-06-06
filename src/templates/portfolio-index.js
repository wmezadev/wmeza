import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ProjectAbbrev from 'components/ProjectAbbrev';
import { useLang } from 'context/LanguageContext';
import { formatMessage } from 'utils/i18n';
import './portfolio-index.css';

function PorfolioIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const projects = data.allMarkdownRemark.edges;

  const { lang, homeLink } = useLang();

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={formatMessage('tIndTitle')} keywords={formatMessage('taIndKeywords')} />
      <section className="banner-portfolio">
        <div style={{ maxWidth: '900px', margin: 'auto', padding: '0 20px' }}>
          <h1>{formatMessage('tPortfolio')}</h1>
        </div>
      </section>
      <section className="background-grey">
        <div style={{ maxWidth: '900px', margin: 'auto', padding: '0 20px' }}>
          <h2>{formatMessage('tFreelancerProjects')}</h2>
          {projects.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <ProjectAbbrev
                lang={lang}
                base={homeLink}
                key={node.fields.slug}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                title={title}
                excerpt={node.frontmatter.description || node.excerpt}
                tags={node.frontmatter.tags}
                image={node.frontmatter.image}
              />
            );
          })}
          <h2>{formatMessage('tOpenSourceProjects')}</h2>
          {projects.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <ProjectAbbrev
                lang={lang}
                base={homeLink}
                key={node.fields.slug}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                title={title}
                excerpt={node.frontmatter.description || node.excerpt}
                tags={node.frontmatter.tags}
                image={node.frontmatter.image}
              />
            );
          })}
        </div>
      </section>
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
