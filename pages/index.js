import React from 'react';
import {Layout} from '../components/layout';
import styled from '@emotion/styled';
import Typed from 'react-typed';
import Button from '../components/iu/Button';
import Link from 'next/link';

const HomeContainer=styled.div`
max-width:960px;
width:100%;
margin:auto;
display:grid;
grid-template-areas:'title img' 'description .';
grid-template-columns:2fr 1fr;
grid-template-rows:250px 300px;
@media(max-width:768px){
  grid-template-areas:'title' 'img' 'description';
  grid-template-columns:auto;
  grid-template-rows:150px 300px auto;
} 
`;
const Title=styled.div`
span{
  font-size:4rem;
  color:#867BFB;
}
`;
const PhotoProfile=styled.div`
display:flex;
justify-content:center;
align-items:center;
div{
  width:200px;
  height: 200px;
  border:10px solid black;
  border-radius:50%;
  overflow: hidden;
}
img{
  width:100%;
  height:100%;
  object-fit:cover;
  /* vertical-align:top; */
}
`;

const Description=styled.section`
p{
  font-size:2rem;
}
`;

export default function Home() {
  return (
    <>
    <Layout>
       <HomeContainer>
         <Title>
           <h1>Juan Falcón <u><i>Web Developer</i></u></h1>
                <Typed
                strings={[
                    'Angular 10',
                    'Reactjs',
                    'Nodejs',
                     'Sql']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                    <span/>
                </Typed>
          </Title>
         <PhotoProfile>
           <div>
             <img src="https://res.cloudinary.com/dbxg3ojl8/image/upload/v1596826886/falcon_o9hvs6.jpg" alt="image user"/>
           </div>
         </PhotoProfile>
         <Description>
           <p>
           Me considero una persona analítica,creativa,perseverante, investigadora y apasionada 
           por el mundo de las tecnologías Web , en el cual en los años de mi formación académica 
           me llevo a afrontar diversos retos, esto hicieron de mi mejorar cada vez mas como programador 
           tanto en el lado front-end como back-end con las diversas tecnologías mas demandadas.
           </p>
           <Button>
             <Link href="/portfolio"><a>Ver más</a></Link>
           </Button>
          </Description>
       </HomeContainer>
    </Layout>
    </>
  )
}
