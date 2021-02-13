import React from "react";
import { Link } from "gatsby";
import ContentP from "./ContentP";
import styled from "styled-components";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

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
    &:hover {
      color: ${(props) => props.theme.colors.blue};
      text-decoration: overline;
    }
  }

  a.link {
    margin: var(--base-size) var(--base-size) var(--base-size)
      calc(var(--base-size) / 2);
  }
`;

const ContactStyles = styled.section`
  background-color: ${(props) => props.theme.colors.lightgrey1};

  div {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    font-size: 1rem;
    padding: calc(var(--base-size) * 2);
  }

  section {
    display: flex;
    flex-direction: column;

    span {
      margin-bottom: calc(var(--base-size) * 1.5);

      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.black};
        &:visited {
          color: initial;
        }
        &:hover {
          color: ${(props) => props.theme.colors.blue};
          text-decoration: underline;
        }
      }
    }
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
        <Link to="/blog/1">Blog</Link>
        <Link to="/">Donate</Link>
      </FooterStyles>
      <ContactStyles>
        <div>
          <ContentP>
            If you'd like to get involed or support our mission, please reach
            out to us at. Currently we are only working for medical related
            deliveries, however we will be expanding soon.
          </ContentP>
          <section>
            <span>
              <FontAwesomeIcon
                icon={faEnvelope}
                color="black"
                margin-bottom="16px"
              />{" "}
              <a href="mailto:naman@theopendrone.com">naman@theopendrone.com</a>
            </span>
            <span>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                color="black"
                margin-bottom="16px"
              />{" "}
              <a href="tel:+91 9326690487">+91 9326690487</a>
            </span>
            <span>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                color="black"
                margin-bottom="16px"
              />{" "}
              <a href="https://www.linkedin.com/in/naman-pushp-3279991a7">
                Naman Pushp
              </a>
            </span>
          </section>
        </div>
      </ContactStyles>
    </>
  );
};

export default Footer;
