import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Hello from './components/Hello'
import Todos from './components/Todos'

function App() {
  return (
    <div className="App">
      {/* <Greet name = "Bruce" heroName="Batman">
        <p>This is Children Props</p>
      </Greet>
      <Greet name = "Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name = "Diana" heroName="Wonder Woman"></Greet>
      <Welcome name= "Bruce" heroName="Batman"></Welcome>
      <Welcome name= "Clark" heroName="Superman"></Welcome>
      <Welcome name= "Diana" heroName="Batman"></Welcome> */}

      <Todos/>
      
      {/* <Welcome/> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
