import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Timerdown from "../components/Countdown";
import BarChart from "../components/BarChart";
import Fade from "react-reveal/Fade"
import CarouselTataCara from "../components/Carousel_TataCara";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
    Dice,
    Rectangle_1,
    Rectangle_2,
    Calon_1, 
    Calon_2,
    Catur,
    Path,
}from "../assets/images/imgIndex.js"

export default function Beranda(){
    // Kode Javascript //
    const [data, setData] = useState({
        message: "",
      })
    const { message } = data

    const handleChange = e =>
    setData({ ...data, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await fetch("https://v1.nocodeapi.com/wiweka24/google_sheets/OABEIiLFFqUeOzJG?tabId=Sheet1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([[new Date().toLocaleString(), message]]),
            })
            
            document.getElementById("message").value = "";
        } catch (err) {
            console.log(err)
        }
    }

    return(
        // Kode HTML //
        <Container>
            <Helmet>
                <title>KPU FT UGM</title>
            </Helmet>
            {/* Awal Bagian Hero*/}
            <div className="hero-container text-center">
                <div>
                    <Fade>
                        <h1 className="tittle font-squids">kpu ft<br/>2021 </h1>
                        <h4>Pemilihan Umum </h4>
                        <h2 className>Ketua BEM KMFT UGM 2022 </h2>
                    </Fade>
                    {/* <h1 className="tittle font-squids">kpu ft<br/>2021 </h1>
                    <h4>Pemilihan Umum </h4>
                    <h2 className>Ketua BEM KM FT UGM 2022 </h2> */}
                    <Fade>
                    <img className="dice" src={Dice} alt="dice"></img>
                    </Fade>
                    <div className="wait">
                    <Fade>
                        <Timerdown/>
                    </Fade>
                    </div>
                    <Fade>
                    <img className="catur" src={Catur} alt="dice"></img>
                    <img className="path" src={Path} alt="dice"></img>
                    </Fade>
                </div>
            </div>
            {/* Akhir Bagian Hero */}

            {/* Awal Calon calon */}
            <div className="calon-container">
                <Fade>
                <div className="calon calon1">
                    <img className="rec1" src={Rectangle_1} alt="dice"></img>
                    <img className="foto_calon1" src={Calon_1} alt="dice"></img>
                </div>
                
                <div className="calon calon2">
                    <img className="rec2" src={Rectangle_2} alt="dice"></img>
                    <img className="foto_calon2" src={Calon_2} alt="dice"></img>
                </div>
                </Fade>


                <div className="desc1 text-center">
                    <div className="no"><h5 className="no-number">1</h5></div>
                    <h2 className="font-squids">ADIAHMAD IRFAN ZIDNY</h2>
                    <p>
                        Kita Kawan, Bukan Lawan!
                        <br/>#KarenaKitaTeknik
                        <br/>#TeknikBersihBerkah
                    </p>
                </div>

                <div className="desc2 text-center">
                    <div className="no"><h5 className="no-number">2</h5></div>
                    <h2 className="font-squids">ANJU GERALD</h2>
                    <p>
                        Salam dari kami,
                        <br/>Salam Dua Jari.
                    </p>
                </div>

                <div className="logo_desc text-center">
                    <img src={Dice} alt="dice"></img>
                    <Button>
                        <Link to="/infocalon">Tentang Calon</Link>
                    </Button>
                </div>
            </div>
            {/* Akhir Calon calon */}

            {/* Bar % Pemilih */}
            <div className="bar-container text-center">
                <BarChart/>
            </div>

            {/* Awal About & Tata Cara */}
            <div className="about-container text-center">
                <Fade>
                <div className="about">
                    <h2 className="font-squids">Tentang Pemilu FT UGM 2021 </h2>
                    <p> Pemilihan Umum Mahasiswa Fakultas Teknik Universitas Gadjah Mada (Pemilu) adalah sarana pelaksanaan kedaulatan mahasiswa berdasarkan Anggaran Dasar/Anggaran Rumah Tangga Keluarga Mahasiswa Fakultas Teknik Universitas Gadjah Mada. </p>                     
                    <Button>
                        <Link to="/tentang">Selengkapnya</Link>
                    </Button>
                </div>
                
                <div className="tatacara text-center">
                    <h2 className="font-squids">Tata Cara Pemilihan </h2>
                    <div className="tatacarabox"><CarouselTataCara/> </div>
                </div>
                </Fade>


                <img className="path" src={Path} alt="path"></img>
            </div>

            {/* Akhir About & Tata Cara */}
            
            {/* Awal Kritik & Saran */}
            <div className="kritik">
                <form onSubmit={handleSubmit}>
                    <div className="box"><h4>Kritik & Saran</h4></div>
                    <textarea
                        id="message"
                        name="message" 
                        placeholder="Ketik di sini ..." 
                        rows="5" 
                        value={message} 
                        onChange={handleChange}>
                    </textarea>
                    <Button>Kirim</Button>
                </form>
            </div>
            {/* Akhir Kritik & Saran */}
        </Container>
    );
}

