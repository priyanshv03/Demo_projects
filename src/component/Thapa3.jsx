//calculator

import React from 'react'

let sum =(a,b)=>{
return a+b;
}
let diff =(a,b)=>{
    return a-b;
    }
let prod =(a,b)=>{
        return a*b;
        }
let divs =(a,b)=>{
            return a/b;
            }


export default function Thapa3() {
  return (
   <>
   <ul>
       <li>Sum of two num: {sum(2,3)}</li>
       <li>Diff. of two num:{diff(5,6)}</li>
       <li>Product of two num: {prod(8,2)}</li>
       <li>Division of two num:  {divs(8,2)}</li>
   </ul>
   </>
  )
}
