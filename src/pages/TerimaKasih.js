import React from "react";
import styled from "styled-components";
import UlarPNG from '../assets/TentangKPU/ular.png'
import LogoPNG from '../assets/TentangKPU/logo.png'
import { Catur } from "../assets/images/imgIndex";
import { Helmet } from "react-helmet";

export default function TerimaKasih(){
    // Kode Javascript //

    var nama = "Christian Ale Perdana".toUpperCase()
    return(
        // Kode HTML //
        <>
            <Helmet>
                <title>Pemilu FT UGM 2021</title>
            </Helmet>
        <   Container>
                <div class="hero">
                    <img src={UlarPNG} class="ular"/>
                    <div class="title font-squids">
                        <h2 class="font-mont white text-center">Terima Kasih</h2>
                        <h1 class="pink">{nama}</h1>
                        <img class="logo" src={LogoPNG} alt="Logo KPU FT"/>
                        <h2 class="font-mont white text-center">Atas Partisipasinya Dalam</h2>
                        <h1 class="white font-mont font-bold">PEMILU FT UGM 2021</h1>
                    </div>
                    <img className="catur" src={Catur} alt="dice"></img>
                </div>
        </Container>
        </>
    );
}

const Container = styled.div`
    // Kode CSS //

*{
    box-sizing:border-box;
    margin: 0;
}
.hero{
    min-height: 100vh;
    background-color: #102037;
    padding: 10vmin;
    text-align: center;

}

.ular {
    position: absolute;
    width: 40vmin; 
    height: auto;
    left: 0;
    top: 50px;
}

.logo {
    width: 30vmin;
    height: 30vmin;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    margin-top: 20px;
}

h1{
    font-size: calc(0.5rem + 5vmin);
}

.catur{
    position: absolute;
    width: 40vmin;
    right: 0;
    bottom: 0;
}

`