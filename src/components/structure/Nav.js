import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import logo from "../../assets/images/icon.svg";
import menu from "../../assets/images/menu.svg";

const NavStyles = styled.nav`
  background-color: var(--white);
  padding: var(--base-size);
  position: fixed;
  width: 100%;
  z-index: 100;
  @media screen and (min-width: 1024px) {
    background-color: ${(props) => props.bgColor};
    transition: background-color 0.2s ease;
    border-bottom: 1px solid ${(props) => props.navBottomBorder};
  }

  .nav-wrapper {
    width: 100%;
    @media screen and (min-width: 1024px) {
      display: flex;
      max-width: var(--desktopXXL);
      margin: 0 auto;
    }
  }

  .links-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 1024px) {
      flex: 1 1 auto;
    }
  }

  .list-container {
    display: none;
    @media screen and (min-width: 1024px) {
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
    > a {
      color: var(--black);
      &:hover {
        color: var(--blue);
        text-decoration: overline;
      }
    }

    @media screen and (min-width: 1024px) {
      margin: 0;
      font-size: calc(var(--base-size) * 2);
      &:not(last-child) {
        margin: 0 var(--base-size);
      }
    }

    &--home {
      @media screen and (min-width: 1024px) {
        display: none;
      }
    }

    &--button {
      display: none;
      @media screen and (min-width: 1024px) {
        display: flex;
        height: calc(var(--base-size) * 4);
        border-radius: calc(var(--base-size) * 2);
        cursor: pointer;

        &:hover {
        }

        > a {
          color: var(--white);

          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 calc(var(--base-size) * 2);
          height: 100%;
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
  }

  .logo {
    background: url(${logo}) no-repeat center center;
    width: 100%;
    max-width: 48px;
    height: 48px;
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

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  a {
    text-decoration: none;
    width: 100%;

    &:hover,
    &:focus {
    }
  }
`;

const Nav = () => {
  const [toggleNav, setToggleNav] = useState("list-container");
  const [navColor, setNavColor] = useState("transparent");
  const [navBottomBorder, setNavBottomBorder] = useState("none");
  const navRef = useRef(null);

  const white = "#FFFFFF";
  const lightGrey = "#CFD8E1";
  const transparent = "transparent";

  useEffect(() => {
    let mql = window.matchMedia("(min-width: 1024px)");
    let windowPageYOffset =
      window.pageYOffset || document.documentElement.scrollTop;

    if (windowPageYOffset > 0) {
      setNavColor(white);
      setNavBottomBorder(lightGrey);
    }

    window.addEventListener("scroll", () => {
      if (mql.matches && window.scrollY > 0) {
        setNavColor(white);
        setNavBottomBorder(lightGrey);
      } else {
        setNavColor(transparent);
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
    <NavStyles
      bgColor={navColor}
      navBottomBorder={navBottomBorder}
      ref={navRef}
    >
      <div className="nav-wrapper">
        <div className="links-container">
          <Link to="/" className="logo-container">
            <div
              className="logo"
              role="button"
              aria-label="home"
              tabIndex={0}
            ></div>
            The Open Drone
          </Link>
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
          </li>
        </ul>
      </div>
    </NavStyles>
  );
};

export default Nav;
