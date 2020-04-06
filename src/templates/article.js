import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

import Publications from '../components/article/Publications';

const StyleArticle = styled.article`
  .meta {
    color: lightgrey;
  }
`;

const ArticlePage = ({
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
        {data.frontmatter.categories.map((x, idx) => (
          <Link key={idx} to={`/category/${x}`}>
            {x}
            {idx < data.frontmatter.categories.length - 1 && ', '}
          </Link>
        ))}
      </div>

      {data.frontmatter.publications && (
        <Publications items={data.frontmatter.publications} />
      )}
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </StyleArticle>
  </Layout>
);

ArticlePage.propTypes = {
  data: PropTypes.object,
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
