import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import './blog-index.css';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import PostAbbrev from 'components/PostAbbrev';
import ProjectAbbrev from 'components/ProjectAbbrev';
import { useLang } from 'context/LanguageContext';
import { formatMessage } from 'utils/i18n';
import Image from 'gatsby-image';

function BlogIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.posts.edges;
  const projects = data.projects.edges;

  const { lang, homeLink } = useLang();

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={formatMessage('tIndTitle')} keywords={formatMessage('taIndKeywords')} />
      <section className="banner">
        <div className="content-margin">
          <div className="banner-inner">
            <div>
              <h1 className="banner-title">{formatMessage('tBannerTitleHome')}</h1>
              <p className="banner-subtitle">
                {formatMessage('tBannerTitleHomeDesc')}
                <span role="img" aria-label="Fire">
                  🔥
                </span>
              </p>
            </div>
            <div className="profile-card">
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={data.author}
                imgStyle={{
                  borderRadius: '50%',
                }}
              />
              <h2>{formatMessage('tNewsletter')}</h2>
              <p>{formatMessage('tBannerNewsletter')}</p>
              <Link
                to={`${homeLink}contact#newsletter`}
                className="button button-primary button-transparent"
              >
                {formatMessage('tNewsletterBtn')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="background-grey">
        <div className="content-margin">
          <h2>{formatMessage('tLatestPosts')}</h2>
          <div className="row">
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
                  image={node.frontmatter.image}
                />
              );
            })}
          </div>
          <br />
        </div>
      </section>
      <div className="content-margin">
        <h2>{formatMessage('tPortfolio')}</h2>
        <div className="projects-grid">
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
                stack={node.frontmatter.stack}
              />
            );
          })}
        </div>
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
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      filter: {
        fields: { langKey: { eq: $langKey }, subFolder: { sourceInstanceName: { eq: "blog" } } }
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
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      filter: {
        fields: {
          langKey: { eq: $langKey }
          subFolder: { sourceInstanceName: { eq: "portfolio" } }
        }
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
