import logo from './logo.svg';
import './App.css';
import Hello from './mycomponent/Hello'
import Welcome from './mycomponent/Welcome'
// import bootstrapTest from './mycomponent/bootstrapTest'

import Arrow from './mycomponent/Arrow'
import StateMathod from './mycomponent/StateMathod'
import SetState from "./mycomponent/SetState";
import Condition1 from "./mycomponent/Conditon1";
import ElementCondition from "./mycomponent/ElementConditon";
import Refresh from "./mycomponent/Refresh";

function App() {
  return (
    <div className="App">
      <Hello name=" Arif" age="20"></Hello>

      <Welcome class= "class-1"></Welcome>

      <Arrow></Arrow>
      <StateMathod></StateMathod>
      <SetState></SetState>
      <Condition1></Condition1>
      <ElementCondition></ElementCondition>
      <Refresh></Refresh>

      {/* <bootstrapTest></bootstrapTest> */}
      {/*  */}

    </div>
  );
}

export default App;
