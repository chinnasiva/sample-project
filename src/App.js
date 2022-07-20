import logo from './logo.svg';
import './App.css';
import SimpleClassComp from './Components/SimpleClassComp';

import SimpleFunctionComp from "./Components/SimpleFunctionComp";
function App() {
  return (
    <div className="App">
      <SimpleClassComp title="This is a prop Function"/>
      <SimpleFunctionComp/>
    </div>
  );
}

export default App;
