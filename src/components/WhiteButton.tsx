import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';


const WhiteButton = styled(Button)`
    border : 1px solid #1968fc;
    color : #1968fc;
    font-weight:bold;
    width : 40%;

    height:90%;

`
/*function WhiteButton ({children, width, height}){
    return(
        <WhiteButtonStyle width={width} height={height}/>
    )
}

*/



export default WhiteButton