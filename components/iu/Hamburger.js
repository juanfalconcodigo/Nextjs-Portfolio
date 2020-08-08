import React, { Fragment,useState,useEffect } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import styled from '@emotion/styled';


const HamburgerContainer = styled.div `
background-color:white;
border-radius:50%;
`


export {
    HamburgerContainer
}

const HamburgerComponent = ({show,handleChangeShow}) => {
    const [isOpen, setOpen] = useState(false);
    //toggled valor inicial y del icono
    //toggle es que hace el cambio
    const handleHamburgerChangeShow=()=>{
        setOpen(!isOpen);
        handleChangeShow(!show);
    }
    useEffect(() => {
        setOpen(show);
        return () => {
            
        }
    }, [show]);
    return(
        <Fragment>
            <HamburgerContainer>
               <Hamburger rounded  size={30} toggled={isOpen} toggle={handleHamburgerChangeShow} color='black'/>
            </HamburgerContainer>
        </Fragment>
    )

}

export default HamburgerComponent;