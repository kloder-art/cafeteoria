import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import List from '../components/index/List';

const CategoryPage = ({
  data: {
    allMarkdownRemark: { edges: data },
  },
  pageContext: { category },
}) => {
  return (
    <Layout>
      <SEO title={category} />
      <h4>
        Filtrando por la categoría: {category} ({data.length})
      </h4>
      <List items={data.map((x) => x.node)} />
    </Layout>
  );
};

CategoryPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default CategoryPage;

export const query = graphql`
  query($category: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { categories: { in: [$category] } }
        fileInfo: { sourceInstanceName: { eq: "articles" } }
      }
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
