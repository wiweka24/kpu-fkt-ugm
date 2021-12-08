import React from "react";
import styled from "styled-components";
import {
    BACKGROUND2,
    LINE,
    JAM
}from "../assets/images/imgKPU.js"
import CarouselPanitia from "../components/Carousel";
import 'antd/dist/antd.css';
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import blackBG from "../assets/images/bg-black.webp";
import greenBG from "../assets/images/bg-green.webp";
import LogoPNG from "../assets/images/logo-kpu.webp"

export default function TentangKPU(){
    // Kode Javascript //


    return(
        // Kode HTML //
        <   Container> 
            <Helmet>
                <title>Tentang KPUM FKT UGM</title>
            </Helmet>
                <div class="Hero">
                    {/* <img src={Path} class="ular"/> */}
                    <Fade>
                    <div class="title">
                        <h1 class="white">TENTANG KAMI</h1>
                        <img class="logo" src={LogoPNG} alt="Logo KPU FT"/>
                        <h1 class="p1 white">KOMISI PEMILIHAN UMUM MAHASISWA</h1>
                        <h2 class="p2 pink">FAKULTAS KEHUTANAN UGM <span className="font-number">2021</span></h2>
                    </div>
                    </Fade>
                    <img class="line" src={LINE}></img>
                </div>
                {/*Deskripsi dari KPU*/}
                <div class="container">
                    {/* <img src={Dice} class="Dadu"/> */}
                    <div class="deskripsi">
                    <Fade left>
                        <div class="pemilu">
                            <h3 class="desk1  pink font-title ">PEMILWA FAKULTAS KEHUTANAN UGM</h3>
                            <p class="desk2">
                                <b>Pemilihan Umum Mahasiswa</b> adalah sarana pelaksanaan kedaulatan mahasiswa yang diselenggarakan secara langsung, umum, bebas, rahasia, jujur, dan adil dalam Keluarga Mahasiswa Fakultas Kehutanan Universitas Gadjah Mada.
                            </p>
                        </div>

                        <div class="kpu" style={{marginTop: "10vmin"}}>
                            <h3 class="desk1 pink font-title ">KPUM FAKULTAS KEHUTANAN UGM</h3>
                            <p class="desk2"><b>Komisi Pemilihan Umum Mahasiswa</b> Fakultas Kehutanan merupakan badan independen yang bertugas untuk menyelenggarakan serangkaian kegiatan Pemilihan Umum Mahasiswa KM FKT UGM. 
                            </p>
                        </div>
                    </Fade>
                    <img src={JAM} class="jam"></img>
                    </div>
                </div>
                {/*Judul Panitia*/}
                <div class="JudulPanitia">
                    <h1 class="TextPanitia white"> Panitia KPUM FKT UGM <span className="font-number">2021</span> </h1>
                    {/* <img src={Squad} class="squad"/> */}
                </div>
                {/*Slide Panitia*/}
                <div class="Panitia">
                    <CarouselPanitia />
                    {/* <CarouselPanitia2 class="Plisss"/> */}
                </div>

        </Container>
    );
}

