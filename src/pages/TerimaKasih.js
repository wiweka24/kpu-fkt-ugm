import React, { useState } from "react";
import styled from "styled-components";
import UlarPNG from '../assets/images/path.webp'
import LogoPNG from '../assets/images/logo-kpu.png'
import { Helmet } from "react-helmet";
import Button from "../components/Button";
import {BgBlack, BgGreen} from "../assets/images/imgIndex"

export default function TerimaKasih() {
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

    return (
        // Kode HTML //
        <>
            <Helmet>
                <title>Pemilwa FKT UGM 2021</title>
            </Helmet>
            <   Container>
                <div class="hero">
                    <div class="title font-title">
                        <h2 class="font-mont white text-center">Terima Kasih Atas</h2>
                        <h2 class="font-mont white text-center">Partisipasi Anda Dalam</h2>
                        <img class="logo" src={LogoPNG} alt="Logo KPU FT" />
                        <h1 class="white font-mont font-bold">PEMILWA FKT UGM <span className="font-number">2021</span></h1>
                    </div>
                </div>

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
                        <Button bgColor="var(--color-white)" textColor="var(--color-green)"><b>Kirim</b></Button>
                    </form>
                </div>
            </Container>
        </>
    );
}

const Container = styled.div`
    // Kode CSS //
    background: url(${BgBlack});


*{
    box-sizing:border-box;
    margin: 0;
    
}
.hero{
    background: url(${BgGreen});
    min-height: 98vh;
    padding: 10vmin;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

}


.logo {
    width: 35vmin;
    height: 35vmin;
    background-color: var(--color-white);
    border-radius: 50%;
    padding: 2vmin;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    margin-top: 20px;
}

h1{
    font-size: calc(0.5rem + 5vmin);
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

.buttons{
    display: flex;
    width: 50%;
    align-self: center;
    justify-content: space-around;

    button{
        margin: 5vmin;
        white-space: nowrap;
    }
}
`