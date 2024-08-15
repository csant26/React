import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Title/>
      <Navbar title={"csant"}/>
    </div>
  );
}
export function Title(){
  return (
    <>
      <h1>TITLE</h1>
    </>
  );
}

export default App;