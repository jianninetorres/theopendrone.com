import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import logo from "../../assets/images/icon.svg";

const HrWrapperStyles = styled.div`
  padding: calc(var(--base-size) * 2) calc(var(--base-size) * 2) 0
    calc(var(--base-size) * 2);
`;

const FooterStyles = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--base-size);

  @media ${(props) => props.theme.breakpoints.tabletLandscape} {
    flex-direction: row;
    padding: calc(var(--base-size) * 2);
  }

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    display: none;
    @media ${(props) => props.theme.breakpoints.tabletLandscape} {
      display: block;
    }
  }

  a {
    color: ${(props) => props.theme.colors.black};
    margin: var(--base-size) calc(var(--base-size) * 2);
    text-decoration: none;
    &:visited {
      color: initial;
    }
  }

  a.link {
    margin: var(--base-size) var(--base-size) var(--base-size)
      calc(var(--base-size) / 2);
  }
`;

const Footer = () => {
  return (
    <>
      <HrWrapperStyles className="hr-wrapper">
        <hr />
      </HrWrapperStyles>
      <FooterStyles>
        <Link to="/">Documentation</Link>
        <Link to="/">Forum</Link>
        <div className="logo-container">
          <img src={logo} className="logo" />
          <Link
            to="/"
            className="link"
            role="button"
            aria-label="home"
            tabIndex={0}
          >
            Open Drone
          </Link>
        </div>
        <Link to="/blog">Blog</Link>
        <Link to="/">Donate</Link>
      </FooterStyles>
    </>
  );
};

export default Footer;
