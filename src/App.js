import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [ticTac, setTicTac] = useState(["x","o"].push(squares))

  const winCondition = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[2,4,6],[0,4,8]]

  const handleGamePlay = (index) => {
    alert(index)
  }


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="boardgame">
    {squares.map((index) => { 
      return (<Square index={index} handleGamePlay={handleGamePlay} /> )
    })}
      
    </div>
    </>
  )
}

export default App