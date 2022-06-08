
import './App.css';
import Navbar from "./components/Navbar"

import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
          <Navbar/>
          <div className="container-body d-flex ">
          <Sidebar/>
          <Dashboard/>
          </div>
          
    </>
  );
}

export default App;
