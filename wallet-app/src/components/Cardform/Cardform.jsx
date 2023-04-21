import './Cardform.scss';
import Card from '../Card/Card';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import ninjabank from '../../assets/vendor-ninja.svg';
import blockchain from '../../assets/vendor-blockchain.svg';
import evilcorp from '../../assets/vendor-evil.svg';
import bitcoin from '../../assets/vendor-bitcoin.svg';
import { addCard } from '../../actions/cardaction';

const options = [
  {
    value: 'BITCOIN INC',
    label: 'Bitcoin Inc',
    image: bitcoin,
    color: '#FFAE34',
  },
  {
    value: 'NINJA BANK',
    label: 'Ninja Bank',
    image: ninjabank,
    color: '#808080',
  },
  {
    value: 'BLOCK CHAIN',
    label: 'Block Chain',
    image: blockchain,
    color: '#8B58F9',
  },
  {
    value: 'EVIL CORP',
    label: 'Evil Corp',
    image: evilcorp,
    color: '#F33355',
  },
];

function Cardform() {

  const dispatch = useDispatch();

  const [cardNumber, setCardNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [expirationDate, setExpirationDate] = useState('');
  

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const getOptionLabel = (option) => (
    <div>
      <span>{option.label}</span>
      <img src={option.image} alt={option.label} width={24} height={24} />
    </div>
  );

  return (
    <article className='form'>
      <Card 
          cardNumber={cardNumber} 
          cardholderName={cardholderName}
          bgColor={selectedOption ? selectedOption.color : null}
          image={selectedOption ? selectedOption.image : null}
          expirationDate={expirationDate} 
      />

      <label className='form__label' htmlFor="Cardnumber">Card number</label><br />
      <input className='form__input' type="number" id="Cardnumber" name="Cardnumber"
        value={cardNumber} maxLength="16" onChange={(event) => setCardNumber(event.target.value)} /><br />

      <label htmlFor="Cardname">Cardholder name</label><br />
      <input className='form__input' type="text" id="Cardname" name="Cardname"
        value={cardholderName} onChange={(event) => setCardholderName(event.target.value)} /><br />

      <label htmlFor="Expirationdate">Expiration date</label><br />
       <input
          className="form__input"
          type="text"
          id="Expirationdate"
          name="Expirationdate"
          value={expirationDate}
          maxLength="5"
          onChange={(event) => {
          const value = event.target.value;
          if (value.length === 2 && !value.includes('/')) {
                              // add '/' character at the 3rd position of the input field
          setExpirationDate(value + '/');
          } else {
              setExpirationDate(value);
          }
          }}
      /><br />


      <label htmlFor="Option">Select an option:</label><br />
      <Select className='form__dropdown'
          options={options}
          value={selectedOption}
          onChange={handleOptionChange} 
          getOptionLabel={getOptionLabel}
       />
      <Link to='/'>
      <button className='form__button' onClick={() => {
          dispatch(addCard({
          cardNumber: cardNumber,
          cardholderName: cardholderName,
          bgColor: selectedOption ? selectedOption.color : null,
          image: selectedOption ? selectedOption.image : null,
          expirationDate: expirationDate
        }));
      }}>ADD CARD</button>
      </Link>
    </article>
  );
}

export default Cardform;