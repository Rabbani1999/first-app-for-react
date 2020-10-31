import React, {Component, component} from 'react'

class Condition1 extends Component{
    constructor(){
        super();

        this.state= {
            login : false
        };
    }

    render(){
        if(this.state.login==true){
            return(<button>LogOut Button</button>);
        }
        else{
            return(<button>LogIn Here</button>);
        }


    }
}

export default Condition1;