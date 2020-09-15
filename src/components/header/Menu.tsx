import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const MenuDiv = styled.div`
    display: flex;
    width: 75vw;
    align-items: center;
`

const MenuItem = styled.div`
    color: #373737;
    font-size : 1.57rem;
    padding-left: 2.5rem;
    
`

const New = styled.div`
    font-weight: bold;
    color: white;
    font-size: 1rem;
    background-color: #1968fc;
    height:50%;
    border-radius: 10%;
    padding : 0.1rem;

`

function Menu () {
    return (
    <MenuDiv>
        <Logo/>
        <MenuItem>기능 소개</MenuItem>
        <MenuItem>요금 안내</MenuItem>
        <MenuItem>도입 문의</MenuItem>
        <New>New</New>
    </MenuDiv>
    ); 
}
export default Menu;