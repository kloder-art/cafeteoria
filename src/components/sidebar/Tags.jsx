import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';

const range = [0.8, 2];
const scale = (min, max) => (x) =>
  ((x - min) / (max - min)) * (range[1] - range[0]) + range[0];

const StyledTags = styled.div``;

const StyledTag = styled.span`
  font-size: ${(props) => props.size}rem;
  line-height: ${(props) => props.size}rem;
`;

const Tags = () => {
  const {
    allFile: { edges: data },
  } = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "articles" }
          extension: { eq: "md" }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                tags
              }
            }
          }
        }
      }
    }
  `);

  const tags = data
    .map((x) => x.node.childMarkdownRemark.frontmatter.tags)
    .reduce((acc, cur) => {
      for (const tag of cur) {
        const match = acc.find((x) => x.tag === tag);
        if (match) {
          match.count++;
        } else {
          acc.push({ tag, count: 1 });
        }
      }
      return acc;
    }, [])
    .sort((a, b) => b.count - a.count);

  const scaleFn = scale(tags[tags.length - 1].count, tags[0].count);

  return (
    <StyledTags>
      <h4>Etiquetas</h4>
      {tags.map((x, idx) => (
        <StyledTag key={idx} size={scaleFn(x.count)}>
          <Link to={'/'}>{x.tag}</Link>{' '}
        </StyledTag>
      ))}
    </StyledTags>
  );
};

export default Tags;
