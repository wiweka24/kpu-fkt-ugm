import React, {useState} from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyle.js";
import Button from "../components/Button";
import {
    Dice,
    Rectangle_1,
    Rectangle_2,
    Calon_1, 
    Calon_2,
    ChooseCandidate,
}from "../assets/images"

/*var modal1 = document.getElementById("Candidate1");
var modal2 = document.getElementById("Candidate2");

var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");

var span = document.getElementsByClassName("close")[0];

btn1.onclick = () => {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}*/


export function InfoCalon(){


  return(
    
    <Container> 
     <div class="background-fixed">
        <img src={Dice} alt="Dice" style={{width: "50vw"}}/>
    </div>

    <div class="title-container">
        <div class="page-title">
            <h1>Calon Ketua</h1>
        </div>
    </div>
    
    <div class="content-container">
        <button id="button1" class="button" ></button>
        <button id="button2" class="button" ></button>
        <div class="image-background">
            <img src={ChooseCandidate} alt="Choose A Candidate" style={{maxWidth: "100%", height: "auto"}}/>
        </div>
        
    </div>

    <div id="Candidate1" className="modalpopup">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close">&times;</span>
                <h2>Candidate Name 1</h2>
            </div>

            <div class="modal-subheader">
                <h3>Departemen Teknik Elektro dan Teknologi Informasi</h3>
            </div>

            <div class="modal-image">
                <img src={Calon_1} alt="Candidate 1 Picture" style={{maxWidth: "100%", height: "auto", width: "500px"}}/>
            </div>

            <div class="modal-body">
              <h3>Profil</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laborum necessitatibus veniam? Porro pariatur quibusdam eius modi, explicabo rem. Repudiandae, exercitationem! Et quisquam dolores facilis veritatis ut praesentium qui eum, fugiat voluptatum doloremque necessitatibus quaerat labore sunt eveniet repellendus vel! Cumque magni nemo autem voluptates sequi ut, aspernatur ducimus explicabo in nisi laboriosam placeat consequatur. Unde, officia non minus quasi provident natus voluptates aut ratione? Ab quasi velit, incidunt voluptas perferendis minus cumque ullam nemo quam veritatis, qui, aspernatur magnam. A iure non ipsum. Blanditiis dicta delectus quam? Alias in aspernatur quidem commodi, soluta necessitatibus maiores iusto eligendi expedita similique?</p>
              <h3>CV</h3>
                <img src = "dice.png" alt="CV" style={{maxWidth: "100%", height: "auto", width: "500px"}}/>
            </div>

            <div class="modal-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Up5kkJ0hEU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
            <div class="modal-footer">
                <h3>KPU FT UGM 2021</h3>
            </div>
        </div>
    </div>

    <div id="Candidate2" class="modalpopup">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close">&times;</span>
                <h2>Candidate Name 2</h2>
            </div>

            <div class="modal-subheader">
                <h3>Departemen Teknik Elektro dan Teknologi Informasi</h3>
            </div>

            <div class="modal-image">
                <img src={Calon_2} alt="Candidate 1 Picture" style={{maxWidth: "100%", height: "auto", width: "500px"}}/>
            </div>

            <div class="modal-body">
              <h3>Profil</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laborum necessitatibus veniam? Porro pariatur quibusdam eius modi, explicabo rem. Repudiandae, exercitationem! Et quisquam dolores facilis veritatis ut praesentium qui eum, fugiat voluptatum doloremque necessitatibus quaerat labore sunt eveniet repellendus vel! Cumque magni nemo autem voluptates sequi ut, aspernatur ducimus explicabo in nisi laboriosam placeat consequatur. Unde, officia non minus quasi provident natus voluptates aut ratione? Ab quasi velit, incidunt voluptas perferendis minus cumque ullam nemo quam veritatis, qui, aspernatur magnam. A iure non ipsum. Blanditiis dicta delectus quam? Alias in aspernatur quidem commodi, soluta necessitatibus maiores iusto eligendi expedita similique?</p>
              <h3>CV</h3>
                <img src = "dice.png" alt="CV" style={{maxWidth: "100%", height: "auto", width: "500px"}}/>
            </div>

            <div class="modal-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Up5kkJ0hEU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
            <div class="modal-footer">
                <h3>KPU FT UGM 2021</h3>
            </div>
        </div>
    </div>

    </Container>
    
    )

}

