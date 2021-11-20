import React, { Component } from "react";
import styled from "styled-components";

import { Calon_1 } from "../assets/images/imgIndex";

export default function UnoCard(no) {

        return (
            <Container no={no}>
                <div class="card num-1 green">
                    <span class="inner">
                        <span class="mark"><img className="photo" src={Calon_1}/></span>
                    </span>
                </div>
            </Container>

        )

}

const Container = styled.div`
.card {
  width:116px;height:178px;float:left;
  background:#F9F7F8;
  border-radius:5px;
  display:table;
  padding:5px;
  margin:10px;
  font-family: montBook;
  font-size:100px;
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
  padding:0 26px;
  border-radius:100px 60px / 120px 60px;
  line-height:1.4;
  overflow: hidden;
}

.card .photo{
    width: 80px;
    height: auto;
}

.card:before,
.card:after{
  display:inline-block;
  position:absolute;
  line-height:0;
  font-size:20px;
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
}
.card:after{
  bottom:15px;
  right:10px;
  -webkit-transform:rotate(180deg)
}

.card.blue{
  color:#0063B3;
}

.card.green .inner{
  background:#126B59;
}


.card.num-1:before,
.card.num-1:after{
  content:"1";
}

.card.num-2:before,
.card.num-2:after{
  content:"2";
}


`