import React,{Component, component} from 'react'
 
class Welcome extends Component{

 componentButton(a) {
    alert(a);
}


    render(){
          return <div>
        <button onClick={this.componentButton.bind(this, "I am a bind parameter")}> Click here component Button</button>
         <h2> this is the class component for {this.props.class}</h2>
    </div>;
    
    }
}

export default Welcome;