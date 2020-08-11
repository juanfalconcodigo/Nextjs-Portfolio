import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const HeaderContainer=styled.header`
grid-area:header;
box-shadow: 0 5px 5px -5px #333;
div{
    max-width:960px;
    width:100%;
    height:100%;
    margin:auto;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    @media(max-width:768px){
        padding-left:1rem;
    }
}
p{
    font-size:3rem;
    font-weight:bold;
    margin:0;
    a{
        color:black;
        cursor: pointer;
        font-family:'Montserrat', sans-serif;
    }
}
`;

const Header=()=>{
    return (
        <>
        <HeaderContainer>
          <div itemscope itemtype="https://schema.org/Person">
             <p itemProp="author"><Link href="/"><a>&lt;Juan Falcón/&gt;</a></Link></p>
          </div> 
        </HeaderContainer>
        </>
    )
}

export default Header;