import React from 'react';
import Menu from './Menu';
import Sign from './Sign';
import styled from 'styled-components';



const Headerstyle = styled.section`

  display: flex;
  align-items : flex-end;
  padding: 1rem; 
  height : 7rem;
  position:sticky; top:0; right:0;
  background-color: rgb(255,255,255,0.9);
`;

function Header(){
    return(
        <Headerstyle>
          <Menu/>
          <Sign/>
        </Headerstyle>
    );

}
export default Header;
