import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

import './about-me.css';

function AboutMe({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About me - William Meza" />
      <section className="banner-about">
        <div style={{ maxWidth: '900px', margin: 'auto', padding: '0 20px' }}>
          <h1>About me</h1>
        </div>
      </section>
      <div style={{ maxWidth: '900px', margin: 'auto', padding: '40px 20px' }}>
        <p>
          My name is William. I am a web developer and writer on my own blog. I currently work in
          arkiteck as a Full Stack Software Developer.
        </p>
        <p>Outstanding achievements:</p>
        <p>
          <ul style={{ marginLeft: '1.5rem' }}>
            <li>dimar.cl/tienda, E-commerce for custom boxes and packging in 3D.</li>
            <li>
              Sunrise, web application project for content management and customer portfolio for
              insurance.
            </li>
            <li>segurautos.co, Website for sale of auto and soat insurance.</li>
          </ul>
        </p>
        <p>
          I started this site as a place to document what I have learned. I want to contribute to
          the open community of developers that has taught me so much. I do not have publicity or
          sponsors.
        </p>
        <h2>My passion</h2>
        <p>
          Make websites, digital marketing, graphic design, painting, traveling, cooking, teaching.
          I like science fiction movies and their books, old technology, disarm and repair
          electrical, mechanical and electronic components, I’m fond of robotics and artificial
          intelligence, martial arts and good football.
        </p>
        <h2>Dev Stack</h2>
        <h3>Web Frontend</h3>
        <p>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Webpack</li>
            <li>Vue.js</li>
          </ul>
        </p>
      </div>
    </Layout>
  );
}

AboutMe.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default AboutMe;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
