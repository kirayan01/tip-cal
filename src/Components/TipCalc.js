import React, { useState } from 'react';
import { TipButton } from '../Styled.components/TipButtons';
import { ResetButton } from '../Styled.components/TipButtons';
import './TipCalc.css';

const TipCalc = ({ handleClick, groupSize, tip, total, totalPerPerson, percent }) => {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState(0);
  const [divisor, setDivisor] = useState('');

  const btnClick = (e) => {
    e.preventDefault();
    const tipVal = parseFloat(e.target.value);

    setTipPercentage(tipVal);
    console.log(e.target);
  };

  const calculateBill = (num) => {
    handleClick(tipPercentage, bill, divisor);
  };
  if (divisor !== '') {
    calculateBill();
  }
  const resetForm = () => {
    setBill(0);
    setTipPercentage(0);
    setDivisor(0);
    handleClick(0, 0, 0);
  };

  return (
    <div className='display'>
      <form>
        <div className='leftInput'>
          <label>Bill</label>
          <input
            type='number'
            placeholder='$'
            value={bill}
            onChange={(e) => setBill(parseFloat(e.target.value))}
          ></input>
        </div>
        <label className='label'>Select Tip %</label>
        <div className='leftBtn'>
          <TipButton value='5' onClick={btnClick}>
            5%
          </TipButton>
          <TipButton value='10' onClick={btnClick}>
            10%
          </TipButton>
          <TipButton value='15' onClick={btnClick}>
            15%
          </TipButton>
          <TipButton value='25' onClick={btnClick}>
            25%
          </TipButton>
          <TipButton value='50' onClick={btnClick}>
            50%
          </TipButton>
          <TipButton value='0' onClick={btnClick}>
            <input
              className='custom'
              type='number'
              min='1'
              placeholder='custom'
              onChange={(e) => setTipPercentage(parseFloat(e.target.value))}
            ></input>
          </TipButton>
        </div>
        <div className='leftInput'>
          <label>Number Of People</label>
          <input
            type='number'
            min='1'
            value={divisor}
            placeholder='People in Party'
            onChange={(e) => setDivisor(parseInt(e.target.value))}
          ></input>
        </div>
      </form>
      <div className='holder'>
        <div className='tipAmount'>
          <div>
            <h3>Tip Amount @ %{percent} </h3>
            <p>/ person ({groupSize})</p>
          </div>
          <h1 className='dollarDisplay'>{tip ? `$${(tip / groupSize).toFixed(2)}` : 0.0}</h1>
        </div>
        <div className='tipAmount'>
          <div>
            <h3>Total</h3>
            <p>/ person ({groupSize})</p>
          </div>
          <h1 className='dollarDisplay'>{groupSize ? `$${totalPerPerson.toFixed(2)}` : 0.0} </h1>
        </div>
        <div className='tipAmount'>
          <div>
            <h3>Total Bill</h3>
            <p>Group</p>
          </div>
          <h1 className='dollarDisplay'>${total.toFixed(2)}</h1>
        </div>
        <ResetButton className='button' onClick={resetForm}>
          Reset
        </ResetButton>
      </div>
    </div>
  );
};

export default TipCalc;
