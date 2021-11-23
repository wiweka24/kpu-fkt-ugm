import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player/youtube'
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Timerdown from "../components/Countdown";
import {
    Dice,
    Rectangle_1,
    Rectangle_2,
    Calon_1, 
    Calon_2,
    Catur,
    Path,
}from "../assets/images/imgIndex.js"
import BarChart from "../components/BarChart";

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
            

            {/* Awal Bagian Hero*/}
            <div className="hero-container text-center">
                <div>
                    <h1 className="tittle font-squids">kpu ft<br/>2021 </h1>
                    <h4>Pemilihan Umum </h4>
                    <h2 className>Ketua BEM KM FT UGM 2022 </h2>
                    <img className="dice" src={Dice} alt="dice"></img>
                    <Timerdown/>
                    <img className="catur" src={Catur} alt="dice"></img>
                    <img className="path" src={Path} alt="dice"></img>
                </div>
            </div>

            {/* Akhir Bagian Hero */}

            <Button>
                <a href={process.env.PUBLIC_URL + "vote.html"} >Vote Dummy</a>
            </Button>

            {/* Awal Calon calon */}
            <div className="calon-container">
                <div className="calon calon1">
                    <img className="rec1" src={Rectangle_1} alt="dice"></img>
                    <img className="foto_calon1" src={Calon_1} alt="dice"></img>
                </div>
                
                <div className="calon calon2">
                    <img className="rec2" src={Rectangle_2} alt="dice"></img>
                    <img className="foto_calon2" src={Calon_2} alt="dice"></img>
                </div>

                <div className="desc1 text-center">
                    <div className="no"><h5 className="no-number">1</h5></div>
                    <h2 className="font-squids">ADIAHMAD IRFAN ZIDNY</h2>
                    <p>Kita kawan, bukan lawan!</p>
                </div>

                <div className="desc2 text-center">
                    <div className="no"><h5 className="no-number">2</h5></div>
                    <h2 className="font-squids">ANJU GERALD</h2>
                    <p>
                        Tak janji nonstop, yang pasti top
                        <br/>Tak banyak berkelit, penting konkrit
                        <br/>Tak perlu membantah, pasti meriah
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
            <div>
                <BarChart/>
            </div>

            {/* Awal About & Tata Cara */}
            <div className="about-container text-center">
                <div className="about">
                    <h2 className="font-squids">Tentang Pemilu FT UGM 2022 </h2>
                        Pemilihan Umum Mahasiswa Fakultas Teknik Universitas Gadjah Mada (Pemilu) adalah sarana pelaksanaan kedaulatan mahasiswa berdasarkan Anggaran Dasar/Anggaran Rumah Tangga Keluarga Mahasiswa Fakultas Teknik Universitas Gadjah Mada.                    
                        <Button>
                        <Link to="/tentang">Selengkapnya</Link>
                    </Button>
                </div>
                
                <div className="tatacara">
                    <h2 className="font-squids">Tata Cara Pemilihan </h2>
                    <ReactPlayer className="video" controls={true} url='https://www.youtube.com/watch?v=rhFSQdILOXk&ab_channel=FakultasTeknikUGM' />
                </div>

                <img className="path" src={Path} alt="dice"></img>
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
.no {
    margin: auto auto 1vmin auto;
    border: solid var(--color-blue);
    background-color: var(--color-green);
    height: calc(1rem + 2.5vmin);
    width: calc(1rem + 2.5vmin);
    transform: rotate(45deg); 
}
.no-number {
    height: calc(1rem + 2.5vmin);
    width: calc(1rem + 2.5vmin);
    transform: rotate(-45deg);
}
// hero // -------------------------------------------------------
.hero-container{
    display: grid;
    z-index: 0;
    width: 100%;
    position: relative;
    background-color: var(--color-darkblue);
    padding: 10vmin 0;
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
    padding: 0 25%;
}
.cd p {
    border-style: none none none solid; 
    border-color: var(--color-pink);
    width: 25%;
    padding: 2vmin;
    font-weight: bold;
}
.cd .last {
    border-style: none solid; 
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
.foto_calon1{
    z-index: 1;
    height: 110%;
}
.foto_calon2{
    z-index: 1;
    height: 110%;
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
    grid-area: 1 / 2;
}
.desc2{
    //order: 3;
    grid-area: 2 / 1;
}
.logo_desc{
    //order 5 sampai 6
    grid-area: 3 / 1 / 3 / span 2;
}
.logo_desc img{
    display: none
}
// about // -------------------------------------------------------
.about-container{
    display: grid;
    z-index: 0;
    padding: 10vmin 0;
    position: relative;
    background-color: var(--color-darkblue);
    width: 100%;
}
.about{
    margin: 0 5%;
}
.about-container h2{
    padding: 5vmin 0;
}
.tatacara{
    margin: 0 5%;
    padding: 10vmin 0;
}
.video{
    border-style: solid;
    border-width: thick;
    border-color: var(--color-pink);
    border-radius: 1vmin;
    margin: auto;
    width: 80vmin !important;
    height: 45vmin !important;
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
@media (min-width: 961px) {
    
    // hero // -------------------------------------------------------
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
    .cd p {
        font-size: calc(0.5rem + 1.5vmin);
    }
    // Calon // -------------------------------------------------------
    .calon-container{
        grid-template-columns: 35% 30% 35%;
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
    
    // about // -------------------------------------------------------
    .about{
        margin: 0 20%;
    }
    
    .tatacara{
        margin: 0 20%;
    }
    .video{
        width: 112vmin !important;
        height: 63vmin !important;
    }
    .about-container .path{
        right: 0;
        bottom: 0;
        transform: rotate(180deg);
    }
    // kritik dan saran // -------------------------------------------------------
    .kritik{
        width: 50%;
    }
}
`