import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const clickSquare = (index) => {
    alert(index)
  }



  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="boardgame">
    {squares.map((value, index) => { 
      return (<Square value={value} index={index} clickSquares={clickSquare}/> )
    })}
      
    </div>
    </>
  )
}

export default App