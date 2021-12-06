import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import BarChart from "../components/BarChart";
import Fade from "react-reveal/Fade"
import CarouselTataCara from "../components/Carousel_TataCara";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
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
    no
}from "../assets/images/imgIndex.js" 

export default function Beranda(){
    // Kode Javascript //

    // Kesan Pesan
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

    // Show Hide
    const [show1,setShow1] = useState(false)
    const [show2,setShow2] = useState(false)
    const [show3,setShow3] = useState(false)

    function reveal1(){
        setShow1(!show1)
        setShow2(false)
        setShow3(false)
    }

    function reveal2(){
        setShow1(false)
        setShow2(!show2)
        setShow3(false)
    }

    function reveal3(){
        setShow1(false)
        setShow2(false)
        setShow3(!show3)
    }

    return(
        // Kode HTML //
        <Container className="font-default">
            <Helmet>
                <title>KPUM FT UGM</title>
            </Helmet>
            {/* Awal Bagian Hero*/}
            <div className="hero-container text-center">
                    <Fade>
                        <h1 className="tittle font-title">
                            <img className="wind" src={WindL} alt="wind"></img>
                            KPUM FKT
                            <img className="wind" src={WindR} alt="wind"></img>
                            <br/>2021
                        </h1>
                        <h2 className='text'>
                            Pemilihan Umum Mahasiswa
                            <h4 style={{color:"var(--color-yellow)"}}>8 Desember - ? Desember 2021</h4>
                        </h2>
                        <h2 className='text'>Ketua LEM &emsp;&emsp; Ketua DPM &emsp;&emsp; Ketua UF</h2>
                    </Fade>
                    <Fade>
                        <div className="wait">
                        <Button>
                            <a href={"https://kpuftugm.id/auth/google"}>Vote Sekarang</a>
                        </Button>
                        </div>
                    </Fade>
                    <Fade>
                        <img className="catur" src={Catur} alt="dice"></img>
                        <img className="path" src={Path} alt="dice"></img>
                    </Fade>
            </div>
            {/* Akhir Bagian Hero */}

            {/* Awal Calon calon */}
            <div className="calon-container">
                <div className="calon">
                    <div className="calon1" onClick={reveal1}>
                        <img className="foto-calon" src={Calon_1} alt="dice"></img>
                    </div>
                    <div className="calon2" onClick={reveal2}>
                        <img className="foto-calon" src={Calon_2} alt="dice"></img>
                    </div>
                    <div className="calon3" onClick={reveal3}>
                        <img className="foto-calon" src={Calon_3} alt="dice"></img>
                    </div>
                </div>
                <div className="calon-info">
                    {
                        show1? 
                        <div className="desk-calon">
                            <div>
                                <img className="foto-calon" src={Calon_1_Polos} alt="dice"></img>
                            </div>
                            <div className="desk-tiap-calon text-center">
                                <h2 className="font-title">CALON KETUA LEM</h2>
                                <img src={no} alt="nomor urut"></img>
                                <h3>DIMAS RAMADHAN</h3>
                                <p>"Merajut Kolaboari Ciptakan Kreasi"</p>
                            </div>
                        </div> :null
                    }
                    {
                        show2? 
                        <div className="desk-calon">
                            <div>
                                <img className="foto-calon" src={Calon_2_Polos} alt="dice"></img>
                            </div>
                            <div className="desk-tiap-calon text-center">
                                <h2 className="font-title">CALON KETUA DPM</h2>
                                <img src={no} alt="nomor urut"></img>
                                <h3>AURORA TARISA M.</h3>
                                <p>
                                    "Narasikan Gagasan, Wujudkan Kebermanfaatan Jangan
                                    <br/>Hanya Menunggu, Tapi Ciptakan Aksimu Sendiri"
                                </p>
                            </div>
                        </div> :null
                    }
                    {
                        show3? 
                        <div className="desk-calon">
                            <div>
                                <img className="foto-calon" src={Calon_3_Polos} alt="dice"></img>
                            </div>
                            <div className="desk-tiap-calon text-center">
                                <h2 className="font-title">CALON KETUA DPM UF</h2>
                                <img src={no} alt="nomor urut"></img>
                                <h3>DHAFIN ANDRIAN</h3>
                                <p>
                                    "Ekspresikian Diri, Satukan Aspirasi,
                                    <br/>Sempurnakan Demokrasi"
                                </p>
                            </div>
                        </div> :null
                    }
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
                    <h2 className="font-title">Tentang Pemilwa FKT UGM <span className="font-number">2021</span> </h2>
                    <p> Pemilihan Umum Mahasiswa Fakultas Teknik Universitas Gadjah Mada (Pemilwa) adalah sarana pelaksanaan kedaulatan mahasiswa berdasarkan Anggaran Dasar/Anggaran Rumah Tangga Keluarga Mahasiswa Fakultas Teknik Universitas Gadjah Mada. </p>                     
                    <Button>
                        <Link to="/tentang">Selengkapnya</Link>
                    </Button>
                </div>
                
                <div className="tatacara text-center">
                    <h2 className="font-title">Tata Cara Pemilihan </h2>
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
background-image: url(${BgBlack});
background-repeat: round;
overflow: hidden;
* {
    margin: 0;
    padding: 0;
    color: #D0C8B3;
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
Button{
    margin: 3vmin auto auto auto;
    padding: 0.5vmin 2vmin;
    font-weight: bold;
    background-color: var(--color-white);
}
Button Link{
    color: var(--color-black);
    &:hover{
        color: var(--color-gren);
    }
}
Button a{
    color: var(--color-black);
    &:hover{
        color: var(--color-gren);
    }
}
.kritik Button{
    background-color: var(--color-green);
    color: var(--color-white);
    &:hover{
        color: var(--color-black);
    }
}
// hero // -------------------------------------------------------
.hero-container{
    display: grid;
    z-index: 0;
    min-height: 92.5vh;
    width: 100%;
    position: relative;
    background-image: url(${BgGreen});
    padding: 20vh 0;
}
.hero-container .text{
    padding: 2.5vmin 0;
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
.cd {
    display: flex;
    padding: 0 20%;
}
.cd p {
    font-size: calc(0.5rem + 1vmin);
    border-style: none none none solid; 
    border-color: var(--color-white);
    width: 25%;
    padding: 2vmin;
    font-weight: bold;
}
.cd .last {
    border-style: none solid; 
}
.endvote {
    border: 2px var(--color-white);
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
.wind{
    height: 10vmin;
}
// Calon // -------------------------------------------------------
.calon-container{
    margin: 10vmin 0;
}
.calon{
    padding: 5vmin 20%;
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
}
.calon1, .calon2, .calon3{
    padding: 0 3vmin;
    width: 100%;
}
.calon .foto-calon{
    width: 100%;
}
.calon-info{
    padding: 2vmin 22.5%;
}
.desk-calon{
    width: 100%;
    border: 10px solid var(--color-green);
    display: grid;
    grid-template-columns: 35% 65%;
    padding: 3vmin;
}
.desk-calon .foto-calon{
    width: 100%;
}
.desk-tiap-calon{
    margin: auto;
}
.desk-tiap-calon img{
    width: 7vmin;
}
.desk-tiap-calon h3{
    font-weight: bolder;
    padding-bottom: 7vmin;
}

// about // -------------------------------------------------------
.about-container{
    z-index: 0;
    padding: 10vmin 0;
    position: relative;
    background-image: url(${BgGreen});
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
    border-color: var(--color-white);
    border-radius: 1vmin 1vmin 0 0;
    background-color: var(--color-white);
    color: var(--color-green);
    font-weight: bolder;
    padding: 1vmin;
    text-align: left;
}
.kritik textarea{
    border-style: solid;
    border-color: var(--color-white);
    border-width: thick;
    border-radius: 0 1vmin 1vmin 1vmin;
    padding: 1vmin;
    width: 100%;
    color: var(--color-black);
    font-size: calc(0.5rem + 2vmin);
    font-family: Montserrat;
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
    .cd {
        padding: 0 25%;
    }
    .cd p {
        font-size: calc(0.5rem + 1.5vmin);
    }
    // Calon // -------------------------------------------------------
    
    
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
        border: 4px var(--color-white) solid;
    }

    // kritik dan saran // -------------------------------------------------------
    .kritik{
        width: 50%;
    }
}
`