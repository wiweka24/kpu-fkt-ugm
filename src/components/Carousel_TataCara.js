import React from 'react'
import styled from "styled-components";
import { Carousel } from 'antd';
import {
    Tahap0,
    Tahap1,
    Tahap2,
    Tahap3,
    Tahap4,
    Tahap5,
}from "../assets/images/imgTataCara"

export default function CarouselTataCara() {
    return(
        <Container>
            <Carousel autoplay accessibility="true">
                <div className="container-panitia">
                    <img className="panitia" src={Tahap0}/>
                </div>
                <div className="container-panitia">
                    <img className="panitia" src={Tahap1}/>
                </div>
                <div className="container-panitia">
                    <img className="panitia" src={Tahap2}/>
                </div>
                <div className="container-panitia">
                    <img className="panitia" src={Tahap3}/>
                </div>
                <div className="container-panitia">
                    <img className="panitia" src={Tahap4}/>
                </div>                    
                <div className="container-panitia">
                    <img className="panitia" src={Tahap5}/>
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