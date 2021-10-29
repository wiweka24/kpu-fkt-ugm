import React from "react";
import styled from "styled-components";
//import {Button} from "../components/Button";

export default function Beranda(){
    // Kode Javascript //

    return(
        // Kode HTML //
        <Container>
            <body>

            {/* Awal Bagian Hero*/}
            <div className="hero-container center">
                <div className="hero-text">
                    <h1>KPU FT <br/>2021 </h1>
                    <h5>Pemilihan Umum </h5>
                    <h4>Ketua BEM KM FT UGM 2022 </h4>
                </div>
                {/* <div className="hero-btn">
                    <Button/>
                <div/> */}

            {/* Akhir Bagian Hero */}

            </div>
            </body>
        </Container>
    );

}

const Container = styled.div`
* {
    margin: 0;
    padding: 0;
}

.hero-container{
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #102037;
    background-size: 
    width: 100%;
    height: 600px;

    text-align: center;
    color: white;
}
`