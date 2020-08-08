import React from 'react';
import styled from '@emotion/styled';

const ButtonContainer=styled.button`
display:inline-block;
padding:1rem;
background-color:${({background})=>background||'black'};
border:none;
font-size:2rem;
a{
color:${({color})=>color||'white'};
}
`;

const Button=({color,background,children})=>{
    return(
        <>
        <ButtonContainer color={color} background={background}>
             {children}
        </ButtonContainer>
        </>
    )

}

export default Button;