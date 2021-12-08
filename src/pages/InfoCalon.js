import React, { useState } from "react";
import styled from "styled-components";
import {
  Calon_1, 
  Calon_2,
  Calon_3,
  Calon_1_Polos,
  Calon_2_Polos,
  Calon_3_Polos,
  Catur,
  Path,
  WindL,
  WindR,
  BgGreen,
  BgBlack,
  ChooseCandidate,
  Frame_DPM,
  Frame_DPMUF,
  Frame_LEM,
  Frame_Empty,
  DPM_Tag,
  DPMUF_Tag,
  LEM_Tag,
  PilihKandidat
} from "../assets/images/imgIndex"
import { Helmet } from "react-helmet";
import UnoCard from "../components/UnoCard";
import Fade from "react-reveal/Fade"
import Frame from "../components/Frame";


export default function InfoCalon() {

  const [isClicked, setIsClicked] = React.useState(false);
  const [isClicked2, setIsClicked2] = React.useState(false);
  const [isClicked3, setIsClicked3] = React.useState(false);

  const clickHandler = () => setIsClicked(clicked => !clicked);
  const clickHandler2 = () => setIsClicked2(clicked => !clicked);
  const clickHandler3 = () => setIsClicked3(clicked => !clicked);

  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }
  
  return (
    <>
      <Helmet>
        <title>Kandidat - FKT UGM</title>
      </Helmet>
      <Container isClicked={isClicked} isClicked2={isClicked2} isClicked3={isClicked3}>
        <div class="background-fixed">
          <div class="dice">
            {/* <img src={Dice} alt="Dice" style={{ width: "40vw" }} /> */}
          </div>

        </div>

        <div class="title-container">
          <div class="page-title">
            <Fade top>
              <h1 style={{ fontSize: "calc(0.5rem + 4vw)" }} >Kandidat <br /><span style={{color:"var(--color-white)"}}>Pemilihan Umum Mahasiswa</span></h1>
            </Fade>
          </div>
        </div>

        <div class="content-container" >
          <div class="button-container">
            <Fade left>
              <Frame onClick={clickHandler} name="Aurora Tarisa M." no="Calon DPM" src={Frame_DPM} />
            </Fade>
            <Fade middle>
              <Frame onClick={clickHandler2} name="Dhafin Andrian" no="Calon DPM UF" src={Frame_DPMUF} />
            </Fade>
            <Fade right>
              <Frame onClick={clickHandler3} name="Dhimas Ramadhan" no="Calon LEM" src={Frame_LEM} />
            </Fade >
          </div>

          <div class="image-background">
            <Fade bottom>
              <img src={PilihKandidat} alt="Choose A Candidate" style={{ maxWidth: "100%", height: "auto" }} />
            </Fade>
          </div>
        </div>

        <div id="Candidate1" class="modal-popup" onClick={clickHandler}>
          <div class="modal-content" onClick={clickHandler}>
            <div class="modal-header">
              <span class="close" onClick={clickHandler}>&times;</span>
              <h2>Aurora Tarisa Muzdalifah</h2>
            </div>

            <div class="modal-subheader">
              <h4>Calon Ketua DPM</h4>
            </div>

            <div class="modal-video">
              <img src={DPM_Tag} style={{width:"100%"}}></img>            
            </div>

            <div class="modal-body">
              <h3>Visi</h3>
              <p>Terwujudnya DPM Fakultas Kehutanan UGM sebagai lembaga legislatif yang solid, profesional, peduli, dan dikenal luas dalam kebermanfaatan.
              </p>

              <h3>Misi</h3>
              <p>
                <ul>
                  <li>
                    Mengoptimalkan kinerja pengurus DPM FKT UGM dengan mengedepankan kekompakan, kedisiplinan, penuh tanggung jawab, dan peduli terhadap sesama.
                  </li>
                  <li>
                  Menjalin hubungan yang bersinergi antar seluruh internal DPM FKT UGM maupun di luar internal DPM FKT UGM.
                  </li>
                  <li>
                  Memberikan kualitas pelayanan terbaik dalam menjebatani aspirasi Keluarga Mahasiswa Fakultas Kehutanan UGM secara aktif dan berkelanjutan.
                  </li>
                  <li>
                  Memaksimalkan controlling, aspirasi dan media, budgeting, dan legislating di tingkat fakultas.
                  </li>
                  <li>
                  Menumbuhkan rasa kekeluargaan di dalam internal DPM FKT UGM.
                  </li>
                </ul>
              </p>

              <h3>Program Unggulan</h3>
              <p>
              <ul>
                <li>Kotak Bicara</li>
                <li>React (Response & Act)</li>
                <li>Upgrading Motivasi Tim</li>
                <li>Detro (Deep Intro)</li>
                <li>Prinsip "KESANE MANSUR TUAN"</li>
              </ul>
              </p>
            </div>
            <div class="modal-footer">
              <h3>KPUM FKT UGM 2021</h3>
            </div>
          </div>
        </div>





        <div id="Candidate2" class="modal-popup" onClick={clickHandler2}>
          <div class="modal-content" onClick={clickHandler2}>
            <div class="modal-header">
              <span class="close" onClick={clickHandler2}>&times;</span>
              <h2>Dhafin Andrian</h2>
            </div>

            <div class="modal-subheader">
              <h4>Calon Ketua DPM UF</h4>
            </div>

            <div class="modal-video">
            <img src={DPMUF_Tag} style={{width:"100%"}}></img>               
            </div>

            <div class="modal-body">
              <h3>Visi</h3>
              <p>Mengedepankan fungsi legislator dalam memberikan informasi serta penjaringan aspirasi.
              </p>

              <h3>Misi</h3>
              <p>
                <ul>
                  <li>
                    Memanfaatkan sosial media sebagai wadah penyebaran informasi yang aktual.
                  </li>
                  <li>
                  Memberikan ruang KM FKT UGM dalam menghimpun aspirasi baik secara internal maupun eksternal.
                  </li>
                  <li>
                  Menjaga komunikasi kepada seluruh lembaga KM FKT UGM.
                  </li>
                </ul>
              </p>

              <h3>Program Unggulan</h3>
              <p>
              <ul>
                <li>Aspirasi Rimbawan</li>
                <li>Sowan Lembaga</li>
              </ul>
              </p>
            </div>
            <div class="modal-footer">
              <h3>KPUM FKT UGM 2021</h3>
            </div>
          </div>
        </div>





        <div id="Candidate3" class="modal-popup" onClick={clickHandler3}>
          <div class="modal-content" onClick={clickHandler3}>
            <div class="modal-header">
              <span class="close" onClick={clickHandler3}>&times;</span>
              <h2>Dhimas Ramadhan</h2>
            </div>

            <div class="modal-subheader">
              <h4>Calon Ketua LEM</h4>
            </div>

            <div class="modal-video">
            <img src={LEM_Tag} style={{width:"100%"}}></img>             
            </div>

            <div class="modal-body">
              <h3>Visi</h3>
              <p>Terwujudnya kehidupan kampus yang religius dan dinamis dengan berwawasan kerakyatan, keilmuan, dan lingkungan.
              </p>

              <h3>Misi</h3>
              <p>
                <ul>
                  <li>
                    Membangun internal yang berlandaskan kekeluargaan, profesionalitas, dan mempunyai etos perjuangan.
                  </li>
                  <li>
                  Menjadi fasilitator yang responsif dalam hal kebutuhan advokasi KM FKT.
                  </li>
                  <li>
                  Menciptakan hubungan yang baik serta membangun sinergitas berbagai lembaga di KM FKT UGM.
                  </li>
                  <li>
                  Menjadikan LEM FKT UGM sebagai wadah minat dan bakat KM FKT, serta mendorong terwujudnya budaya kreatif, inovatif, dan kolaboratif sesuai dengan kemajuan zaman.
                  </li>
                  <li>
                  Mengambil peran aktif di masyarakat dalam lingkup pergerakan.
                  </li>
                </ul>
              </p>

              <h3>Program Unggulan</h3>
              <p>
              <ul>
                <li>Jaring Bakat</li>
                <li>Optimalisasi Key Performa Indikator (KPI)</li>
                <li>Forescare</li>
                <li>Foreshealth</li>
                <li>Advokasi</li>
                <li>kajian Kolaboratif</li>
                <li>Srawung Rimbawan</li>
              </ul>
              </p>
            </div>
            <div class="modal-footer">
              <h3>KPUM FKT UGM 2021</h3>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

const Container = styled.div`
background-image: url(${BgGreen});
font-family: Bright;
overflow: hidden;
padding: 5vmin 10vmin;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
//align-items: center;

* {
    margin: 0;
    padding: 0;
    color: var(--color-white);
}

//Container Judul
.title-container{
  width: 100%;
  height: auto;
  position: relative;
  padding: 0% 0% 0% 0%;
  //border: 5px solid yellow;
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
  //border: 5px solid blue;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: auto;
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
  width: calc(50px + 50vmin);
  position: relative;
  padding: 6% 0%;
  margin: auto;
  transition-duration: 0.4s;
}

.image-background:hover{
  transform: scale(1.03);
  transition-duration: 0.4s;
  /* box-shadow: 0 12px 100px 0 rgba(208, 200, 179, 0.9), 0 5px 70px 0 rgba(62, 100, 86, 1); */
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

#Candidate3 {
  display: ${({ isClicked3 }) => isClicked3 ? "block" : "none"};
}
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
  font-family: Montserrat;
}

//Bagian box Modal
.modal-content {
  background-image: url(${BgBlack});
  border-radius: 2%;
  margin: 7% auto;
  position: relative;
  padding: 1% 4% 3% 4%;
  border: 5px solid var(--color-green);
  width: 70%;
  animation-name: animatetop;
  animation-duration: 1s;
}

//Nama Kandidat
.modal-header{
  font-family: Bright;
  text-align: center;
  margin: 2% 0px 0px 0px;
  padding: 0.5% 10%;
  border-radius: 12px 12px 0px 0px;
  background-image: url(${BgGreen});

  h2{
    font-size: calc(0.5rem + 3vw);
  }
}

//Departemen
.modal-subheader{
  text-align: center;
  /* background-color: var(--color-yellow); */
  border-radius: 0px 0px 12px 12px;
  padding: 0.5% 10% 1% 10%;
  margin: -2.5% 0% auto;
  background-image: url(${BgGreen});
  
}

.modal-image{
  position: relative;
  display: flex;
  margin: 2% auto;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #FFFFFF;
  width: 40vmin;
}

.modal-image img {
  width: 100%;
  height: auto; 
  /* width: calc(100px + 10vw); */
}

.modal-body{
  text-align: justify;
  margin: 2% auto;
}

.modal-body p{
  line-height: 150%;
}

.modal-body h3{
  margin: 2% 0% auto;
  font-family: Bright;
}

.modal-cv {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3%;
  background-color: white;
  border-radius: 12px;
  margin: 2vmin 0;
}

.modal-video{
  position: relative;
  margin: auto;
  width: 100%;
  padding-bottom: 56.25%; 
  height: 0;
  margin: 2vmin 0;
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
  top: calc(10px + 2vw);
  font-size: calc(0.5rem + 4vmin);
  font-weight: bold;
  transition-duration: 0.4s;
}

.close:hover,
.close:focus {
  color: var(--color-pink);
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
  
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin: auto;
    //border: 5px solid red;
  }

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

