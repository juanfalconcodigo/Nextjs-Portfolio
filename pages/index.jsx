import { Layout } from '../components/layout';
import styled from '@emotion/styled';
import { ReactTyped } from "react-typed";
import { Button } from '../components/iu';
import Link from 'next/link';
import { animationFadeIn } from '../components/animation';

const HomeContainer = styled.div`
max-width:960px;
width:100%;
margin:auto;
display:grid;
grid-template-areas:'title img' 'description .';
grid-template-columns:2fr 1fr;
grid-template-rows:250px 300px;
animation:${animationFadeIn} 1s ease-in-out;
@media(max-width:768px){
  grid-template-areas:'title' 'img' 'description';
  grid-template-columns:auto;
  grid-template-rows:auto 250px auto;
} 
`;
const Title = styled.div`
span{
  font-size:4rem;
  color:#867BFB;
}
h1{
  @media(max-width:768px){
    margin:0px;
  } 
}
`;
const PhotoProfile = styled.div`
display:flex;
justify-content:center;
align-items:center;
div{
  width:250px;
  height: 250px;
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

const Description = styled.section`
p{
  font-size:2rem;
  @media(max-width:768px){
    font-size:1.8rem;
  } 
}
`;



export default function Home() {
  return (
    <>
      <Layout>
        <HomeContainer>
          <Title itemScope itemType="https://schema.org/Person">
            <h1 itemProp="name">Juan Falcón <span itemProp="jobTitle"><u><i>Web Developer</i></u></span></h1>
            <ReactTyped
              strings={[
                'Angular 16',
                'Reactjs',
                'Nodejs',
                'Sql']}
              typeSpeed={40}
              backSpeed={50}
              loop >
              <span />
            </ReactTyped>
          </Title>
          <PhotoProfile itemScope itemtype="https://schema.org/Person">
            <div>
              <img itemProp="image" src="https://res.cloudinary.com/dbxg3ojl8/image/upload/v1703674963/profile-linkedin_pflgqh.jpg" alt="image user" />
            </div>
          </PhotoProfile>
          <Description itemScope itemType="https://schema.org/Person">
            <p itemProp="description">
              Me considero una persona analítica, creativa, perseverante, investigadora y apasionada
              por el mundo de las tecnologías Web , en el cual en los años de mi formación académica
              me llevo a afrontar diversos retos, esto hicieron de mi mejorar cada vez mas como programador
              tanto en el lado front-end como back-end con las diversas tecnologías mas demandadas.
            </p>
            <Button>
              <Link href="/portfolio">Ver más</Link>
            </Button>
          </Description>
        </HomeContainer>
      </Layout>
    </>
  )
}
