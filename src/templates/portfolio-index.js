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
  const freelance = data.freelance.edges;
  const openSource = data.openSource.edges;

  const { lang, homeLink } = useLang();

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={formatMessage('tIndTitle')} keywords={formatMessage('taIndKeywords')} />
      <section className="banner-portfolio">
        <div style={{ maxWidth: '1100px', margin: 'auto', padding: '0 20px' }}>
          <h1>{formatMessage('tPortfolio')}</h1>
        </div>
      </section>
      <section>
        <div style={{ maxWidth: '1100px', margin: 'auto', padding: '0 20px' }}>
          <h2>{formatMessage('tFreelancerProjects')}</h2>
          <div className="projects-grid">
            {freelance.map(({ node }) => {
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
                  stack={node.frontmatter.stack}
                  image={node.frontmatter.image}
                />
              );
            })}
          </div>
          <h2>{formatMessage('tOpenSourceProjects')}</h2>
          <div className="projects-grid">
            {openSource.map(({ node }) => {
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
                  stack={node.frontmatter.stack}
                  image={node.frontmatter.image}
                />
              );
            })}
          </div>
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
    freelance: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      filter: {
        fields: {
          langKey: { eq: $langKey }
          subFolder: { sourceInstanceName: { eq: "portfolio" } }
        }
        frontmatter: { type: { eq: "freelance" } }
      }
    ) {
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
            stack
            production
            source
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
    openSource: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      filter: {
        fields: {
          langKey: { eq: $langKey }
          subFolder: { sourceInstanceName: { eq: "portfolio" } }
        }
        frontmatter: { type: { eq: "open-source" } }
      }
    ) {
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
            stack
            production
            source
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
