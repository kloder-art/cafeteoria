import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import List from '../components/article/List';

const TagPage = ({
  data: {
    allFile: { edges: data },
  },
  pageContext: { tag },
}) => {
  return (
    <Layout>
      <SEO title={tag} />
      <h4>Filtrando por la etiqueta: {tag}</h4>
      <List items={data.map((x) => x.node.childMarkdownRemark)} />
    </Layout>
  );
};

TagPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default TagPage;

export const pageQuery = graphql`
  query($tag: [String]) {
    allFile(
      filter: {
        childMarkdownRemark: { frontmatter: { tags: { in: $tag } } }
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
