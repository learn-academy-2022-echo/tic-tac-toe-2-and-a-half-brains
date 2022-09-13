import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

// const ticTacToe = new URL("../images/tictactoe.jpeg",import.meta.url)



const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(1)
  const [counter, setCounter] = useState(0)
  
  let newSquares = [...squares] 

  const gameTicTacToe = (index) => {

    
    if (calculateWinner(squares) === "🍭") {
      alert("🍭 SWEET, Player 1 is the winner! 🍭")
      return
    } else if (calculateWinner(squares) === "🍩") {
      alert("🍩 You're the jam! Player 2 has won! 🍩")
      return
    }

    
    if(counter === squares.length) {
      alert("GAME OVER!")
    }

      
      if (player === 1) {
        if (newSquares[index] === "🍭") {
          alert("You have already marked this square!")
        } else if (newSquares[index] === "🍩") {
          alert(`Player ${player + 1} already marked this square!`)
        } else {
          newSquares[index] = "🍭"
          setSquares(newSquares)
          setCounter(counter + 1)
          setPlayer(2)
        }
      }
     
      if (player === 2) {
        if (newSquares[index] === "🍩") {
          alert("You have already marked this square")
        } else if (newSquares[index] === "X") {
          alert(`Player ${player - 1} already marked this square`)
        } else {
          newSquares[index] = "🍩"
          setSquares(newSquares)
          setCounter(counter+1)
          setPlayer(1)
        }
      }

  }
    
  function calculateWinner(squares) {
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
    
    const handleReset = () => {
      setPlayer(1)
      setCounter(0)
      setSquares(squares.fill(null))
    }


  return (
    <>
    {/* <div className="tictactoe">
      <img src={ticTacToe}/>
    </div> */}
      <h1>Tic Tac Toe</h1>
        <h2>Player: {player}</h2>
      <div className="gameboard">
      {squares.map((value, index) => {
        return (
          <Square gameTicTacToe={gameTicTacToe} value={value} index={index}/>
        )
      })}
      </div>
    <div className="button">
    <button onClick ={handleReset}>Reset</button> 
    </div>
    </>

  )
}


export default App