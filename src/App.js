import React,{useState} from 'react';
import './App.css';
import Button from './component/button';

function App() {

  const[buttonText, setButtonText] =useState
  ({
    one:'',
    two:'',
    three:'',
    four:'',
    five:'',
    six:'',
    seven:'',
    eight:'',
    nine:''
  });

  const[player, setPlayer] =useState("Player 1's turn to play");
  const[status, setStatus]=useState(false);
  const[holdlastvalue, setHoldLastValue]=useState('O');
  
  

  const handleButtonClick = (button) => {
    
    // if button is occupied/clicked
    if (status || buttonText[button] !== '') return;
    

    // if button is not clicked/occupied
    let obj;
    if (holdlastvalue === 'O') {
      obj = {...buttonText, [button]: 'X'};
      setButtonText(obj);
      setPlayer("Player 2's turn to play");
      setHoldLastValue('X');
    } else {
      obj={...buttonText,[button]:'O'};
      setButtonText(obj);
      setPlayer("Player 1's turn to play");
      setHoldLastValue('O');
    }
    
      
    ;
    checkGameStaus();
    //checkDraw();
  };

  const handleRestart=()=>{
    setButtonText({
      one:'',
      two:'',
      three:'',
      four:'',
      five:'',
      six:'',
      seven:'',
      eight:'',
      nine:''
    })
    setPlayer("Player 1's turn to play");
    setHoldLastValue('O');
    setStatus(false)
  }
  const check=(first, second, third)=>{
    if(buttonText[first] === "X" &&
     buttonText[second] === "X" && 
     buttonText[third] === "X"){
       
       return(
         setStatus(true),
         setPlayer('player 1 won the game'));
       
     } else if(buttonText[first] === "O" &&
     buttonText[second] === "O" && 
     buttonText[third] === "O"){
        
      return(setStatus(true),
      setPlayer('player 2 won the game'));
       }
  
  }
  const checkGameStaus=()=> {
    check('one', 'two', 'three');
    check('four', 'five', 'six');
    check('seven', 'eight', 'nine');
    check('one', 'four', 'seven');
    check('two', 'five', 'eight');
    check('three', 'six', 'nine');
    check('one', 'five', 'nine');
    check('three', 'five', 'seven');
}

// const checkDraw = (val) =>{
//   if(buttonText[value] === '') return;
//   setPlayer('Draw game');
// }
  


  return (
    <div className="App">
      <div className='heading'>
        <h1>Tic-Tac-Toe Game</h1>
      </div>
      <input value={player} type='text'/>
      <div className='row'>
      <Button onClick={()=>handleButtonClick('one')} classname='btn' buttonText={buttonText.one} />
      <Button onClick={()=>handleButtonClick('two')} classname='btn' buttonText={buttonText.two} />
      <Button onClick={()=>handleButtonClick('three')} classname='btn' buttonText={buttonText.three} />
      </div>
      <div className='row'>
      <Button onClick={()=>handleButtonClick('four')} classname='btn' buttonText={buttonText.four} />
      <Button onClick={()=>handleButtonClick('five')} classname='btn' buttonText={buttonText.five} />
      <Button onClick={()=>handleButtonClick('six')} classname='btn' buttonText={buttonText.six} />
      </div>
      <div className='row'>
      <Button onClick={()=>handleButtonClick('seven')} classname='btn' buttonText={buttonText.seven} />
      <Button onClick={()=>handleButtonClick('eight')} classname='btn' buttonText={buttonText.eight} />
      <Button onClick={()=>handleButtonClick('nine')} classname='btn' buttonText={buttonText.nine} />
      </div>
      <Button onClick={handleRestart} classname='restart-button' buttonText='Restart' />
    </div>
  );
}

export default App;
