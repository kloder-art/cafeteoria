import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import List from '../components/index/List';
import SmallList from '../components/index/small/List';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: data },
  },
}) => (
  <Layout>
    <SEO title="Barra" />
    <List items={data.slice(0, 3).map((x) => x.node)} />
    <SmallList items={data.slice(3).map((x) => x.node)} />
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
              }
            }
          }
        }
      }
    }
  }
`;
