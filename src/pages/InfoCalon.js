import React, {useState} from "react";
import styled from "styled-components";
import {
    Dice,
    Calon_1, 
    Calon_2,
    ChooseCandidate,
}from "../assets/images/imgIndex"
import { Helmet } from "react-helmet";
import UnoCard from "../components/UnoCard";
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"


export default function InfoCalon(){

  const [isClicked, setIsClicked] = React.useState(false);
  const [isClicked2, setIsClicked2] = React.useState(false);

  const clickHandler = () => setIsClicked(clicked => !clicked);
  const clickHandler2 = () => setIsClicked2(clicked => !clicked);

  return(
    <>
    <Helmet>
      <title>Calon Ketua - BEM KMFT UGM</title>
    </Helmet>
    <Container isClicked={isClicked} isClicked2={isClicked2}> 
     <div class="background-fixed">
       <div class="dice">
          <img src={Dice} alt="Dice" style={{width: "40vw"}}/>
       </div>
        
    </div>

    <div class="title-container">
        <div class="page-title">
          <Fade top>
            <h1 style={{fontSize:"calc(0.5rem + 5vmin)"}} >Calon Ketua <br/>BEM KMFT UGM 2022</h1>
          </Fade>
        </div>
    </div>
    
    <div class="content-container" >
      <div class="button-container">
        <Fade left>
          <UnoCard name="ADIAHMAD IRFAN ZIDNY" no="1" src={Calon_1}/>
        </Fade>
        <Fade right>
        <UnoCard  name="ANJU GERALD" no="2" src={Calon_2}/>
        </Fade >
      </div>  
      
      <div class="image-background">
        <Fade bottom>
          <img src={ChooseCandidate} alt="Choose A Candidate" style={{maxWidth: "100%", height: "auto"}}/>
        </Fade>
      </div>  
    </div>

    <div id="Candidate1" class="modal-popup" onClick={clickHandler}>
        <div class="modal-content" onClick={clickHandler}>
            <div class="modal-header">
                <span class="close" onClick={clickHandler}>&times;</span>
                <h2>ADIAHMAD IRFAN ZIDNY</h2>
            </div>

            <div class="modal-subheader">
                <h3>Departemen Teknik Elektro dan Teknologi Informasi</h3>
            </div>

            <div class="modal-image">
                <img src={Calon_1} alt="Candidate 1 Picture"/>
            </div>

            <div class="modal-body">
              <h3>Profil</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laborum necessitatibus veniam? Porro pariatur quibusdam eius modi, explicabo rem. Repudiandae, exercitationem! Et quisquam dolores facilis veritatis ut praesentium qui eum, fugiat voluptatum doloremque necessitatibus quaerat labore sunt eveniet repellendus vel! Cumque magni nemo autem voluptates sequi ut, aspernatur ducimus explicabo in nisi laboriosam placeat consequatur. Unde, officia non minus quasi provident natus voluptates aut ratione? Ab quasi velit, incidunt voluptas perferendis minus cumque ullam nemo quam veritatis, qui, aspernatur magnam. A iure non ipsum. Blanditiis dicta delectus quam? Alias in aspernatur quidem commodi, soluta necessitatibus maiores iusto eligendi expedita similique?</p>
              <h3>CV</h3>
              <div class="modal-cv">
                <img src = {Calon_1} alt="CV di sini"/>
              </div>
            </div>

            <div class="modal-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Up5kkJ0hEU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
            <div class="modal-footer">
                <h3>KPU FT UGM 2021</h3>
            </div>
        </div>
    </div>

    <div id="Candidate2" class="modal-popup" onClick={clickHandler2}>
        <div class="modal-content" onClick={clickHandler2}>
            <div class="modal-header">
                <span class="close" onClick={clickHandler2}>&times;</span>
                <h2>ANJU GERALD</h2>
            </div>

            <div class="modal-subheader">
                <h3>Departemen Teknik Elektro dan Teknologi Informasi</h3>
            </div>

            <div class="modal-image">
                <img src={Calon_2} alt="Candidate 1 Picture"/>
            </div>

            <div class="modal-body">
              <h3>Profil</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laborum necessitatibus veniam? Porro pariatur quibusdam eius modi, explicabo rem. Repudiandae, exercitationem! Et quisquam dolores facilis veritatis ut praesentium qui eum, fugiat voluptatum doloremque necessitatibus quaerat labore sunt eveniet repellendus vel! Cumque magni nemo autem voluptates sequi ut, aspernatur ducimus explicabo in nisi laboriosam placeat consequatur. Unde, officia non minus quasi provident natus voluptates aut ratione? Ab quasi velit, incidunt voluptas perferendis minus cumque ullam nemo quam veritatis, qui, aspernatur magnam. A iure non ipsum. Blanditiis dicta delectus quam? Alias in aspernatur quidem commodi, soluta necessitatibus maiores iusto eligendi expedita similique?</p>
              <h3>CV</h3>
              <div class="modal-cv">
                <img src = {Calon_2} alt="CV di sini"/>
              </div>
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
    </>
    )
}

