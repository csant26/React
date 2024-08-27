import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Outlet/>
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