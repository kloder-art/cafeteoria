import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const StyledItem = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas:
    'header header'
    'meta content';
  .header {
    position: relative;
    grid-area: header;
    height: 140px;
    overflow: hidden;
    a {
      border-bottom: 0px;
    }
    img {
      max-height: 140px;
    }
    .categories {
      position: absolute;
      top: 0;
      right: 0;
      color: rgba(255, 255, 255, 0.75);
      font-size: 0.8333333333333333em;
      background: rgba(0, 0, 0, 0.25);
      padding: 0.1em 0.8em;
      text-transform: capitalize;
      a {
        color: lightgrey;
        &:hover {
          color: white;
        }
      }
    }
    .link {
      display: none;
      position: absolute;
      bottom: 0;
      right: 0;
      color: white;
      font-size: 0.8333333333333333em;
      background: var(--primary-color);
      padding: 0.1em 0.8em;
      text-transform: capitalize;
    }
  }
  .meta {
    grid-area: meta;
    color: lightgrey;
    h4 {
      margin: 0 0 0.5rem;
      line-height: 1.5rem;
    }
  }
  .content {
    grid-area: content;
    p {
      margin: 0;
    }
  }
  &:hover {
    .header {
      .link {
        display: block;
      }
    }
  }
`;

const Item = ({ item }) => (
  <StyledItem>
    <div className={'header'}>
      <Link to={`/articles/${item.frontmatter.slug}`}>
        <Img fluid={item.frontmatter.image.childImageSharp.fluid} />
        <div className={'link'}>Leer artículo →</div>
      </Link>
      <div className={'categories'}>
        {item.frontmatter.categories.map((x, idx) => (
          <span key={idx}>
            <Link to={`/category/${x}`}>{x}</Link>
            {idx < item.frontmatter.categories.length - 1 && ', '}
          </span>
        ))}
      </div>
    </div>
    <div className={'meta'}>
      <h4>
        <Link to={`/articles/${item.frontmatter.slug}`}>
          {item.frontmatter.title}
        </Link>
      </h4>
      <span>{item.frontmatter.date}</span>
    </div>
    <div className={'content'}>
      <p>{item.excerpt}</p>
    </div>
  </StyledItem>
);

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
