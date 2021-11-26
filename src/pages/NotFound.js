import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Button from "../components/Button";

import LogoPNG from '../assets/images/logo.webp'
import Cards from '../assets/images/cards.webp'

export default function NotFound() {
    return(
        <>
            <Helmet>
                Error: Page Tidak Ditemukan
            </Helmet>
            <Container>
                <div className="hero-container text-center">
                    <img src={Cards} className="card" alt="card"/>
                    <div class="text">
                        <h1 className="font-squids">ERROR 404</h1>
                    </div>
                </div>
                <div style={{padding: '10vmin', alignItems:'center', display:'flex', flexDirection: 'column'}}>
                    <h3>
                        <b>Mengapa halaman ini muncul? Kemungkinan:</b>
                    </h3>
                    <ul>
                        <li>Anda telah memilih dan tidak diperkenankan memilih kembali</li>
                        <li>Email Anda tidak terdaftar di Daftar Pemilih Tetap KPU FT UGM</li>
                        <li>Anda tidak memiliki akses pada halaman ini</li>
                    </ul>
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
background-color: var(--color-blue);
overflow: hidden;

* {
    margin: 0;
    padding: 0;
    color: white;
}

.hero-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 0;
    width: 100vw;
    min-height: 100vh;
    position: relative;
    background-color: var(--color-darkblue);
    padding: 10vmin 10vmin;
}

.hero-container .text-center{
    width: 100%;
}

.text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1, h4{
        font-weight: lighter;
    }
    h2{
        font-weight: bolder;
    }
}


.card {
    width: 100vmin;
}
`