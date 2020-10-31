import React, {Component, component}  from 'react'

class ElementCondition extends Component{
    constructor(){
        super();
        this.state= {
            login : false
        };
    }

    render(){

        return(
            this.state.login?(<h1>this condition is true</h1>):(<h1>this condition is false</h1>)
        );
    }
    }


export default ElementCondition;
