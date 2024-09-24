import React, { useState, useEffect } from 'react';
import {Layout} from '../components/layout';
import styled from '@emotion/styled';
import { animationFadeIn } from '../components/animation/';
import * as havilities from '../public/static/data/skills';
import Button from '../components/iu/Button';



const SkillContainer=styled.div`
max-width:960px;
width:100%;
margin:auto;
animation:${animationFadeIn} 1s ease-in-out;
p{
    font-size:2rem;
    @media(max-width:768px){
    font-size:1.8rem;
    } 
}
`;
const GridSkill=styled.ul`
margin-top:4rem;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
grid-gap:1rem;
@media (max-width:960px){
    grid-template-columns:1fr 1fr 1fr;
}
@media (max-width:480px){
    grid-template-columns:1fr 1fr;
}
li{
    overflow:hidden;
    /* este heihgt depende del container -gap /3 */
    max-height:313.3px;
    width:100%;
    height:100%;
    position:relative;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        transition:transform 1s ease-in-out;
    } 
    div{
        cursor: pointer;
        position:absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color:transparent;
        transition:background-color 1s ease-in-out;
        display:flex;
        justify-content:center;
        align-items:center;
        Button{
            transform:scale(0);
            transition:transform 1s ease-in-out;
        }
    } 
    &:hover div{
        background-color:rgba(0, 0, 0, .5);
    }
    &:hover div Button{
        transform:scale(1);
    }
    &:hover img{
        transform:scale(1.5) rotate(20deg);
    }
}
`;

const Skill=()=>{
    const [skills,setSkills]=useState([]);

    useEffect(()=>{
        setSkills([...havilities.default]);
    },[]);

    return(
        <Layout>
            <SkillContainer>
                   <h1>Mis conocimientos:</h1>
                   <p>
                       En esta sección doy a conocer mis conocimientos que actualmento poseo, la 
                       cual lo eh adquirido en mi formación académica.
                       Actualmente me sigo formando academicamente 🤵, reforzando el conocimiento adquirido y aprendiendo 
                       nuevas tecnologías en este tan cambiante y emocionante mundo de la tecnología 💻.
                   </p>
                   <p>!!!Por cierto tengo un aprecio especial por <a href="https://angular.io/" target="_blank">Angular 💓</a> .</p>

                   <GridSkill>
                       {skills.map((e,i)=>(
                           <li key={i}>
                               <img src={e.photo||'https://res.cloudinary.com/dbxg3ojl8/image/upload/v1577136832/no-image_xk7dvu.png'} alt="image skill"/>
                               <div>
                                    <Button color={'black'} background={'white'}>
                                         <a href={e.url} target="_blank">Ver info</a>
                                    </Button>
                               </div>
                           </li>
                       ))}
                   </GridSkill>

            </SkillContainer>
           
        </Layout>
    )
}

export default Skill;