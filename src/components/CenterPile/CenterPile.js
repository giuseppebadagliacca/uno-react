import UnoCard from "../NewHand/UnoCard";
import unoCardBack from './uno-card-back.png';

const CenterPile = (props) =>{
  const centerPileClickHandler = () =>{
    props.addCardToHand({color: props.colorRandomizer(), number: props.numberRandomizer()})
  }
  return (
    <div>
      <UnoCard color={props.colorRandomizer()} number={props.numberRandomizer()}/>
      <img onClick={centerPileClickHandler}src={unoCardBack} alt="Card-Back" style={{
        width: '116px', height:'178p',     
        padding: '5px',
        }}/>
    </div>
  )
}

export default CenterPile;