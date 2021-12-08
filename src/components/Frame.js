import React, { Component } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade"
import Rotate from "react-reveal/Rotate"



export default function Frame(props) {

        return (
            <Container onClick={props.onClick} color={props.color} name={props.name} no={props.no}>
                <div class="card green">
                    <span class="inner">
                        <span class="mark"><img className="photo" src={props.src}/></span>
                    </span>
                </div>
            </Container>
        )

}

const Container = styled.div`


.card {
  cursor: pointer;
  //background-color: var(--color-black);
  padding: calc(0px + 0.75vw);
  float:left;
  /* background:#F9F7F8; */
  border-radius:5px;
  display:table;
  /* padding:5px; */
  margin: 5vw 5vw;
  font-family: Bright;
  /* text-shadow:
     1px  1px 0 #211E21,
    -1px -1px 0 #211E21,
    -1px  1px 0 #211E21,
     1px -1px 0 #211E21,
     1px  0   0 #211E21,
    -1px  0   0 #211E21,
     0   -1px 0 #211E21,
     0    1px 0 #211E21,
     4px  4px 0 #211E21; */
  /* box-shadow:0 0 10px #aaaaaa; */
  text-align:center;
  position:relative;
  transition-duration: 0.25s;
  user-select: none;
}
.card .inner{
  display:table-cell;
  vertical-align:middle;
  border-radius:5px;
  overflow:hidden;
}

.card .mark{
  display:inline-block;
  vertical-align:middle;
  //background: var(--color-white);
  margin:auto;
  /* padding:0 26px; */
  //border-radius:200px 100px / 200px 100px;
  line-height:1.4;
  overflow: hidden;
}

.card .photo{
    width: calc(10px + 20vw);
    height: auto;
    margin-top: 0vw;
}

.card:before,
.card:after{
  display:inline-block;
  position:absolute;
  text-align: center;
  width: 17vw;
  /* line-height:0; */
  font-size:calc(0.5rem + 2vw);
  color: var(--color-white);
  //border: 5px solid green;
  /* text-shadow:
     1px  1px 0 #211E21,
    -1px -1px 0 #211E21,
    -1px  1px 0 #211E21,
     1px -1px 0 #211E21,
     1px  0   0 #211E21,
    -1px  0   0 #211E21,
     0   -1px 0 #211E21,
     0    1px 0 #211E21,
     2px  2px 0 #211E21; */
}

.card:before{
  top:-10%;
  left:50%;
  transform: translate(-50%,0);
  text-align: center;
  //border: 5px solid red;
  content: "${props => props.no}";
}
.card:after{
  bottom:-10%;
  left: 50%;
  transform: translate(-50%,0);
  text-align: center;
  content: "${props => props.name}";
}

.card.green .inner{
  //background:#126B59;
}

.card:hover{
  transform: scale(1.02);
  box-shadow: 0 12px 100px 0 inset rgba(208, 200, 179, 0.9), 0 5px 70px 0 inset rgba(62, 100, 86, 1);
  //box-shadow: 0 12px 100px 0 rgba(208, 200, 179, 0.9), 0 5px 70px 0 rgba(62, 100, 86, 1);
  transition-duration: 0.25s;
}

.card:active{
  transform: scale(0.97);
  transition-duration: 0.05s;
  box-shadow: 0 12px 100px 0 inset rgba(208, 200, 179, 0.9), 0 5px 70px 0 inset rgba(62, 100, 86, 1);
}

@media only screen and (max-width: 750px) {
  .card {
    margin: 7vw 2vw;
}
}
`