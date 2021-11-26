import React from "react";
import styled from "styled-components";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <FooterContainer>
      <div className="grid-container p-3">
        <div className="m-0">
          <h4 className="font-squids">Komisi Pemilihan Umum 2021 <br/> 
          Fakultas Teknik <br/>Universitas Gadjah Mada</h4>
          <p>
            <a
                href="https://goo.gl/maps/bWu9pE1hgutwyZy8A"
                target="_blank"
                rel="noopener noreferrer"
                className="pink address"
            >
                Jl. Grafika No.2, Senolowo, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 5528
            </a>
            </p>
        </div>
        <div className="m-0">
          <h4>Kontak</h4>
          <p>Untuk informasi lebih lanjut:</p>
          <div className="social-media">
            <SocialMedia
              name="Instagram"
              value = "@kpuftugm"
              faIcon={["fab", "instagram"]}
              link="http://instagram.com/kpuftugm"
              secondaryColor="#ffffff"
            />
            <SocialMedia
              name="OA Line"
              value= "syo6705m"
              faIcon={["fab", "line"]}
              link="http://line.me/ti/p/~@syo6705m"
              secondaryColor="#ffffff"
            />
            <SocialMedia
              name="CP Line"
              value = "ne.erbn (Nerpati) "
              faIcon={["fas", "comment-dots"]}
              link="http://line.me/ti/p/~ne.erbn"
              secondaryColor="#ffffff"
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
  background-color: var(--color-darkblue);
  color: white;
  padding: 10vmin;
  border-top: 3px solid var(--color-pink);


  .address:hover{
    color: var(--color-white);
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
    color: var(--color-pink);
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
      color: white;
  }

  p{
    margin: 0;
  }

  /* @media (min-width: 768px) {
  } */
`;
