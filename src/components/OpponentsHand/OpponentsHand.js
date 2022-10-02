import './OpponentsHand.css'
import unoCardBack from '../CenterPile/uno-card-back.png';

const OpponentsHand = () =>{
  return(
    <div id="opponents-hand">
      <img src={unoCardBack} alt="Card-Back" style={{
        width: '116px', height:'178p',     
        padding: '5px',
        }}/>
      <img src={unoCardBack} alt="Card-Back" style={{
        width: '116px', height:'178p',     
        padding: '5px',
        }}/>
      <img src={unoCardBack} alt="Card-Back" style={{
        width: '116px', height:'178p',     
        padding: '5px',
        }}/>
      <img src={unoCardBack} alt="Card-Back" style={{
        width: '116px', height:'178p',     
        padding: '5px',
        }}/>
      <img src={unoCardBack} alt="Card-Back" style={{
        width: '116px', height:'178p',     
        padding: '5px',
        }}/>
      <img src={unoCardBack} alt="Card-Back" style={{
        width: '116px', height:'178p',     
        padding: '5px',
        }}/>
      <img src={unoCardBack} alt="Card-Back" style={{
        width: '116px', height:'178p',     
        padding: '5px',
        }}/>
    </div>
  )
}

export default OpponentsHand;