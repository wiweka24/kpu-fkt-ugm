import React from 'react'
import { Carousel } from 'antd';
import {
    KETUA,
    IT,
    MEDPUB,
    ACARA,
    HUMAS,
    KSK
}from "../assets/images/imgKPU"
import styled from "styled-components";



export default function CarouselPanitia() {
    
    const contentStyle = {
        height: 'auto',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
      

    return(
        <Container>
            <Carousel autoplay>
                    <div className="container-panitia">
                        <img className="panitia" style={contentStyle} src={KETUA}/>
                    </div>
                    <div className="container-panitia">
                        <img className="panitia" style={contentStyle} src={KSK}/>
                    </div>
                    <div className="container-panitia">
                        <img className="panitia" style={contentStyle} src={ACARA}/>
                    </div>
                    <div className="container-panitia">
                        <img className="panitia" style={contentStyle} src={IT}/>
                    </div>
                    <div className="container-panitia">
                        <img className="panitia" style={contentStyle} src={MEDPUB}/>
                    </div>                    
                    <div className="container-panitia">
                        <img className="panitia" style={contentStyle} src={HUMAS}/>
                    </div>
            </Carousel>
        </Container>
    )
}

const Container = styled.div`
.panitia{
    height:600px;
    width:100%;
    margin: 0 auto;
    display:none;
}
.container-panitia{
    width: 100%;
    background-color:#38445E;
    
}
.slick-dots{
    background-color:#38445E;
}

@media (max-width: 670px){
    *{
        display:none;
    }
}
`