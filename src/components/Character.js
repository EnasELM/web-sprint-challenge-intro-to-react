// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import '../App.css';
function Character(props){
const {dataDisplay}=props;
console.log('dataDisplaynameeeeeeeeeeeeeeeeeeeeeee');
console.log(dataDisplay.name);

return (
    <div >
      <div></div>
    {/*  data.map(da => { return <Character data={da}  key={da.id}/>})*/ }
    <div>{dataDisplay.name}</div>
    
    
 

    </div>
  );
}
export default Character;

