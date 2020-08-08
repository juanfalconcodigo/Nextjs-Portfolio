import React from 'react';
import Link from 'next/link';
import {Layout} from '../components/layout';
import { Slider } from '../components/iu';
import styled from '@emotion/styled';

const PortfolioContainer=styled.div`
max-width:960px;
width:100%;
margin:auto;
h3{
  font-size:2.5rem;
  font-family: 'Montserrat',sans-serif;
}
p{
  font-size:2rem;
  a {
     color:black;
  }
}
`;

const Portfolio=()=>{
    return(
        <Layout>
          <PortfolioContainer>
              <h3>Proyectos desarrollados:</h3>
              <p>
                Que bueno que estas en esta sección ,te muestro algunos de los proyectos que eh desarollado
                a lo largo de mi etapa de estudiante y como de autodidacta ,ya sea con documentacion oficial 
                o con cursos en línea para complementar mi formación académica.
                <br/>
                <br/>
                Los proyectos presentados los eh desarrollado con las tecnologias mencionadas en mis
                <span><Link href="/skill"><a> <u><i>skills</i></u></a></Link></span> .
              </p>
              <Slider/>
          </PortfolioContainer>
        </Layout>
    )
}

export default Portfolio;