import React from 'react'

function Hello( props){
    function clickhere(a) {
        alert(a);
        
    }
    return(
        <div>
                <button onClick={clickhere.bind(this, "I am the bind parameter")}> click here</button>

                <h1> Hello, {props.name} he is a {props.age} years old</h1>
        </div>

    )
    }

export default Hello;