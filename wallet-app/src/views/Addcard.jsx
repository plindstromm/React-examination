import './Addcard.scss'
import Top from '../components/Top/Top'
import Cardform from '../components/Cardform/Cardform';


function AddCard() {

   

    return(
        <section className='add'>
                 <Top title="ADD A NEW BANK CARD" description="NEW CARD"/>
            
            <section className='add__form'>
                
                <Cardform/>
            </section>
        </section>

       
    )
}

export default AddCard;