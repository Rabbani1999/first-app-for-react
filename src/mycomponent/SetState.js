

import React, {Component, component} from 'react'

class SetState extends Component {
  constructor() {
    super();
    this.state = {
      name: "Rupon",
    };
  }

changeName(a){
    this.setState({name:a})

}
  render() {
    return (
      <div>
        <h1>{this.state.name} </h1>
        <button  onClick={this.changeName.bind(this,"Rain")}>Change Name</button>
      </div>
    );
  }
}

   
export default SetState;

