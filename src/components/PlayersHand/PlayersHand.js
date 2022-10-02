import UnoCard from "../NewHand/UnoCard";
import './PlayersHand.css'

const PlayersHand = (props) =>{
  return(
    <div id="players-hand">
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