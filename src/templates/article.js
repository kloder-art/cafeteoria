import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

const StyleArticle = styled.article`
  .meta {
    color: lightgrey;
  }
`;

const Article = ({
  data: {
    file: { childMarkdownRemark: data },
  },
}) => (
  <Layout>
    <StyleArticle>
      <GatsbyImage fluid={data.frontmatter.image.childImageSharp.fluid} />
      <h2>{data.frontmatter.title}</h2>
      <div className={'meta'}>
        Publicado el {data.frontmatter.date} en{' '}
        {data.frontmatter.categories.map(
          (x) => x.charAt(0).toUpperCase() + x.slice(1)
        )}
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </StyleArticle>
  </Layout>
);

Article.propTypes = {
  data: PropTypes.object,
};

export default Article;

export const pageQuery = graphql`
  query($slug: String) {
    file(
      childMarkdownRemark: { frontmatter: { slug: { eq: $slug } } }
      extension: { eq: "md" }
      sourceInstanceName: { eq: "articles" }
    ) {
      childMarkdownRemark {
        frontmatter {
          slug
          title
          date(formatString: "DD MMMM, YYYY", locale: "es-ES")
          categories
          tags
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        html
      }
    }
  }
`;
