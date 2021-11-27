import React from "react";
import styled from "styled-components";

export default function Button(props) {

    return (
      <a href={props.link} target={props.target} rel="noopener noreferrer">
        <ButtonLink  bgColor={props.bgColor} textColor={props.textColor} fontSize={props.fontSize}>
            {/* Use color format as variable in globalstyle (example: "--color-darkblue") */}
            {props.children}
            {props.text}
        </ButtonLink>
      </a>

    );
}


const ButtonLink = styled.button`
  cursor: pointer;
  margin: 0.7vmin 0.7vmin;
  padding: 2vmin 3vmin;
  border-radius: 2vmin;
  /* border-style: none; */
  border-width: 0.5vmin;
  
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  font-size: calc(0.5rem + 2vmin);
  font-size: ${(props) => props.fontSize};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};


  &:hover {
    background-color: ${(props) => props.textColor};
    color: ${(props) => props.bgColor};
    transition: all 0.2s ease-out; 
  } 
`;

ButtonLink.defaultProps ={
    fontSize: "calc(0.5rem + 2vmin)",
    bgColor: "var(--color-pink)",
    textColor: "var(--color-white)",
    link: "",
    children: "",
    text: "",
}