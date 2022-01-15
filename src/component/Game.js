import React,{useState,useEffect} from 'react';
import './App.css';
import Button from './component/button';

const Game = () => {

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
  const[holdlastvalue, setHoldLastValue]=useState('O');
  const[disable, SetDisable] = useState(false);
  
  

  const handleButtonClick = (button) => {
    // if button is occupied/clicked
    if (buttonText[button] !== '') return;
    
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
    };
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
    SetDisable(false);
  }
  const check=(first, second, third)=>{
    if(buttonText[first] === "X" &&
     buttonText[second] === "X" && 
     buttonText[third] === "X"){
         setPlayer('player 1 won the game');
     } else if(buttonText[first] === "O" &&
     buttonText[second] === "O" && 
     buttonText[third] === "O"){
          setPlayer('player 2 won the game');
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
useEffect(() => {
  checkGameStaus();
//   checkDraw();
  if(player === 'player 1 won the game' || player === 'player 2 won the game'){
    SetDisable(true);
  }
},[player,buttonText,disable]);

const checkDraw = () =>{
  if(buttonText === '') return;
      else{
      setPlayer('Draw game!');
      }
};
  


  return (
    <div className="App">
      <div className='heading'>
        <h1>Tic-Tac-Toe Game</h1>
      </div>
      <input value={player} type='text'/>
      <div className='row'>
      <Button disabled={disable} onClick={()=>handleButtonClick('one')} classname='btn' buttonText={buttonText.one} />
      <Button disabled={disable} onClick={()=>handleButtonClick('two')} classname='btn' buttonText={buttonText.two} />
      <Button disabled={disable} onClick={()=>handleButtonClick('three')} classname='btn' buttonText={buttonText.three} />
      </div>
      <div className='row'>
      <Button disabled={disable} onClick={()=>handleButtonClick('four')} classname='btn' buttonText={buttonText.four} />
      <Button disabled={disable} onClick={()=>handleButtonClick('five')} classname='btn' buttonText={buttonText.five} />
      <Button disabled={disable} onClick={()=>handleButtonClick('six')} classname='btn' buttonText={buttonText.six} />
      </div>
      <div className='row'>
      <Button disabled={disable} onClick={()=>handleButtonClick('seven')} classname='btn' buttonText={buttonText.seven} />
      <Button disabled={disable} onClick={()=>handleButtonClick('eight')} classname='btn' buttonText={buttonText.eight} />
      <Button disabled={disable} onClick={()=>handleButtonClick('nine')} classname='btn' buttonText={buttonText.nine} />
      </div>
      <Button onClick={handleRestart} classname='restart-button' buttonText='Restart' />
    </div>
  );
}

export default Game;
