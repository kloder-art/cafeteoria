import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import List from '../components/article/List';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: data },
  },
}) => (
  <Layout>
    <SEO title="Barra" />
    <List items={data.map((x) => x.node)} />
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
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
              }
            }
          }
        }
      }
    }
  }
`;
