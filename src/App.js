import React from "react";
import Die from './Die'

export default function App(){
  
  const [dice, setDice] = React.useState(allNewDice())
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return newDice
    }
    
    function rollDice() {
        setDice(allNewDice())
    }
  const dieElement = dice.map(die => <Die value={die}/>)
  return(
    <main>
      <div className="dice-container">
          {dieElement}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
}