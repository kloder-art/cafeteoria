import React from 'react';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slick';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const StyledSlider = styled.div`
  .gatsby-image-wrapper,
  img {
    margin: 0;
  }
  a {
    border-bottom: 0px;
  }
  .slick-slider {
    margin-bottom: 105px;
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    .slick-list {
      position: relative;
      display: block;
      overflow: hidden;
      margin: 0;
      padding: 0;
      &:focus {
        outline: none;
      }
      &.dragging {
        cursor: pointer;
        cursor: hand;
      }
    }
  }

  .slick-track,
  .slick-list {
    transform: translate3d(0, 0, 0);
  }
  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;

    &:before,
    &:after {
      display: table;
      content: '';
    }
    &:after {
      clear: both;
    }
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    position: relative;
    display: none;
    float: left;
    height: 300px;
    min-height: 1px;
  }
  [dir='rtl'] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-arrow {
    position: absolute;
    z-index: 1;
    bottom: 0;
    border: 0px;
    background: rgba(0, 0, 0, 0.5);
    color: var(--background-color);
    cursor: pointer;
    padding: 0.4rem 0.5rem;
    &:hover {
      background: rgba(0, 0, 0, 1);
    }
    &.slick-prev {
      left: 0;
    }
    &.slick-next {
      right: 0;
    }
    &.slick-hidden {
      display: none;
    }
  }
  .slick-dots {
    position: absolute;
    width: 100%;
    text-align: center;
    list-style: none;
    margin: 0;
    padding: 0;
    bottom: -75px;
    display: flex !important;
    flex-direction: row;
    justify-content: space-between;
    li {
      // position: relative;
      // display: inline-block;
      cursor: pointer;
      width: 110px;
      height: 70px;
      // margin: 0 0.5rem;
      &.slick-active {
        opacity: 0.5;
      }
    }
  }
  .meta {
    text-align: right;
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 50px;
    h2 {
      padding: 0.8rem 1rem;
      color: black;
      background: var(--background-color);
      margin: 0;
    }
    div {
      display: inline-block;
      padding: 0 1rem 0.5rem;
      color: var(--text-light-color);
      background: var(--background-color);
    }
  }
  .slick-slide a:hover .meta {
    h2,
    div {
      color: var(--text-inverse-color);
      background: var(--background-inverse-color);
    }
  }
`;

const Slider = ({ items }) => (
  <StyledSlider>
    <ReactSlider
      dots={true}
      infinite={true}
      slidesToShow={1}
      slidesToScroll={1}
      fade={true}
      nextArrow={
        <div>
          <FaArrowRight />
        </div>
      }
      prevArrow={
        <div>
          <FaArrowLeft />
        </div>
      }
      customPaging={(idx) => (
        <a>
          <img
            src={items[idx].frontmatter.image.childImageSharp.resize.src}
            alt={items[idx].frontmatter.title}
          />
        </a>
      )}
    >
      {items.map((x, idx) => (
        <div key={idx}>
          <Link to={`/articles/${x.frontmatter.slug}`}>
            <Img
              fluid={x.frontmatter.image.childImageSharp.fluid}
              alt={x.frontmatter.title}
            />
            <div className={'meta'}>
              <h2>{x.frontmatter.title}</h2>
              <div>{x.frontmatter.date}</div>
            </div>
          </Link>
        </div>
      ))}
    </ReactSlider>
  </StyledSlider>
);

Slider.propTypes = {
  items: PropTypes.array,
};

export default Slider;
