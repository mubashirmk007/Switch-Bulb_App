import React, { useState } from 'react';
import './Switch.css'

const Switch = ({bulbOn,tottggle}) => {
    
    var [color, setcolor] = useState('gray');
  
    console.log(bulbOn);
   var buttonclick=()=>{
    bulbOn==='ON'?setcolor("orange"):setcolor("grey");
    tottggle()
   }
    return (
     <nav>
       <h3>Bulb-Switch-App</h3>
     </nav>,
        <div className='container'>
            <div className="bulbs">
                <button style={{background:color}}> </button> 
              
            </div>
            <div className="switches">
                <button onClick={buttonclick}  >{bulbOn} </button>
                
            </div>
            
        </div>
    );
};

export default Switch;