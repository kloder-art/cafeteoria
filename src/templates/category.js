import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import List from '../components/article/List';

const CategoryPage = ({
  data: {
    allFile: { edges: data },
  },
  pageContext: { category },
}) => {
  return (
    <Layout>
      <SEO title={category} />
      <h4>Filtrando por la categoría: {category}</h4>
      <List items={data.map((x) => x.node.childMarkdownRemark)} />
    </Layout>
  );
};

CategoryPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default CategoryPage;

export const pageQuery = graphql`
  query($category: [String]) {
    allFile(
      filter: {
        childMarkdownRemark: { frontmatter: { categories: { in: $category } } }
        sourceInstanceName: { eq: "articles" }
        extension: { eq: "md" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
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
  }
`;