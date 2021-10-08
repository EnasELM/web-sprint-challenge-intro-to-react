// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import '../App.css';
function Character(props){
const {dataDisplay}=props;


const StyledDetails  = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

}


div{
   background-color:pink;
   border:1px gray solid;
   margin:1%;
   padding:2%;
   letter-spacing:3px;
   text-align: center;
   border-radius: 10px;
   width:90%;
}
` 
return (
    < StyledDetails >
     
    
    <div>{dataDisplay.name}</div>
    
    
 

    </StyledDetails>
  );
}
export default Character;

