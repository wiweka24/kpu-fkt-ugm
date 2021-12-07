import React, { Component } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade"
import Rotate from "react-reveal/Rotate"



export default function UnoCard(props) {

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
  background-color: var(--color-white);
  padding: calc(0px + 0.75vw);
  float:left;
  /* background:#F9F7F8; */
  border-radius:5px;
  display:table;
  /* padding:5px; */
  margin: 3vw 5vw;
  font-family: Bright;
  text-shadow:
     1px  1px 0 #211E21,
    -1px -1px 0 #211E21,
    -1px  1px 0 #211E21,
     1px -1px 0 #211E21,
     1px  0   0 #211E21,
    -1px  0   0 #211E21,
     0   -1px 0 #211E21,
     0    1px 0 #211E21,
     4px  4px 0 #211E21;
  /* box-shadow:0 0 10px #aaaaaa; */
  text-align:center;
  position:relative;
  transition-duration: 0.25s;
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
  background:#F9F7F8;
  margin:auto;
  /* padding:0 26px; */
  border-radius:200px 100px / 200px 100px;
  line-height:1.4;
  overflow: hidden;
}

.card .photo{
    width: calc(10px + 20vw);
    height: auto;
    margin-top: -1vw;
}

.card:before,
.card:after{
  display:inline-block;
  position:absolute;
  /* line-height:0; */
  font-size:calc(0.5rem + 1.5vw);
  color:#F9F7F8;
  text-shadow:
     1px  1px 0 #211E21,
    -1px -1px 0 #211E21,
    -1px  1px 0 #211E21,
     1px -1px 0 #211E21,
     1px  0   0 #211E21,
    -1px  0   0 #211E21,
     0   -1px 0 #211E21,
     0    1px 0 #211E21,
     2px  2px 0 #211E21;
}

.card:before{
  top:15px;
  left:10px;
  text-align: left;
  content: "${props => props.no}";
}
.card:after{
  bottom:15px;
  right:10px;
  text-align: right;
  content: "${props => props.name}";
}

.card.green .inner{
  background:#126B59;
}

.card:hover{
  transform: scale(1.02);
  box-shadow: 0 12px 100px 0 rgba(208, 200, 179, 0.9), 0 5px 70px 0 rgba(62, 100, 86, 1);
  transition-duration: 0.25s;
}

.card:active{
  transform: scale(0.97);
  transition-duration: 0.05s;
}

@media only screen and (max-width: 750px) {
  .card {
    margin: 3vw 2vw;
}
}
`