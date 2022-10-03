import UnoCard from "../NewHand/UnoCard";
import './PlayersHand.css'

const PlayersHand = (props) =>{
  const clickEventHandler = (e) =>{
    console.log(e)
  }
  return(
    <div id="players-hand" onClick={clickEventHandler}>
      <UnoCard color={props.colorRandomizer()} number={props.numberRandomizer()}/>
      <UnoCard color={props.colorRandomizer()} number={props.numberRandomizer()}/>
      <UnoCard color={props.colorRandomizer()} number={props.numberRandomizer()}/>
      <UnoCard color={props.colorRandomizer()} number={props.numberRandomizer()}/>
      <UnoCard color={props.colorRandomizer()} number={props.numberRandomizer()}/>
      <UnoCard color={props.colorRandomizer()} number={props.numberRandomizer()}/>
      <UnoCard color={props.colorRandomizer()} number={props.numberRandomizer()}/>
    </div>
  )
}

export default PlayersHand;