const Container = styled.div`
// umum // -------------------------------------------------------
background-color: var(--color-blue);
overflow: hidden;
* {
    margin: 0;
    padding: 0;
    color: white;
}
.wait {
    animation: show 2.5s forwards;
    opacity: 0;
    min-height: 15vmin;
}
@keyframes show {
    60% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

// hero // -------------------------------------------------------
.hero-container{
    display: grid;
    z-index: 0;
    min-height: 92.5vh;
    width: 100%;
    position: relative;
    background-color: var(--color-darkblue);
    padding: 20vh 0;
}
.hero-container .text-center{
    width: 100%;
}
.hero-container .tittle{
    font-weight: lighter;
}
.hero-container h4{
    font-weight: lighter;
}
.hero-container h2{
    font-weight: bolder;
}
.hero-container .dice{
    width: 15vmin;
    padding: 4vmin;
}
Button{
    margin: 3vmin auto auto auto;
    padding: 0.5vmin 2vmin;
    font-weight: bold;
    background-color: var(--color-pink);
}
.cd {
    display: flex;
    padding: 0 20%;
}
.cd p {
    font-size: calc(0.5rem + 1vmin);
    border-style: none none none solid; 
    border-color: var(--color-pink);
    width: 25%;
    padding: 2vmin;
    font-weight: bold;
}
.cd .last {
    border-style: none solid; 
}
.endvote {
    border: 2px var(--color-pink);
    border-style: solid none; 
    width: 40%;
    margin: auto;
}
.catur{
    display: none;
}
.path{
    display: none;
}
// Calon // -------------------------------------------------------
.calon-container{
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 5vmin 0 15vmin 0;
}
.calon1{
    //order: 1;
    grid-area: 1 / 1;
}
.calon2{
    //order: 4;
    grid-area: 2 / 2;
}
.calon{
    position: relative;
    height: 72.5vmin;
}
.calon img{
    position: absolute;
    padding-top: 10vmin;
    bottom: 0;
}
.foto_calon1, .foto_calon2{
    z-index: 0;
    height: 97.5%;
}
.foto_calon2{
    right: 0;
}
.rec1{
    height: 100%;
    right: 0;
}
.rec2{
    height: 100%;
    left: 0;
}
.desc1, .desc2, .logo_desc{
    padding-top: 8vmin;
    margin: auto 2vmin;
}
.desc1{
    //order: 2;
    z-index: 1;
    grid-area: 1 / 2;
}
.desc2{
    //order: 3;
    z-index: 1;
    grid-area: 2 / 1;
}
.logo_desc{
    //order 5 sampai 6
    z-index: 1;
    grid-area: 3 / 1 / 3 / span 2;
}
.logo_desc img{
    display: none
}
.no {
    margin: auto auto 1vmin auto;
    border: solid var(--color-blue);
    background-color: var(--color-green);
    height: calc(1.6rem + 1.5vmin);
    width: calc(1.6rem + 1.5vmin);
    transform: rotate(45deg); 
}
.no-number {
    font-weight: bold;
    height: calc(1.5rem + 1.5vmin);
    width: calc(1.5rem + 1.5vmin);
    transform: rotate(-45deg);
}

// about // -------------------------------------------------------
.about-container{
    z-index: 0;
    padding: 10vmin 0;
    position: relative;
    background-color: var(--color-darkblue);
    width: 100%;
}
.about{
    width: 100%;
    padding: 0 5%;
}
.about-container h2{
    padding: 5vmin 0 2vmin 0;
}
.tatacara{
    padding: 0;
}
.bar-container p{
  font-size: calc(0.5rem + 1vmin);
}
// kritik dan saran // -------------------------------------------------------
.kritik{
    display: grid;
    padding: 10vmin 0;
    position: relative;
    margin: auto;
    width: 75%;
}
.kritik .box{
    display: flex;
}
.kritik .box h4{
    border-style: solid;
    border-color: var(--color-pink);
    border-radius: 2vmin 2vmin 0 0;
    background-color: var(--color-pink);
    color: var(--color-black);
    font-weight: bolder;
    padding: 1vmin;
    text-align: left;
}
.kritik textarea{
    border-style: solid;
    border-color: var(--color-pink);
    border-width: thick;
    border-radius: 0 2vmin 2vmin 2vmin;
    padding: 1vmin;
    width: 100%;
    color: var(--color-black);
    font-size: calc(0.5rem + 2vmin);
    font-family: montBook;
}
@media (min-width: 1025px) {
    // hero // -------------------------------------------------------
    .hero-container{
        padding: 10vh 0;
    }
    .catur{
        display: inline;
        position: absolute;
        z-index: -1;
        width: 40vmin;
        right: 0;
        bottom: 0;
    }
    .path{
        display: inline;
        position: absolute;
        z-index: -1;
        width: 60vmin;
    }
    .hero-container .path{
        left: 0;
        top: 0;
    }
    .hero-container .dice{
        animation: spinner 5s infinite;
        animation-timing-function: linear;
    }
    
    @keyframes spinner {
        90% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(360deg);
        }
    }
    .cd {
        padding: 0 25%;
    }
    .cd p {
        font-size: calc(0.5rem + 1.5vmin);
    }
    // Calon // -------------------------------------------------------
    .calon-container{
        grid-template-columns: 35% 30% 35%;
    }
    .foto_calon1, .foto_calon2{
        height: 110%;
    }
    .calon1{
        grid-area: 1 / 1;
        &:hover .rec1{
            margin-right: -115%;
            transition: all 0.2s ease-out; 
        }
    
        &:hover .foto_calon1{
            height: 115%;
            transition: all 0.2s ease-out; 
        }
    
        &:hover ~ .logo_desc{
            display: none;
            transition: all 0.5s ease-out;
        }
        
        &:hover ~ .desc1{
            display: inline;
            transition: all 0.5s ease-out;
        }
    }
    
    .calon2{
        grid-area: 1 / 3;
    
        &:hover .rec2{
            margin-left: -115%;
            transition: all 0.2s ease-out; 
        }
        
        &:hover .foto_calon2{
            height: 115%;
            transition: all 0.2s ease-out; 
        }
        
        &:hover ~ .logo_desc{
            display: none;
            transition: all 0.5s ease-out;
        }
        
        &:hover ~ .desc2{
            display: inline;
            transition: all 0.5s ease-out;
        }
    }
    .desc1, .desc2{
        grid-area: 1 / 2;
        display: none;
        z-index: 1;
        margin: auto;
    }
    .logo_desc{
        grid-area: 1 / 2;
        display: inline;
    }
    .logo_desc img{
        display: inline;
        width: 13vmin ;
    
        &:hover{
            transform: rotateY(360deg);
            transition: all 0.5s ease-out;
        }
    }
    .no-number {
        height: calc(1rem + 1.5vmin);
        width: calc(1rem + 1.5vmin);
    }
    
    // about // -------------------------------------------------------
    .about{
        padding: 0 10%;
    }

    .about-container .path{
        right: 0;
        bottom: 0;
        transform: rotate(180deg);
    }
    .tatacara{
        padding: 0 17.5%;
    }
    .tatacarabox{
        //overflow: hidden;
        border-radius: 5px;
        border: 4px var(--color-pink) solid;
    }

    // kritik dan saran // -------------------------------------------------------
    .kritik{
        width: 50%;
    }
}
`