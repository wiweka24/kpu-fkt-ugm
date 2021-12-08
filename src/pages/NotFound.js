import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Button from "../components/Button";

import blackBG from "../assets/images/bg-black.webp"
import LogoPNG from '../assets/images/logo.webp'
import Cards from '../assets/images/cards.webp'

export default function NotFound() {
    return(
        <>
            <Helmet>
                Halaman Tidak Ditemukan
            </Helmet>
            <Container>
                <div className="hero-container text-center">
                    <div class="text">
                        <h1 className="font-title">Halaman Tidak Ditemukan</h1>
                    </div>
                    <div style={{padding: '10vmin', alignItems:'center', display:'flex', flexDirection: 'column'}}>
                <h3>
                        <b>Mengapa halaman ini muncul? Kemungkinan:</b>
                    </h3>
                    <ul>
                        <li>Anda telah memilih dan tidak diperkenankan memilih kembali</li>
                        <li>Email Anda tidak terdaftar di Daftar Pemilih Tetap KPUM FKT UGM</li>
                        <li>Anda tidak memiliki akses pada halaman ini</li>
                    </ul>                  
                </div>
                <a href="/"><button class="button">Kembali</button></a>

                </div>

            </Container>
        </>
    )
}

const Container = styled.div`
background: url(${blackBG});
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
    padding: 10vmin 10vmin;
}

.hero-container .text-center{
    width: 100%;
}

.text{

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

.button {
            cursor: pointer;
            background-color: #3e6456;
            color: #d0c8b3;
            padding: 1vmin 3vmin;
            border-radius: 5px;
            width: 180px;
        }
`