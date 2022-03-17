import React from 'react'


let greeting1 = {
color : "red"
};
let greeting = ()=>{
  
  let Today = new Date(); 
  if((Today.getHours()<12)&&(Today.getHours()>0)){
    greeting1.color = "blue";
    return "Morning";
  }
  else if((Today.getHours()>=12)&&(Today.getHours()<19))  {
    greeting1.color = "orange";
    return "Afternoon";}
  else{
    greeting1.color = "green";
    return "Night";
  }
}

export default function Thapa2() {
  return (
  <>
  <div className="thapa2">
  <span>Hello sir, <span style={greeting1}>Good {greeting()}!!</span></span>
  </div>
  </>
  )
}
