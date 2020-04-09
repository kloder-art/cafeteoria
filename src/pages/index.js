import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import List from '../components/index/List';
import SmallList from '../components/index/small/List';
import Slider from '../components/index/Slider';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: data },
  },
}) => (
  <Layout>
    <SEO title="Barra" />
    <Slider items={data.slice(0, 5).map((x) => x.node)} />
    <List items={data.slice(5, 9).map((x) => x.node)} />
    <SmallList items={data.slice(9).map((x) => x.node)} />
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileInfo: { sourceInstanceName: { eq: "articles" } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            title
            date(formatString: "DD MMMM, YYYY", locale: "es-ES")
            categories
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
                fixed(height: 400, quality: 85) {
                  ...GatsbyImageSharpFixed_withWebp
                }
                resize(width: 110, height: 70, quality: 85) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
