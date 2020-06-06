import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

import Newsletter from '../components/Newsletter';

function Contact({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contacto - William Meza" />
      <div style={{ maxWidth: '900px', margin: 'auto', padding: '0 20px' }}>
        <h1>Contáctame</h1>
        <p>
          Envíame un correo electrónico a <b>hello</b> arroba <b>wmeza</b> punto com si deseas
          hablar conmigo.
        </p>
        <p>Puedes encontrarme en la web como:</p>
        <p>
          <ul style={{ marginLeft: '1.5rem' }}>
            <li>
              LinkedIn:{' '}
              <a
                href="https://linkedin.com/in/william-meza/"
                rel="noopener noreferrer nofollow "
                target="_blank"
              >
                william-meza
              </a>
            </li>
            <li>
              Github:{' '}
              <a href="https://github.com/" rel="noopener noreferrer nofollow " target="_blank">
                wemf
              </a>
            </li>
            <li>
              Instagram:{' '}
              <a
                href="https://www.instagram.com/williammeza/"
                rel="noopener noreferrer nofollow "
                target="_blank"
              >
                @williammeza
              </a>
            </li>
          </ul>
        </p>
      </div>
      <Newsletter />
    </Layout>
  );
}

Contact.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Contact;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
