import React from 'react';
import './App.css';
import Timer from './Timer'
import NavComponent from './NavComponent'
import Clock from './Clock'


function App() {
  return (
    <div className="App">
      
      <NavComponent/>
    
      <Clock/>
      {/* <Timer /> */}
    </div>
  );
}

export default App;
