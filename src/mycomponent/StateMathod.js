import React, {Component, component} from 'react'

class StateMathod extends Component{

    constructor(){
        super()

        var address = {
          name: "Md arif rabbani",
          Age: ["20", "30", "23", "45"],
          Height: "5feet 6 inch",
          Weight: {
            class7: ["20", "30", "23", "45"],
            class9: "34",
          },
        };
        this.state= address
    }


    render(){
        return (
          <div>
            <h1> My name is {this.state.name}</h1>
            <h1> I am {this.state.Age[2]} year old</h1>
            <h1> and {this.state.Height}</h1>
            <h1> my weight {this.state.Weight.class7[2]}</h1>
          </div>
        );
    
    }
}

export default StateMathod;