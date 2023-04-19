import './Card.scss';
import bitcoin from '../../assets/vendor-bitcoin.svg';
import chipdark from '../../assets/chip-dark.svg';


function Card({ cardNumber, cardholderName, bgColor, image, expirationDate }) {
  const formattedCardNumber = cardNumber.replace(/(.{4})/g, '$1 ');



  

  return (
    <section className={`card`} style={{ backgroundColor: bgColor || ''}}>
      <aside className='card__upper'>
        <img className='card__upper__left' src={chipdark} alt="" />
        <img className='card__upper__right' src={image || bitcoin} alt="" />
      </aside>

      <aside className='card__mid'>
        <p className='card__mid__number'>{formattedCardNumber || 'XXXX XXXX XXXX XXXX'}</p>
      </aside>

      <aside className='card__lower'>
        <article className='card__lower__name'>
          <p>CARDHOLDER NAME</p>
          <p>{cardholderName || 'FIRSTNAME LASTNAME'}</p>
        </article>
        <article className='card__lower__valid'>
          <p>VALID THRU</p>
          <p>{expirationDate || 'MM/YY'}</p>
        </article>
      </aside>
    </section>
  )
}

export default Card;