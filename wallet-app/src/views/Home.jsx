import './Home.scss';
import Top from '../components/Top/Top';
import { Link } from 'react-router-dom';
import CardStack from '../components/Cardstack/Cardstack';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card/Card';







function Home() {

    
    const selected = useSelector((state) => { return state.selectedCard });
    return (
        <section className='main'>  
            <section className='main__header'>
                <Top title='E-WALLET' description='ACTIVE CARD' /> 
            </section>

            <section className='main__highlight'>
                {selected &&( 
                <div>
                     <Card
                        bgColor={selected.bgColor}
                        cardNumber={selected.cardNumber} 
                        cardholderName={selected.cardholderName} 
                        expirationDate={selected.expirationDate}
                        image={selected.image}
       
                     />  
                </div>
            )}
            </section>
            
            <section className='main__mid'>
                <CardStack/>
            </section>

            <section className='main__bottom'>
                
                <Link to='/addcard'>
                    <button className='main__bottom__button' >Add new card</button>
                </Link>
            </section>
        </section>
    );
}

export default Home;