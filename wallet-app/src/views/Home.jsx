import './Home.scss';
import Top from '../components/Top/Top';
import { Link } from 'react-router-dom';
import CardStack from '../components/Cardstack/Cardstack';


function Home() {


    return (
        <section className='main'>  
            <section className='main__header'>
                <Top title='E-WALLET' description='ACTIVE CARD' /> 
            </section>
            
            <section className='main__mid'>
                
            </section>

            <section className='main__bottom'>
                
                <Link to='/addcard'>
                    <button >Add new card</button>
                </Link>
            </section>
        </section>
    );
}

export default Home;