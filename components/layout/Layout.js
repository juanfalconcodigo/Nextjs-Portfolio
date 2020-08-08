import React,{useState} from 'react';
import Head from 'next/head';
import {Global,css} from '@emotion/core';
import styled from '@emotion/styled';
import Navbar from './Navbar';
import HamburgerComponent from '../iu/Hamburger';
import Footer from './Footer';
import Header from './Header';
import ProgressBar from '../iu/ProgressBar';

const Container=styled.div`
display:grid;
grid-template-areas:'header' 'main' 'footer';
grid-template-columns:auto;
grid-template-rows:80px auto 80px;
width:100%;
min-height:100vh;
`;

const Main=styled.div`
grid-area:main;
padding:4rem 0;
display:flex;
justify-content:center;
align-items:center;
@media(max-width:960px){
    padding:4rem 2rem;
} 
`;

const HamburgerStyled = styled.div `
position:fixed;
right:3vw;
bottom:3vw;
z-index:999;
`;

const Layout=(props)=>{
    const [show,setShow]=useState(true);
    const handleChangeShow=(value)=>{
        setShow(value);
    }

    return (
        <>
        <Global styles={css`
        html{
            font-size:62.5%;
            box-sizing:border-box;
        }
        *,*::before,*::after{
            box-sizing:inherit;
        }
        body{
            font-size:1.6rem;
            line-height:1.5;
            font-family:'PT Sans', sans-serif;
        }
        h1,h2,h3{
            margin:0 0 2rem 0;
            line-height:1.5;
        }
        h1,h2{
            font-size:'Roboto Slab', serif;
            font-weight:700;
        }
        h3{
            font-family:'PT Sans', sans-serif;
        }
        ul{
            list-style:none;
            margin:0;
            padding:0;
        }
        li{
            font-weight:700;
            font-size:2rem;
        }
        a{
            text-decoration:none;
        }
        img{
            max-width:100%;
        }
        /* para el scroll */

        body::-webkit-scrollbar-track {
           box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
           /* border-radius: 4px; */
           background-color: #F5F5F5;
        }

        body::-webkit-scrollbar {
          width: 8px;
          background-color: #F5F5F5;
        }

         body::-webkit-scrollbar-thumb {
          /* border-radius: 4px; */
          background-color: black;
        }
 
        `}/>
        <Head>
            <link rel="shortcut icon" href="/static/f.ico" type="image/x-icon"/>
            {/* evita la duplicidad y la url principal de tu page */}
            <link rel="canonical" href="https://juanfalconcodigo.github.io/Portfolio/" />
            <title>Falcón</title>
            {/* <style jsx global>{normalize}</style> */}
            
            {/* para el seo */}
            <meta name="description" content="Portafolio de Juan Diego Falcón Córdova desarrollador web front end y back end" />
            <meta name="author" content="Juan Falcón" />
            <meta name="keywords" content="front end developer, fullstack,Juan Falcón,back end developer,web developer,portafolio,desarrollador angular,reactjs" />
            <meta name="copyright" content="Juan Falcón" />
            <meta name="robots" content="index,follow" />
            {/* styles */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"></link>
        </Head>
            <Container show={show}>
                <HamburgerStyled>
                    <HamburgerComponent show={show} handleChangeShow={handleChangeShow}/>
                </HamburgerStyled>  
                <Navbar show={show}/>
                <ProgressBar/>
                <Header/>
                <Main>
                    <main>
                    {props.children}
                    </main>
                </Main>
                <Footer/>
            </Container>
        </>
    )

}

export default Layout;