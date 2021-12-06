import React from 'react'
import { Carousel } from 'antd';
import {
    RAFRES,
    PDD,
    BENDAHARA,
    PERKAP,
    HUMAS,
    ACARA
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
                        <img className="panitia" style={contentStyle} src={RAFRES}/>
                    </div>
                    <div className="container-panitia">
                        <img className="panitia" style={contentStyle} src={BENDAHARA}/>
                    </div>
                    <div className="container-panitia">
                        <img className="panitia" style={contentStyle} src={ACARA}/>
                    </div>
                    <div className="container-panitia">
                        <img className="panitia" style={contentStyle} src={HUMAS}/>
                    </div>
                    <div className="container-panitia">
                        <img className="panitia" style={contentStyle} src={PERKAP}/>
                    </div>                    
                    <div className="container-panitia">
                        <img className="panitia" style={contentStyle} src={PDD}/>
                    </div>
            </Carousel>
        </Container>
    )
}

const Container = styled.div`
.panitia{
    height:600px;
    width:75%;
    margin: 0 auto;
    display:none;
    border: 1px solid #d0c8b3;
}
.container-panitia{
    width: 100%;
    // background-color:#38445E;
    
}
.slick-dots{
    background-color:#302F2B;
    width: 140px;
    margin: auto;
}

`