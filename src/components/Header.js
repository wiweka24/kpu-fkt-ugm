import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LogoKPU from "../assets/images/logo-kpu.webp"

export default class Header extends Component {
  state = { clicked: false, modalIsOpen: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  nothing = () => {};



  render() {

    return (
      <Container id="nav">
        <nav className="navbar">
          {/* Left-corner: Logo KPU */}
          <Link
            to="/"
            relative
            className="logo"
            onClick={this.state.clicked ? this.handleClick : this.nothing()}
          >
            <img src={LogoKPU} alt="Logo KPU FT UGM 2021" />
            <h4>KPU FT UGM 2021</h4>
          </Link>

          {/* Right-corner desktop & dropdown menu mobile: Menu Navigasi  */}
          <NavItemsStyled
            className={this.state.clicked ? "nav-items active" : "nav-items"}
            onClick={this.handleClick}
          >
            {MenuItems.map((item, index) => {
              return(
                <li key={index}>
                    <Link
                    className="nav-links"
                    to={item.url}
                    relative
                    >
                      <p>{item.title}</p>
                    </Link>
                </li>
              )
                
                })}
          </NavItemsStyled>

          {/* Right-corner mobile: Hamburger bar & cross symbol*/}
          <NavIconStyled onClick={this.handleClick}>
            <FontAwesomeIcon
              icon={this.state.clicked ? faTimes : faBars}
              className="fa-icon"
            />
          </NavIconStyled>
        </nav>
      </Container>
    );
  }
}

const Container = styled.header`
  //Give block with same height as absolute navbar
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  height: calc(0.5rem + 6vmin);
  z-index: 20;
  position: relative;
  background-color: var(--color-darkblue);
  

  .navbar {
    //Container style
    z-index: 3;
    background-color: var(--color-darkblue);
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    padding: 0.6vmin;
    width: 100%;
    top: 0;
    min-height: calc(0.5rem + 7vmin);

    //Text style
    white-space: nowrap;

    //Flex layout
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    .logo {
      display: flex;
      align-items: center;
      text-align: center;
      text-decoration: none;
      margin-left: 5vmin;
      cursor: pointer;

      img {
        height: 9vmin;
        padding: 0.5em;
      }

      h4 {
        color: var(--color-white);
        text-decoration: none;
        font-weight: bold;
        margin: 0;

        &:hover {
          color: var(--color-pink);
          transition: all 0.2s ease-out;
        }
      }
    }
    background: var(--color-darkblue);
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    height: calc(0.5rem + 8vmin);
    width: 100%;
    top: 0;

    //Text style
    white-space: nowrap;

    //Flex layout
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  @media (min-width: 1024px) {
    .navbar {
      min-height: 0vmin;
      padding-right: 5vmin;
    }
  }
`;
const NavItemsStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(${MenuItems.length}, auto);
  grid-column-gap: 5vw;
  padding: 0;
  margin-right: 5vmin;
  margin: 0;

  li {
    list-style-type: none;
  }
  p{
    margin: 0;
    padding: 3vmin;
  }

  @media (max-width: 1024px) {
    &.nav-items {
      display: flex;
      position: absolute;
      margin: 0;
      padding: 0;
      flex-direction: column;
      width: 100%;
      top: calc(0.5rem + 8vmin);
      left: -100%;
      transition: all 0.5s ease;
    }

    &.nav-items.active {
      background: var(--color-darkblue);
      top: calc(0.5rem + 8vmin);
      left: 0;
      opacity: 1;
      transition: all 0.5 ease-in-out;
      box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    }
  }

  .nav-links {
    color: var(--color-white);
    text-decoration: none;
    transition: all 0.2s ease-out;
    margin: 0;

    &:hover {
      color: var(--color-pink);
      transition: all 0.2s ease-out;
    }

    @media (max-width: 1024px) {
      width: 100%;
      display: table;
      padding: 1vh 0 1vh 0;

      &:hover {
        background-color: var(--color-pink);
        color: var(--color-white);
        transition: all 0.2s ease-out;
      }
    }
  }
`;

const NavIconStyled = styled.image`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    margin-right: 5vmin;
    cursor: pointer;

    .fa-icon {
      color: var(--color-white);
    }
    .fa-icon:hover {
      color: var(--color-pink);
      transition: all 0.2s ease-out;
    }
  }
`;
