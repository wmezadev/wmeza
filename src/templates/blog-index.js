import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import './blog-index.css';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import PostAbbrev from 'components/PostAbbrev';
import { useLang } from 'context/LanguageContext';
import { formatMessage } from 'utils/i18n';
import Image from 'gatsby-image';

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
      <section className="banner">
        <div className="content-margin">
          <div className="banner-inner">
            <div>
              <h1 className="banner-title">{formatMessage('tBannerTitleHome')}</h1>
              <p className="banner-subtitle">
                I develop projects for the web. The challenges are my passion
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
              <h2>Newsletter</h2>
              <p>Get an update when something new comes out by signing up below!</p>
              <Link
                to={`${homeLink}/contact#newsletter`}
                className="button button-primary button-transparent"
              >
                Subscribe
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
          <h2>{formatMessage('tPortfolio')}</h2>
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
      </section>
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
