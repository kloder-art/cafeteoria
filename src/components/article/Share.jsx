import React from 'react';
import styled from 'styled-components';
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGetPocket,
  FaWhatsapp,
  FaTelegram,
  FaReddit,
  FaTumblr,
} from 'react-icons/fa';
import {
  FacebookShareButton,
  LinkedinShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { Location } from '@reach/router';

const StyleShare = styled.div`
  margin: 1rem 0;
  color: var(--primary-color);
  height: 1.5rem;
  button {
    margin-right: 1rem;
    &:hover {
      color: black !important;
      border-bottom: 1px solid var(--primary-color) !important;
    }
  }
`;

const Share = () => (
  <StyleShare>
    <Location>
      {({ location: { href } }) => (
        <>
          <FacebookShareButton url={href}>
            <FaFacebook />
          </FacebookShareButton>
          <TwitterShareButton url={href}>
            <FaTwitter />
          </TwitterShareButton>
          <LinkedinShareButton url={href}>
            <FaLinkedin />
          </LinkedinShareButton>
          <PocketShareButton url={href}>
            <FaGetPocket />
          </PocketShareButton>
          <WhatsappShareButton url={href}>
            <FaWhatsapp />
          </WhatsappShareButton>
          <TelegramShareButton url={href}>
            <FaTelegram />
          </TelegramShareButton>
          <RedditShareButton url={href}>
            <FaReddit />
          </RedditShareButton>
          <TumblrShareButton url={href}>
            <FaTumblr />
          </TumblrShareButton>
        </>
      )}
    </Location>
  </StyleShare>
);

export default Share;
