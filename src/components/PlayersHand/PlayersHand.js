import React, { useState } from "react";
import UnoCard from "../NewHand/UnoCard";
import './PlayersHand.css'

const PlayersHand = (props) =>{
  const [card1, setCard1] = useState({color: props.colorRandomizer(), number: props.numberRandomizer()})
  const [card2, setCard2] = useState({color: props.colorRandomizer(), number: props.numberRandomizer()})
  const [card3, setCard3] = useState({color: props.colorRandomizer(), number: props.numberRandomizer()})
  const [card4, setCard4] = useState({color: props.colorRandomizer(), number: props.numberRandomizer()})
  const [card5, setCard5] = useState({color: props.colorRandomizer(), number: props.numberRandomizer()})
  const [card6, setCard6] = useState({color: props.colorRandomizer(), number: props.numberRandomizer()})
  const [card7, setCard7] = useState({color: props.colorRandomizer(), number: props.numberRandomizer()})




  const clickEventHandler = (e) =>{
  console.log(e.target)
  }

  return(
    <div id="players-hand" onClick={clickEventHandler}>
      <UnoCard color={card1.color} number={card1.number}/>
      <UnoCard color={card2.color} number={card2.number}/>
      <UnoCard color={card3.color} number={card3.number}/>
      <UnoCard color={card4.color} number={card4.number}/>
      <UnoCard color={card5.color} number={card5.number}/>
      <UnoCard color={card6.color} number={card6.number}/>
      <UnoCard color={card7.color} number={card7.number}/>
    
    </div>
  )
}

export default PlayersHand;