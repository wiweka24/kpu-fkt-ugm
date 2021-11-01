import React from "react";
import styled from "styled-components";
import HeaderPNG from '../assets/TentangKPU/Header.png'
import UlarPNG from '../assets/TentangKPU/ular.png'
import LogoPNG from '../assets/TentangKPU/logo.png'
import DaduPNG from '../assets/TentangKPU/Dadu.png'
import FooterPNG from '../assets/TentangKPU/Footer.png'
import SquadPNG from '../assets/TentangKPU/squad.png'


export default function Beranda(){
    // Kode Javascript //

    return(
        // Kode HTML //
        <Container>
            <body>
                {/*Header Sementara*/}
                {/* <div class="Header">
                    <img src={HeaderPNG} class="header"/>
                </div> */}
                {/*Hero atau Judul Halaman*/}
                <div class="Hero">
                    <img src={UlarPNG} class="ular"/>
                    <div class="title">
                        <h1>TENTANG KAMI</h1>
                        <img class="logo" src={LogoPNG} alt="Logo KPU FT"/>
                        <p class="p1">KOMISI PEMILIHAN UMUM</p>
                        <p class="p2">FAKULTAS TEKNIK UGM 2021</p>
                    </div>
                </div>
                {/*Deskripsi dari KPU*/}
                <div class="container">
                    <img src={DaduPNG} class="Dadu"/>
                    <div class="deskripsi">
                        <div class="pemilu">
                            <p class="desk1">PEMILU FAKULTAS TEKNIK UGM</p>
                            <p class="desk2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>

                        <div class="kpu">
                            <p class="desk1">KPU FAKULTAS TEKNIK UGM</p>
                            <p class="desk2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
                {/*Judul Panitia*/}
                <div class="JudulPanitia">
                    <h1 class="TextPanitia"> Panitia KPU FT UGM 2021 </h1>
                    <img src={SquadPNG} class="squad"/>
                </div>
                {/*Slide Panitia*/}
                <div class="Panitia">
            
                </div>

                {/* <div class="Footer">
                <img class="footer"src={FooterPNG}/>
                </div> */}
            </body>
        </Container>
    );
}

const Container = styled.div`
    // Kode CSS //
@font-face {
    font-family: 'GameOfSquids';
    src: url('../assets/TentangKPU/GameOfSquids.otf');
}
@font-face {
    font-family: 'Mont-Light';
    src: url('../assets/TentangKPU/Mont/Mont-Light.otf');
}
@font-face {
    font-family: 'Mont-Bold';
    src: url('../assets/TentangKPU/Mont/Mont-Bold.otf');
}
body {
    margin: 0;
}

.Header {
    height: 61px;
    width: 100%;
}
.Header .header{
    height: 61px;
}
*{
    background-color: #102037;
}
.Hero{
    height: 659px;
}

.Hero .ular {
    position: absolute;
    width: 355.95px; 
    height: 191px;
}

.Hero .title{
    justify-content: center;
    padding-top: 150px;
    padding-bottom: 20px;
}
.Hero h1{
    font-size: 36px;
    font-family: 'GameOfSquids';
    color: #F9F7F8;
    text-align: center;
    margin: 0;
    top: 111px;

}
.Hero .p1{
    font-size: 36px;
    font-family: 'GameOfSquids';
    color: #F9F7F8;
    text-align: center;
    margin: 0;
}

.Hero .p2{
    font-size: 24px;
    font-family: 'GameOfSquids';
    color: #F9F7F8;
    text-align: center;
    margin: 0 0 0 0;
    margin-top: 40;
}

.Hero .logo {
    width: 200px;
    height: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    margin-top: 50px;
}

.container {
    height: 514px;
}

.container .deskripsi {
    margin-left: 150px;
    margin-right: 150px;
    color: #F9F7F8;
    height: 326px;
}

.deskripsi .desk1 {
    font-size: 28px;
    font-family: 'Mont-Bold';
}
.deskripsi .desk2 {
    font-size: 24px;
    font-family: 'Mont-Light';
}
.pemilu .desk2 {
    margin-top: 0;
    margin-bottom: 0;
}
.pemilu .desk1 {
    margin-top: 0;
    margin-bottom: 14px;
}
.pemilu{
    padding-top: 100px;
}
.kpu{
    margin-top: 100px;
}
.kpu .desk2 {
    margin-top: 0;
    margin-bottom: 0;
}
.kpu .desk1 {
    margin-top: 0;
    margin-bottom: 14px;
}
.container .Dadu{
    float: right;
    clear: both;
    margin: 200px 0 auto 0;
    height: 139px;
}
.TextPanitia{
    font-family: 'GameOfSquids';
    color: #F9F7F8;
    font-size: 24px;
    margin: 0;
    text-align: center;
    background-color: #38445E;
    padding-top: 10px;
}

.squad{
    height: 40px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: 25px;
    background-color: #38445E;
}
.JudulPanitia{
    height: 126px;
    margin-top: 100px;
    background-color: #38445E;
}
.Panitia{
    height: 600px; 
    background-color: #38445E;
}
.Footer .footer{
    height: 218px; 
    margin-top: 70px;
}
`