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
        <ul style={{ marginLeft: '1.5rem' }}>
          <li>dimar.cl/tienda, E-commerce for custom boxes and packging in 3D.</li>
          <li>
            Sunrise, web application project for content management and customer portfolio for
            insurance.
          </li>
          <li>segurautos.co, Website for sale of auto and soat insurance.</li>
        </ul>
        <p>
          I started this site as a place to document what I have learned. I want to contribute to
          the open community of developers that has taught me so much. I do not have publicity or
          sponsors.
        </p>
        <h2>My passion</h2>
        <p>
          I love to design and code websites{' '}
          <span role="img" aria-label="Computer">
            🖥
          </span>
          , digital marketing, graphic design, painting{' '}
          <span role="img" aria-label="Artist palette">
             🎨
          </span>
          , traveling, cooking{' '}
          <span role="img" aria-label="Chef">
            👨‍🍳
          </span>
          , and teaching. I like science fiction movies and books{' '}
          <span role="img" aria-label="Books">
            📚
          </span>
          , old technology{' '}
          <span role="img" aria-label="Radio">
            📻
          </span>
          , disarm and repair electrical, mechanical and electronic components{' '}
          <span role="img" aria-label="Electric pug">
            🔌
          </span>
          , I’m big fan of robotics and artificial intelligence{' '}
          <span role="img" aria-label="Mechanical arm">
            🦾
          </span>
          , martial arts{' '}
          <span role="img" aria-label="martial arts uniform">
            🥋
          </span>{' '}
          and good football{' '}
          <span role="img" aria-label="Soccer ball">
            ⚽️
          </span>
          .
        </p>
        <h2>Dev Stack</h2>
        <h3>Web Frontend</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Vue.js</li>
        </ul>
        <h3>Web Backend</h3>
        <ul>
          <li>PHP</li>
          <li>Laravel</li>
          <li>NodeJS</li>
          <li>Python</li>
          <li>WordPress</li>
        </ul>
        <h3>Data</h3>
        <ul>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Firebase</li>
          <li>Redis</li>
        </ul>
        <h2>Me through time</h2>
        <ul>
          <li>
            <strong>1993:</strong> I was born in Venezuela on November 14th. With 5 brothers before
            and 3 after.
          </li>
          <li>
            <strong>1999:</strong> My family buys my first PC with Windows XP.
          </li>
          <li>
            <strong>Also 1999:</strong> My brother deletes the windows / system32 folder to make
            more space for new games and I worry how to recover my installed games
          </li>
          <li>
            <strong>2006:</strong> I disarmed my computer and I managed to arm it again (only one
            screw left). I start making a living by formatting PCs.
          </li>
          <li>
            <strong>2011:</strong> My father is left without a systems engineer. I learned php and
            mysql on YouTube to replace it.
          </li>
          <li>
            <strong>2012:</strong> I joined the UCLA Public University for computer engineering
            thanks to my high grades.
          </li>
          <li>
            <strong>2015:</strong> I began my service as a missionary in the church of Jesus Christ
            of Latter-day Saints.
          </li>
          <li>
            <strong>2017:</strong> I returned from my mission with honor. I got a job as a Web
            Backend Developer in ONDigital.
          </li>
          <li>
            <strong>2018:</strong> I married the love of my life Mayfra Useche{' '}
            <span role="img" aria-label="Heart">
              ♥️
            </span>
            .
          </li>
          <li>
            <strong>2019:</strong> I was admitted to study in BYU Idaho College in USA.
          </li>
        </ul>
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
