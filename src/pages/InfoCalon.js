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
        <img src={Dice} alt="Dice" style={{width: "40vw"}}/>
    </div>

    <div class="title-container">
        <div class="page-title">
            <h1>Calon Ketua</h1>
        </div>
    </div>
    
    <div class="content-container" >
        <button id="button1" class="button" onClick={clickHandler}><UnoCard name="ADIAHMAD IRFAN ZIDNY" no="1" src={Calon_1}/></button>
        <button id="button2" class="button" onClick={clickHandler2}><UnoCard name="ANJU GERALD" no="2" src={Calon_2}/></button>
        <div class="image-background">
            <img src={ChooseCandidate} alt="Choose A Candidate" style={{maxWidth: "100%", height: "auto"}}/>
        </div>
        
    </div>

    <div id="Candidate1" class="modal-popup">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close" onClick={clickHandler}>&times;</span>
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
                <img src = "dice.png" alt="CV di sini" style={{maxWidth: "100%", height: "auto", width: "500px"}}/>
            </div>

            <div class="modal-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Up5kkJ0hEU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
            <div class="modal-footer">
                <h3>KPU FT UGM 2021</h3>
            </div>
        </div>
    </div>

    <div id="Candidate2" class="modal-popup">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close" onClick={clickHandler2}>&times;</span>
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
                <img src = "dice.png" alt="CV di sini" style={{maxWidth: "100%", height: "auto", width: "500px"}}/>
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
  max-height: 200px;
}

//Teks Calon Ketua
.page-title{
  font-size: 1vh;
  max-width: 100%;
  text-align: center;
  margin: auto;
}

//Container Isi
.content-container{
  width: 100%;
  position: relative;
}

//Tombol Kandidat
.button {
  border: none;
  background-size: cover;
  /* min-width: 30%; */
  /* height: auto; */
  display: inline-flexbox;
  border-radius: 12px;
  /* padding: 20% 0%; */
  text-decoration: none;
  margin: 10px 10% 10px 10%;
  transition-duration: 0.2s;
  cursor: pointer;
}


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

//Dice
.background-fixed{
  position: fixed;
  right: -15%;
  top: -10%;
  z-index: 0;
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
  font-size: 1vw;
  margin: 7% auto;
  position: relative;
  padding: 1% 4% 3% 4%;
  border: 5px solid rgba(251, 36, 129, 0.9);
  width: 90%;
  animation-name: animatetop;
  animation-duration: 1s;
}

//Nama Kandidat
.modal-header{
  font-family: GameofSquids;
  text-align: center;
  margin: 2% 0px 0px 0px;
  padding: 1% 10%;
  background-color: rgba(251, 36, 129, 0.9);
  border-radius: 12px 12px 0px 0px;
}

//Departemen
.modal-subheader{
  text-align: center;
  background-color: var(--color-yellow);
  border-radius: 0px 0px 12px 12px;
  padding: 1% 10%;
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
  font-size: 1.5vw;
}

.modal-body h3{
  margin: 2% 0% auto;
  font-size: 3vw;
  font-family: GameOfSquids;
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

//Animasi
@keyframes animatetop {
  from {top: -1000px; opacity: 0}
  to {top: 0; opacity: 1}
}

@keyframes animatetopexit {
  from {top: 0; opacity: 1}
  to {top: -1000px; opacity: 0}
}
`

