import React from 'react';
import styled from 'styled-components';
import BlueButton from '../BlueButton';
import WhiteButton from '../WhiteButton';

const SignDiv = styled.div`
    display: flex;
    width: 30rem;
    justify-content:space-around;
`

function Sign () {
    return (
        <SignDiv>
        <WhiteButton>로그인</WhiteButton>
        <BlueButton type="primary">회원가입</BlueButton>
        </SignDiv>
    ); 
}
export default Sign;