const Container = styled.div`
background-color: var(--color-darkblue);
font-family: GameofSquids;
position: relative;

* {
    margin: 0;
    padding: 0;
    color: white;
}

h1 {
  color: #FFFFFF; 
}

//Container Judul
.title-container{
  width: 100%;
  height: auto;
  position: relative;
  max-height: 200px;
}

//Teks Calon Ketua
.page-title{
  font-size: 1vw;
  max-width: 100%;
  height: 50%;
  text-align: center;
  margin: auto;
}

//Container Isi
.content-container{
  width: 100%;
  position: relative;
}

//Foto Kandidat
.button {
  border: none;
  background-size: cover;
  min-width: 30%;
  height: auto;
  display: inline-flexbox;
  color: var(--color-yellow);
  border-radius: 12px;
  padding: 20% 0%;
  text-align: center;
  text-decoration: none;
  font-size: 4vw;
  font-family: MontBook;
  font-weight: bolder;
  margin: 10px 10% 10px 10%;
  transition-duration: 0.2s;
  cursor: pointer;
}


.button:hover{
  color: white;
  transform: scale(1.02);
  box-shadow: 0 12px 100px 0 rgba(251, 36, 129, 0.9), 0 5px 70px 0 rgba(181, 34, 63, 0.9);
}

.button:active{
  transform: scale(0.97);
  transition-duration: 0.05s;
}

//Kandidat 1
#button1 {
  background-image: url(calon_1.png);
}

//Kandidat2
#button2 {
  background-image: url(calon_2.png);
}

//Uno
.image-background{
  max-width: 50%;
  max-height: 50%;
  min-width: 10%;
  position: relative;
  top: 20px;
  padding: 3% 0%;
  margin: auto;
  transition-duration: 0.4s;
}

.image-background:hover{
  transform: scale(1.02);
  transition-duration: 0.4s;
}

/*Dice*/
.background-fixed{
  position: absolute;
  width: 100px;
  height: auto;
  right: 30%;
  top: -10%;
  z-index: 0;
}

.modal-popup {
  display: none;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
  color: white;
  font-family: MontBook;
}

.modal-content {
  background-color: #102037;
  border-radius: 2%;
  font-size: 1vw;
  margin: 7% auto;
  position: relative;
  padding: 1% 3% 3% 3%;
  border: 5px solid rgba(251, 36, 129, 0.9);
  width: 80%;
  animation-name: animatetop;
  animation-duration: 1s;
}

.modal-header{
  font-family: GameofSquids;
  text-align: center;
  margin: 2% 0px 0px 0px;
  padding: 1%;
  background-color: rgba(251, 36, 129, 0.9);
  border-radius: 12px;
}

.modal-subheader{
  text-align: center;
  background-color: var(--color-yellow);
  border-radius: 12px;
  padding: 1%;
  margin: auto;
}

.modal-image{
  position: relative;
  padding: 0px 27%;
  margin: 2% auto;
  border-radius: 12px;
  background-color: #FFFFFF;
}

.modal-body{
  text-align: justify;
  font-size: 1.5vw;
  margin: 2% auto;
}

.modal-body p{
  line-height: 150%;
}

.modal-body h3{
  margin: 1% auto;
}

.modal-video{
  position: relative;
  margin: auto;
  width: 97%;
  padding-bottom: 56.25%; 
  height: 0;
}

.modal-video iframe{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-footer{
  margin: 3% 0% 0% 0%;
}

#Candidate1 {
  display: none;
}

#Candidate2 {
  display: none;
  z-index: 11;
}

.close {
  color: #FFFFFF;
  position: absolute;
  right: 6%;
  top: 12px;
  font-size: 5vw;
  font-weight: bold;
  transition-duration: 0.4s;
}

.close:hover,
.close:focus {
  color: var(--color-green);
  text-decoration: none;
  transition-duration: 0.6s;
  cursor: pointer;
}

@keyframes animatetop {
  from {top: -1000px; opacity: 0}
  to {top: 0; opacity: 1}
}

@keyframes animatetopexit {
  from {top: 0; opacity: 1}
  to {top: -1000px; opacity: 0}
}
`

