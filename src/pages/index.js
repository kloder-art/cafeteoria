import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import List from '../components/index/List';
import SmallList from '../components/index/small/List';
import styled from 'styled-components';

const StyledIndex = styled.div`
  hr.sep {
    margin: 2rem 0;
    border-color: #eee;
  }
`;

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: data },
  },
}) => (
  <Layout items={data.slice(0, 6).map((x) => x.node)} home>
    <SEO title="Barra" />
    <StyledIndex>
      <List items={data.slice(6, 9).map((x) => x.node)} />
      <SmallList items={data.slice(9).map((x) => x.node)} />
    </StyledIndex>
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
            date(formatString: "D [de] MMMM [de] YYYY", locale: "es-ES")
            categories
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
                thumb: fixed(width: 110, height: 70, quality: 85) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
