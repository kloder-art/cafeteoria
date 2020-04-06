import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';

const StyledCategories = styled.nav`
  font-family: 'Abel', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    li {
      list-style: none;
      text-transform: uppercase;
      a {
        display: block;
        background: var(--text-highlight-color);
        padding: 0.5rem 1rem;
        border-bottom: 1px solid var(--text-color);
        color: lightgrey;
        &:hover {
          color: white;
        }
      }
    }
  }
`;

const Categories = () => {
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
                categories
              }
            }
          }
        }
      }
    }
  `);

  const categories = data
    .map((x) => x.node.childMarkdownRemark.frontmatter.categories)
    .reduce((acc, cur) => {
      for (const category of cur) {
        const match = acc.find((x) => x.category === category);
        if (match) {
          match.count++;
        } else {
          acc.push({ category, count: 1 });
        }
      }
      return acc;
    }, [])
    .sort((a, b) => b.count - a.count);

  return (
    <StyledCategories>
      <ul>
        {categories.map((x, idx) => (
          <li key={idx}>
            <Link to={`/category/${x.category}`}>{x.category}</Link>
          </li>
        ))}
      </ul>
    </StyledCategories>
  );
};

export default Categories;
