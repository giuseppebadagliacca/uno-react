import './UnoCard.css';

const UnoCard = (props) =>{
  
const classNameVar = `card num-${props.number} ${props.color}`

  return (
    <div className={classNameVar}>
    <span className="inner">
      <span className="mark">{props.number}</span>
    </span>
  </div>
  )

}

export default UnoCard;