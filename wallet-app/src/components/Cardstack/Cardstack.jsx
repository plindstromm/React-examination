import './Cardstack.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';





function CardStack(){

    const cards = useSelector((state) => { return state.cards });

    console.log(cards)

    const cardComponent = cards.map((item) =>{  
        <Card
            key={item.cardNumber} 
            cardholderName={item.cardholderName} 
            bgColor={item.bgColor}
            image={item.image}
            expirationDate={item.expirationDate}
        />   
        
        
}); 



    return(

        <section className='cardstack'>
           {cardComponent}
        </section>
    )
}


export default CardStack;