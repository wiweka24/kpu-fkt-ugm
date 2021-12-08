import React from "react";
import styled from "styled-components";
import SocialMedia from "./SocialMedia";
import greenBG from "../assets/images/bg-green.webp";

function Footer() {
  return (
    <FooterContainer>
      <div className="grid-container p-3">
        <div className="m-0">
          <h4 className="font-title">Komisi Pemilihan Umum Mahasiswa <span className="font-number">2021</span> <br/> 
          Fakultas Kehutanan <br/>Universitas Gadjah Mada</h4>
          <p>
            <a
                href="https://goo.gl/maps/bWu9pE1hgutwyZy8A"
                target="_blank"
                rel="noopener noreferrer"
                className="pink address"
            >
 Jl. Agro, Bulaksumur No.1, Kocoran, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281            </a>
            </p>
        </div>
        <div className="m-0">
          <h4>Kontak</h4>
          <p>Untuk informasi lebih lanjut:</p>
          <div className="social-media">
            <SocialMedia
              name="Instagram"
              value = "@kpumfktugm"
              faIcon={["fab", "instagram"]}
              link="http://instagram.com/kpumfktugm"
              secondaryColor="#302f2b"
            />
            <SocialMedia
              name="OA Line"
              value= "602hkuwd"
              faIcon={["fab", "line"]}
              link="http://line.me/ti/p/~@602hkuwd"
              secondaryColor="#302f2b"
            />
            <SocialMedia
              name="Youtube"
              value = "KPUM FKT UGM"
              faIcon={["fab", "youtube"]}
              link="https://www.youtube.com/channel/UCO18oRuCPV-GQKPN-t65gqg"
              secondaryColor="#302f2b"
            />
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  min-width: 140px;
  color: var(--color-white);
  padding: 10vmin;
  border-top: 3px solid var(--color-white);
  width: 100%;
    margin: 0;
  box-sizing: border-box;
  background-image: url(${greenBG});
  background-repeat: repeat;
    overflow: hidden;


  .address:hover{
    color: var(--color-black);
    transition: all 0.2s ease-out; 
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0px, 1fr));
    grid-template-rows: repeat(2, auto);
    gap: 30px 25vmin;
  }

  .grid-container div:nth-child(1n) {
    grid-column: span 2;
    width: 100%;
  }

  .grid-container div {
    margin: inherit;
    font-weight: normal;
  }

  .grid-container div h2 {
    margin: inherit;
  }

  .grid-container a {
    display: block;
    text-decoration: none;
    color: var(--color-white);
  }

  @media (min-width: 576px) {
    .grid-container div:nth-child(1n) {
      grid-column: span 1;
      grid-row: span 2;
      width: 100%;
    }
  }

  h4{
      margin: 5px 0;
      color: var(--color-white);
  }

  p{
    margin: 0;
  }

  /* @media (min-width: 768px) {
  } */
`;
