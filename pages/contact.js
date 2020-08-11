import React from 'react';
import Layout from '../components/layout/Layout';
import { faLinkedin,faGithub,faGoogle} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from '@emotion/styled';
import { animationFadeIn } from '../components/animation';

const ContactContainer=styled.div`
max-width:960px;
width:100%;
margin:auto;
animation:${animationFadeIn} 1s ease-in-out;
h3{
    font-size:2rem;
    font-weight:normal;
}
`;

const Social=styled.ul`
width:100%;
display:flex;
align-items:flex-start;
flex-direction:column;
li{
    max-width:120px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
}
`
const Contact=()=>{

    return(
        <>
          <Layout>
              <ContactContainer>
              <h2>Estemos en contacto:</h2>
              <h3>
                  Puedes encontrarme en la web mediante estos medios,actualmente estoy
                  activo en <a href="https://github.com/juanfalconcodigo" target="_blank"><u><i>Github</i></u></a> compartiendo algunos proyectos personales con el fin de 
                  compartir mis conocimientos con la comunidad y aprender de ellos mediante su feedback.
              </h3>
              <Social itemScope itemType="https://schema.org/Person">
                  <li itemProp="contactPoint"><span>Linkedin</span>  <a target="_blanck" href="https://www.linkedin.com/in/juan-diego-falc%C3%B3n-c%C3%B3rdova-4699301a1/"><FontAwesomeIcon icon={faLinkedin} style={{width:'30px',color:'black'}}/></a></li>
                  <li itemProp="memberOf"><span>Github</span> <a target="_blanck" href="https://github.com/juanfalconcodigo"><FontAwesomeIcon icon={faGithub} style={{width:'30px',color:'black'}}/></a></li>
                  <li itemProp="email"> <span>Gmail</span> <a href="mailto:juancodigo23@gmail.com"><FontAwesomeIcon icon={faGoogle} style={{width:'30px',color:'black'}}/></a></li>
              </Social>
              </ContactContainer>
          </Layout>
        </>
    )

}

export default Contact;