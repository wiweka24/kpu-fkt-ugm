import React from 'react'
import styled from "styled-components";
import { Carousel } from 'antd';
import {
    KETUA,
    IT,
    MEDPUB,
    ACARA,
    HUMAS,
    KSK
}from "../assets/images/imgKPU"

export default function CarouselTataCara() {
    return(
        <Container>
            <Carousel autoplay>
                <div className="container-panitia">
                    <img className="panitia" src={KETUA}/>
                </div>
                <div className="container-panitia">
                    <img className="panitia" src={KSK}/>
                </div>
                <div className="container-panitia">
                    <img className="panitia" src={ACARA}/>
                </div>
                <div className="container-panitia">
                    <img className="panitia" src={IT}/>
                </div>
                <div className="container-panitia">
                    <img className="panitia" src={MEDPUB}/>
                </div>                    
                <div className="container-panitia">
                    <img className="panitia" src={HUMAS}/>
                </div>
            </Carousel>
        </Container>
    )
}

const Container = styled.div`
.panitia{
    height: auto;
    width: 100%;
}
`