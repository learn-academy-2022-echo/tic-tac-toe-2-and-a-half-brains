import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(1)
  const [counter, setCounter] = useState(0)

  const winCondition = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[2,4,6],[0,4,8]]



  const handleGamePlay = (index) => {  
    let newArray = [...squares]
    if(player === 1) {
      newArray[index] = "X"
      setSquares(newArray)
      setPlayer(2) 
    } else if (newArray[index] === "X") {
      alert("You already clicked that one")
      } else if (player === 2) {
        let newArray = [...squares]
        newArray[index] = "O"
        setSquares(newArray)
        setPlayer(1)
    } else if (newArray[index] === "O") {
      alert("You already clicked that one")
  }
  }


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="boardgame">
    {squares.map((value, index) => { 
      return (<Square index={index} handleGamePlay={handleGamePlay} value = {value} /> )
    })}
      
    </div>
    </>
  )
}

export default App