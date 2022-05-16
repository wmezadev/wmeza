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
      <SEO title="Acerca de mi - William Meza" />
      <section className="banner-about">
        <div style={{ maxWidth: '1100px', margin: 'auto', padding: '0 20px' }}>
          <h1>Acerca de mi</h1>
        </div>
      </section>
      <div style={{ maxWidth: '1100px', margin: 'auto', padding: '40px 20px' }}>
        <p>
          Mi nombre es William. Soy desarrollador web y escritor en mi propio blog. actualmente
          trabajo en Publicis Groupe como Principal Frontend Engineer.
        </p>
        <p>Outstanding achievements:</p>
        <ul style={{ marginLeft: '1.5rem' }}>
          <li>dislicores.com, un E-commerce grande desarrollado con VTEX.</li>
          <li>dimar.cl/tienda, un E-commerce para cajas y empaques personalizados en 3D.</li>
          <li>
            Sunrise, proyecto de aplicación web para gestión de contenidos y cartera de clientes
            para seguro.
          </li>
          <li>segurautos.co, Sitio web de venta de seguros de auto y soat.</li>
        </ul>
        <p>
          Comencé este sitio como un lugar para documentar lo que he aprendido. quiero contribuir a
          la comunidad abierta de desarrolladores que tanto me ha enseñado. no tengo publicidad ni
          patrocinadores
        </p>
        <h2>Mi pasión</h2>
        <p>
          Me encanta diseñar y programar sitios web.{' '}
          <span role="img" aria-label="Computer">
            🖥
          </span>
          , marketing digital, diseño gráfico, pintura{' '}
          <span role="img" aria-label="Artist palette">
             🎨
          </span>
          , viajar, cocinar{' '}
          <span role="img" aria-label="Chef">
            👨‍🍳
          </span>
          , y enseñanza me gustan las peliculas y libros de ciencia ficcion{' '}
          <span role="img" aria-label="Books">
            📚
          </span>
          , tecnología antigua{' '}
          <span role="img" aria-label="Radio">
            📻
          </span>
          , desarmar y reparar componentes eléctricos, mecánicos y electrónicos{' '}
          <span role="img" aria-label="Electric pug">
            🔌
          </span>
          , Soy un gran fan de la robótica y la inteligencia artificial.{' '}
          <span role="img" aria-label="Mechanical arm">
            🦾
          </span>
          , artes marciales{' '}
          <span role="img" aria-label="martial arts uniform">
            🥋
          </span>{' '}
          y buen futbol{' '}
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
            <strong>1993:</strong> Nací en Venezuela el 14 de noviembre. Con 5 hermanos antes y 3
            después.
          </li>
          <li>
            <strong>1999:</strong> Mi familia compra mi primera PC con Windows XP.
          </li>
          <li>
            <strong>Also 1999:</strong> Mi hermano borra la carpeta windows/system32 para hacer mas
            espacio para juegos nuevos y me preocupa como recuperar mis juegos instalados
          </li>
          <li>
            <strong>2006:</strong> Desarmé mi computadora y logré armarla nuevamente (solo sobró un
            tornillo). Comienzo a ganarme la vida formateando PC.
          </li>
          <li>
            <strong>2011:</strong> Mi padre se queda sin ingeniero de sistemas. Aprendí php y mysql
            en YouTube para reemplazarlo.
          </li>
          <li>
            <strong>2012:</strong> Me uní a la Universidad Pública de UCLA para estudiar ingeniería
            informática. gracias a mis altas calificaciones.
          </li>
          <li>
            <strong>2015:</strong> Comencé mi servicio como misionero en la iglesia de Jesucristo de
            los Santos de los Últimos Días.
          </li>
          <li>
            <strong>2017:</strong> Regresé de mi misión con honor. Conseguí trabajo como Web
            Desarrollador Backend en ONDigital.
          </li>
          <li>
            <strong>2018:</strong> Me casé con el amor de mi vida Mayfra Useche{' '}
            <span role="img" aria-label="Heart">
              ♥️
            </span>
            .
          </li>
          <li>
            <strong>2019:</strong> Fui admitido para estudiar en BYU Idaho College en EE. UU.
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
