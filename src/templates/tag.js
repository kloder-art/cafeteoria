import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import List from '../components/index/List';

const TagPage = ({
  data: {
    allMarkdownRemark: { edges: data },
  },
  pageContext: { tag },
}) => {
  console.log(tag);
  return (
    <Layout>
      <SEO title={tag} />
      <h4>
        Filtrando por la etiqueta: {tag} ({data.length})
      </h4>
      <List items={data.map((x) => x.node)} />
    </Layout>
  );
};

TagPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default TagPage;

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { tags: { in: [$tag] } }
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
