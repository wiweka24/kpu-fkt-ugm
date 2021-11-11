import React, {useState} from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player/youtube'
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
            <div className="hero-container">
                <div className="text-center">
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

                <div className="desc text-center">
                    <span className="calon1_desc">
                        <h2 className="font-squids">Calon 1 </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum purus eget feugiat gravida. Sed vel justo sit amet dui aliquam ornare. Duis blandit, metus aliquet dapibus eleifend, enim elit suscipit magna, id pulvinar odio nibh sed velit. Maecenas id cursus dui. </p> 
                    </span>
                    <span className="calon2_desc">
                        <h2 className="font-squids">Calon 2 </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum purus eget feugiat gravida. Sed vel justo sit amet dui aliquam ornare. Duis blandit, metus aliquet dapibus eleifend, enim elit suscipit magna, id pulvinar odio nibh sed velit. Maecenas id cursus dui. </p> 
                    </span>
                </div>
            </div>

            {/* Akhir Calon calon */}

            {/* Awal About & Tata Cara */}
            <div className="about-container text-center">
                <div className="about">
                    <h2 className="font-squids">Tentang Pemilu FT UGM 2022 </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum purus eget feugiat gravida. Sed vel justo sit amet dui aliquam ornare. Duis blandit, metus aliquet dapibus eleifend, enim elit suscipit magna, id pulvinar odio nibh sed velit. Maecenas id cursus dui. </p> 
                </div>
                
                <div className="tatacara">
                    <h2 className="font-squids">Tata Cara Pemilihan </h2>
                    <ReactPlayer className="video" controls={true} url='https://www.youtube.com/watch?v=rhFSQdILOXk&ab_channel=FakultasTeknikUGM' />
                </div>
            </div>

            {/* Akhir About & Tata Cara */}
            
            {/* Awal Kritik & Saran */}
            <div className="kritik">
                <form onSubmit={handleSubmit}>
                    <div className="box"><h4>Kritik Saran</h4></div>
                    <textarea
                        id="message"
                        name="message" 
                        placeholder="Ketik di sini ..." 
                        rows="5" 
                        value={message} 
                        onChange={handleChange}>
                    </textarea>
                    <Button>Sumbit</Button>
                </form>
            </div>

            {/* Akhir Kritik & Saran */}
        </Container>
    );

}

const Container = styled.div`
// umum // -------------------------------------------------------
background-color: var(--color-blue);

* {
    margin: 0;
    padding: 0;
    color: white;
}

// judul // -------------------------------------------------------

.hero-container{
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    background-color: var(--color-darkblue);
    width: 100%;
    padding: 10vmin;
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

.hero-container img{
    width: 10%;
    padding: 4vmin;
}

Button{
    margin: auto;
    padding: 2vmin;
    font-weight: bold;
    background-color: var(--color-pink);
}

// Calon // -------------------------------------------------------
.calon-container{
    display: flex;
    overflow: hidden;
    width: 100%;
    padding: 5vmin 0 15vmin 0;
}

.calon1{
    order: 1;

    &:hover .rec1{
        margin-right: -115%;
        transition: all 0.2s ease-out; 
    }

    &:hover .foto_calon1{
        max-height: 115%;
        transition: all 0.2s ease-out; 
    }

    &:hover ~ .desc{
        visibility: visible;
        transition: all 0.2s ease-out;
    }
    
    &:hover ~ .desc .calon2_desc{
        display: none;
        transition: all 0.2s ease-out;
    }
}

.calon2{
    order: 3;

    &:hover .rec2{
        margin-left: -115%;
        transition: all 0.2s ease-out; 
    }
    
    &:hover .foto_calon2{
        max-height: 115%;
        transition: all 0.2s ease-out; 
    }
    
    &:hover ~ .desc{
        visibility: visible;
        transition: all 0.2s ease-out;
    }
    
    &:hover ~ .desc .calon1_desc{
        display: none;
        transition: all 0.2s ease-out;
    }
    
    &:hover ~ .desc .calon2_desc{
        display: inline;
        transition: all 0.2s ease-out;
    }
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
    z-index: 1;
    max-height: 110%;
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

.desc{
    order: 2;
    z-index: 1;
    visibility: hidden;
    width: 30%;
    padding: 30vmin 2vmin 0 2vmin;
}

.desc .calon2_desc{
    display: none;
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
    padding: 10vmin 0;
}

.video{
    border-style: solid;
    border-width: thick;
    border-color: var(--color-pink);
    border-radius: 1vmin;
    margin: auto;
    width: 112vmin !important;
    height: 63vmin !important;
}

// kritik dan saran // -------------------------------------------------------

.kritik{
    display: grid;

    padding: 10vmin 0;
    position: relative;
    margin: auto;
    width: 50%;
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
    margin-bottom: 3vmin;
    padding: 1vmin;
    width: 100%;

    color: var(--color-black);
    font-size: calc(0.5rem + 2vmin);
    font-family: "MontBook";
}
`