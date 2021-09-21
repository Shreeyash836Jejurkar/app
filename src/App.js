import './App.css';
import './Components/Data';
import { Data } from './Components/Data';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>ReadJSON</h1>
       <button className="Signin-button">SignIn</button>
      </header>

      <Data /> 

    </div>
  );
}

export default App;
