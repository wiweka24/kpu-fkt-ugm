import React from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player'
import Button from "../components/Button";
import {
    Dice,
    Rectangle_1,
    Rectangle_2,
    Calon_1, 
    Calon_2,
}from "../assets/images"

export default function Beranda(){
    // Kode Javascript //

    return(
        // Kode HTML //
        <Container>
            

            {/* Awal Bagian Hero*/}
            <div className="hero-container">
                <div className="text">
                    <h1 className="tittle font-squids">kpu ft<br/>2021 </h1>
                    <h4>Pemilihan Umum </h4>
                    <h2 className>Ketua BEM KM FT UGM 2022 </h2>
                    <img src={Dice} alt="dice"></img>
                    <Button>Vote Sekarang</Button>
                </div>
                {/* <div className="hero-btn">
                    <Button/>
                <div/> */}
            </div>

            {/* Akhir Bagian Hero */}

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

                <div className="desc text">
                    <span class="calon1_desc">
                        <h2 className="font-squids">Calon 1 </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum purus eget feugiat gravida. Sed vel justo sit amet dui aliquam ornare. Duis blandit, metus aliquet dapibus eleifend, enim elit suscipit magna, id pulvinar odio nibh sed velit. Maecenas id cursus dui. </p> 
                    </span>
                    <span class="calon2_desc">
                        <h2 className="font-squids">Calon 2 </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum purus eget feugiat gravida. Sed vel justo sit amet dui aliquam ornare. Duis blandit, metus aliquet dapibus eleifend, enim elit suscipit magna, id pulvinar odio nibh sed velit. Maecenas id cursus dui. </p> 
                    </span>
                </div>
            </div>

            {/* Akhir Calon calon */}

            {/* Awal About & Tata Cara */}
            <div className="about-container text">
                <div class="about">
                    <h2 class="font-squids">Tentang Pemilu FT UGM 2022 </h2>
                    <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum purus eget feugiat gravida. Sed vel justo sit amet dui aliquam ornare. Duis blandit, metus aliquet dapibus eleifend, enim elit suscipit magna, id pulvinar odio nibh sed velit. Maecenas id cursus dui. </p> 
                </div>
                
                <div class="tatacara">
                    <h2 class="font-squids">Tata Cara Pemilihan </h2>
                    <ReactPlayer class="video" url='https://www.youtube.com/watch?v=rhFSQdILOXk&ab_channel=FakultasTeknikUGM' />
                </div>
            </div>

            {/* Akhir About & Tata Cara */}
            
            {/* Awal Kritik & Saran */}
            <div className="kritik text">
                <div><h3>Kritik & Saran</h3></div>
                <textarea rows="20" cols="50"></textarea>
                <Button>Kirim</Button>
            </div>

            {/* Akhir Kritik & Saran */}
        </Container>
    );

}

const Container = styled.div`
// umum // ----------------------------------------------------------------------
background-color: var(--color-blue);

* {
    margin: 0;
    padding: 0;
}

.text{
    text-align: center;
    color: white;
}

// judul // ---------------------------------------------------------------------

.hero-container{
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    background-color: var(--color-darkblue);
    width: 100%;
    padding: 10vmin;
}

.tittle{
    font-weight: lighter;
}

.text h4{
    font-weight: lighter;
}

.text h2{
    font-weight: bolder;
}

.text img{
    width: 10%;
    padding: 4vmin;
}

Button{
    margin: auto;
    padding: 2vmin;
    font-weight: bold;
    background-color: var(--color-pink);
}

// Calon // --------------------------------------------------------------
.calon-container{
    display: flex;

    overflow: hidden;
    width: 100%;
    padding: 5vmin 0 15vmin 0;
}

.calon1{
    order: 1;
}

.calon2{
    order: 3;
}

.desc{
    order: 2;
}

.calon{
    position: relative;
    width: 35%;
    height: 75vmin;
}

.calon img{
    position: absolute;
    padding-top: 10vmin;
    bottom: 0;
}

.foto_calon1{
    z-index: 1;
    max-height: 110%;
}

.foto_calon2{
    max-height: 110%;
    z-index: 1;
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

.calon1:hover .rec1{
    margin-right: -115%;
    transition: all 0.2s ease-out; 
}

.calon1:hover .foto_calon1{
    max-height: 115%;
    transition: all 0.2s ease-out; 
}

.calon1:hover ~ .desc{
    visibility: visible;
    transition: all 0.2s ease-out;
}

.calon1:hover ~ .desc .calon2_desc{
    display: none;
    transition: all 0.2s ease-out;
}

.calon2:hover .rec2{
    margin-left: -115%;
    transition: all 0.2s ease-out; 
}

.calon2:hover .foto_calon2{
    max-height: 115%;
    transition: all 0.2s ease-out; 
}

.calon2:hover ~ .desc{
    visibility: visible;
    transition: all 0.2s ease-out;
}

.calon2:hover ~ .desc .calon1_desc{
    display: none;
    transition: all 0.2s ease-out;
}

.calon2:hover ~ .desc .calon2_desc{
    display: inline;
    transition: all 0.2s ease-out;
}

.desc{
    visibility: hidden;
    z-index: 1;
    width: 30%;
}

.desc .calon2_desc{
    display: none;
}

.desc h2{
    padding-top: 25vmin;
}

.desc p{
    padding: 2vmin;
}

// about // -------------------------------------------------------

.about-container{
    display: grid;
    justify-content: center;
    align-items: center;

    padding: 10vmin 50vmin;
    position: relative;
    background-color: var(--color-darkblue);
    width: 100%;
}

.about-container h2{
    padding: 5vmin;
}

.tatacara{
    padding-top: 10vmin;
}

.video{
    margin: auto;
    width: 100%;
}

// kritik dan saran // -------------------------------------------------------

.kritik{
    display: grid;

    padding: 10vmin 0;
    position: relative;
    margin: auto;
    width: 50%;
}

.kritik div{
    display: flex;
}

.kritik h3{
    border-style: solid;
    border-color: var(--color-pink);
    border-radius: 2vmin 2vmin 0 0;
    background-color: var(--color-pink);

    color: var(--color-black);
    padding: 1vmin;
    text-align: left;
}

.kritik textarea{
    border-style: solid;
    border-color: var(--color-pink);
    border-width: thick;
    border-radius: 0 2vmin 2vmin 2vmin;
    height: 25vmin;
    margin-bottom: 3vmin;
    padding: 1vmin;

    font-size: calc(0.5rem + 2vmin);
    font-family: "MontBook";
}
`