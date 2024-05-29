import logo from './logo.svg';
import './App.css';
import { MyFirtComponents } from './components/MyFirtComponents';
import { SecondComponent } from './SecondComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2> Hooks </h2>
        
        <div>
          <har />
          <MyFirtComponents />
          <SecondComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
