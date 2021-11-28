import React, { useState } from "react";
import styled from "styled-components";
import {
  Dice,
  Calon_1,
  Calon_2,
  ChooseCandidate,
} from "../assets/images/imgIndex"
import CVAnjuGerald from "../assets/cv-anju-gerald.pdf"
import { Helmet } from "react-helmet";
import UnoCard from "../components/UnoCard";
import Fade from "react-reveal/Fade"


export default function InfoCalon() {

  const [isClicked, setIsClicked] = React.useState(false);
  const [isClicked2, setIsClicked2] = React.useState(false);

  const clickHandler = () => setIsClicked(clicked => !clicked);
  const clickHandler2 = () => setIsClicked2(clicked => !clicked);

  return (
    <>
      <Helmet>
        <title>Calon Ketua - BEM KMFT UGM</title>
      </Helmet>
      <Container isClicked={isClicked} isClicked2={isClicked2}>
        <div class="background-fixed">
          <div class="dice">
            {/* <img src={Dice} alt="Dice" style={{ width: "40vw" }} /> */}
          </div>

        </div>

        <div class="title-container">
          <div class="page-title">
            <Fade top>
              <h1 style={{ fontSize: "calc(0.5rem + 4vmin)" }} >Calon Ketua <br /><span style={{color:"var(--color-pink)"}}>BEM KMFT UGM 2022</span></h1>
            </Fade>
          </div>
        </div>

        <div class="content-container" >
          <div class="button-container">
            <Fade left>
              <UnoCard onClick={clickHandler} name="ADIAHMAD IRFAN ZIDNY" no="1" src={Calon_1} />
            </Fade>
            <Fade right>
              <UnoCard onClick={clickHandler2} name="ANJU GERALD" no="2" src={Calon_2} />
            </Fade >
          </div>

          <div class="image-background">
            <Fade bottom>
              <img src={ChooseCandidate} alt="Choose A Candidate" style={{ maxWidth: "100%", height: "auto" }} />
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
              <h4>Departemen Teknik Arsitektur dan Perencanaan</h4>
            </div>

            <div class="modal-video">
              <iframe src="https://drive.google.com/file/d/1UMuHAJo4FczD-Nh7SyfZpA6N4jWqjH6o/preview" width="640" height="480" allow="autoplay"></iframe>            
            </div>

            <div class="modal-body">
              <h3>Profil</h3>
              <p>Teknik lahir dari berbagai kekuatan. Dibesarkan tulus oleh keberagaman. Memimpikan keterbukaan, kesetaraan, ketangguhan, hingga kesejahteraan. Perjalanannya pelik, tidak mudah seperti yang dibayangkan. Namun, semua ini dapat dirajut bersama melalui orientasi dampak berkelanjutan.
                <br /><br />Ini bukan imajinasi tanpa pasti, bukan juga sekadar cerita ilusi, apalagi soal egoisme pribadi.
                <br /><br />Adiahmad Irfan Zidny, Calon Ketua BEM KMFT UGM no. 1 percaya, dampak luas dapat dirasa ketika kita semua membersamainya, kan?
                <br /><br />Yang pasti, Teknik butuh kita. #KarenaKitaTeknik. TEKNIK JAYA!</p>
                <h3>Visi</h3>
              <p>BEM KMFT UGM sebagai organisasi mahasiswa memaknai kebermanfaatan dan mensinergikan keberagaman yang berkelanjutan bagi Teknik, UGM, dan Indonesia
              </p>

              <h3>Misi</h3>
              <p>
                <ul>
                  <li>
                    Membangun tata kelola organisasi dan sumber daya yang menyenangkan dan terpadu
                  </li>
                  <li>
                  Menjalin hubungan kelembagaan sinergis berkala dengan berbagai elemen kelembagaan.
                  </li>
                  <li>
                  Melaksanakan integrasi program dan kegiatan yang tepat guna berdasarkan keinginan dan kebutuhan mahasiswa FT UGM.
                  </li>
                  <li>
                  Menyediakan ruang interaktif dan informatif melalui pengembangan dan pengelolaan media.
                  </li>
                  <li>
                  Menghadirkan gerakan mahasiswa konstruktif dan substantif berdasarkan pemikiran kritis dan kompetensi keilmuan.
                  </li>
                  <li>
                  Mengakomodasi kegiatan kemahasiswaan bermakna berdasarkan kebutuhan, minat, dan bakat mahasiswa FT UGM.
                  </li>
                  <li>
                  Mewujudkan kepekaan sosial nyata terhadap sesama manusia dan lingkungan melalui berbagai bentuk pemberdayaan.
                  </li>
                </ul>
              </p>

            
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
              <h4>Departemen Teknik Mesin dan Industri</h4>
            </div>

            <div class="modal-video">
              <iframe src="https://drive.google.com/file/d/1y3GZoSAdIPZ6RGIngSO7nLxBoFdU_FaL/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>

            <div class="modal-body">
              <h3>Profil</h3>
              <p>Sebuah gagasan tidak akan hadir tanpa kemerdekaan, sebuah gerakan tidak akan hadir tanpa kesetaraan, sebuah entitas tidak akan hadir tanpa solidaritas. Dan tentu, semua ini tidak mungkin berjalan tanpa kemanusiaan. Dengan pertimbangan rekan dalam persaudaraan, itulah yang dirangkum Anju Gerald, calon ketua BEM KMFT UGM nomor urut dua. Karenapun jabatan hanya sementara, namun peninggalan adalah selama-lamanya, maka ini bukanlah akhir dari segala-galanya, namun permulaan dari apa yang ingin kita bangun kedepannya!
                <br /><br />Kemahasiswaan, ketenagakerjaan, kebudayaan, dan teknologi adalah isu utamanya, berlandaskan Human-Centered Design mengaarah ke empowerment, emancipation, dan cooperation tujuannya. Karena tentang ini bukan aku, bukan kamu, tapi kita. Karena aku, kamu, kita, TEKNIK JAYA!</p>
               
              <h3>Visi</h3>
              <p>Menjadi Pelayan FT UGM</p>
              
              
              <h3>Misi</h3>
              <p>
              <ul>
                <li>
                Wadah kebebasan akademik dengan semangat tri dharma perguruan tinggi di KMFT UGM
                </li>
                <li>
                Wadah  perjuangan akan hak-hak mahasiswa teknik yang belum, sudah, dan seharusnya didapatkan
                </li>
                <li>
                Wadah untuk mewujudkan solidaritas dengan segala kerja-kerja kreatif di KMFT UGM
                </li>
              </ul>
              </p>
              <h3>Daftar Riwayat Hidup</h3>
              <div class="modal-cv">
                <iframe
                  title="Daftar Riwayat Hidup Anju Gerald"
                  src={CVAnjuGerald}
                  width="100%"
                  height="500px"
                  allow="autoplay"
                ></iframe>
                </div>
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
min-height: 95vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

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
  border: 5px solid var(--color-blue);
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
  border-radius: 12px 12px 0px 0px;

  h2{
    font-size: calc(0.5rem + 5vmin);
    color: var(--color-pink);
  }
}

//Departemen
.modal-subheader{
  text-align: center;
  /* background-color: var(--color-yellow); */
  border-radius: 0px 0px 12px 12px;
  padding: 0.5% 10%;
  margin: auto;
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
  font-family: GameOfSquids;
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
  margin: 5vmin 0;
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

