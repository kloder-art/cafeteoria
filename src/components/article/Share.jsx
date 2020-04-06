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
    <FacebookShareButton url={window.location.href}>
      <FaFacebook />
    </FacebookShareButton>
    <TwitterShareButton url={window.location.href}>
      <FaTwitter />
    </TwitterShareButton>
    <LinkedinShareButton url={window.location.href}>
      <FaLinkedin />
    </LinkedinShareButton>
    <PocketShareButton url={window.location.href}>
      <FaGetPocket />
    </PocketShareButton>
    <WhatsappShareButton url={window.location.href}>
      <FaWhatsapp />
    </WhatsappShareButton>
    <TelegramShareButton url={window.location.href}>
      <FaTelegram />
    </TelegramShareButton>
    <RedditShareButton url={window.location.href}>
      <FaReddit />
    </RedditShareButton>
    <TumblrShareButton url={window.location.href}>
      <FaTumblr />
    </TumblrShareButton>
  </StyleShare>
);

export default Share;