const Container = styled.div`
background-color: var(--color-darkblue);
font-family: GameofSquids;
overflow: hidden;
padding: 5vmin 10vmin;

* {
    margin: 0;
    padding: 0;
    color: white;
}

//Container Judul
.title-container{
  width: 100%;
  height: auto;
  position: relative;
  padding: 3% 0% 2% 0%;
}

//Teks Calon Ketua
.page-title{
  max-width: 100%;
  text-align: center;
  margin: auto;
}

//Container Isi
.content-container{
  width: 100%;
  position: relative;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  margin: auto;
}

//Tombol Kandidat
/* .button {
  border: none;
  background-size: cover;
  border-radius: 12px;
  text-decoration: none;
  margin: 10px 10% 10px 10%;
  transition-duration: 0.2s;
  cursor: pointer;
} */


.button:hover{
  transform: scale(1.02);
  box-shadow: 0 12px 100px 0 rgba(251, 36, 129, 0.9), 0 5px 70px 0 rgba(181, 34, 63, 0.9);
}

.button:active{
  transform: scale(0.97);
  transition-duration: 0.05s;
}

//Khusus Tombol Kandidat 1
#button1 {
  /* background-image: url(${Calon_1}); */
}

//Khusus Tombol Kandidat 2
#button2 {
  /* background-image: url(${Calon_2}); */
}

//Uno
.image-background{
  width: calc(100px + 50vmin);
  position: relative;
  padding: 6% 0%;
  margin: auto;
  transition-duration: 0.4s;
}

.image-background:hover{
  transform: scale(1.03);
  transition-duration: 0.4s;
}

//Dice
.background-fixed{
  position: relative;
  z-index: 0;
}

.dice {
  position: absolute;
  right: -15%;
  top: -10%;
}

//Modal Untuk Kandidat 1
#Candidate1 {
  display: ${({ isClicked }) => isClicked ? "block" : "none"};
}

//Modal untuk Kandidat 2
#Candidate2 {
  display: ${({ isClicked2 }) => isClicked2 ? "block" : "none"};
}

//Modal keseluruhan (overlay)
.modal-popup {
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

//Bagian box Modal
.modal-content {
  background-color: #102037;
  border-radius: 2%;
  margin: 7% auto;
  position: relative;
  padding: 1% 4% 3% 4%;
  border: 5px solid rgba(251, 36, 129, 0.9);
  width: 70%;
  animation-name: animatetop;
  animation-duration: 1s;
}

//Nama Kandidat
.modal-header{
  font-family: GameofSquids;
  text-align: center;
  margin: 2% 0px 0px 0px;
  padding: 0.5% 10%;
  background-color: var(--color-pink);
  border-radius: 12px 12px 0px 0px;
}

.modal-header h2 {
  font-size: calc(0.5rem + 1.25vw);
}

//Departemen
.modal-subheader{
  text-align: center;
  background-color: var(--color-yellow);
  border-radius: 0px 0px 12px 12px;
  padding: 0.5% 10%;
  margin: auto;
}

.modal-subheader h3 {
  font-size: calc(0.5rem + 0.7vw);
}

.modal-image{
  position: relative;
  display: flex;
  margin: 2% auto;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #FFFFFF;
  width: 100%;
}

.modal-image img {
  max-width: 100%; 
  height: auto; 
  width: calc(100px + 10vw);
}

.modal-body{
  text-align: justify;
  font-size: 1.5vw;
  margin: 2% auto;
}

.modal-body p{
  line-height: 150%;
  font-size: calc(0.5rem + 0.5vw);
}

.modal-body h3{
  margin: 2% 0% auto;
  font-size: calc(0.5rem + 1.25vw);
  font-family: GameOfSquids;
}

.modal-cv {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3%;
  background-color: white;
  border-radius: 12px;
}

.modal-cv img {
  max-width: 100%; 
  height: auto; 
  width: calc(100px + 15vw);
}

.modal-video{
  position: relative;
  margin: auto;
  width: 100%;
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
  text-align: center;
}

//Tombol close modal
.close {
  color: #FFFFFF;
  position: absolute;
  right: 7%;
  top: 12px;
  font-size: calc(0.5rem + 3.75vw);
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

//Animasi
@keyframes animatetop {
  from {top: -1000px; opacity: 0}
  to {top: 0; opacity: 1}
}

@keyframes animatetopexit {
  from {top: 0; opacity: 1}
  to {top: -1000px; opacity: 0}
}

@media only screen and (max-width: 750px) {

  //Bagian box Modal
  .modal-content {
    margin: 14% auto;
    width: 85%;
  }

  .close {
    position: absolute;
    top: 5px;
  }
}
`

