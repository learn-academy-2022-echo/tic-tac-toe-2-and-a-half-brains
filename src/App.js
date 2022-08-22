import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(1)
  const [counter, setCounter] = useState(0)






  
  
  const handleGamePlay = (index) => {  
    let newArray = [...squares]
  if (newArray[index] === "X" || newArray[index] === "O") 
  alert("You already clicked that one") 
  else if(player === 1) {
      newArray[index] = "X"
      setSquares(newArray)
      setPlayer(2) 
      } else if (player === 2) {
        let newArray = [...squares]
        newArray[index] = "O"
        setSquares(newArray)
        setPlayer(1)
    } 
  }


  const calculateWinner = (newArray) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (newArray[a] && newArray[a] === newArray[b] && newArray[a] === newArray[c]) {
        return newArray[a];
      }
    }
    alert("you have won!");
  }

  return (
    <>
    <div className="background"> 
      <h1>Tic Tac Toe</h1>
      <div className="boardgame">git 
    {squares.map((value, index) => { 
      return (<Square index={index} handleGamePlay={handleGamePlay} value = {value} calculateWinner={calculateWinner}/> )
    })}
      
    </div>
    </div>
    </>
  )
}

export default App