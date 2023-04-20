import './Cardstack.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

function CardStack(){

    

    
const cards = useSelector((state) => { return state.cards });
const cardComponent = cards.map((item) =>{ 
    return (
      <Card
        bgColor={item.bgColor}
        cardNumber={item.cardNumber} 
        cardholderName={item.cardholderName} 
        expirationDate={item.expirationDate}
        image={item.image}
        key={item.cardNumber}
      />   
    )
  });
    return(

        <section className='cardstack'>
           {cardComponent}
          
           
        </section>
    )
}


export default CardStack;