const Container = styled.div`
    // Kode CSS //
    width: 100%;
    margin: 0;
  box-sizing: border-box;
  background-image: url(${greenBG});
  background-repeat: repeat;
    overflow: hidden;
    color: var(--color-white);

h1{
    font-size: calc(0.5rem + 5vmin);
}
.Hero{
    height: auto;
    padding: 10vmin 10vmin;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.Hero .ular {
    position: absolute;
    width: 45vmin; 
    height: auto;
    left: 0;
    top: 5vmin;
}

.Hero .title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* padding-bottom: 10vmin; */
    /* height: 100vh; */
}
.Hero h1{
    font-family: Bright;
    text-align: center;
    margin: 0;
    top: 111px;
    z-index: 2;
}
.Hero .p1{
    /* font-size: 36px; */
    font-family: Bright;
    text-align: center;
    margin: 0;
}

.Hero .p2{
    /* font-size: 24px; */
    font-family: Bright;
    text-align: center;
    margin: 0 0 0 0;
    margin-top: 40;
}

.Hero .logo {
    width: 30vmin;
    /* height: 200px; */
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5vmin;
    margin-top: 5vmin;
    border-radius: 50%;
}
.Hero .line {
    position:absolute;
    left: -250px;
    top: 325px;
}

.container {
    /* height: 514px; */
}

.container .deskripsi {
    height: auto;
    margin-top: 80px;
    padding: 10vmin 20vmin 20vmin 20vmin;
}

.deskripsi .pemilu{
    /* margin-left:150px;
    margin-right:150px; */
}
/* .deskripsi .kpu{
    margin-left:150px;
    margin-right:150px;
} */
/* .pemilu .desk2 {
    margin-top: 0;
    margin-bottom: 0;
}
.pemilu .desk1 {
    margin-top: 0;
    margin-bottom: 14px;
} */

/* .kpu .desk2 {
    margin-top: 0;
    margin-bottom: 0;
}
.kpu .desk1 {
    margin-top: 0;
    margin-bottom: 14px;
} */
.container .Dadu{
    float: right;
    clear: both;
    margin: 200px 0 auto 0;
    height: 139px;
}
.TextPanitia{
    font-family: Bright;
    /* font-size: 24px; */
    margin: 0;
    text-align: center;
    // background-image: url(${BACKGROUND2});
    padding-top: 30px;
    padding-bottom: 30px;
}
 
.jam {
    position: absolute;
    top: 1300px;
    left: 85%;
    width: 20%;
    opacity: 0.8;
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
    /* height: 126px;
    margin-top: 100px; */
    padding: 0 10vmin;

}
.Panitia{
    // background-color: #38445E;
    margin-bottom: 70px;
}
.Panitia .Plisss{
    display:none;
}

@media(max-width: 1000px){
    .container .deskripsi{
        padding: 10vmin;
    }
}

/* @media (max-width:1000px){
    .deskripsi{
        margin-bottom:100px;
    }
    .deskripsi .desk2{
        font-size:16px;
        text-align:justify;
    }
    .deskripsi .desk1{
        font-size:18px;
    }
    .deskripsi .pemilu{
        margin-left:50px;
        margin-right:50px;
    }
    .deskripsi .kpu{
        margin-right:50px;
        margin-left:50px;
    }
    .container .Dadu{
        margin: 225px 0 auto 0;
        height: 80px;
    }
    .Panitia .panitia{
        width:100%;
        height:400px
    }
}

@media (max-width:670px){
    .Hero h1{
        font-size: 24px;   
    }
    .Hero .p1{
        font-size: 24px;
    }
    
    .Hero .p2{
        font-size: 16px;
        margin-top: 40;
    }
    
    .Hero .logo {
        width: 100px;
        height: 100px;
    }
    .Hero .ular {
        width: 246px; 
        height: 143px;
    }
    .deskripsi .desk2{
        font-size:12px;
        text-align:justify;
    }
    .deskripsi .desk1{
        font-size:16px;
    }
    .container .deskripsi {
        margin-top: 150px;
    }
    .TextPanitia{
        font-size: 16px;
    }
    .squad{
        height: 20px;
        margin-top:5px;
    }
    .JudulPanitia{
        height: 68px;
    }

@media (max-width:380px){
    .Hero .title{
        justify-content: center;
        padding-top: 170px;
    }
    .Hero h1{
        font-size: 20px;   
    }
    .Hero .p1{
        font-size: 20px;
    }
    
    .Hero .p2{
        font-size: 14px;
    }
}
@media (max-width:325px){
    .Hero .title{
        justify-content: center;
        padding-top: 140px;
    }
    .Hero h1{
        font-size: 18px;   
    }
    .Hero .p1{
        font-size: 18px;
    }
    
    .Hero .p2{
        font-size: 12px;
    }
    }
} */
`