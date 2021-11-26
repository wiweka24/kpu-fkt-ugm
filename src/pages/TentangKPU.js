import React from "react";
import styled from "styled-components";
import {
    Path,
    Dice,
    Squad,
    Logo
}from "../assets/images/imgKPU.js"
import CarouselPanitia from "../components/Carousel";
import 'antd/dist/antd.css';
import CarouselPanitia2 from "../components/Carousel2";
import { Helmet } from "react-helmet";

export default function TentangKPU(){
    // Kode Javascript //


    return(
        // Kode HTML //
        <>
            <Helmet>
                <title>Tentang KPU FT UGM</title>
            </Helmet>
        <   Container>
                <div class="Hero">
                    <img src={Path} class="ular"/>
                    <div class="title">
                        <h1 class="white">TENTANG KAMI</h1>
                        <img class="logo" src={Logo} alt="Logo KPU FT"/>
                        <h1 class="p1 white">KOMISI PEMILIHAN UMUM</h1>
                        <h2 class="p2 pink">FAKULTAS TEKNIK UGM 2021</h2>
                    </div>
                </div>
                {/*Deskripsi dari KPU*/}
                <div class="container">
                    <img src={Dice} class="Dadu"/>
                    <div class="deskripsi">
                        <div class="pemilu">
                            <h3 class="desk1 font-squids pink">PEMILU FAKULTAS TEKNIK UGM</h3>
                            <p class="desk2">
                                <b>Pemilihan Umum</b> Mahasiswa Fakultas Teknik Universitas Gadjah Mada (Pemilu) adalah sarana pelaksanaan kedaulatan mahasiswa berdasarkan Anggaran Dasar/Anggaran Rumah Tangga Keluarga Mahasiswa Fakultas Teknik Universitas Gadjah Mada.
                                <br/><br/><b>Peserta Pemilu</b> adalah kandidat calon Ketua BEM KMFT UGM yang telah lolos verifikasi oleh KPU.
                                <br/><br/><b>Pemilih</b> adalah seluruh mahasiswa Fakultas Teknik Universitas Gadjah Mada yang terdaftar
                                secara akademik pada jenjang S1 reguler yang mempunyai hak untuk memilih dalam Pemilu.
                            </p>
                        </div>

                        <div class="kpu">
                            <h3 class="desk1 font-squids pink">KPU FAKULTAS TEKNIK UGM</h3>
                            <p class="desk2"><b>Komisi Pemilihan Umum</b> Fakultas Teknik Universitas Gadjah Mada yang selanjutnya disebut
                            KPU adalah suatu komisi yang menyelenggarakan Pemilu berdasarkan Undang-Undang
                            KMFT UGM tentang Pemilu dan terdiri dari SC KPU, OC KPU, Panitia Pengawas Pemilu
                            dan Mahkamah Pemilu.
                            </p>
                        </div>
                    </div>
                </div>
                {/*Judul Panitia*/}
                <div class="JudulPanitia">
                    <h1 class="TextPanitia white"> Panitia KPU FT UGM 2021 </h1>
                    <img src={Squad} class="squad"/>
                </div>
                {/*Slide Panitia*/}
                <div class="Panitia">
                    <CarouselPanitia />
                    <CarouselPanitia2 class="Plisss"/>
                </div>

        </Container>
        </>
    );
}

const Container = styled.div`
    // Kode CSS //
    width: 100%;
    margin: 0;
    background-color: #102037;
    overflow: hidden;
    color: var(--color-white);

h1{
    font-size: calc(0.5rem + 5vmin);
}
.Hero{
    height: auto;
}

.Hero .ular {
    position: absolute;
    width: 45vmin; 
    height: auto;
}

.Hero .title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5vmin 10vmin;
    min-height: 100vh;
    /* padding-bottom: 10vmin; */
    /* height: 100vh; */
}
.Hero h1{
    font-family: 'GameOfSquids';
    text-align: center;
    margin: 0;
    top: 111px;
    z-index: 2;
}
.Hero .p1{
    /* font-size: 36px; */
    font-family: 'GameOfSquids';
    text-align: center;
    margin: 0;
}

.Hero .p2{
    /* font-size: 24px; */
    font-family: 'GameOfSquids';
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
}

.container {
    /* height: 514px; */
}

.container .deskripsi {
    height: auto;
    /* margin-top: 80px; */
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
.pemilu .desk2 {
    /* margin-top: 0;
    margin-bottom: 0; */
}
.pemilu .desk1 {
    margin-top: 0;
    margin-bottom: 14px;
}

.kpu{
    margin-top: 10vmin;
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
    /* font-size: 24px; */
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
    /* height: 126px;
    margin-top: 100px; */
    padding: 0 10vmin;
    background-color: #38445E;
}
.Panitia{
    background-color: #38445E;
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