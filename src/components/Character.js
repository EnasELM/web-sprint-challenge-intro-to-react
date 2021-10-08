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
   display:flex;
   justify-content:space-between;
   align-items:center;
}
span{
    background:gray;
    color:black;
    border:2px solid;
    padding:1em 2em;
    font-size:1em;
    letter-spacing:3px;
    border-radius: 10px;
}
` 
return (
    < StyledDetails >
     
    
    <div>
        <span>
        {dataDisplay.name}
        </span>
        <span>
        {dataDisplay.birth_year}
        </span>
    </div>
    </StyledDetails>
  );
}
export default Character;

