import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

import Layout from '../components/Layout';
import Publications from '../components/article/Publications';
import Metadata from '../components/article/Metadata';
import Tags from '../components/article/Tags';
import Share from '../components/article/Share';

const StyleArticle = styled.article``;

const ArticlePage = ({
  data: {
    file: {
      childMarkdownRemark: { frontmatter, html },
    },
  },
}) => (
  <Layout>
    <StyleArticle>
      <GatsbyImage fluid={frontmatter.image.childImageSharp.fluid} />
      <h2>{frontmatter.title}</h2>
      <Metadata frontmatter={frontmatter} />
      {frontmatter.publications && (
        <Publications items={frontmatter.publications} />
      )}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Share />
      <Tags tags={frontmatter.tags} />
    </StyleArticle>
  </Layout>
);

ArticlePage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        frontmatter: PropTypes.shape({
          image: PropTypes.object,
          title: PropTypes.string,
          publications: PropTypes.array,
          tags: PropTypes.array,
        }),
        html: PropTypes.string,
      }),
    }),
  }),
};

export default ArticlePage;

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
          publications {
            title
            type
            date(formatString: "DD MMMM, YYYY", locale: "es-ES")
            url
          }
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
