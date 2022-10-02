import UnoCard from "../NewHand/UnoCard";
import unoCardBack from './uno-card-back.png';

const CenterPile = (props) =>{
  return (
    <div>
      <UnoCard color={props.colorRandomizer()} number={props.numberRandomizer()}/>
      <img src={unoCardBack} alt="Card-Back" style={{
        width: '116px', height:'178p',     
        padding: '5px',
        }}/>
    </div>
  )
}

export default CenterPile;