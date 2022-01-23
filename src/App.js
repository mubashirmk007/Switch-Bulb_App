
import { useState } from 'react';
import './App.css';
import Switch from './Components/Switch';
import Header from './Components/Header';


function App() {
  const [value1,setvalue1]=useState('ON')
  const [value2,setvalue2]=useState('ON')
  return (
    <>
    <div>
    <Header/>
    </div>,
    <div className="App">
      
      <Switch bulbOn={value1} tottggle={()=>setvalue1(value1==='ON'?'OFF':'ON')}/>
      
      <Switch bulbOn={value2} tottggle={()=>setvalue2(value2==='ON'?'OFF':'ON')}/>
    </div>
    </>
  );
}

export default App;
