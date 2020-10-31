import logo from './logo.svg';
import './App.css';
import Hello from './mycomponent/Hello'
import Welcome from './mycomponent/Welcome'
// import bootstrapTest from './mycomponent/bootstrapTest'

import Arrow from './mycomponent/Arrow'
import StateMathod from './mycomponent/StateMathod'

function App() {
  return (
    <div className="App">
      <Hello name=" Arif" age="20"></Hello>

      <Welcome class= "class-1"></Welcome>

      <Arrow></Arrow>
      <StateMathod></StateMathod>

      {/* <bootstrapTest></bootstrapTest> */}
      {/*  */}

    </div>
  );
}

export default App;
