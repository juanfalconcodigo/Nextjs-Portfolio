import React from 'react';
import styled from '@emotion/styled';

const ButtonContainer=styled.button`
display:inline-block;
padding:1rem;
background-color:black;
border:none;
font-size:2rem;
a{
    color:white;
}
`;

const Button=(props)=>{
    return(
        <>
        <ButtonContainer>
             {props.children}
        </ButtonContainer>
        </>
    )

}

export default Button;