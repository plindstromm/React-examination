import './Cardstack.scss';
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { selectedCard } from '../../actions/cardaction';




function CardStack(){

  const dispatch = useDispatch();
    
  function handleCardClick(cardNumber) {
    dispatch(selectedCard(cardNumber));
  }
    
const cards = useSelector((state) => { return state.cards });
const cardComponent = cards.map((item) =>{ 
    return (
      <div onClick={() => handleCardClick(item.cardNumber)} key={item.cardNumber}>
      <Card
        bgColor={item.bgColor}
        cardNumber={item.cardNumber} 
        cardholderName={item.cardholderName} 
        expirationDate={item.expirationDate}
        image={item.image}
        key={item.cardNumber}
      />   
    </div>  
    )
  });
    return(

        <section className='cardstack'>
          {cardComponent}
        </section>
    )
}


export default CardStack;