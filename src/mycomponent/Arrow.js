 import React from 'react'


//  function Arrow(){
//      return(
//          <button>My button</button>
//      );
//  }

const AlertMe=(a)=>{
    alert(a);
}

 const Arrow =()=>{
     return(
         <button onClick={AlertMe.bind(this,"I am Arrow function")}>My button</button>
     );
 }

 export default Arrow;