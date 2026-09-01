// src/App.jsx

import './App.css';
import { useState } from 'react'; 

const App = () => {

  const [person, setPerson] = useState({
  fisrtName: 'John',
  lastName: 'Doe',
  hasPets: true,
  age: 20,  
});

  const [isDarkMode, setIsDarkMode] = useState(false);

const [mode, setMode] = useState('light');

const handleDarkMode = ()=>{
  console.log('Dark mode toggled');
  setIsDarkMode(true);
};


const handleLightMode = ()=>{
  console.log('Light mode toggled');
  setIsDarkMode(false);
};


const handleMode = (modeValue)=> {
  console.log(modeValue);
  setMode(modeValue);
};



console.log(person);

  return (
    <>
    <div className={mode}>
      <h1>Hello world!</h1>
      </div>


       <div>
        <button onClick= {handleDarkMode}>Dark Mode</button>
        <button onClick= {handleLightMode}>Light Mode</button>
      </div> 

        <div>
          <button onClick={()=> handleMode('dark')}>Dark Mode</button>
          <button onClick={()=> handleMode('light')}>Light Mode</button>
        </div>

      <div>
    <h1>Hello,my name is {person.firstName} {person.lastName} , 
    Iam {person.age} years old, and i have {person.hasPets ? 'pets' : 'no pets'}</h1>
    </div>
  </>
  );
};



export default App; 