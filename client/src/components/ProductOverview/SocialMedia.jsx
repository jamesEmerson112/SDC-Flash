import React from "react";
import styled from "styled-components";

import { FaFacebook, FaPinterest, FaTwitterSquare } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="social_media">
      <div className="icons">
        <div className="icon">
          <Span>
            <a style={{ color: "inherit" }} href="https://www.facebook.com/">
              <FaFacebook />
            </a>
          </Span>
        </div>
        <div className="icon">
          <Span>
            <a style={{ color: "inherit" }} href="https://www.pinterest.com/">
              <FaPinterest />
            </a>
          </Span>
        </div>
        <div className="icon">
          <Span>
            <a style={{ color: "inherit" }} href="https://twitter.com/">
              <FaTwitterSquare />
            </a>
          </Span>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;

const Span = styled.span`
  margin-right: 10px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  &:: before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.25s ease-out;
  }
  &:hover {
    font-weight: bold;
    &::before {
      width: 100%;
    }
  }
`;
