import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const NavbarContainer = styled.div`
position:fixed;
width:100%;
min-height:100%;
height:100%;
transform:${({ show }) => show ? "translate(-100%,0)" : "translate(0,0)"};
transition:transform 1s ease-in-out;
background-color:rgba(34,34,34,0.85);
z-index:998;
nav{
    width:100%;
    height:100%;
    background:black;
    width:300px;
    overflow-y:auto;
    @media(max-width:768px){
    width:220px;
}
}
nav > ul{
    width:100%;
    height:100%;
    display:grid;
    grid-template-areas:'photo' 'link' 'info';
    grid-template-rows:300px 180px auto;
}
`;
const Photo = styled.li`
grid-area:photo;
justify-self: stretch;
align-self: stretch;
overflow:hidden;
img{
    width:100%;
    height:100%;
    object-fit:cover;
    transition:transform 1s ease-in-out;
}
&:hover img{
    transform:scale(1.1);
}
`;

const LinkPages = styled.li`
grid-area:link;
padding:2rem;
font-family: 'Montserrat', sans-serif;
a{
    font-size:1.6rem;
    font-weight:700;
    color:white;
}
`
const Information = styled.li`
grid-area:info;
padding:2rem;
color:white;
font-size:1.8rem;
font-weight:700;
`

const Navbar = ({ show }) => {

    return (
        <>
            <NavbarContainer show={show}>
                <nav>
                    <ul>
                        <Photo>
                            <img src="https://iddigitalschool.com/bootcamps/wp-content/uploads/2023/07/cabecera-blog-3.png" alt="Photo" />
                        </Photo>
                        <LinkPages>
                            <ul>
                                <li><Link href="/">About</Link> </li>
                                <li><Link href="/skill">Skills</Link> </li>
                                <li><Link href="/portfolio">Portfolio</Link> </li>
                                <li><Link href="/contact">Contact</Link> </li>
                            </ul>
                        </LinkPages>
                        <Information>
                            <p>+51 967 933 167</p>
                            <p>&copy;Juan Falcón</p>
                        </Information>

                    </ul>
                </nav>
            </NavbarContainer>
        </>
    )

}

export default Navbar;
