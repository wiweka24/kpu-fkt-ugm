import React from "react";
import styled from "styled-components";
import UlarPNG from '../assets/TentangKPU/ular.png'
import LogoPNG from '../assets/TentangKPU/logo.png'
import DaduPNG from '../assets/TentangKPU/Dadu.png'
import SquadPNG from '../assets/TentangKPU/squad.png'
import CarouselPanitia from "../components/Carousel";
import 'antd/dist/antd.css';
import CarouselPanitia2 from "../components/Carousel2";




export default function TentangKPU(){
    // Kode Javascript //


    return(
        // Kode HTML //
        <Container>
            <body>
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
                    <CarouselPanitia />
                    <CarouselPanitia2 class="Plisss"/>
                </div>

            </body>
        </Container>
    );
}

const Container = styled.div`
    // Kode CSS //

body {
    margin: 0;
}


*{
    background-color: #102037;
    box-sizing:border-box;
}
.Hero{
    height: auto;
}

.Hero .ular {
    position: absolute;
    width: 355.95px; 
    height: 191px;
}

.Hero .title{
    justify-content: center;
    padding-top: 210px;
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
    margin-left: auto;
    margin-right: auto;
    color: #F9F7F8;
    height: auto;
    margin-top: 80px;
}

.deskripsi .desk1 {
    font-size: 28px;
    font-family: "MontBook"
}
.deskripsi .desk2 {
    font-size: 24px;
    font-family: "MontBook"
}
.deskripsi .pemilu{
    margin-left:150px;
    margin-right:150px;
}
.deskripsi .kpu{
    margin-left:150px;
    margin-right:150px;
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
    background-color: #38445E;
}
.Panitia .Plisss{
    display:none;
}

@media (max-width:1000px){
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
`