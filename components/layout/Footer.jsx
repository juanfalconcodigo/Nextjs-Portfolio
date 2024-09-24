import React from 'react';
import styled from '@emotion/styled';
import { faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

const FooterContainer=styled.footer`
grid-area:footer;
box-shadow: 0 -5px 5px -5px #333;
ul{
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
}
`;

const Container=styled.div`
    max-width: 960px;
    width:100%;
    height:100%;
    margin: auto;
`;

const Footer=()=>{
    return(
        <>
        <FooterContainer>
            <Container>
              <ul>
                  <li><Link target="_blank" href="https://www.linkedin.com/in/juan-diego-falc%C3%B3n-c%C3%B3rdova-4699301a1/"><FontAwesomeIcon icon={faLinkedin} style={{width:'40px',color:'black'}}/></Link></li>
                  <li><Link target="_blank" href="https://github.com/juanfalconcodigo"><FontAwesomeIcon icon={faGithub} style={{width:'40px',color:'black'}}/></Link></li>
              </ul>
            </Container>   
        </FooterContainer>
        </>
    )
}

export default Footer;