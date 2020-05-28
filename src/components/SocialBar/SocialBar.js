import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Github, Twitter, Linkedin, Medium } from '../icons';

function SocialBar() {
  return (
    <StaticQuery
      // eslint-disable-next-line no-use-before-define
      query={socialQuery}
      render={(data) => {
        const { twitter, github, medium, linkedin } = data.site.siteMetadata.social;
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              margin: 'auto',
            }}
          >
            {linkedin && <Linkedin username={linkedin} />}
            {twitter && <Twitter username={twitter} />}
            {github && <Github username={github} />}
            {medium && <Medium username={medium} />}
          </div>
        );
      }}
    />
  );
}

const socialQuery = graphql`
  query SocialQuery {
    site {
      siteMetadata {
        social {
          twitter
          github
          medium
          linkedin
        }
      }
    }
  }
`;
export default SocialBar;
