import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import data from '../../public/static/data/data';
import Link from 'next/link';
import Button from './Button';


const SliderContainer=styled.div`
width:${({width})=>width||'100%'};
height:${({height})=>height||'auto'};
ul{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:1rem;
    @media(max-width:960px){
        grid-template-columns:1fr;
    }
}
@media(max-width:960px){
    min-width:200px;
}
`;

const ItemList=styled.li`
position: relative;
img{
    vertical-align:top;
}
div{
  cursor: pointer;
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  transition: background-color 1s ease-in-out;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  & Button{
      transform:scale(0,0);
      transition: transform 1s ease-in-out;
  }
}
&:hover div{
    background-color:rgba(0, 0, 0, .5);
}
&:hover div Button{
    transform:scale(1,1);
} 
`;

const Slider=()=>{
    const [proyects,setProyects]=useState([]);

    useEffect(()=>{
        setProyects([...data])
    },[])
    

    return(
        <>
        <SliderContainer>
            <ul>
                {proyects&&proyects.map((e,i)=>(
                    <ItemList key={i}>
                        <img src={e.photo} alt="Image"/>
                        <div>
                                <Button color={'black'} background={'white'}>
                                   <a href={e.demo} target="_blank">Demo</a>
                                </Button>
                                <Button>
                                   <a href={e.github} target="_blank">Github</a>
                                </Button>
                        </div>
                    </ItemList>
                ))}
            </ul>
        </SliderContainer>
        </>
    )

}

export default Slider;