import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import { mediaQuery, windowOffSetY } from "../../helpers/utilities";
import BrowserBanner from "./BrowserBanner";

import styled from "styled-components";
import logo from "../../assets/images/icon.svg";
import menu from "../../assets/images/menu.svg";

const NavStyles = styled.nav`
  background-color: var(--white);
  padding: var(--base-size);
  position: fixed;
  width: 100%;
  z-index: 100;
  @media ${(props) => props.theme.breakpoints.tabletLandscape} {
    background-color: ${(props) => props.bgColor || "white"};
    transition: background-color 0.2s ease;
    border-bottom: 1px solid ${(props) => props.navBottomBorder};
  }

  .nav-wrapper {
    width: 100%;
    @media ${(props) => props.theme.breakpoints.tabletLandscape} {
      display: flex;
      max-width: var(--desktop2XL);
      margin: 0 auto;
    }
  }

  .links-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.tabletLandscape} {
      flex: 1 1 auto;
    }
  }

  .list-container {
    display: none;
    @media ${(props) => props.theme.breakpoints.tabletLandscape} {
      display: flex;
      justify-content: space-between;
    }
  }

  .list-container--visible {
    display: flex;
    flex-direction: column;
    padding: var(--base-size) 0;
  }

  .list-container__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 16px 0;
    font-size: var(--base-size);
    > a:not(.start-button) {
      color: var(--black);
      &:hover {
        color: var(--blue);
        text-decoration: overline;
      }
    }

    @media ${(props) => props.theme.breakpoints.tabletLandscape} {
      margin: 0;
      font-size: calc(var(--base-size) * 1.5);
      &:not(last-child) {
        margin: 0 var(--base-size);
      }
    }

    &--home {
      @media ${(props) => props.theme.breakpoints.tabletLandscape} {
        display: none;
      }
    }

    &--button {
      margin-bottom: 0;
      @media ${(props) => props.theme.breakpoints.tabletLandscape} {
        display: flex;
        background-color: ${(props) => props.theme.colors.blue};
        height: calc(var(--base-size) * 4);
        border-radius: calc(var(--base-size) * 2);
        cursor: pointer;
        transition: transform 0.2s linear;

        &:hover {
          transform: scale(1.05);
          transition: transform 0.2s linear;
        }

        > a {
          color: var(--white);

          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 calc(var(--base-size) * 2);
          height: 100%;
          text-decoration: none;
          &:hover,
          &:visited {
            color: var(--white);
          }
        }
      }
    }
  }

  .logo-container {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    width: max-content;

    font-size: var(--base-size);
    color: var(--black);
    margin-left: calc(var(--base-size) * 4);

    @media ${(props) => props.theme.breakpoints.tabletLandscape} {
      font-size: calc(var(--base-size) * 2);
    }
  }

  .logo {
    background: url(${logo}) no-repeat center center;
    width: 100%;
    max-width: 48px;
    padding: 16px 0;
    flex-basis: 300px;
    flex: 1 1 auto;
  }

  .menu-burger {
    background: url(${menu}) no-repeat center center;
    width: 100%;
    max-width: 50px;
    height: 50px;
    flex-basis: 50px;
    flex: 1 1 auto;

    &:hover,
    &:focus {
    }

    @media ${(props) => props.theme.breakpoints.tabletLandscape} {
      display: none;
    }
  }

  a {
    text-decoration: none;
    width: 100%;
  }
`;

const Nav = () => {
  const [toggleNav, setToggleNav] = useState("list-container");
  const [navBottomBorder, setNavBottomBorder] = useState("none");
  const navRef = useRef(null);

  const lightGrey = "#CFD8E1";

  useEffect(() => {
    let mql = mediaQuery("1024px");
    let windowPageYOffset = windowOffSetY();

    if (windowPageYOffset > 0) {
      setNavBottomBorder(lightGrey);
    }

    window.addEventListener("scroll", () => {
      if (mql.matches && window.scrollY > 0) {
        setNavBottomBorder(lightGrey);
      } else {
        setNavBottomBorder("none");
      }
    });
  }, []);

  const onClickNav = () => {
    let viewport = navRef.current.scrollWidth;
    if (viewport < 1024) {
      setToggleNav("list-container");
      return toggleNav === "list-container"
        ? setToggleNav("list-container--visible")
        : setToggleNav("list-container");
    }
  };

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      onClickNav();
    }
  };

  return (
    <NavStyles navBottomBorder={navBottomBorder} ref={navRef}>
      <BrowserBanner />
      <div className="nav-wrapper">
        <div className="links-container">
          <div className="logo">
            <Link
              to="/"
              className="logo-container"
              role="button"
              aria-label="home"
              tabIndex={0}
            >
              Open Drone
            </Link>
          </div>
          <div
            className="menu-burger"
            onClick={onClickNav}
            onKeyUp={onEnter}
            role="button"
            aria-label="menu"
            tabIndex={0}
          ></div>
        </div>
        <ul className={toggleNav}>
          <li className="list-container__item list-container__item--home">
            <Link
              to="/"
              activeStyle={{ color: `var(--hot-pink)` }}
              onClick={onClickNav}
            >
              Home
            </Link>
          </li>
          <li className="list-container__item">
            <Link
              to="/updates/1"
              activeStyle={{ color: `var(--hot-pink)` }}
              onClick={onClickNav}
            >
              Updates
            </Link>
          </li>
          {/* <li className="list-container__item">
            <Link
              to="/forum"
              activeStyle={{ color: `var(--hot-pink)` }}
              onClick={onClickNav}
            >
              forum
            </Link>
          </li>
          <li className="list-container__item">
            <Link
              to="/contact"
              activeStyle={{ color: `var(--hot-pink)` }}
              onClick={onClickNav}
            >
              contact
            </Link>
          </li> */}
          <li className="list-container__item list-container__item--button">
            <Link to="#contact" className="start-button">
              Get involved
            </Link>
          </li>
        </ul>
      </div>
    </NavStyles>
  );
};

export default Nav;
